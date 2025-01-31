import React, { useState, useMemo, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download,
  FileOutput,
  FileJson,
  FileSpreadsheet,
  FileText,
  Search,
  Server,
  AlertTriangle,
  Info,
  ShieldAlert,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type LogEntry = {
  id: string;
  timestamp: string;
  severity: "error" | "warning" | "info" | "normal" | "critical";
  service: string;
  message: string;
  details: Record<string, string>;
};

// Severity Colors with explicit typing
const severityColors: Record<LogEntry["severity"], string> = {
  error: "bg-red-500/20 text-red-600",
  warning: "bg-yellow-500/20 text-yellow-600",
  info: "bg-blue-500/20 text-blue-600",
  normal: "bg-green-500/20 text-green-600",
  critical: "bg-purple-500/20 text-purple-600",
};

// Mock Logs Data
const MOCK_LOGS: LogEntry[] = [
  {
    id: "1",
    timestamp: "2024-01-23 10:15:30",
    severity: "error",
    service: "authentication",
    message: "Multiple failed login attempts detected",
    details: {
      ipAddress: "192.168.1.100",
      userAgent: "Mozilla/5.0",
      additionalInfo: "Potential brute force attack",
    },
  },
  {
    id: "2",
    timestamp: "2024-01-23 11:20:45",
    severity: "warning",
    service: "database",
    message: "High memory usage detected",
    details: {
      memoryUsage: "85%",
      process: "mysql",
      recommendedAction: "Optimize queries or scale resources",
    },
  },
  {
    id: "3",
    timestamp: "2024-01-23 11:21:00",
    severity: "error",
    service: "authentication",
    message: "Failed login attempt",
    details: {
      username: "johndoe",
      ip_address: "192.168.1.101",
      reason: "Invalid credentials",
    },
  },
  {
    id: "4",
    timestamp: "2024-01-23 11:21:15",
    severity: "warning",
    service: "database",
    message: "High disk usage detected",
    details: {
      current_usage: "90%",
      threshold: "85%",
      affected_table: "users",
    },
  },
  {
    id: "5",
    timestamp: "2024-01-23 11:21:30",
    severity: "info",
    service: "network",
    message: "Network interface up",
    details: {
      interface_name: "eth1",
      ip_address: "192.168.2.100",
      subnet_mask: "255.255.255.0",
    },
  },
  {
    id: "6",
    timestamp: "2024-01-23 11:21:45",
    severity: "critical",
    service: "security",
    message: "Unauthorized access attempt",
    details: {
      source_ip: "192.168.1.200",
      target_port: "22",
      protocol: "SSH",
    },
  },
  {
    id: "7",
    timestamp: "2024-01-23 11:22:00",
    severity: "error",
    service: "application",
    message: "Exception thrown",
    details: {
      exception_type: "NullPointerException",
      stack_trace: "com.example.MyClass.myMethod(MyClass.java:42)",
      affected_user: "jane_smith",
    },
  },
  {
    id: "8",
    timestamp: "2024-01-23 11:22:15",
    severity: "warning",
    service: "filesystem",
    message: "Low free space warning",
    details: {
      drive_letter: "C:",
      free_space: "5GB",
      total_capacity: "500GB",
      threshold: "5%",
    },
  },
  {
    id: "9",
    timestamp: "2024-01-23 11:22:30",
    severity: "info",
    service: "backup",
    message: "Backup completed successfully",
    details: {
      backup_type: "full",
      size: "100GB",
      duration: "120 minutes",
      destination: "/mnt/backup",
    },
  },
  {
    id: "10",
    timestamp: "2024-01-23 11:22:45",
    severity: "critical",
    service: "database_replication",
    message: "Replication lag exceeded threshold",
    details: {
      replication_lag: "300 seconds",
      acceptable_lag: "180 seconds",
      primary_server: "db-master",
      replica_server: "db-replica-1",
    },
  },
  {
    id: "11",
    timestamp: "2024-01-23 11:23:00",
    severity: "warning",
    service: "cpu_monitoring",
    message: "High CPU usage detected",
    details: {
      current_usage: "95%",
      threshold: "90%",
      affected_process: "java.exe",
      pid: "1234",
    },
  },
  {
    id: "12",
    timestamp: "2024-01-23 11:23:15",
    severity: "error",
    service: "network_security",
    message: "Suspicious traffic pattern detected",
    details: {
      source_ip: "192.168.1.150",
      destination_port: "443",
      packet_count: "500",
      time_window: "5 minutes",
    },
  },
  {
    id: "13",
    timestamp: "2024-01-23 11:23:30",
    severity: "info",
    service: "user_management",
    message: "User account locked",
    details: {
      user_id: "user456",
      lock_reason: "Excessive failed login attempts",
      unlock_time: "2024-01-23 12:23:30",
      attempt_count: "5",
    },
  },
  {
    id: "14",
    timestamp: "2024-01-23 11:23:45",
    severity: "critical",
    service: "high_availability",
    message: "Cluster node failure",
    details: {
      failed_node: "node-2",
      cluster_name: "prod-cluster",
      failure_reason: "Hardware failure",
      remaining_nodes: "3",
    },
  },
  {
    id: "15",
    timestamp: "2024-01-23 11:24:00",
    severity: "warning",
    service: "memory_monitoring",
    message: "Low available memory warning",
    details: {
      current_available: "2GB",
      threshold: "1GB",
      affected_process: "chrome.exe",
      pid: "5678",
    },
  },
  {
    id: "16",
    timestamp: "2024-01-23 11:24:15",
    severity: "error",
    service: "email_service",
    message: "Email delivery failure",
    details: {
      recipient: "john@example.com",
      subject: "Order Confirmation",
      error_reason: "SMTP connection timed out",
      retry_count: "2",
    },
  },
  {
    id: "17",
    timestamp: "2024-01-23 11:24:30",
    severity: "info",
    service: "deployment",
    message: "New application version deployed",
    details: {
      application_name: "myapp",
      version: "v2.1.0",
      environment: "production",
      deployment_time: "2024-01-23 11:24:30",
    },
  },
];
const exportFormats = [
  {
    name: "PDF",
    icon: FileOutput,
    handler: (logs: LogEntry[]) => {
      // PDF Export Logic
      import("jspdf").then((jsPDF) => {
        const doc = new jsPDF.default();
        doc.setFontSize(12);

        logs.forEach((log, index) => {
          doc.text(`Log ${index + 1}`, 10, 10 + index * 50);
          doc.text(`Timestamp: ${log.timestamp}`, 10, 20 + index * 50);
          doc.text(`Severity: ${log.severity}`, 10, 30 + index * 50);
          doc.text(`Service: ${log.service}`, 10, 40 + index * 50);
          doc.text(`Message: ${log.message}`, 10, 50 + index * 50);
        });

        doc.save("syslog_export.pdf");
      });
    },
  },
  {
    name: "JSON",
    icon: FileJson,
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
    icon: FileText,
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
    icon: FileSpreadsheet,
    handler: (logs: LogEntry[]) => {
      import("xlsx").then((XLSX) => {
        const worksheet = XLSX.utils.json_to_sheet(logs);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Syslogs");
        XLSX.writeFile(workbook, "syslog_export.xlsx");
      });
    },
  },
];
const calculateLogStatistics = (logs: LogEntry[]) => {
  const severityCounts = logs.reduce((acc, log) => {
    acc[log.severity] = (acc[log.severity] || 0) + 1;
    return acc;
  }, {} as Record<LogEntry["severity"], number>);

  const serviceDistribution = logs.reduce((acc, log) => {
    acc[log.service] = (acc[log.service] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return {
    totalLogs: logs.length,
    severityCounts,
    serviceDistribution,
    mostFrequentService: Object.keys(serviceDistribution).reduce((a, b) =>
      serviceDistribution[a] > serviceDistribution[b] ? a : b
    ),
    mostCriticalSeverity: Object.keys(severityCounts).reduce((a, b) =>
      severityCounts[a as LogEntry["severity"]] >
      severityCounts[b as LogEntry["severity"]]
        ? a
        : b
    ) as LogEntry["severity"],
  };
};

const SyslogDashboard: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedSeverity, setSelectedSeverity] = useState<string>("all");
  const [selectedLog, setSelectedLog] = useState<LogEntry | null>(null);
  const [isExportMenuOpen, setIsExportMenuOpen] = useState(false);
  const [logStatistics, setLogStatistics] =
    useState<ReturnType<typeof calculateLogStatistics>>();

  const filteredLogs = useMemo(() => {
    const searchTermLower = searchTerm.toLowerCase().trim();
    return MOCK_LOGS.filter((log: LogEntry) => {
      const matchesSeverity =
        selectedSeverity === "all" || log.severity === selectedSeverity;

      if (searchTermLower) {
        const searchableFields = [
          log.timestamp,
          log.service,
          log.message,
          log.severity,
          ...Object.values(log.details),
        ];

        const matches = searchableFields.some((field) =>
          field.toLowerCase().includes(searchTermLower)
        );

        return matchesSeverity && matches;
      }

      return matchesSeverity;
    });
  }, [searchTerm, selectedSeverity]);

  const handleLogSelect = useCallback((log: LogEntry) => {
    setSelectedLog(log);
  }, []);
  const handleExport = (format: string) => {
    const exportHandler = exportFormats.find((f) => f.name === format)?.handler;
    if (exportHandler) {
      exportHandler(filteredLogs);
    }
    setIsExportMenuOpen(false);
  };
  // Variants for smoother animations
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  // Statistics Card Component
  const StatCard: React.FC<{
    icon: React.ReactNode;
    title: string;
    value: string;
  }> = ({ icon, title, value }) => (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-xl shadow-md p-4 flex items-center space-x-4"
    >
      {icon}
      <div>
        <p className="text-xs text-gray-500 uppercase">{title}</p>
        <p className="text-xl font-bold">{value}</p>
      </div>
    </motion.div>
  );

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };
  useEffect(() => {
    const stats = calculateLogStatistics(filteredLogs);
    setLogStatistics(stats);
  }, [filteredLogs]);

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 mt-20">
      <Navbar />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="container mx-auto max-w-6xl"
      >
        {/* Enhanced Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="container mx-auto max-w-6xl relative"
        >
          <div className="flex justify-between items-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight">
              Syslog Dashboard
            </h1>
          </div>
        </motion.div>

        {/* Advanced Filter and Search Section */}
        <motion.div
          variants={itemVariants}
          className="mb-8 flex space-x-6 items-center justify-between"
        >
          {/* Search Input */}
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search logs across all fields..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ease-in-out"
            />
            <Search className="h-6 w-6 absolute left-4 top-3 text-gray-500 transition-all duration-200 ease-in-out" />
          </div>

          {/* Export Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsExportMenuOpen(!isExportMenuOpen)}
              className="flex items-center space-x-3 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:bg-gradient-to-l transition-all duration-300 ease-in-out"
            >
              <Download className="w-5 h-5" />
              <span>Export</span>
            </button>

            {isExportMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 top-full mt-2 w-52 bg-white rounded-lg shadow-lg border border-gray-200"
              >
                {exportFormats.map((format) => {
                  const Icon = format.icon;
                  return (
                    <button
                      key={format.name}
                      onClick={() => handleExport(format.name)}
                      className="w-full flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 transition-all duration-200 ease-in-out text-left"
                    >
                      <Icon className="w-5 h-5 text-gray-500" />
                      <span>Export as {format.name}</span>
                    </button>
                  );
                })}
              </motion.div>
            )}
          </div>

          {/* Severity Filter */}
          <motion.select
            value={selectedSeverity}
            onChange={(e) => setSelectedSeverity(e.target.value)}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none transition-all duration-300 ease-in-out bg-white"
          >
            <option value="all">All Severities</option>
            <option value="critical">Critical</option>
            <option value="error">Error</option>
            <option value="warning">Warning</option>
            <option value="info">Info</option>
          </motion.select>
        </motion.div>
        {/* Statistics Header */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6"
        >
          <StatCard
            icon={<Server className="w-6 h-6 text-blue-500" />}
            title="Total Logs"
            value={logStatistics?.totalLogs?.toString() || "0"}
          />
          <StatCard
            icon={<AlertTriangle className="w-6 h-6 text-red-500" />}
            title="Critical Severities"
            value={logStatistics?.severityCounts?.critical?.toString() || "0"}
          />
          <StatCard
            icon={<ShieldAlert className="w-6 h-6 text-purple-500" />}
            title="Most Critical Severity"
            value={logStatistics?.mostCriticalSeverity || "N/A"}
          />
          <StatCard
            icon={<Info className="w-6 h-6 text-green-500" />}
            title="Most Frequent Service"
            value={logStatistics?.mostFrequentService || "N/A"}
          />
        </motion.div>

        {/* Enhanced Logs Table */}
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <table className="w-full">
            <thead className="bg-gray-100 border-b">
              <tr>
                {["Timestamp", "Severity", "Service", "Message"].map(
                  (header) => (
                    <th
                      key={header}
                      className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                    >
                      {header}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <AnimatePresence>
              <tbody>
                {filteredLogs.map((log) => (
                  <motion.tr
                    key={log.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    whileHover={{
                      backgroundColor: "rgba(0,0,0,0.05)",
                      transition: { duration: 0.2 },
                    }}
                    className="border-b last:border-b-0 cursor-pointer hover:bg-gray-50 transition duration-200"
                    onClick={() => handleLogSelect(log)}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      {log.timestamp}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold uppercase ${
                          severityColors[log.severity]
                        }`}
                      >
                        {log.severity}
                      </span>
                    </td>
                    <td className="px-6 py-4">{log.service}</td>
                    <td className="px-6 py-4">{log.message}</td>
                  </motion.tr>
                ))}
              </tbody>
            </AnimatePresence>
          </table>
        </motion.div>

        {/* Enhanced Log Details Modal */}
        <AnimatePresence>
          {selectedLog && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={modalVariants}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 p-4"
              onClick={() => setSelectedLog(null)}
            >
              <motion.div
                className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
                variants={modalVariants}
              >
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">
                      Log Details
                    </h2>
                    <button
                      onClick={() => setSelectedLog(null)}
                      className="text-gray-500 hover:text-gray-800 transition"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(selectedLog.details).map(([key, value]) => (
                      <div key={key} className="bg-gray-50 p-4 rounded-xl">
                        <span className="block text-xs font-semibold text-gray-500 mb-1 uppercase">
                          {key.replace(/_/g, " ")}
                        </span>
                        <span className="text-gray-800 font-medium">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default SyslogDashboard;
