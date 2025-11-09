import { Dialog, DialogActionsBar } from "@progress/kendo-react-dialogs";
import Button from "../assets/UiComponents/Button/Button";
import "@progress/kendo-theme-default/dist/all.css";
import type { ShowDetailsType } from "../types/movieType";
import Badge from "../assets/UiComponents/Badge/Badge";
import { bookSeats } from "../services/movieService";
import { useState } from "react";

const ConfirmTicketModal: React.FC<{
  show: ShowDetailsType | null;
  total: number;
  selectedSeats: string[];
  onClose: () => void;
}> = ({ show, total, selectedSeats, onClose }) => {
  const [isConfirming, setIsConfirming] = useState(false);
  const confirmTickets = async () => {
    setIsConfirming(true);
    if (show?.showId) {
      try {
        await bookSeats(show?.showId, selectedSeats, total);
        setIsConfirming(false);
      } catch {
        setIsConfirming(false);
      }
    }
  };
  return (
    <Dialog title={"Please confirm"} onClose={() => onClose()}>
      <div className="flex flex-col gap-2">
        <p>Are you sure you want to continue with the booking?</p>
        <p className="text-gray-600 text-sm">
          {show?.movie.title} |{" "}
          {show?.showTime && new Date(show?.showTime).toLocaleString()} | {""}
          {show?.theatre?.name}
        </p>
        <div className="flex gap-2 items-center">
          <p className="text-sm text-gray-500">Total:</p>
          <p className="text-lg font-bold text-gray-800">₹{total}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Seats Selected:</p>
          <div className="flex gap-2 mt-1 flex-wrap justify-center sm:justify-start">
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
        <Button type="button" onClick={() => confirmTickets()} disabled={isConfirming}>
          Yes, Proceed
        </Button>
      </DialogActionsBar>
    </Dialog>
  );
};

export default ConfirmTicketModal;
