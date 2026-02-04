"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const TextReveal = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const paragraph = sectionRef.current!.querySelector("p");

      if (!paragraph) return;

      const split = new SplitText(paragraph, { type: "chars" });

      gsap.fromTo(
        split.chars,
        { color: "#444" },
        {
          color: "white",
          stagger: 0.05,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "=120%",
            pin: true,
            pinSpacing: true,
            scrub: true,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        minHeight: "100vh",
      }}
      className="
        dark:bg-inherit
        bg-black
        overflow-y-auto
       "
    >
      <div
        style={{
          maxWidth: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          margin: "-0em auto",
          padding: "0 20px",
        }}
      >
        <p
          className="text-4xl font-bold text-center w-[55%] m-auto"
          style={{
            lineHeight: 1.4,
            color: "#444",
          }}
        >
          This concept presents a streamlined digital experience focused on
          clarity, automation, and operational efficiency. The interface
          emphasizes guided workflows, clear data visibility, and scalable
          components designed to reduce friction, support compliance, and
          improve day-to-day execution.
        </p>
      </div>
    </section>
  );
};

export default TextReveal;
