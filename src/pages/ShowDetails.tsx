import { useEffect, useState } from "react";
import { useMovieShowStore } from "../store/useShowDetailsStore";
import { useParams } from "react-router-dom";
import PriceChartLegend from "../components/PriceChartLegend";
import type { RowType, SeatType } from "../types/movieType";
import SeatLayout from "../components/SeatLayout";
import MovieShowFooter from "../components/MovieShowFooter";
import ConfirmTicketModal from "../components/ConfirmTicketModal";
import { toast } from "react-toastify";

const ShowDetails = () => {
  const { showId } = useParams();
  const { show, fetchShow } = useMovieShowStore();
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [showConfirmModa, setShowConfirmModal] = useState<boolean>(false);
  console.log(showConfirmModa, "showConfirmModa");
  useEffect(() => {
    if (showId) {
      fetchShow(showId);
    }
  }, [showId]);

  const toggleSeat = (row: RowType, seat: SeatType) => {
    if (seat.status === "booked") return;
    debugger;
    const isSelected = selectedSeats.includes(seat.id);
    if (selectedSeats?.length >= 8 && !isSelected) {
      toast.info("You can only select up to 8 seats");
      return;
    }
    const updatedSeats = isSelected
      ? selectedSeats.filter((id) => id !== seat.id)
      : [...selectedSeats, seat.id];

    setSelectedSeats(updatedSeats);
    setTotal((prev) => (isSelected ? prev - row.price : prev + row.price));
  };

  const clearSelection = () => {
    setSelectedSeats([]);
    setTotal(0);
  };

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="flex justify-center py-5">
        <div className="w-full max-w-6xl px-4">
          <h1 className="text-3xl font-bold mb-1">Select Your Seats</h1>
          <p className="text-gray-600 text-sm">
            {show?.movie.title} —{" "}
            {show?.showTime && new Date(show?.showTime).toLocaleString()}
          </p>
        </div>
      </div>

      <main className="flex flex-col lg:flex-row gap-10 justify-center px-4 mt-4">
        <div className="flex-grow flex flex-col items-center">
          <div className="relative w-full h-16">
            <div className="absolute inset-x-0 bottom-0 h-20 border-b-2 border-gray-300 rounded-b-[100%] transform rotate-180" />
            <p className="absolute top-0 left-1/2 -translate-x-1/2 text-gray-500 font-semibold">
              SCREEN
            </p>
          </div>
          <SeatLayout
            layout={show?.layout ?? []}
            toggleSeat={toggleSeat}
            selectedSeats={selectedSeats}
          />
        </div>
        <PriceChartLegend />
      </main>
      <MovieShowFooter
        total={total}
        selectedSeats={selectedSeats}
        clearSelection={clearSelection}
        setShowConfirmModal={setShowConfirmModal}
      />
      {showConfirmModa && (
        <ConfirmTicketModal
          show={show}
          total={total}
          selectedSeats={selectedSeats}
          onClose={() => setShowConfirmModal(false)}
        />
      )}
    </div>
  );
};

export default ShowDetails;
