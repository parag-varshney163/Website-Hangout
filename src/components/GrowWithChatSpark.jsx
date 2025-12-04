import { BadgeCheck, IndianRupee, Sparkles, HelpCircle } from "lucide-react";
import React from "react";

import colors from "../constants/colors";
import Button from "./ui/Buttton";


export default function GrowWithChatSpark() {
  return (
    <div
      style={{
        width: "100%",
        padding: "60px 80px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          border: `1px solid ${colors.cardBorder}`,
          borderRadius: "12px",
          padding: "50px 60px",
          width: "100%",
          display: "flex",
          gap: "60px",
          background: "transparent",
        }}
      >
        {/* LEFT SECTION */}
        <div style={{ flex: 1 }}>
          <h2
            style={{
              fontSize: "42px",
              fontWeight: "700",
              color: "white",
              marginBottom: "12px",
            }}
          >
            Let’s grow with{" "}
            <span style={{ color: colors.accent }}>ChatSpark</span>
          </h2>

          <p
            style={{
              color: colors.textSecondary,
              fontSize: "18px",
              lineHeight: "26px",
              marginBottom: "32px",
              width: "80%",
            }}
          >
            Host calls, run fun challenges, and build a loyal audience.
            Get transparent payouts, KYC support, and analytics built-in.
          </p>

          {/* Bullet Points */}
          <div style={{ marginTop: "20px", marginBottom: "40px" }}>
            {[
              {
                icon: BadgeCheck,
                text: "Fast onboarding with KYC",
              },
              {
                icon: IndianRupee,
                text: "Transparent earnings dashboard",
              },
              {
                icon: Sparkles,
                text: "Smart discovery & featured spots",
              },
              {
                icon: HelpCircle,
                text: "Creator-only support line",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "12px",
                }}
              >
                <item.icon
                  size={20}
                  color={colors.accent}
                  style={{ marginTop: "-2px" }}
                />
                <p style={{ color: colors.accent, fontSize: "17px" }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
            <Button
              size="md"
              variant="custom"
              bg={colors.accent}
              text="#000"
              style={{
                borderRadius: "10px",
                padding: "12px 26px",
              }}
            >
              Apply Now →
            </Button>

            <Button
              size="md"
              variant="ghost"
              icon={null}
              style={{
                borderRadius: "10px",
                padding: "12px 26px",
                border: `1px solid ${colors.cardBorder}`,
                color: colors.textPrimary,
              }}
            >
              Learn More →
            </Button>
          </div>
        </div>

        {/* RIGHT EARNING BOX */}
        <div
          style={{
            width: "350px",
            backgroundColor: colors.secondary,
            borderRadius: "20px",
            padding: "30px",
          }}
        >
          <h3
            style={{
              color: "white",
              fontSize: "20px",
              marginBottom: "20px",
              fontWeight: "600",
            }}
          >
            Sample <span style={{ color: colors.accent }}>Earning</span>
          </h3>

          {[
            { level: "Beginner", time: "10 hrs/week", pay: "₹4k–₹7k" },
            { level: "Rising", time: "15 hrs/week", pay: "₹8k–₹12k" },
            { level: "Pro", time: "25+ hrs/week", pay: "₹15k+" },
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: colors.cardBg,
                borderRadius: "12px",
                padding: "14px 20px",
                marginBottom: "16px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                color: "white",
                fontSize: "16px",
              }}
            >
              <span style={{ color: colors.accent }}>
                {item.level}{" "}
                <span style={{ color: colors.textSecondary, fontSize: "15px" }}>
                  {item.time}
                </span>
              </span>

              <strong>{item.pay}</strong>
            </div>
          ))}

          <p
            style={{
              color: colors.accent,
              fontSize: "12px",
              marginTop: "10px",
            }}
          >
            *Actual earnings vary by time spent, demand, and quality.
            No guaranteed income.
          </p>
        </div>
      </div>
    </div>
  );
}

