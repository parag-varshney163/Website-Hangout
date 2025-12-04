import { Download, Rocket } from "lucide-react";
import { useNavigate } from "react-router-dom";
import React, { lazy } from "react";

import HeroSectionI from "../assets/HeroSectionI.webp";
import colors from "../constants/colors";
import Button from "./ui/Buttton";


export default function HeroSection() {
    const navigate=useNavigate();
  return (
    <div
      style={{
        width: "100%",
        padding: "80px 60px",
        background: "transparent",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* LEFT SECTION */}
      <div style={{ width: "50%" }}>
        <h1
          style={{
            color: colors.textPrimary,
            fontSize: "64px",
            fontWeight: "700",
            lineHeight: "1.1",
          }}
        >
          Challenge <span style={{ color: colors.accent }}>& Connect</span>
        </h1>

        <h2
          style={{
            color: colors.textPrimary,
            fontSize: "36px",
            marginTop: "10px",
            marginBottom: "20px",
          }}
        >
          India’s top <span style={{ color: colors.accent }}>Audio Hangout</span>
        </h2>

        <p
          style={{
            color: colors.textSecondary,
            fontSize: "20px",
            lineHeight: "1.6",
            maxWidth: "620px",
          }}
        >
          Jump into bite-sized voice challenges, vibe with new people, and build
          real connections. No boring small talk — just pure masti, games, and
          good energy.
        </p>

        {/* BUTTONS */}
        <div style={{ display: "flex", gap: "20px", marginTop: "40px" }}>
          <Button
            variant="ghost"
            size="lg"
            icon={Download}
            style={{
              borderRadius: "14px",
              borderColor: colors.cardBorder,
              color: colors.textPrimary,
              padding: "14px 32px",
            }}
          >
            Get The App
          </Button>

          <Button
            variant="custom"
            bg={colors.accent}
            text="#000"
            size="lg"
            icon={Rocket}
            style={{
              borderRadius: "14px",
              padding: "14px 32px",
              fontWeight: 600,
            }}
            onClick={()=>{navigate("/join-us")}}
          >
            Become a Creator
          </Button>
        </div>

        {/* Feature Icons */}
        <div
          style={{
            display: "flex",
            gap: "40px",
            marginTop: "40px",
            color: colors.textSecondary,
            fontSize: "17px",
          }}
        >
          <div style={{ display: "flex", gap: "8px", alignItems: "center",color:colors.accent,cursor:"pointer" }}>
            <span>🛡️</span> KYC & Safety First
          </div>

          <div style={{ display: "flex", gap: "8px", alignItems: "center",color:colors.accent,cursor:"pointer" }}>
            <span>⭐</span> Trendy Challenges
          </div>

          <div style={{ display: "flex", gap: "8px", alignItems: "center",color:colors.accent,cursor:"pointer" }}>
            <span>👥</span> Desi + Global Community
          </div>
        </div>
      </div>

      {/* RIGHT — SINGLE IMAGE */}
      <div
        style={{
          width: "50%",
          display: "flex",
          justifyContent: "center",
          position: "relative",
          
        }}
      >
        {/* Glow under image */}
        <div
          style={{
            position: "absolute",
            bottom: "-30px",
            width: "320px",
            height: "60px",
            background: "rgba(255, 185, 0, 0.35)",
            filter: "blur(45px)",
            borderRadius: "50%",
            zIndex: 1,
          }}
        />

        {/* Main Hero Image */}
        <img 
          src={HeroSectionI}
          alt="hero"
          style={{
            width: "750px",
            position: "relative",
            zIndex: 2, 
          }}
          loading={lazy}
        />
      </div>
    </div>
  );
}

