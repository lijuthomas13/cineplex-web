import React from "react";
import type { RowType, SeatType } from "../types/movieType";
import { SEAT_CATEGORY, SEAT_STATUS } from "../constants";

const SeatLayout: React.FC<{
  layout: RowType[];
  toggleSeat: (row: RowType, seat: SeatType) => void;
  selectedSeats: string[];
}> = ({ layout, toggleSeat, selectedSeats }) => {
  const getBorderColor = (category: string) => {
    switch (category) {
      case SEAT_CATEGORY.PLATINUM:
        return "border-primary";
      case SEAT_CATEGORY.GOLD:
        return "border-amber-400";
      case SEAT_CATEGORY.SILVER:
        return "border-slate-400";
      default:
        return "border-gray-300";
    }
  };
  return (
    <div className="flex flex-col items-center gap-3 mt-8">
      {layout.map((row) => (
        <div
          key={row.row}
          className="flex items-center gap-1 sm:gap-2 flex-wrap justify-center"
        >
          <div className="w-6 text-center font-medium text-gray-600">
            {row.row}
          </div>
          {row.seats.map((seat) => {
            const isSelected = selectedSeats.includes(seat.id);
            const borderColor = getBorderColor(row.category);

            return (
              <button
                key={seat.id}
                onClick={() => toggleSeat(row, seat)}
                disabled={seat.status === SEAT_STATUS.BOOKED}
                className={`size-6 sm:size-7 rounded 
                        ${
                          seat.status === SEAT_STATUS.BOOKED
                            ? "bg-gray-300 cursor-not-allowed"
                            : isSelected
                            ? "bg-green-500 border-2 border-transparent"
                            : `bg-white border-2 ${borderColor} hover:bg-green-400/20`
                        }`}
                title={seat?.id}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default SeatLayout;
