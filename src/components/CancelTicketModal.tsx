import { Dialog, DialogActionsBar } from "@progress/kendo-react-dialogs";
import Button from "../assets/UiComponents/Button/Button";
import "@progress/kendo-theme-default/dist/all.css";
import type { BookingType } from "../types/movieType";
import Badge from "../assets/UiComponents/Badge/Badge";
import { useState } from "react";
import { BsTicketPerforatedFill } from "react-icons/bs";
import { useGlobalStore } from "../store/useGlobalStore";
import { toast } from "react-toastify";
import { cancelBooking } from "../services/movieService";

const CancelTicketModal: React.FC<{
  booking: BookingType | null;
  onClose: () => void;
  fetchMyTickets: () => void;
}> = ({ booking, onClose, fetchMyTickets }) => {
  const [isConfirming, setIsConfirming] = useState(false);
  const { theme } = useGlobalStore();

  const confirmTickets = async () => {
    setIsConfirming(true);
    if (booking?.booking_id) {
      try {
        await cancelBooking(booking?.booking_id);
        setIsConfirming(false);
        toast.success("Booking Cancelled successfully");
        fetchMyTickets();
        onClose();
      } catch {
        toast.error("Unable to confirm tickets.");
        setIsConfirming(false);
      }
    }
  };
  return (
    <Dialog
      themeColor={theme == "dark" ? "dark" : "light"}
      title={
        <div className="flex gap-2 items-center">
          <BsTicketPerforatedFill className="text-primary text-xl"></BsTicketPerforatedFill>
          <p className="font-semibold">Cancel Your Ticket</p>
        </div>
      }
      onClose={() => onClose()}
    >
      <div className="flex flex-col gap-2 dark:bg-gray-800">
        <div className="movie_details_menu flex justify-between p-2 bg-gray-100 rounded gap-16">
          <p>Movie</p>
          <p className="font-semibold"> {booking?.movie_title} </p>
        </div>
        <div className="movie_details_menu flex justify-between p-2 bg-gray-100 rounded gap-16">
          <p>Date & Time</p>
          <p className="font-semibold">
            {booking?.show_time &&
              new Date(booking?.show_time).toLocaleString()}
          </p>
        </div>
        <div className="movie_details_menu flex justify-between p-2 bg-gray-100 rounded gap-16">
          <p>Theatre</p>
          <p className="font-semibold">{booking?.theatre_name}</p>
        </div>
        <div className="flex gap-2 items-center justify-between">
          <p className="text-sm text-gray-500">Refundable amount</p>
          <p className="text-lg font-bold text-primary">
            ₹{booking?.total_price}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Seats Booked:</p>
          <div className="flex gap-2 mt-1 flex-wrap -start">
            {booking?.seats.length === 0 && (
              <span className="text-gray-400 text-xs">None</span>
            )}
            {booking?.seats.map((seat) => (
              <Badge key={seat}>{seat}</Badge>
            ))}
          </div>
        </div>
        <section className="bg-amber-50 rounded border border-amber-700 p-2 mt-2">
          <p className="text-amber-700">
            This action cannot be undone. Please proceed with caution.
          </p>
        </section>
      </div>
      <DialogActionsBar layout="end">
        <Button variant="secondary" type="button" onClick={() => onClose()}>
          Discard
        </Button>
        <Button
          type="button"
          onClick={() => confirmTickets()}
          disabled={isConfirming}
        >
          {isConfirming ? "Canceling..." : "Cancel"}
        </Button>
      </DialogActionsBar>
    </Dialog>
  );
};

export default CancelTicketModal;
