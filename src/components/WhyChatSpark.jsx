import { Trophy, PhoneCall, Users, Shield, BookMarked, IndianRupee } from "lucide-react";
import React from "react";

import { FeatureCard } from "./FeatureCard";
import colors from "../constants/colors";


export default function WhyChatSpark() {
  return (
    <div id="feature" style={{ width: "100%", padding: "60px 80px" }}>
      {/* Title */}
      <h2
        style={{
          fontSize: "46px",
          fontWeight: "700",
          color: "white",
          textAlign: "center",
        }}
      >
        Why <span style={{ color: colors.accent }}>ChatSpark?</span>
      </h2>

      <p
        style={{
          textAlign: "center",
          color: colors.accent,
          fontSize: "18px",
          marginTop: "10px",
          marginBottom: "60px",
        }}
      >
        Built for India’s youth — fast, fun, and super safe. No cringe, only connection.
      </p>

      {/* Cards Grid */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
          justifyContent: "center",
        }}
      >
        <FeatureCard
          icon={Trophy}
          title="Challenge Mode"
          description="Break the ice with daily voice challenges—games, dares, and prompts that spark real conversation."
        />

        <FeatureCard
          icon={PhoneCall}
          title="1:1 Audio Calls"
          description="Crystal-clear WebRTC calls with low-latency for a super smooth chat experience."
        />

        <FeatureCard
          icon={Users}
          title="Smart Matchmaking"
          description="Connect with people who share your vibe—interests, language, and mood based."
        />

        <FeatureCard
          icon={Shield}
          title="Safety First"
          description="KYC, moderation, and consent-first design. Report/Block in one tap."
        />

        <FeatureCard
          icon={BookMarked}
          title="Creator Playbook"
          description="Creators get tools to host mini-games, manage audience, and grow faster."
        />

        <FeatureCard
          icon={IndianRupee}
          title="Fair Earnings"
          description="Competitive payouts with transparent policies. Earn from calls, tips, and challenges."
        />
      </div>
    </div>
  );
}

