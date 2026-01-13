import { Link as RouterLink, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, Download, ArrowUpRight } from "lucide-react";
import { Link as ScrollLink, scroller } from "react-scroll";
import React, { useState } from "react";

import colors from "../constants/colors";
import logo from "../assets/logo.webp";
import Button from "./ui/Buttton";


export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Feature", type: "scroll", to: "feature" },
    { label: "Creators", type: "route", to: "/join-us" },
    { label: "Safety", type: "scroll", to: "safety" },
    { label: "FAQ", type: "route", to: "/faq" },
    { label: "Account Deletion", type: "route", to: "/deletion" },
  ];

  const handleScrollNav = (target) => {
    if (location.pathname !== "/") {
      navigate("/");
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
    <header
      className="w-full flex items-center justify-between px-6 md:px-12 py-5"
      style={{ background: "transparent", overflowX: "hidden" }}
    >
      {/* LOGO */}
      <img src={logo} alt="logo" className=" h-16 w-16 md:h-26 md:w-26" />

      {/* DESKTOP MENU */}
      <nav className="hidden md:flex items-center gap-10">
        {navItems.map((item) =>
          item.type === "scroll" ? (
            location.pathname === "/" ? (
              <ScrollLink
                key={item.label}
                to={item.to}
                smooth
                offset={-80}
                duration={500}
                className="cursor-pointer text-lg"
                style={{ color: colors.textPrimary }}
              >
                {item.label}
              </ScrollLink>
            ) : (
              <span
                key={item.label}
                onClick={() => handleScrollNav(item.to)}
                className="cursor-pointer text-lg"
                style={{ color: colors.textPrimary }}
              >
                {item.label}
              </span>
            )
          ) : (
            <RouterLink
              key={item.label}
              to={item.to}
              className="text-lg"
              style={{ color: colors.textPrimary }}
            >
              {item.label}
            </RouterLink>
          )
        )}
      </nav>

      {/* BUTTONS (DESKTOP) */}
      <div className="hidden md:flex items-center gap-4">
        <Button
          variant="ghost"
          size="md"
          icon={Download}
          onClick={() =>
            window.open(
              "https://play.google.com/store/apps/details?id=com.chatspark.user&hl=en_IN",
              "_blank"
            )
          }
        >
          Download
        </Button>


        <Button
          size="md"
          variant="custom"
          bg={colors.accent}
          text="#000"
          icon={ArrowUpRight}
          onClick={() => navigate("/join-us")}
        >
          Become a Creator
        </Button>
      </div>

      {/* MOBILE MENU BUTTON */}
      <button className="md:hidden" onClick={() => setOpen(!open)}>
        {open ? (
          <X size={32} style={{ color: colors.textPrimary }} />
        ) : (
          <Menu size={32} style={{ color: colors.textPrimary }} />
        )}
      </button>

      {/* MOBILE DROPDOWN MENU */}
      {open && (
        <div
          className="absolute top-20 left-0 w-full flex flex-col gap-6 px-6 py-6 md:hidden"
          style={{
            background: colors.primary,
            borderTop: `1px solid ${colors.cardBorder}`,
          }}
        >
          {navItems.map((item) =>
            item.type === "scroll" ? (
              location.pathname === "/" ? (
                <ScrollLink
                  key={item.label}
                  to={item.to}
                  smooth
                  offset={-80}
                  duration={500}
                  className="text-xl"
                  style={{ color: colors.textPrimary }}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </ScrollLink>
              ) : (
                <span
                  key={item.label}
                  onClick={() => {
                    handleScrollNav(item.to);
                    setOpen(false);
                  }}
                  className="text-xl cursor-pointer"
                  style={{ color: colors.textPrimary }}
                >
                  {item.label}
                </span>
              )
            ) : (
              <RouterLink
                key={item.label}
                to={item.to}
                className="text-xl"
                style={{ color: colors.textPrimary }}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </RouterLink>
            )
          )}

          {/* MOBILE BUTTONS */}
          <Button
            variant="ghost"
            size="md"
            icon={Download}
            onClick={() => {
              window.open(
                "https://play.google.com/store/apps/details?id=com.chatspark.user&hl=en_IN",
                "_blank"
              );
              setOpen(false);
            }}
          >
            Download
          </Button>


          <Button
            size="md"
            variant="custom"
            bg={colors.accent}
            text="#000"
            icon={ArrowUpRight}
            onClick={() => {
              navigate("/join-us");
              setOpen(false);
            }}
          >
            Become a Creator
          </Button>
        </div>
      )}
    </header>
  );
}
