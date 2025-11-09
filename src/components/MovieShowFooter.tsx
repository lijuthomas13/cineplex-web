import React from "react";
import Button from "../assets/UiComponents/Button/Button";
import Badge from "../assets/UiComponents/Badge/Badge";

const MovieShowFooter: React.FC<{
  total: number;
  selectedSeats: string[];
  clearSelection: () => void;
  setShowConfirmModal: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ total, selectedSeats, clearSelection, setShowConfirmModal }) => {
  return (
    <footer className="sticky bottom-0 w-full bg-white border-t border-gray-200 mt-8">
      <div className="px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="pr-4 border-r border-gray-300">
            <p className="text-sm text-gray-500">Total:</p>
            <p className="text-2xl font-bold text-gray-800">₹{total}</p>
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

        <div className="flex gap-3 w-auto">
          <Button onClick={clearSelection} variant="secondary">
            Clear Selection
          </Button>
          <Button
            disabled={selectedSeats.length === 0}
            onClick={() => {
              setShowConfirmModal(true);
            }}
          >
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default MovieShowFooter;
