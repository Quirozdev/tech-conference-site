"use client";

export default function BackToTopButton() {
  function onBackToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <button
      onClick={onBackToTop}
      className="text-preset-7 cursor-pointer text-neutral-200 uppercase hover:text-neutral-500"
    >
      Back to top ↑
    </button>
  );
}
