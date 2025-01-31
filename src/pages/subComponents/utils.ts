import { LogEntry } from "./types";

export const calculateLogStatistics = (logs: LogEntry[]) => {
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