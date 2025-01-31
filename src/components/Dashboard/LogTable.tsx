import React from "react";

const LogTable: React.FC = () => {
  const logs = [
    { id: 1, timestamp: "2025-01-23 10:00:00", severity: "Info", device: "Router1", message: "Log message 1" },
    { id: 2, timestamp: "2025-01-23 10:05:00", severity: "Error", device: "Switch2", message: "Log message 2" },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Timestamp</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Severity</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Device</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Message</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log) => (
            <tr key={log.id} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">{log.timestamp}</td>
              <td className="border border-gray-300 px-4 py-2">{log.severity}</td>
              <td className="border border-gray-300 px-4 py-2">{log.device}</td>
              <td className="border border-gray-300 px-4 py-2 truncate">{log.message}</td>
              <td className="border border-gray-300 px-4 py-2">
                <button className="text-blue-600 hover:underline">Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LogTable;