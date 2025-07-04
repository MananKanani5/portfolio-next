"use client";

import { useState, useEffect } from "react";

export default function DescriptionToggle({ description }) {
  const [showDescription, setShowDescription] = useState(false);
  const [shortText, setShortText] = useState("");

  useEffect(() => {
    const getPlainText = (html) => {
      const tempEl = document.createElement("div");
      tempEl.innerHTML = html;
      return tempEl.textContent || tempEl.innerText || "";
    };

    const plainText = getPlainText(description);
    setShortText(plainText.substring(0, 400) + "...");
  }, [description]);

  return (
    <div className="project-description animate__animated animate__fadeIn duration-300">
      {showDescription ? (
        <div
          className="prose max-w-none text-[#1a1a1a]"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      ) : (
        <p>{shortText}</p>
      )}

      <button
        onClick={() => setShowDescription((prev) => !prev)}
        className="text-primary mt-2 mb-3 animate__animated animate__fadeIn cursor-pointer"
      >
        {showDescription ? "See Less" : "See More"}
      </button>
    </div>
  );
}
