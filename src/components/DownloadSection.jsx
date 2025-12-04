import { Linkedin, Instagram, Facebook } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { span } from "framer-motion/client";
import { Link } from "react-router-dom";
import React, { lazy } from "react";

import playstore from "../assets/playstore.webp";
import Vector from "../assets/Vector.webp";
import colors from "../constants/colors";
import logo from "../assets/logo.webp";
import FAQ from "./FAQ";


export default function DownloadSection() {
    const socialItem = {
        display: "flex",
        alignItems: "center",
        gap: "10px",
        cursor: "pointer",
    };

    return (
        <div
            style={{
                width: "100%",
                padding: "60px 0 40px 0",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            {/* Title */}
            <h2
                style={{
                    fontSize: "42px",
                    color: "white",
                    fontWeight: "700",
                    marginBottom: "8px",
                }}
            >
                Download The <span style={{ color: colors.accent }}>App!!</span>
            </h2>

            {/* Subtitle */}
            <p
                style={{
                    fontSize: "20px",
                    color: colors.accent,
                    marginBottom: "45px",
                }}
            >
                Available on Google Play and App Store
            </p>

            {/* Download Buttons */}
            <div
                style={{
                    display: "flex",
                    gap: "35px",
                    marginBottom: "100px",
                }}
            >
                {/* Google Play */}
                <div
                    style={{
                        backgroundColor: colors.secondary,
                        borderRadius: "14px",
                        padding: "14px 30px",
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        border: `1px solid ${colors.cardBorder}`,
                        cursor: "pointer",
                    }}
                >
                    <img src={playstore} width={34} alt="Google Play" loading={lazy} />
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <span
                            style={{
                                color: colors.textSecondary,
                                fontSize: "12px",
                            }}
                        >
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

                {/* App Store */}
                <div
                    style={{
                        backgroundColor: colors.secondary,
                        borderRadius: "14px",
                        padding: "14px 34px",
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        border: `1px solid ${colors.cardBorder}`,
                        cursor: "pointer",
                    }}
                >
                    <img src={Vector} width={34} alt="App Store" loading={lazy} />
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <span
                            style={{
                                color: colors.textSecondary,
                                fontSize: "12px",
                            }}
                        >
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

            {/* Footer Section */}
            <div
                style={{
                    width: "90%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginTop: "-20px",
                }}
            >
                {/* LEFT: Logo + Tagline + Follow Us */}
                <div style={{ display: "flex", alignItems: "flex-start", gap: "30px" }}>
                    {/* Logo + Tagline */}
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <img
                            src={logo}
                            width={120}
                            alt="ChatSpark Logo"
                            style={{ marginBottom: "6px" }}
                            loading={lazy}
                        />

                        <span
                            style={{
                                color: colors.accent,
                                fontSize: "13px",
                                marginLeft: "3px",
                                marginBottom: "20px",
                            }}
                        >
                            Your Daily Spark Zone
                        </span>
                    </div>

                    {/* Follow Us */}
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <h4
                            style={{
                                color: colors.accent,
                                fontSize: "18px",
                                marginBottom: "14px",
                                fontWeight: "600",
                            }}
                        >
                            Follow Us
                        </h4>

                        <div
                            style={{
                                color: "white",
                                display: "flex",
                                flexDirection: "column",
                                gap: "12px",
                                fontSize: "15px",
                            }}
                        >
                            <div style={socialItem}>
                                <Linkedin size={18} />
                                <span>LinkedIn</span>
                            </div>

                            <div style={socialItem}>
                                <Instagram size={18} />
                                <span>Instagram</span>
                            </div>

                            <div style={socialItem}>
                                <Facebook size={18} />
                                <span>Facebook</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* PRODUCT */}
                <div>
                    <h4
                        style={{
                            color: colors.accent,
                            fontSize: "18px",
                            marginBottom: "14px",
                            fontWeight: "600",
                        }}
                    >
                        Product
                    </h4>

                    <div
                        style={{
                            color: "white",
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                            fontSize: "15px",
                            cursor: "pointer",
                        }}
                    >
                        <ScrollLink
                            to="feature"
                            smooth={true}
                            duration={600}
                            offset={-80}
                            spy={true}
                            component="span"
                            style={{ cursor: "pointer" }}
                        >
                            Feature
                        </ScrollLink>
                        <span>Download</span>
                        <Link to="/join-us"><span>For Creators</span></Link>
                    </div>
                </div>

                {/* SUPPORT */}
                <div>
                    <h4
                        style={{
                            color: colors.accent,
                            fontSize: "18px",
                            marginBottom: "14px",
                            fontWeight: "600",
                        }}
                    >
                        Support
                    </h4>

                    <div
                        style={{
                            color: "white",
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                            fontSize: "15px",
                        }}
                    >
                        <Link to="/faq"><span>FAQ</span></Link>
                        <ScrollLink
                            to="safety"
                            smooth={true}
                            duration={600}
                            offset={-80}
                            spy={true}
                            component="span"
                            style={{ cursor: "pointer" }}
                        >
                            Safety
                        </ScrollLink>
                        <Link to="/refund-policy"><span>Refund Policy</span></Link>
                    </div>
                </div>

                {/* LEGAL */}
                <div>
                    <h4
                        style={{
                            color: colors.accent,
                            fontSize: "18px",
                            marginBottom: "14px",
                            fontWeight: "600",
                        }}
                    >
                        Legal
                    </h4>

                    <div
                        style={{
                            color: "white",
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                            fontSize: "15px",
                            cursor: "pointer",
                        }}
                    >
                        <Link to="/terms"><span>Terms</span></Link>
                        <Link to="/privacy-policy"><span>Privacy</span></Link>
                        <Link to="/community-guidelines"><span>Community Guidelines</span></Link>
                    </div>
                </div>
            </div>

            {/* Email + Address */}
            <p
                style={{
                    marginTop: "70px",
                    color: "white",
                    fontSize: "15px",
                    textAlign: "center",
                }}
            >
                support@chatspark.in &nbsp; | &nbsp; Sector-2, Gautam Buddha Nagar,
                Uttar Pradesh 201301
            </p>

            {/* Copyright */}
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
