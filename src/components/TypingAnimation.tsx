"use client";

import { useEffect, useState } from "react";

const phrases = [
  "interactive experiences",
  "modern web applications",
  "thoughtful interfaces",
];

export default function TypingAnimation() {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    const delay =
      !isDeleting && text === currentPhrase ? 1400 : isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (text === currentPhrase) {
          setIsDeleting(true);
          return;
        }

        setText(currentPhrase.slice(0, text.length + 1));
        return;
      }

      if (text === "") {
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
        setIsDeleting(false);
        return;
      }

      setText(text.slice(0, -1));
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, phraseIndex, isDeleting]);

  return (
    <p
      className="mt-8 max-w-lg text-base leading-relaxed text-white/50 md:text-lg"
      style={{ fontFamily: "var(--font-space-mono)" }}
    >
      I build{" "}
      <span className="text-[#bd8cff]">
        {text}
        <span className="ml-1 typing-cursor">|</span>
      </span>
    </p>
  );
}
