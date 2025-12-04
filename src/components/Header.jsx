import { Link as RouterLink, useNavigate, useLocation } from "react-router-dom";
import { Link as ScrollLink, scroller } from "react-scroll";
import { ArrowUpRight, Download } from "lucide-react";
import React from "react";

import colors from "../constants/colors";
import logo from "../assets/logo.webp";
import Button from "./ui/Buttton";


export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: "Feature", type: "scroll", to: "feature" },
    { label: "Creators", type: "route", to: "/join-us" },
    { label: "Safety", type: "scroll", to: "safety" },
    { label: "FAQ", type: "route", to: "/faq" },
  ];

  const handleScrollNav = (target) => {
    if (location.pathname !== "/") {
      // 1️⃣ Navigate back to home first
      navigate("/");

      // 2️⃣ Wait a bit so page loads, then smooth scroll
      setTimeout(() => {
        scroller.scrollTo(target, {
          smooth: true,
          duration: 600,
          offset: -80,
        });
      }, 300);
    }
  };

  return (
    <div
      style={{
        width: "100%",
        padding: "22px 40px",
        background: "transparent",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* LEFT — Logo */}
      <div style={{ alignItems: "center", gap: "14px" }}>
        <img src={logo} alt="logo" style={{ height: "80px", width: "80px" }} />
      </div>

      {/* CENTER — Navigation */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "40px",
          marginLeft: "120px",
        }}
      >
        {navItems.map((item) =>
          item.type === "scroll" ? (
            location.pathname === "/" ? (
              // If already on home → normal react-scroll
              <ScrollLink
                key={item.label}
                to={item.to}
                smooth={true}
                duration={500}
                offset={-80}
                style={{
                  color: colors.textPrimary,
                  fontSize: "18px",
                  cursor: "pointer",
                }}
              >
                {item.label}
              </ScrollLink>
            ) : (
              // If on another page → navigate back & scroll
              <span
                key={item.label}
                onClick={() => handleScrollNav(item.to)}
                style={{
                  color: colors.textPrimary,
                  fontSize: "18px",
                  cursor: "pointer",
                }}
              >
                {item.label}
              </span>
            )
          ) : (
            // Page navigation
            <RouterLink
              key={item.label}
              to={item.to}
              style={{
                color: colors.textPrimary,
                fontSize: "18px",
                cursor: "pointer",
                textDecoration: "none",
              }}
            >
              {item.label}
            </RouterLink>
          )
        )}
      </div>

      {/* RIGHT — Buttons */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <Button variant="ghost" size="md" icon={Download}>
          Download
        </Button>

        <Button
          size="md"
          variant="custom"
          bg={colors.accent}
          icon={ArrowUpRight}
          text="#000"
          onClick={() => navigate("/join-us")}
        >
          Become a Creator
        </Button>
      </div>
    </div>
  );
}
