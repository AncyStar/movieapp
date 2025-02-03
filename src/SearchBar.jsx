import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      onSearch(query);
    }
  };

  return (
    <>
      <div>
        <h1 className="text-blue-600 font-bold p-4 font-mono text-5xl">
          Movie Search Application
        </h1>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            placeholder="Search movies..."
            className="p-2 border rounded w-3/4"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            type="submit"
            className="px-4 font-bold bg-blue-500 rounded-2xl text-white"
          >
            Search
          </button>
        </form>
      </div>
    </>
  );
};

export default SearchBar;
