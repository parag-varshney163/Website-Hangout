import { Trophy, PhoneCall, Users, Shield, BookMarked, IndianRupee, } from "lucide-react";
import React from "react";

import { FeatureCard } from "./FeatureCard";
import colors from "../constants/colors";


export default function WhyChatSpark() {
  return (
    <div
      id="feature"
      className="w-full px-6 md:px-16 lg:px-24 py-16"
      style={{ background: "transparent",overflowX:"hidden" }}
    >
      {/* Title */}
      <h2
        className="text-center font-bold"
        style={{
          fontSize: "42px",
          color: colors.textPrimary,
        }}
      >
        Why <span style={{ color: colors.accent }}>ChatSpark?</span>
      </h2>

      <p
        className="text-center mt-3 mb-12"
        style={{
          color: colors.accent,
          fontSize: "18px",
        }}
      >
        Built for India’s youth — fast, fun, and super safe. No cringe, only
        connection.
      </p>

      {/* Cards Grid */}
      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          gap-6 
          place-items-center
        "
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
