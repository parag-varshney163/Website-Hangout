import { motion } from "framer-motion";
import React from "react";

import PlayStoreImg from "../assets/playstore.webp";
import QRCodeImg from "../assets/qr.webp";
import colors from "../constants/colors";


export default function DownloadCTA() {
    return (
        <section
            id="download"
            className="py-8 overflow-hidden"
            style={{
                background: colors.gradientVertical,
            }}
        >
            <div className="max-w-6xl mx-auto px-6 text-center">

                {/* Badge */}

                <motion.span
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .5 }}
                    className="inline-flex rounded-full px-8 py-3 font-semibold"
                    style={{
                        color: colors.accent,
                        border: `1px solid ${colors.accent}40`,
                        background: colors.hover,
                    }}
                >
                    GET CHATSPARK
                </motion.span>

                {/* Heading */}

                <motion.h2
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .6 }}
                    className="font-black mt-8 leading-tight"
                    style={{
                        color: colors.textPrimary,
                        fontSize: "clamp(3rem,7vw,5.5rem)",
                    }}
                >
                    Ready To Start
                    <br />
                    <span style={{ color: colors.accent }}>
                        Real Conversations?
                    </span>
                </motion.h2>

                {/* Subtitle */}

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: .2 }}
                    className="mx-auto mt-8"
                    style={{
                        color: colors.textSecondary,
                        maxWidth: "850px",
                        fontSize: "22px",
                        lineHeight: 1.7,
                    }}
                >
                    Download ChatSpark Now And Connect With Amazing
                    People Through Voice Calls, Chat And Daily Astrology.
                </motion.p>

                {/* Play Store */}

                {/* <motion.a
          href="#"
          initial={{ opacity: 0, scale: .9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{
            scale: 1.03,
            y: -5,
          }}
          transition={{ duration: .5 }}
          className="block mx-auto mt-20 max-w-3xl"
        >
          <img
            src={PlayStoreImg}
            alt="Google Play"
            className="w-20 h-20 rounded-3xl shadow-2xl"
          />
        </motion.a> */}
                <motion.a
                    href="#"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{
                        scale: 1.03,
                        y: -5,
                    }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto mt-20 w-full max-w-lg"
                >
                    <div
                        className="rounded-[30px] flex items-center gap-6 px-6 sm:px-10 py-6 transition-all duration-300"
                        style={{
                            background: "#000",
                            boxShadow: "0 20px 50px rgba(0,0,0,.35)",
                        }}
                    >
                        <img
                            src={PlayStoreImg}
                            alt="Play Store"
                            className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                        />

                        <div className="text-left">
                            <p
                                className="uppercase tracking-widest text-sm sm:text-lg font-semibold"
                                style={{ color: "#fff" }}
                            >
                                Get it on
                            </p>

                            <h3
                                className="font-bold leading-none mt-1"
                                style={{
                                    color: "#fff",
                                    fontSize: "clamp(2rem,5vw,4rem)",
                                }}
                            >
                                Google Play
                            </h3>
                        </div>
                    </div>
                </motion.a>

                {/* QR */}

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        delay: .25,
                        duration: .6,
                    }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-14"
                >

                    <img
                        src={QRCodeImg}
                        alt="QR Code"
                        className="w-40 h-40 rounded-3xl"
                    />

                    <div className="text-center sm:text-left">

                        <h3
                            className="text-4xl font-bold"
                            style={{
                                color: colors.textPrimary,
                            }}
                        >
                            Scan To Download
                        </h3>

                        <p
                            className="mt-4 text-xl leading-9"
                            style={{
                                color: colors.textSecondary,
                            }}
                        >
                            Open Your Camera And Scan
                            <br />
                            The QR Code To Download
                            <br />
                            ChatSpark Instantly.
                        </p>

                    </div>

                </motion.div>

            </div>
        </section>
    );
}
