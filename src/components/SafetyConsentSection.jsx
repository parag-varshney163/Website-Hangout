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
    <div id="safety"
      style={{
        width: "100%",
        padding: "80px 0 100px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        
      }}
    >
      {/* Title */}
      <h2
        style={{
          fontSize: "42px",
          fontWeight: "700",
          color: "white",
          marginBottom: "10px",
        }}
      >
        Safety & Consent,{" "}
        <span style={{ color: colors.accent }}>Always</span>
      </h2>

      {/* Subheading */}
      <p
        style={{
          color: colors.accent,
          fontSize: "18px",
          width: "65%",
          textAlign: "center",
          lineHeight: "28px",
          marginBottom: "45px",
        }}
      >
        We built ChatSpark with a consent-first philosophy. You control who you
        talk to, when to connect, and when to end. Easy report & block.
      </p>

      {/* Top Feature Pills */}
      <div
        style={{
          display: "flex",
          gap: "28px",
          marginBottom: "70px",
        }}
      >
        {topFeatures.map((item, idx) => (
          <div
            key={idx}
            style={{
              padding: "14px 32px",
              borderRadius: "12px",
              border: `1px solid ${colors.cardBorder}`,
              color: colors.accent,
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            {item}
          </div>
        ))}
      </div>

      {/* CONSENT BOX */}
      <div
        style={{
          width: "520px",
          backgroundColor: colors.secondary,
          borderRadius: "24px",
          padding: "35px 40px",
          boxShadow: "0px 0px 30px rgba(0,0,0,0.25)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Yellow header box */}
        <div
          style={{
            backgroundColor: colors.accent,
            padding: "12px 20px",
            borderRadius: "10px",
            textAlign: "center",
            width: "100%",
            marginBottom: "28px",
          }}
        >
          <h3
            style={{
              fontSize: "20px",
              fontWeight: "700",
              marginBottom: "4px",
              color: "#000",
            }}
          >
            Consent Reminder
          </h3>
          <p style={{ fontSize: "15px", color: "#000" }}>
            We ask for consent before every call. Violations lead to bans.
          </p>
        </div>

        {/* Rules */}
        {rules.map((rule, idx) => (
          <div
            key={idx}
            style={{
              width: "100%",
              padding: "14px 20px",
              borderRadius: "12px",
              border: `1px solid ${colors.cardBorder}`,
              color: colors.accent,
              fontSize: "15px",
              marginBottom: "16px",
              textAlign: "center",
            }}
          >
            {rule}
          </div>
        ))}
      </div>
    </div>
  );
}

