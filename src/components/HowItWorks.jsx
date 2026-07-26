import { Download, UserRound, PhoneCall, HeartHandshake } from "lucide-react";
import React from "react";

import TimelineCard from "./TimelineCard";
import colors from "../constants/colors";


const steps = [
  {
    id: 1,
    title: "Download ChatSpark",
    description:
      "Get ChatSpark On Your Phone In Seconds From The Play Store.",
    icon: Download,
    side: "right",
  },
  {
    id: 2,
    title: "Create Your Profile",
    description:
      "Add A Few Details And Let Us Find Your Perfect Match.",
    icon: UserRound,
    side: "left",
  },
  {
    id: 3,
    title: "Start Talking",
    description:
      "Connect Instantly Through Voice Call Or Chat. It's Easy, Fun And Secure.",
    icon: PhoneCall,
    side: "right",
  },
  {
    id: 4,
    title: "Build Real Connections",
    description:
      "Enjoy Daily Horoscope, Make New Friends And Build Connections That Matter.",
    icon: HeartHandshake,
    side: "left",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-work"
      className="py-8 overflow-hidden"
      style={{
        background: colors.gradientVertical,
      }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-24">

          <span
            className="inline-flex rounded-full px-8 py-3 font-semibold"
            style={{
              color: colors.accent,
              border: `1px solid ${colors.accent}40`,
              background: colors.hover,
            }}
          >
            HOW IT WORKS
          </span>

          <h2
            className="font-black mt-8 leading-tight"
            style={{
              color: colors.textPrimary,
              fontSize: "clamp(3rem,7vw,5.5rem)",
            }}
          >
            Start Your Journey In
            <br />
            <span style={{ color: colors.accent }}>
              Just 4 Simple Steps.
            </span>
          </h2>

          <p
            className="mx-auto mt-8 text-xl leading-9"
            style={{
              color: colors.textSecondary,
              maxWidth: "700px",
            }}
          >
            Get Started In Minutes And Experience Meaningful
            Conversations And Real Connections.
          </p>

        </div>

        {/* Timeline */}

        {/* <div className="relative">

          

          <div
            className="absolute left-1/2 top-0 -translate-x-1/2 w-[4px] h-full rounded-full"
            style={{
              background: colors.accent,
            }}
          />

          {steps.map((step, index) => (
            <TimelineCard
              key={step.id}
              step={step}
              index={index}
            />
          ))}

        </div> */}
        <div className="relative">

  {/* Desktop Timeline */}
  <div
    className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 w-[4px] h-full rounded-full"
    style={{
      background: colors.accent,
    }}
  />

  {/* Mobile Timeline */}
  <div
    className="lg:hidden absolute left-7 top-0 w-[3px] h-full rounded-full"
    style={{
      background: colors.accent,
    }}
  />

  {steps.map((step, index) => (
    <TimelineCard
      key={step.id}
      step={step}
      index={index}
    />
  ))}

</div>

      </div>
    </section>
  );
}
