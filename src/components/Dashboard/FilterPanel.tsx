import React from "react";

const FilterPanel: React.FC = () => {
  return (
    <div className="flex gap-4 p-4 bg-gray-100 border-b border-gray-300">
      <input
        type="text"
        placeholder="Search by keyword"
        className="border border-gray-300 rounded px-4 py-2 w-1/3"
      />
      <select className="border border-gray-300 rounded px-4 py-2">
        <option value="">Severity</option>
        <option value="Info">Info</option>
        <option value="Error">Error</option>
        <option value="Warning">Warning</option>
      </select>
      <input
        type="date"
        className="border border-gray-300 rounded px-4 py-2"
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Apply Filters</button>
    </div>
  );
};

export default FilterPanel;