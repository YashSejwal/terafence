export type LogEntry = {
    id: string;
    timestamp: string;
    severity: "error" | "warning" | "info" | "normal" | "critical";
    service: string;
    message: string;
    details: Record<string, string>;
  };