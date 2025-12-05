import React from "react";

import colors from "../constants/colors";


export default function SafetyConsentSection() {
  const topFeatures = [
    "Real-name KYC for creators",
    "On-call guidelines & warnings",
    "Moderation + fraud checks",
  ];

  const rules = [
    "18+ community. Be respectful. No harassment.",
    "Zero tolerance for spam, scams, or hate speech.",
  ];

  return (
    <div style={{overflowX:"hidden"}}
      id="safety"
      className="w-full flex flex-col items-center py-20 px-4"
    >
      {/* Title */}
      <h2 className="text-white font-bold text-4xl md:text-[42px] mb-2 text-center">
        Safety & Consent,{" "}
        <span style={{ color: colors.accent }}>Always</span>
      </h2>

      {/* Subheading */}
      <p
        className="text-center text-base md:text-lg leading-7 max-w-3xl mb-10"
        style={{ color: colors.accent }}
      >
        We built ChatSpark with a consent-first philosophy. You control who you
        talk to, when to connect, and when to end. Easy report & block.
      </p>

      {/* Feature Pills */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16">
        {topFeatures.map((item, idx) => (
          <div
            key={idx}
            className="px-6 py-3 rounded-xl text-sm md:text-base font-medium"
            style={{
              border: `1px solid ${colors.cardBorder}`,
              color: colors.accent,
            }}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Consent Box */}
      <div
        className="w-full max-w-md rounded-3xl p-8 shadow-xl flex flex-col items-center"
        style={{ backgroundColor: colors.secondary }}
      >
        {/* Header Yellow Box */}
        <div
          className="w-full rounded-xl px-5 py-3 mb-6 text-center"
          style={{ backgroundColor: colors.accent }}
        >
          <h3 className="text-lg font-bold mb-1 text-black">Consent Reminder</h3>
          <p className="text-sm text-black">
            We ask for consent before every call. Violations lead to bans.
          </p>
        </div>

        {/* Rules */}
        {rules.map((rule, idx) => (
          <div
            key={idx}
            className="w-full text-center px-5 py-3 rounded-xl text-sm mb-4"
            style={{
              border: `1px solid ${colors.cardBorder}`,
              color: colors.accent,
            }}
          >
            {rule}
          </div>
        ))}
      </div>
    </div>
  );
}
