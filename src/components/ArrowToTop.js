import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ArrowToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  window.addEventListener("scroll", toggleVisibility);

  return (
    <div
      className={`arrow-to-top ${isVisible ? "visible" : "hidden"}`}
      style={{ color: "var(--color-4)" }}
    >
      <FaArrowUp onClick={scrollToTop} />
    </div>
  );
};

export default ArrowToTop;
