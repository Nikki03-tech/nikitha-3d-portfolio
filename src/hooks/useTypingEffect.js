import { useState, useEffect, useRef } from "react";

export default function useTypingEffect(words, speed = 90, pause = 2200) {
  const [text, setText] = useState("");

  const wordIndexRef = useRef(0);
  const deletingRef  = useRef(false);
  const textRef      = useRef("");
  const wordsRef     = useRef(words);
  const timerRef     = useRef(null);

  // Keep wordsRef fresh if caller ever changes the array
  useEffect(() => { wordsRef.current = words; }, [words]);

  useEffect(() => {
    const schedule = (delay) => {
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(tick, delay);
    };

    const tick = () => {
      const word = wordsRef.current[wordIndexRef.current % wordsRef.current.length];

      if (!deletingRef.current) {
        // Type one character forward
        const next = word.slice(0, textRef.current.length + 1);
        textRef.current = next;
        setText(next);

        if (next.length === word.length) {
          // Word complete - pause then start deleting
          schedule(pause);
          deletingRef.current = true;
        } else {
          schedule(speed);
        }
      } else {
        // Delete one character
        const next = word.slice(0, textRef.current.length - 1);
        textRef.current = next;
        setText(next);

        if (next.length === 0) {
          // Done deleting - next word, short gap then type
          wordIndexRef.current += 1;
          deletingRef.current = false;
          schedule(200);
        } else {
          schedule(speed / 2);
        }
      }
    };

    schedule(speed);

    return () => clearTimeout(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // runs once - all state lives in refs

  return text;
}