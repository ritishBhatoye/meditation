import React from "react";

interface CalBookingModalProps {
  open: boolean;
  onClose: () => void;
  retreat?: { title?: string } | null;
}

const CalBookingModal: React.FC<CalBookingModalProps> = ({
  open,
  onClose,
  retreat,
}) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="bg-black/50 rounded-xl shadow-2xl p-6 w-full max-w-3xl min-w-[90vw] min-h-[70vh] relative flex flex-col">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-teal-600 text-2xl font-bold"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <h2 className="text-3xl font-bold mb-4 text-teal-700 text-center">
          Book Your Retreat
        </h2>
        {retreat?.title && (
          <div className="text-center text-teal-500 mb-2 font-semibold text-lg">
            {retreat.title}
          </div>
        )}
        <div className="flex-1 flex items-center justify-center">
          <iframe
            src="https://cal.com/your-username/your-event" // Replace with your real Cal.com link
            title="Cal.com Booking"
            className="w-full h-[60vh] min-h-[500px] rounded-lg border-none shadow-lg"
            style={{ minWidth: "100%", minHeight: "500px" }}
            allow="camera; microphone;"
          />
        </div>
      </div>
    </div>
  );
};

export default CalBookingModal;
