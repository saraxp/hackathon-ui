import React from "react";

const SuggestedPrompts = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 md:gap-6 py-8">
      <p className="text-[#3B3D40] text-base md:text-lg font-medium">
        Try starting with one of these
      </p>
      <div className="flex flex-wrap justify-center gap-3 md:gap-4">
        {[
          'I’ve been feeling anxious lately',
          'I’m having trouble sleeping',
          'I’ve been feeling overwhelmed',
          'I want to talk about my stress',
        ].map((prompt, idx) => (
          <button
            key={idx}
            className="cursor-pointer border border-[#A882A0] rounded-full px-4 py-2 md:px-6 md:py-3 text-[#3B3D40] text-xs md:text-sm font-medium text-center hover:bg-[#F6D8D6]/70 transition-colors duration-200"
          >
            {prompt}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SuggestedPrompts;
