import { useEffect } from "react";
import Button from "../assets/UiComponents/Button/Button";
import Badge from "../assets/UiComponents/Badge/Badge";
import { useMovieStore } from "../store/useMovieStore";
import { useNavigate } from "react-router-dom";
import Loader from "../assets/UiComponents/Loader";

const MovieList = () => {
  const { isLoading, movies, fetchMovies } = useMovieStore();
  const navigate = useNavigate();
  useEffect(() => {
    fetchMovies();
  }, []);
  const goToMovieDetails = (id: any) => {
    navigate(`/movie/${id}`);
  };
  if (isLoading) {
    return <Loader />;
  }

  return (
    <main className="flex-1 py-6 overflow-y-auto md:px-8  dark:bg-gray-800">
      <div className="flex justify-between items-center px-4 mb-6">
        <h1 className="text-4xl font-black text-gray-900 dark:text-white">Now Showing</h1>
      </div>

      <div className="grid moview-list-grid gap-6 px-4">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="flex flex-col group overflow-hidden rounded-xl bg-gray-100 border border-transparent hover:border-primary/50 transition duration-300 dark:bg-white/5 dark:text-white"
          >
            <div
              className="aspect-[3/4] bg-cover bg-center rounded-t-xl transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url(${movie.poster})` }}
            ></div>

            <div className="flex flex-col justify-between flex-1 p-4">
              <div>
                <p className="text-base font-bold text-gray-900 dark:text-white">
                  {movie.title}
                </p>

                <div className="flex flex-wrap gap-2 mt-2">
                  {movie.genre.map((genre) => (
                    <Badge variant="secondary" key={genre}>
                      {genre}
                    </Badge>
                  ))}
                </div>
              </div>
              <Button
                className="mt-4 w-full"
                onClick={() => goToMovieDetails(movie?.id)}
              >
                View Details
              </Button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default MovieList;
