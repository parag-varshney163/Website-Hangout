import { Linkedin, Instagram, Facebook } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import React from "react";

import playstore from "../assets/playstore.webp";
import Vector from "../assets/Vector.webp";
import colors from "../constants/colors";
import logo from "../assets/logo.webp";


export default function DownloadSection() {
  return (
    <div
      style={{
        width: "100%",
        padding: "64px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflowX:"hidden"
      }}
    >
      {/* TITLE */}
      <h2
        style={{
          color: "white",
          fontSize: "42px",
          fontWeight: "700",
          marginBottom: "8px",
          textAlign: "center",
        }}
      >
        Download The <span style={{ color: colors.accent }}>App!!</span>
      </h2>

      <p
        style={{
          color: colors.accent,
          fontSize: "20px",
          marginBottom: "48px",
        }}
      >
        Available on Google Play and App Store
      </p>

      {/* DOWNLOAD BUTTONS */}
      <div
        style={{
          display: "flex",
          gap: "32px",
          marginBottom: "96px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {/* GOOGLE PLAY */}
        <div
          style={{
            backgroundColor: colors.secondary,
            border: `1px solid ${colors.cardBorder}`,
            borderRadius: "12px",
            padding: "16px 28px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            cursor: "pointer",
            transition: "0.3s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = colors.hover)
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = colors.secondary)
          }
        >
          <img src={playstore} width={34} alt="Google Play" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: colors.textSecondary, fontSize: "12px" }}>
              Download Now
            </span>
            <span
              style={{
                color: "white",
                fontSize: "18px",
                fontWeight: "600",
              }}
            >
              GooglePlay
            </span>
          </div>
        </div>

        {/* APP STORE */}
        <div
          style={{
            backgroundColor: colors.secondary,
            border: `1px solid ${colors.cardBorder}`,
            borderRadius: "12px",
            padding: "16px 32px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            cursor: "pointer",
            transition: "0.3s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = colors.hover)
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = colors.secondary)
          }
        >
          <img src={Vector} width={34} alt="App Store" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: colors.textSecondary, fontSize: "12px" }}>
              Download Now
            </span>
            <span
              style={{
                color: "white",
                fontSize: "18px",
                fontWeight: "600",
              }}
            >
              AppStore
            </span>
          </div>
        </div>
      </div>

      {/* FOOTER SECTION */}
      <div
        style={{
          width: "90%",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "40px",
        }}
      >
        {/* LEFT SECTION */}
        <div style={{ display: "flex", gap: "32px" }}>
          {/* Logo + tagline */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img src={logo} width={120} alt="Chatspark Logo" />
            {/* <span
              style={{
                color: colors.accent,
                fontSize: "13px",
                marginTop: "8px",
                marginLeft: "4px",
              }}
            >
              Your Daily Spark Zone
            </span> */}
          </div>

          {/* FOLLOW US */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h4
              style={{
                color: colors.accent,
                fontSize: "18px",
                fontWeight: "600",
                marginBottom: "12px",
              }}
            >
              Follow Us
            </h4>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                color: "white",
                gap: "12px",
                fontSize: "15px",
                cursor: "pointer",
              }}
            >
              {[["LinkedIn", Linkedin], ["Instagram", Instagram], ["Facebook", Facebook]].map(
                ([label, Icon], idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      transition: "0.3s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = colors.accent)
                    }
                    onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
                  >
                    <Icon size={18} /> <span>{label}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* PRODUCT */}
        <FooterColumn
          title="Product"
          links={[
            { label: "Feature", scroll: "feature" },
            { label: "Download" },
            { label: "For Creators", route: "/join-us" },
          ]}
        />

        {/* SUPPORT */}
        <FooterColumn
          title="Support"
          links={[
            { label: "FAQ", route: "/faq" },
            { label: "Safety", scroll: "safety" },
            { label: "Refund Policy", route: "/refund-policy" },
          ]}
        />

        {/* LEGAL */}
        <FooterColumn
          title="Legal"
          links={[
            { label: "Terms", route: "/terms" },
            { label: "Privacy", route: "/privacy-policy" },
            { label: "Community Guidelines", route: "/community-guidelines" },
          ]}
        />
      </div>

      {/* EMAIL + ADDRESS */}
      <p
        style={{
          marginTop: "64px",
          color: "white",
          fontSize: "15px",
          textAlign: "center",
        }}
      >
        support@chatspark.in &nbsp; | &nbsp; Sector-2, Gautam Buddha Nagar,
        Uttar Pradesh 201301
      </p>

      {/* COPYRIGHT */}
      <p
        style={{
          marginTop: "16px",
          color: colors.accent,
          fontSize: "14px",
        }}
      >
        © 2025 HangoutX Media Private Limited. All rights reserved.
      </p>
    </div>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h4
        style={{
          color: colors.accent,
          fontSize: "18px",
          fontWeight: "600",
          marginBottom: "12px",
        }}
      >
        {title}
      </h4>

      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {links.map((item, idx) =>
          item.route ? (
            <Link key={idx} to={item.route} style={linkStyle}>
              {item.label}
            </Link>
          ) : item.scroll ? (
            <ScrollLink
              key={idx}
              to={item.scroll}
              smooth
              duration={600}
              offset={-80}
              spy
              style={linkStyle}
            >
              {item.label}
            </ScrollLink>
          ) : (
            <span key={idx} style={linkStyle}>
              {item.label}
            </span>
          )
        )}
      </div>
    </div>
  );
}

const linkStyle = {
  color: "white",
  fontSize: "15px",
  cursor: "pointer",
  transition: "0.3s",
  textDecoration: "none",
  display: "block",
  width: "fit-content",
};
