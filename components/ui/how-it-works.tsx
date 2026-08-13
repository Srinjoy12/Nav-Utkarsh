"use client";

import React from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";

interface CardProps {
  number: string;
  title: string;
  description: string;
  className?: string;
  rotate?: string;
  colors: {
    bg: string;
    text: string;
    border: string;
  };
}

const Pin = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M16 3a1 1 0 0 1 .117 1.993l-.117 .007v4.764l1.894 3.789a1 1 0 0 1 .1 .331l.006 .116v2a1 1 0 0 1 -.883 .993l-.117 .007h-4v4a1 1 0 0 1 -1.993 .117l-.007 -.117v-4h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-2a1 1 0 0 1 .06 -.34l.046 -.107l1.894 -3.791v-4.762a1 1 0 0 1 -.117 -1.993l.117 -.007h8z" />
  </svg>
);

const Card = ({
  number,
  title,
  description,
  className,
  rotate,
  colors,
}: CardProps) => {
  return (
    <div
      className={`relative w-full md:w-[280px] transition-transform duration-300 hover:z-30 hover:scale-105 ${rotate} ${className}`}
    >
      <div className="bg-white p-2 rounded-[25px] shadow-[0px_10px_20px_0px_rgba(199,211,192,0.3)] border border-[#C7D3C0]">
        <Pin className={`w-8 h-8 ${colors.text} z-20 mb-6 mx-auto`} />
        <div
          className={`${colors.bg} border ${colors.border} rounded-[15px] p-[15px] h-full flex flex-col relative overflow-hidden`}
        >
          <span
            className={`${colors.text} text-4xl font-bold mb-5`}
            style={{
              fontFamily: '"Montserrat", sans-serif',
            }}
          >
            {number}
          </span>
          <h3 className="text-2xl font-semibold text-[#2C3A2A] leading-none mb-[10px]">
            {title}
          </h3>
          <p className="text-[#4A5848] text-sm/5 tracking-tight">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export interface Step {
  title: string;
  description: string;
  colors?: {
    bg: string;
    text: string;
    border: string;
  };
}

export interface StepPosition {
  className?: string;
  rotate?: string;
}

export interface HowItWorksProps {
  features?: Step[];
  className?: string;
  stepPositions?: StepPosition[];
}

const DEFAULT_CARD_POSITIONS: StepPosition[] = [
  { className: "md:absolute md:top-0 md:left-[15%]", rotate: "rotate-8" },
  {
    className: "md:absolute md:top-[120px] md:right-[15%]",
    rotate: "-rotate-8",
  },
  { className: "md:absolute md:top-[450px] md:left-[15%]", rotate: "rotate-8" },
  {
    className: "md:absolute md:top-[570px] md:right-[10%]",
    rotate: "-rotate-8",
  },
  { className: "md:absolute md:top-[850px] md:left-[15%]", rotate: "rotate-8" },
];

/* Navkarsh earthy color palette for the 5 cards */
const EARTHY_COLORS = [
  { bg: "bg-[#F7F4ED]", text: "text-[#8FA28A]", border: "border-[#C7D3C0]" },
  { bg: "bg-[#F7F4ED]", text: "text-[#C8A96B]", border: "border-[#C7D3C0]" },
  { bg: "bg-[#F7F4ED]", text: "text-[#8FA28A]", border: "border-[#C7D3C0]" },
  { bg: "bg-[#F7F4ED]", text: "text-[#C8A96B]", border: "border-[#C7D3C0]" },
  { bg: "bg-[#F7F4ED]", text: "text-[#8FA28A]", border: "border-[#C7D3C0]" },
];

const defaultFeatures: Step[] = [
  {
    title: "Listen",
    description:
      "Understand context, people, and institutions through deep field immersion and participatory rural appraisal.",
    colors: EARTHY_COLORS[0],
  },
  {
    title: "Assess",
    description:
      "Identify strengths, gaps, and opportunities across watersheds, livelihoods, and organizational systems.",
    colors: EARTHY_COLORS[1],
  },
  {
    title: "Design",
    description:
      "Co-create practical solutions and strategies with communities, CSOs, and development professionals.",
    colors: EARTHY_COLORS[2],
  },
  {
    title: "Build Capacity",
    description:
      "Coach teams, strengthen systems, and deliver tailored professional development for lasting organizational resilience.",
    colors: EARTHY_COLORS[3],
  },
  {
    title: "Sustain Impact",
    description:
      "Support implementation, learning, and adaptation to ensure long-term sustainability and measurable results.",
    colors: EARTHY_COLORS[4],
  },
];

export default function HowItWorks({
  features,
  className,
  stepPositions,
}: HowItWorksProps) {
  const data = features && features.length > 0 ? features : defaultFeatures;
  const positions = stepPositions || DEFAULT_CARD_POSITIONS;

  let height = 1130;
  if (data.length === 1) height = 400;
  else if (data.length === 2) height = 450;
  else if (data.length === 3) height = 800;
  else if (data.length === 4) height = 900;
  else height = 1130;

  return (
    <LazyMotion features={domAnimation}>
      <div
        className={`bg-[#F7F4ED] max-md:pt-10 max-md:pb-25 md:py-20 px-8 relative ${className}`}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(#2C3A2A 1px, transparent 1px)",
            backgroundSize: "100% 32px",
            marginTop: "4px",
          }}
        ></div>
        <div className="from-[#F7F4ED] pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r"></div>
        <div className="from-[#F7F4ED] pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-12 max-w-2xl mx-auto space-y-3">
            <span className="font-bold text-xs uppercase tracking-[0.2em] text-[#8FA28A] block">
              Our Methodology
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#2C3A2A]">
              Our Approach to Rural Development
            </h2>
            <p className="text-[#4A5848] text-base md:text-lg leading-relaxed">
              At Navkarsh Advisory, we believe rural development succeeds when local knowledge, institutional capacity, natural resource systems, and livelihood opportunities are addressed together.
            </p>
          </div>

          <div
            className="relative w-full max-w-[1000px] mx-auto flex flex-col space-y-8 md:space-y-0 md:block h-auto md:h-[var(--md-height)]"
            style={{ "--md-height": `${height}px` } as React.CSSProperties}
          >
            {data.length > 1 && (
              <svg
                className="absolute top-0 left-0 w-full h-full pointer-events-none hidden md:block z-0"
                viewBox={`0 0 1000 ${height}`}
                preserveAspectRatio="none"
              >
                {(() => {
                  const pathD = data.reduce((acc, _, index) => {
                    if (index >= data.length - 1) return acc;
                    if (index === 0)
                      return "M 290 150 C 500 150, 550 270, 710 270";
                    if (index === 1)
                      return acc + " C 850 270, 500 350, 290 450";
                    if (index === 2)
                      return acc + " C 290 600, 550 720, 750 720";
                    if (index === 3)
                      return acc + " C 950 720, 500 800, 290 850";
                    return acc;
                  }, "");
                  return (
                    <m.path
                      d={pathD}
                      stroke="#C7D3C0"
                      strokeWidth="2"
                      strokeDasharray="8 6"
                      fill="none"
                      strokeLinecap="round"
                      vectorEffect="non-scaling-stroke"
                      initial={{ strokeDashoffset: 0 }}
                      animate={{
                        strokeDashoffset: -140,
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  );
                })()}
              </svg>
            )}

            {data.map((step, index) => {
              const position = positions[index % positions.length];
              const colors = step.colors || EARTHY_COLORS[index % EARTHY_COLORS.length];

              return (
                <Card
                  key={step.title}
                  number={`0${index + 1}`}
                  title={step.title}
                  description={step.description}
                  colors={colors}
                  rotate={position.rotate}
                  className={position.className}
                />
              );
            })}
          </div>
        </div>
      </div>
    </LazyMotion>
  );
}
