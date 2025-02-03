import { useState } from "react";
import { fetchMovies } from "./Api";
import SearchBar from "./SearchBar";
import MovieCard from "./MovieCard";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    setError(null);
    const data = await fetchMovies(query);
    if (data?.Response === "True") {
      setMovies(data.Search);
    } else {
      setMovies([]);
      setError("No results found.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <SearchBar onSearch={handleSearch} />
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
