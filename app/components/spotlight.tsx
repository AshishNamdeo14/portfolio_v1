"use client";
import { useEffect, useRef } from "react";

const Spotlight = () => {
  const spotlightRef = useRef(null);

  useEffect(() => {
    const spotlight = spotlightRef.current;

    const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
      const { clientX: x, clientY: y } = e;
      spotlight.style.background = `radial-gradient(600px at ${x}px ${y}px, rgb(29,78,216,0.15),transparent 90%)`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div ref={spotlightRef} className="fixed inset-0 pointer-events-none z-0" />
  );
};

export default Spotlight;
