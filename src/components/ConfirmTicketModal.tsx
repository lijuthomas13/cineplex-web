import { Dialog, DialogActionsBar } from "@progress/kendo-react-dialogs";
import Button from "../assets/UiComponents/Button/Button";
import "@progress/kendo-theme-default/dist/all.css";
import type { ShowDetailsType } from "../types/movieType";
import Badge from "../assets/UiComponents/Badge/Badge";
import { bookSeats } from "../services/movieService";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { BsTicketPerforatedFill } from "react-icons/bs";
import { useGlobalStore } from "../store/useGlobalStore";

const ConfirmTicketModal: React.FC<{
  show: ShowDetailsType | null;
  total: number;
  selectedSeats: string[];
  onClose: () => void;
}> = ({ show, total, selectedSeats, onClose }) => {
  const [isConfirming, setIsConfirming] = useState(false);
  const navigate = useNavigate();
  const { theme } = useGlobalStore();
  const confirmTickets = async () => {
    setIsConfirming(true);
    if (show?.showId) {
      try {
        await bookSeats(show?.showId, selectedSeats, total);
        setIsConfirming(false);
        navigate("/my-tickets");
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
          <p className="font-semibold">Confirm Your Booking</p>
        </div>
      }
      onClose={() => onClose()}
    >
      <div className="flex flex-col gap-2 dark:bg-gray-800">
        <div className="movie_details_menu flex justify-between p-2 bg-gray-100 rounded gap-16">
          <p>Movie</p>
          <p className="font-semibold"> {show?.movie.title} </p>
        </div>
        <div className="movie_details_menu flex justify-between p-2 bg-gray-100 rounded gap-16">
          <p>Date & Time</p>
          <p className="font-semibold">
            {show?.showTime && new Date(show?.showTime).toLocaleString()}
          </p>
        </div>
        <div className="movie_details_menu flex justify-between p-2 bg-gray-100 rounded gap-16">
          <p>Theatre</p>
          <p className="font-semibold">{show?.theatre?.name}</p>
        </div>
        <div className="flex gap-2 items-center justify-between">
          <p className="text-sm text-gray-500">Total:</p>
          <p className="text-lg font-bold text-primary">₹{total}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Seats Selected:</p>
          <div className="flex gap-2 mt-1 flex-wrap -start">
            {selectedSeats.length === 0 && (
              <span className="text-gray-400 text-xs">None</span>
            )}
            {selectedSeats.map((seat) => (
              <Badge key={seat}>{seat}</Badge>
            ))}
          </div>
        </div>
      </div>
      <DialogActionsBar layout="end">
        <Button variant="secondary" type="button" onClick={() => onClose()}>
          No, Cancel
        </Button>
        <Button
          type="button"
          onClick={() => confirmTickets()}
          disabled={isConfirming}
        >
          Yes, Proceed
        </Button>
      </DialogActionsBar>
    </Dialog>
  );
};

export default ConfirmTicketModal;
