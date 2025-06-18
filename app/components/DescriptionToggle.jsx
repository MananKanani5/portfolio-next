"use client";

import { useState } from "react";

export default function DescriptionToggle({ description }) {
  const [showDescription, setShowDescription] = useState(false);
  const shortDescription = description.substring(0, 400) + "...";

  return (
    <div className="animate__animated animate__fadeIn duration-300">
      <p>{showDescription ? description : shortDescription}</p>
      <button
        onClick={() => setShowDescription((prev) => !prev)}
        className="text-primary mb-3 animate__animated animate__fadeIn cursor-pointer"
      >
        {showDescription ? "See Less" : "See More"}
      </button>
    </div>
  );
}
