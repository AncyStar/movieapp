import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const MovieCard = ({ movie }) => {
  return (
    <div className="border p-3 shadow rounded">
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-full h-60 object-cover"
      />
      <h3 className="text-lg font-bold mt-2">{movie.Title}</h3>
      <p>{movie.Year}</p>
      <Link to={`/movie/${movie.imdbID}`} className="text-blue-500">
        View Details
      </Link>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
    Poster: PropTypes.string.isRequired,
    imdbID: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
