import React, { useState, useEffect, lazy } from "react";
import { Download, Rocket } from "lucide-react";
import { useNavigate } from "react-router-dom";

import HeroSectionI from "../assets/HeroSectionI.webp";
import colors from "../constants/colors";
import Button from "./ui/Buttton";


export default function HeroSection() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isTablet, setIsTablet] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const updateSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth < 1024);
    };
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        padding: isMobile ? "40px 20px" : isTablet ? "60px 40px" : "80px 60px",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: isMobile ? "40px" : "20px",
        overflowX:"hidden"
      }}
    >
      {/* LEFT SECTION */}
      <div style={{ width: isMobile ? "100%" : "50%" }}>
        <h1
          style={{
            color: colors.textPrimary,
            fontSize: isMobile ? "40px" : "64px",
            fontWeight: "700",
            lineHeight: "1.1",
          }}
        >
          Challenge <span style={{ color: colors.accent }}>& Connect</span>
        </h1>

        <h2
          style={{
            color: colors.textPrimary,
            fontSize: isMobile ? "22px" : "36px",
            marginTop: "10px",
            marginBottom: "20px",
          }}
        >
          India’s top <span style={{ color: colors.accent }}>Audio Hangout</span>
        </h2>

        <p
          style={{
            color: colors.textSecondary,
            fontSize: isMobile ? "16px" : "20px",
            lineHeight: "1.6",
            maxWidth: "620px",
          }}
        >
          Jump into bite-sized voice challenges, vibe with new people, and build
          real connections.
        </p>

        {/* BUTTONS */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "40px",
            flexWrap: "wrap",
          }}
        >
          <Button variant="ghost" size="lg" icon={Download}>
            Get The App
          </Button>

          <Button
            variant="custom"
            bg={colors.accent}
            text="#000"
            size="lg"
            icon={Rocket}
            onClick={() => navigate("/join-us")}
          >
            Become a Creator
          </Button>
        </div>

        {/* Icons */}
        <div
          style={{
            display: "flex",
            gap: isMobile ? "20px" : "40px",
            marginTop: "40px",
            flexWrap: "wrap",
            fontSize: "17px",
          }}
        >
          <div style={{ display: "flex", gap: 8, color: colors.accent }}>
            🛡️ KYC & Safety First
          </div>

          <div style={{ display: "flex", gap: 8, color: colors.accent }}>
            ⭐ Trendy Challenges
          </div>

          <div style={{ display: "flex", gap: 8, color: colors.accent }}>
            👥 Global Community
          </div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div
        style={{
          width: isMobile ? "100%" : "50%",
          display: "flex",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: "-20px",
            width: isMobile ? "200px" : "320px",
            height: isMobile ? "40px" : "60px",
            background: "rgba(255, 185, 0, 0.35)",
            filter: "blur(45px)",
            borderRadius: "50%",
            zIndex: 1,
          }}
        />

        <img
          src={HeroSectionI}
          alt="hero"
          style={{
            width: isMobile ? "95%" : isTablet ? "550px" : "750px",
            zIndex: 2,
          }}
        />
      </div>
    </div>
  );
}
