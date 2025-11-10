import { useEffect, useState } from "react";
import { useMyTicketsStore } from "../store/useMyTicketsStore";
import { formatDate } from "../utils";
import Loader from "../assets/UiComponents/Loader";
import Badge from "../assets/UiComponents/Badge/Badge";
import { IoQrCode } from "react-icons/io5";
import type { BookingType } from "../types/movieType";
import TicketQRCode from "../components/TicketQRCode";

const MyTickets = () => {
  const { isLoading, bookings, fetchMyTickets } = useMyTicketsStore();
  const [isQrOpen, setQrOpen] = useState<boolean>(false);
  const [openedQr, setQrOpened] = useState<BookingType | null>(null);

  useEffect(() => {
    fetchMyTickets();
  }, []);
  if (isLoading) {
    return <Loader />;
  }

  const openQr = (booking: BookingType) => {
    setQrOpen(true);
    setQrOpened(booking);
  };

  return (
    <>
      <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-between gap-3 mb-6">
            <h1 className="text-gray-900 text-4xl font-bold dark:text-white">
              My Tickets
            </h1>
          </div>

          <div className="grid grid-cols-1 gap-6 mt-6">
            {bookings.map((booking) => {
              return (
                <div
                  key={booking.booking_id}
                  className="flex flex-col md:flex-row items-stretch justify-between gap-6 p-6 rounded-xl bg-white dark:bg-white/9 shadow border border-gray-100"
                >
                  <div
                    className="flex-shrink-0 w-full md:w-40 h-60 md:h-auto rounded-lg bg-center bg-no-repeat bg-cover"
                    style={{
                      backgroundImage: `url("${booking.movie_poster}")`,
                    }}
                    data-alt={`Movie poster for ${booking.movie_title}`}
                  />
                  <div className="flex flex-col gap-4 flex-grow">
                    <p className="text-gray-900 dark:text-white text-xl font-bold leading-tight">
                      {booking.movie_title}
                    </p>

                    <div className="space-y-2">
                      <p className="text-gray-500 text-sm dark:text-neutral-300">
                        {booking.theatre_name} – {booking.theatre_location}
                      </p>
                      <p className="text-gray-500 text-sm dark:text-neutral-300">
                        {formatDate(booking?.show_time)}
                      </p>
                      <p className="text-gray-900 text-sm font-medium dark:text-white">
                        Seats: {booking.seats.join(", ")}
                      </p>
                      <p className="text-gray-900 text-sm font-medium  dark:text-white">
                        Total: ₹{booking.total_price}
                      </p>
                    </div>
                    <button onClick={() => openQr(booking)} className="w-fit">
                      <Badge>
                        <div className="flex gap-1 items-center">
                          <IoQrCode className="text-primary text-lg" />
                          <p>View Ticket</p>
                        </div>
                      </Badge>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      {isQrOpen && openedQr && (
        <TicketQRCode
          booking={openedQr}
          onClose={() => {
            setQrOpen(false);
            setQrOpened(null);
          }}
        />
      )}
    </>
  );
};

export default MyTickets;
