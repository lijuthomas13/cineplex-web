import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMovieDetailsStore } from "../store/useMovieDetailsStore";
import Button from "../assets/UiComponents/Button/Button";
import Badge from "../assets/UiComponents/Badge/Badge";
import { FaRegStar } from "react-icons/fa";
import { MdSchedule } from "react-icons/md";
import Loader from "../assets/UiComponents/Loader";

const MovieDetails = () => {
  const { id } = useParams();
  const { isLoading, fetchMovieDetails, movie } = useMovieDetailsStore();
  const navigate = useNavigate();
  useEffect(() => {
    if (id) {
      fetchMovieDetails(id);
    }
  }, [id]);
  const goToShowDetails = (showId: any) => {
    navigate(`/movie/${id}/show/${showId}`);
  };
  if (isLoading) {
    return <Loader />;
  }
  return (
    <main className="flex-1 px-6 py-8 overflow-y-auto md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="aspect-[2/3] w-full max-h-[36rem] rounded-xl shadow-lg overflow-hidden">
          <img
            src={movie?.poster}
            alt={`Poster for ${movie?.title}`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="md:col-span-2 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-extrabold text-gray-900  dark:text-white">
              {movie?.title}
            </h1>

            <p className="text-gray-600 text-base dark:text-neutral-300">{movie?.description}</p>
            <div className="flex flex-wrap items-center gap-2 pt-2">
              {movie?.genre.map((genre) => (
                <Badge variant="primary" key={genre}>
                  {genre}
                </Badge>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-6 text-gray-500 pt-4">
              <div className="flex items-center gap-2">
                <FaRegStar className="text-primary text-xl" />
                <span className="text-gray-900 font-semibold dark:text-white">
                  {movie?.rating}/10
                </span>
                <span className="text-sm  dark:text-neutral-400">(IMDb)</span>
              </div>
              <div className="flex items-center gap-2">
                <MdSchedule className="text-primary text-xl" />
                <span className="text-sm font-medium dark:text-white">{movie?.duration}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Select Theatre</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {movie?.shows?.map((show) => (
                <div
                  key={show.id}
                  className="flex flex-col justify-between p-5 border border-gray-300 rounded-xl bg-white hover:border-primary/50 transition-all shadow-sm dark:bg-white/5"
                >
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {show.theatre.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1  dark:text-neutral-300">
                      {show.theatre.location}
                    </p>
                  </div>
                  <Button
                    className="mt-4"
                    onClick={() => goToShowDetails(show?.id)}
                  >
                    View Seats
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MovieDetails;
