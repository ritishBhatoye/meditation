import React from "react";

export default function QuoteBlock({ quote }: { quote: string }) {
  return (
    <div className="pt-4 pb-3">
      <blockquote className="italic text-gray-300 border-l-4 border-teal-500 pl-4 max-w-xl mx-auto md:mx-0">
        <p
          style={{ fontFamily: "'Homemade Apple', cursive" }}
          className="text-sm"
        >
          &ldquo;{quote}&rdquo;
        </p>
      </blockquote>
    </div>
  );
}
