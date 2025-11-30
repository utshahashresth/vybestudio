"use client";
import { useEffect, useState, useRef } from "react";
import { motion, HTMLMotionProps } from "motion/react";

interface DecryptedTextProps extends HTMLMotionProps<"span"> {
  text: string;
  speed?: number;
  maxIterations?: number;
  sequential?: boolean;
  revealDirection?: "start" | "end" | "center";
  useOriginalCharsOnly?: boolean;
  characters?: string;
  className?: string;
  encryptedClassName?: string;
  parentClassName?: string;
  animateOn?: "view" | "hover";
  infinite?: boolean; // <--- added
}

export default function DecryptedText({
  text,
  speed = 30,
  maxIterations = 10,
  sequential = false,
  revealDirection = "start",
  useOriginalCharsOnly = false,
  characters = "Vybestudio",
  className = "text-red-950",
  parentClassName = "",
  encryptedClassName = "",
  animateOn = "hover",
  infinite = false,
  ...props
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState<string>(text);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [isScrambling, setIsScrambling] = useState<boolean>(false);
  const [revealedIndices, setRevealedIndices] = useState<Set<number>>(
    new Set()
  );
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);

  const containerRef = useRef<HTMLSpanElement>(null);

  // For infinite loop
  const [loopKey, setLoopKey] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let currentIteration = 0;

    const getNextIndex = (revealedSet: Set<number>): number => {
      const len = text.length;

      switch (revealDirection) {
        case "start":
          return revealedSet.size;

        case "end":
          return len - 1 - revealedSet.size;

        case "center": {
          const mid = Math.floor(len / 2);
          const offset = Math.floor(revealedSet.size / 2);

          const next =
            revealedSet.size % 2 === 0 ? mid + offset : mid - offset - 1;

          if (next >= 0 && next < len && !revealedSet.has(next)) return next;

          for (let i = 0; i < len; i++) {
            if (!revealedSet.has(i)) return i;
          }
          return 0;
        }

        default:
          return revealedSet.size;
      }
    };

    const availableChars = useOriginalCharsOnly
      ? Array.from(new Set(text.split(""))).filter((char) => char !== " ")
      : characters.split("");

    const shuffleText = (original: string, revealed: Set<number>) =>
      original
        .split("")
        .map((char, idx) => {
          if (char === " ") return " ";
          if (revealed.has(idx)) return char;

          return availableChars[
            Math.floor(Math.random() * availableChars.length)
          ];
        })
        .join("");

    // Start scrambling
    setIsScrambling(true);
    interval = setInterval(() => {
      setRevealedIndices((prev) => {
        if (sequential) {
          if (prev.size < text.length) {
            const next = getNextIndex(prev);
            const newSet = new Set(prev);
            newSet.add(next);

            setDisplayText(shuffleText(text, newSet));
            return newSet;
          } else {
            clearInterval(interval);
            setIsScrambling(false);

            // Restart if infinite
            if (infinite) {
              setTimeout(() => {
                setRevealedIndices(new Set());
                setLoopKey((k) => k + 1);
              }, 1000);
            }

            return prev;
          }
        } else {
          setDisplayText(shuffleText(text, prev));
          currentIteration++;

          if (currentIteration >= maxIterations) {
            clearInterval(interval);
            setIsScrambling(false);
            setDisplayText(text);

            if (infinite) {
              setTimeout(() => {
                setRevealedIndices(new Set());
                setLoopKey((k) => k + 1);
              }, 1000);
            }
          }

          return prev;
        }
      });
    }, speed);

    return () => clearInterval(interval);
  }, [
    text,
    revealDirection,
    speed,
    characters,
    useOriginalCharsOnly,
    sequential,
    maxIterations,
    infinite,
    loopKey,
  ]);

  // If infinite — always animate
  useEffect(() => {
    if (infinite) {
      setIsHovering(true);
      return;
    }
  }, [infinite]);

  // If animateOn="view"
  useEffect(() => {
    if (animateOn !== "view" || infinite) return;

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setIsHovering(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) obs.observe(containerRef.current);

    return () => containerRef.current && obs.unobserve(containerRef.current);
  }, [animateOn, hasAnimated, infinite]);

  const hoverProps =
    animateOn === "hover" && !infinite
      ? {
          onMouseEnter: () => setIsHovering(true),
          onMouseLeave: () => setIsHovering(false),
        }
      : {};

  return (
    <motion.span
      ref={containerRef}
      className={`inline-block whitespace-pre-wrap ${parentClassName}`}
      {...hoverProps}
      {...props}
    >
      <span aria-hidden="true">
        {displayText.split("").map((char, idx) => {
          const done = revealedIndices.has(idx) || !isScrambling || !isHovering;

          return (
            <span key={idx} className={done ? className : encryptedClassName}>
              {char}
            </span>
          );
        })}
      </span>
    </motion.span>
  );
}
