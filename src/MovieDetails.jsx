import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "./Api";
import { Link } from "react-router-dom";

// MovieDetails Component with Tailwind CSS Styling
const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const data = await fetchMovieDetails(id);
      if (data.Response === "True") {
        setMovie(data);
        setError(null);
      } else {
        setError(data.Error || "Something went wrong!");
      }
    };
    fetchDetails();
  }, [id]);

  if (!movie) return <div className="text-center py-8">Loading...</div>;

  return (
    <div className="max-w-7xl mx-auto p-6">
      {error && <p className="text-red-500 text-center">{error}</p>}

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Movie Poster */}
        <div className="flex-shrink-0 w-full sm:w-1/3 lg:w-1/4">
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Movie Details */}
        <div className="flex-1">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            {movie.Title}
          </h2>
          <p className="text-xl text-gray-600 mb-2">
            <strong>Release Year:</strong> {movie.Year}
          </p>
          <p className="text-xl text-gray-600 mb-2">
            <strong>Genre:</strong> {movie.Genre}
          </p>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Plot Summary:</strong> {movie.Plot}
          </p>

          {/* Movie Ratings */}
          <div className="mb-4">
            <strong className="text-xl text-gray-900">Ratings:</strong>
            <ul className="space-y-2">
              {movie.Ratings?.map((rating) => (
                <li key={rating.Source} className="text-lg text-gray-700">
                  <strong>{rating.Source}:</strong> {rating.Value}
                </li>
              ))}
            </ul>
          </div>

          {/* Cast */}
          <p className="text-lg text-gray-600">
            <strong>Cast:</strong> {movie.Actors}
          </p>
        </div>
      </div>

      <div className="text-center mt-8">
        <Link
          to="/"
          className="inline-block bg-blue-700 text-white rounded-2xl p-2 font-bold hover:text-blue-700  text-lg"
        >
          Back to Search
        </Link>
      </div>
    </div>
  );
};

export default MovieDetails;
