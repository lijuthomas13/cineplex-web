import { Dialog } from "@progress/kendo-react-dialogs";
import "@progress/kendo-theme-default/dist/all.css";
import type { BookingType } from "../types/movieType";
import { BsTicketPerforatedFill } from "react-icons/bs";
import { useGlobalStore } from "../store/useGlobalStore";
import { useState } from "react";
import qrLoading from "../assets/qrLoading.json";
import Lottie from "lottie-react";

const TicketQRCode: React.FC<{
  booking: BookingType;
  onClose: () => void;
}> = ({ booking, onClose }) => {
  const { theme } = useGlobalStore();
  const [loading, setLoading] = useState(true);

  return (
    <Dialog
      themeColor={theme == "dark" ? "dark" : "light"}
      title={
        <div className="flex gap-2 items-center">
          <BsTicketPerforatedFill className="text-primary text-xl"></BsTicketPerforatedFill>
          <p className="font-semibold">Enjoy your Movie</p>
        </div>
      }
      onClose={() => onClose()}
    >
      <div className="p-4">
        <div className="flex-shrink-0 w-full w-50 h-50 md:w-80 md:h-80 flex items-center justify-center p-3 bg-white border border-gray-200 rounded-lg">
          {loading && <Lottie animationData={qrLoading} loop classID="w-20 h-20" />}
          <img
            alt={`QR code for ${booking.movie_title} ticket`}
            src={`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
              `Booking #${booking.booking_id} - ${booking.movie_title}`
            )}&size=150x150`}
            onLoad={() => setLoading(false)}
            className={loading ? "opacity-0" : ""}
          />
        </div>
      </div>
    </Dialog>
  );
};

export default TicketQRCode;
