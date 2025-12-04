import React from "react";

import colors from "../constants/colors";


export function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div
      style={{
        backgroundColor: colors.gradientVertical,
        border: `1px solid ${colors.cardBorder}`,
        borderRadius: "18px",
        padding: "28px",
        width: "360px",
        height: "180px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          color: colors.accent,
          fontWeight: "600",
          fontSize: "18px",
        }}
      >
        <Icon size={22} />
        {title}
      </div>

      <p
        style={{
          color: colors.textSecondary,
          fontSize: "15px",
          lineHeight: "22px",
          marginTop: "4px",
        }}
      >
        {description}
      </p>
    </div>
  );
}
