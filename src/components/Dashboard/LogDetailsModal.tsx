import React from "react";

interface LogDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  log: { timestamp: string; severity: string; device: string; message: string } | null;
}

const LogDetailsModal: React.FC<LogDetailsModalProps> = ({ isOpen, onClose, log }) => {
  if (!isOpen || !log) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded shadow-lg p-6 w-1/2">
        <h2 className="text-lg font-semibold mb-4">Log Details</h2>
        <p><strong>Timestamp:</strong> {log.timestamp}</p>
        <p><strong>Severity:</strong> {log.severity}</p>
        <p><strong>Device:</strong> {log.device}</p>
        <p><strong>Message:</strong> {log.message}</p>
        <button
          className="mt-4 bg-red-600 text-white px-4 py-2 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default LogDetailsModal;