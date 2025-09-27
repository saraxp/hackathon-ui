"use client";
import React from "react";
import ScrollStack from '../../src/components/lightswind/scroll-stack';



const Features = () => {
  const cards = [
    {
      title: "First Card",
      subtitle: "This is the first card in the stack",
      badge: "Step 1"
    },
    {
      title: "Second Card",
      content: (
        <div>
          <h2>Custom React Content</h2>
          <button>Interactive Element</button>
        </div>
      )
    },
    {
      title: "Third Card",
      subtitle: "This is the third card in the stack",
      badge: "Step 3"
    },
  ];
  return (
    <section className="min-h-screen bg-[#FAF6F3]">
      <ScrollStack cards={cards} />
    </section>
  );
};

export default Features;
