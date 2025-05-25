import React from "react";

export default function SliderDot({
  active,
  onClick,
  ariaLabel,
}: {
  active: boolean;
  onClick: () => void;
  ariaLabel: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-3 h-3 rounded-full transition-all ${
        active ? "bg-teal-400 scale-110" : "bg-white/30 hover:bg-white/50"
      }`}
      aria-label={ariaLabel}
    />
  );
}
