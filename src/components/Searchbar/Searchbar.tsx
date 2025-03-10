import React from "react";

const Searchbar: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <input
        type="text"
        placeholder="Search..."
        className="border border-gray-300 rounded-md p-2 w-full max-w-md"
      />
      <button className="bg-blue-500 text-white rounded-md p-2 ml-2">
        Search
      </button>
    </div>
  );
};
export default Searchbar;
