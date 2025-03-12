import React, { useContext } from "react";
import { StateContext } from "../../context/StateContext";

const Searchbar: React.FC = () => {
  const { handleSearch, query, setQuery } = useContext(StateContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="relative w-full max-w-md">
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 rounded-md p-2 pl-10 w-full"
          onChange={(e) => handleChange(e)}
          value={query}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch(query);
            }
          }}
        />
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          🔍
        </span>
      </div>
    </div>
  );
};
export default Searchbar;
