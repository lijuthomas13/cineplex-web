import { useEffect } from "react";
import { useMyTicketsStore } from "../store/useMyTicketsStore";
import { formatDate } from "../utils";
import Loader from "../assets/UiComponents/Loader";
// import { FaShareAlt } from "react-icons/fa";
// import Badge from "../assets/UiComponents/Badge/Badge";

const MyTickets = () => {
  const { isLoading, bookings, fetchMyTickets } = useMyTicketsStore();
  useEffect(() => {
    fetchMyTickets();
  }, []);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-wrap justify-between gap-3 mb-6">
          <h1 className="text-gray-900 text-4xl font-bold">My Tickets</h1>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-6">
          {bookings.map((booking) => {
            return (
              <div
                key={booking.booking_id}
                className="flex flex-col md:flex-row items-stretch justify-between gap-6 p-6 rounded-xl bg-white shadow border border-gray-100"
              >
                <div
                  className="flex-shrink-0 w-full md:w-40 h-60 md:h-auto rounded-lg bg-center bg-no-repeat bg-cover"
                  style={{ backgroundImage: `url("${booking.movie_poster}")` }}
                  data-alt={`Movie poster for ${booking.movie_title}`}
                />
                <div className="flex flex-col gap-4 flex-grow">
                  <p className="text-gray-900 text-xl font-bold leading-tight">
                    {booking.movie_title}
                  </p>

                  <div className="space-y-2">
                    <p className="text-gray-500 text-sm">
                      {booking.theatre_name} – {booking.theatre_location}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {formatDate(booking?.show_time)}
                    </p>
                    <p className="text-gray-900 text-sm font-medium">
                      Seats: {booking.seats.join(", ")}
                    </p>
                    <p className="text-gray-900 text-sm font-medium">
                      Total: ₹{booking.total_price}
                    </p>
                  </div>

                  {/* <div className="mt-auto flex gap-4">
                    <button
                      onClick={() => {
                        navigator.share?.({
                          title: booking.movie_title,
                          text: `I'm watching ${booking.movie_title} at ${booking.theatre_name}!`,
                          url: window.location.href,
                        });
                      }}
                    >
                      <Badge>
                        <div className="flex gap-1 items-center">
                          <FaShareAlt className="text-primary text-lg" />

                          <p>Share</p>
                        </div>
                      </Badge>
                    </button>
                  </div> */}
                </div>
                <div className="flex-shrink-0 w-full md:w-40 h-40 flex items-center justify-center p-3 bg-white border border-gray-200 rounded-lg">
                  <img
                    alt={`QR code for ${booking.movie_title} ticket`}
                    src={`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
                      `Booking #${booking.booking_id} - ${booking.movie_title}`
                    )}&size=150x150`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default MyTickets;
