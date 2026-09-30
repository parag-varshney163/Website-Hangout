import { Linkedin, Instagram, Facebook, Mail, MapPin, Copyright } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import React from "react";

import playstore from "../assets/playstore.webp";
import logo from "../assets/logohang.webp";
import colors from "../constants/colors";


export default function DownloadSection() {
  return (
    <footer
      style={{
        width: "100%",
        background: colors.textPrimary,
        color: colors.primary,
        overflow: "hidden",
      }}
    >
      {/* =====================================================
          DOWNLOAD SECTION
      ====================================================== */}
      <section
        style={{
          width: "100%",
          padding: "70px 20px 90px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxSizing: "border-box",
        }}
      >
        <h2
          style={{
            color: colors.primary,
            fontSize: "42px",
            fontWeight: "700",
            margin: 0,
            marginBottom: "10px",
            textAlign: "center",
          }}
        >
          Download The{" "}
          <span
            style={{
              background: colors.heroGradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            App!!
          </span>
        </h2>

        <p
          style={{
            color: colors.pink,
            fontSize: "18px",
            margin: "0 0 40px",
            textAlign: "center",
          }}
        >
          Available on Google Play Store
        </p>

        {/* GOOGLE PLAY BUTTON */}
        <div
          // onClick={() =>
          //   window.open(
          //     "https://play.google.com/store/apps/details?id=com.chatspark.user&hl=en_IN",
          //     "_blank"
          //   )
          // }
          style={{
            background: "rgba(255,255,255,0.05)",
            border: `1px solid ${colors.cardBorder}`,
            borderRadius: "12px",
            padding: "14px 26px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(233,87,103,0.12)";
            e.currentTarget.style.transform = "translateY(-3px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.05)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          <img
            src={playstore}
            width={34}
            height={34}
            alt="Google Play"
          />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span
              style={{
                color: colors.textSecondary,
                fontSize: "11px",
              }}
            >
              Download Now
            </span>

            <span
              style={{
                color: colors.primary,
                fontSize: "17px",
                fontWeight: "600",
              }}
            >
              Google Play
            </span>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}
      <div
        style={{
          width: "100%",
          background: colors.textPrimary,
          padding: "65px 6.5% 45px",
          boxSizing: "border-box",
        }}
      >
        {/* =================================================
            TOP FOOTER
        ================================================== */}
        <div
          className="footer-top"
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
            gap: "0",
            alignItems: "start",
          }}
        >
          {/* ===============================================
              BRAND
          ================================================ */}
          <div
            style={{
              paddingRight: "50px",
            }}
          >
            <img
              src={logo}
              alt="ChatSpark"
              style={{
                width: "170px",
                maxWidth: "100%",
                objectFit: "contain",
              }}
            />

            <p
              style={{
                color: colors.primary,
                fontSize: "17px",
                letterSpacing: "6px",
                margin: "10px 0 32px",
                whiteSpace: "nowrap",
              }}
            >
              Meet. Chat. Connect.
            </p>

            {/* SOCIAL ICONS */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "18px",
              }}
            >
              <SocialIcon
                icon={<Instagram size={25} />}
                url="https://www.instagram.com/chatsparkk?igsh=dTBsZGZ0ZGtwb3Zh"
              />

              <SocialIcon
                icon={<Facebook size={25} />}
                url="https://www.facebook.com/people/ChatSpark/61584596734557/"
              />

              <SocialIcon
                icon={<Linkedin size={25} />}
                url="https://www.linkedin.com/company/chatsparkk/"
              />
            </div>
          </div>

          {/* ===============================================
              PRODUCT
          ================================================ */}
          <FooterColumn
            title="Product"
            links={[
              {
                label: "Features",
                scroll: "feature",
              },
              {
                label: "How It Works",
              },
              {
                label: "Download",
              },
              {
                label: "For Creators",
                route: "/join-us",
              },
            ]}
          />

          {/* ===============================================
              SUPPORT
          ================================================ */}
          <FooterColumn
            title="Support"
            links={[
              {
                label: "FAQs",
                route: "/faq",
              },
              {
                label: "Safety",
                scroll: "safety",
              },
              {
                label: "Contact Us",
              },
              {
                label: "Refund Policy",
                route: "/refund-policy",
              },
            ]}
          />

          {/* ===============================================
              LEGAL
          ================================================ */}
          <FooterColumn
            title="Legal"
            links={[
              {
                label: "Terms Of Use",
                route: "/terms",
              },
              {
                label: "Privacy Policy",
                route: "/privacy-policy",
              },
              {
                label: "Community Guidelines",
                route: "/community-guidelines",
              },
              {
                label: "Child Safety Policy",
                route: "/child-safety",
              },
            ]}
          />
        </div>

        {/* =================================================
            DIVIDER
        ================================================== */}
        <div
          style={{
            width: "100%",
            height: "1px",
            background: colors.purple,
            opacity: 0.4,
            margin: "65px 0 55px",
          }}
        />

        {/* =================================================
            BOTTOM FOOTER
        ================================================== */}
        <div
          className="footer-bottom"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.5fr 1.2fr",
            alignItems: "center",
            gap: "30px",
          }}
        >
          {/* EMAIL */}
          <FooterInfo
            icon={<Mail size={22} />}
            text="support@hangoutclub.in"
          />

          {/* ADDRESS */}
          <FooterInfo
            icon={<MapPin size={22} />}
            text="Sector-2, Gautam Buddha Nagar, Uttar Pradesh 201301"
            center
          />

          {/* COPYRIGHT */}
          <FooterInfo
            icon={<Copyright size={22} />}
            text="© 2025 HangoutX Media Private Limited. All rights reserved."
          />
        </div>
      </div>

      {/* =====================================================
          RESPONSIVE CSS
      ====================================================== */}
      <style>
        {`
          .footer-column {
            border-left: 1px solid rgba(155, 107, 232, 0.18);
            padding-left: 70px;
          }

          .footer-info {
            display: flex;
            align-items: center;
            gap: 20px;
          }

          .footer-info-icon {
            width: 56px;
            height: 56px;
            min-width: 56px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: ${colors.heroGradient};
            color: white;
          }

          .footer-link:hover {
            color: ${colors.accent} !important;
            transform: translateX(3px);
          }

          @media (max-width: 1000px) {
            .footer-top {
              grid-template-columns: 1fr 1fr !important;
              row-gap: 55px;
            }

            .footer-column {
              padding-left: 35px;
            }

            .footer-bottom {
              grid-template-columns: 1fr !important;
              row-gap: 25px;
            }
          }

          @media (max-width: 650px) {
            .footer-top {
              grid-template-columns: 1fr !important;
            }

            .footer-column {
              border-left: none;
              border-top: 1px solid rgba(155, 107, 232, 0.18);
              padding-left: 0;
              padding-top: 30px;
            }

            .footer-top > div:first-child {
              padding-right: 0 !important;
            }

            .footer-bottom {
              gap: 25px;
            }

            .footer-info {
              align-items: flex-start;
            }

            .footer-info-icon {
              width: 48px;
              height: 48px;
              min-width: 48px;
            }
          }

          @media (max-width: 480px) {
            .footer-top {
              row-gap: 35px;
            }

            .footer-bottom {
              text-align: left;
            }

            .footer-info {
              gap: 14px;
            }
          }
        `}
      </style>
    </footer>
  );
}

/* ============================================================
   SOCIAL ICON
============================================================ */

function SocialIcon({ icon, url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        width: "56px",
        height: "56px",
        borderRadius: "50%",
        background: colors.heroGradient,
        color: colors.primary,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textDecoration: "none",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = `0 8px 25px ${colors.accent}40`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {icon}
    </a>
  );
}

/* ============================================================
   FOOTER COLUMN
============================================================ */

function FooterColumn({ title, links }) {
  return (
    <div className="footer-column">
      <h4
        style={{
          margin: "0 0 25px",
          fontSize: "24px",
          fontWeight: "700",
          background: colors.heroGradient,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          width: "fit-content",
        }}
      >
        {title}
      </h4>

      {/* Small gradient line */}
      <div
        style={{
          width: "38px",
          height: "3px",
          borderRadius: "10px",
          background: colors.heroGradient,
          marginBottom: "25px",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "17px",
        }}
      >
        {links.map((item, idx) => {
          if (item.route) {
            return (
              <Link
                key={idx}
                to={item.route}
                className="footer-link"
                style={linkStyle}
              >
                {item.label}
              </Link>
            );
          }

          if (item.scroll) {
            return (
              <ScrollLink
                key={idx}
                to={item.scroll}
                smooth
                duration={600}
                offset={-80}
                spy
                className="footer-link"
                style={linkStyle}
              >
                {item.label}
              </ScrollLink>
            );
          }

          return (
            <span
              key={idx}
              className="footer-link"
              style={linkStyle}
            >
              {item.label}
            </span>
          );
        })}
      </div>
    </div>
  );
}

/* ============================================================
   FOOTER INFO
============================================================ */

function FooterInfo({ icon, text, center }) {
  return (
    <div
      className="footer-info"
      style={{
        justifyContent: center ? "center" : "flex-start",
      }}
    >
      <div className="footer-info-icon">
        {icon}
      </div>

      <span
        style={{
          color: colors.primary,
          fontSize: "15px",
          lineHeight: "1.6",
        }}
      >
        {text}
      </span>
    </div>
  );
}

/* ============================================================
   LINK STYLE
============================================================ */

const linkStyle = {
  color: colors.primary,
  fontSize: "16px",
  cursor: "pointer",
  transition: "all 0.25s ease",
  textDecoration: "none",
  display: "block",
  width: "fit-content",
};