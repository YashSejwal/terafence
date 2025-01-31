import { LogEntry } from "./types";
import jsPDF from "jspdf";
import * as XLSX from "xlsx";
import { Download, FileText, Clipboard } from 'lucide-react'; // Assuming icons will be used here

export const exportFormats = [
  {
    name: "PDF",
    icon: FileText, // Icon for PDF
    handler: (logs: LogEntry[]) => {
      const doc = new jsPDF();
      doc.setFontSize(12);

      logs.forEach((log, index) => {
        doc.text(`Log ${index + 1}`, 10, 10 + index * 50);
        doc.text(`Timestamp: ${log.timestamp}`, 10, 20 + index * 50);
        doc.text(`Severity: ${log.severity}`, 10, 30 + index * 50);
        doc.text(`Service: ${log.service}`, 10, 40 + index * 50);
        doc.text(`Message: ${log.message}`, 10, 50 + index * 50);
      });

      doc.save("syslog_export.pdf");
    },
  },
  {
    name: "JSON",
    icon: Clipboard, // Icon for JSON
    handler: (logs: LogEntry[]) => {
      const blob = new Blob([JSON.stringify(logs, null, 2)], {
        type: "application/json",
      });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "syslog_export.json";
      link.click();
    },
  },
  {
    name: "CSV",
    icon: Download, // Icon for CSV
    handler: (logs: LogEntry[]) => {
      const headers = ["ID", "Timestamp", "Severity", "Service", "Message"];
      const csvRows = logs.map((log) =>
        [
          log.id,
          log.timestamp,
          log.severity,
          log.service,
          log.message.replace(/,/g, ";"),
        ].join(",")
      );

      const csvContent = [headers.join(","), ...csvRows].join("\n");
      const blob = new Blob([csvContent], { type: "text/csv" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "syslog_export.csv";
      link.click();
    },
  },
  {
    name: "XLSX",
    icon: FileText, // Icon for XLSX
    handler: (logs: LogEntry[]) => {
      const worksheet = XLSX.utils.json_to_sheet(logs);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Syslogs");
      XLSX.writeFile(workbook, "syslog_export.xlsx");
    },
  },
];
