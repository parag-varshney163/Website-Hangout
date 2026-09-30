import { Download, ContactRound, WalletCards, MessageCircle, ArrowRight, } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

import colors from "../constants/colors";


const steps = [
  {
    number: "01",
    icon: Download,
    title: "Download App",
    description: "Get Hangout From The App Store And Install It.",
    type: "pink",
  },
  {
    number: "02",
    icon: ContactRound,
    title: "Create Account",
    description: "Sign Up With Your Details And Set Up Your Profile.",
    type: "purple",
  },
  {
    number: "03",
    icon: WalletCards,
    title: "Top Up Wallet",
    description: "Add Coins To Your Wallet To Start Chatting And Calling.",
    type: "pink",
  },
  {
    number: "04",
    icon: MessageCircle,
    title: "Start Talking",
    description: "Find People And Start Conversations That Feel Real.",
    type: "purple",
  },
];

export default function GetStarted() {
  return (
    <section
        id="safety"
      className="relative overflow-hidden px-6 py-16 md:py-20"
      style={{
        background: colors.gradientVertical,
      }}
    >
      {/* Background Glow - Left */}
      <div
        className="absolute -left-40 top-40 w-[420px] h-[420px] rounded-full blur-3xl opacity-40 pointer-events-none"
        style={{
          background: colors.pinkLight,
        }}
      />

      {/* Background Glow - Right */}
      <div
        className="absolute -right-40 bottom-0 w-[420px] h-[420px] rounded-full blur-3xl opacity-40 pointer-events-none"
        style={{
          background: "#F0E5FC",
        }}
      />

      <div className="relative z-10 max-w-[1220px] mx-auto">
        {/* Heading */}
        <div className="text-center">
          {/* Badge */}
          <div
            className="inline-flex items-center justify-center px-10 py-3 rounded-full text-sm font-bold tracking-[0.18em]"
            style={{
              background: colors.badgeGradient,
              color: colors.accentDark,
            }}
          >
            GET STARTED
          </div>

          {/* Title */}
          <h2
            className="mt-8 font-bold leading-[1.08] text-4xl md:text-5xl lg:text-[56px]"
            style={{
              color: colors.textPrimary,
            }}
          >
            Start Connecting
            <br />
            <span
              style={{
                background: colors.heroGradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              In 4 Simple Steps.
            </span>
          </h2>
        </div>

        {/* Steps */}
        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 xl:gap-20">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isPink = step.type === "pink";

              const borderColor = isPink
                ? "#F3D8DE"
                : "#DDD5F8";

              const iconBackground = isPink
                ? colors.pinkLight
                : "#EDE8FC";

              const iconColor = isPink
                ? colors.accent
                : colors.purple;

              return (
                <div
                  key={step.number}
                  className="relative"
                >
                  {/* Card */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 40,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                    whileHover={{
                      y: -6,
                    }}
                    className="relative h-full min-h-[335px] rounded-[30px] px-7 py-5 text-center"
                    style={{
                      background: colors.cardBg,
                      border: `1.5px solid ${borderColor}`,
                      boxShadow:
                        "0 10px 35px rgba(32, 36, 61, 0.025)",
                    }}
                  >
                    {/* Number */}
                    <div
                      className="absolute top-4 left-4 px-4 py-1 rounded-full text-[17px] font-bold"
                      style={{
                        background: iconBackground,
                        color: iconColor,
                      }}
                    >
                      {step.number}
                    </div>

                    {/* Icon */}
                    <motion.div
                      whileHover={{
                        scale: 1.08,
                        rotate: -4,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="mt-7 mx-auto w-[100px] h-[100px] rounded-[28px] flex items-center justify-center"
                      style={{
                        background: iconBackground,
                      }}
                    >
                      <Icon
                        size={52}
                        strokeWidth={1.8}
                        style={{
                          color: iconColor,
                        }}
                      />
                    </motion.div>

                    {/* Title */}
                    <h3
                      className="mt-7 text-[23px] font-bold"
                      style={{
                        color: colors.textPrimary,
                      }}
                    >
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="mt-4 text-[17px] font-medium leading-[1.65]"
                      style={{
                        color: colors.textSecondary,
                      }}
                    >
                      {step.description}
                    </p>
                  </motion.div>

                  {/* Connector */}
                  {index < steps.length - 1 && (
                    <div className="hidden xl:flex absolute top-1/2 -right-[58px] -translate-y-1/2 items-center z-20">
                      {/* Dotted Line */}
                      <div
                        className="w-[55px] border-t-2 border-dashed"
                        style={{
                          borderColor:
                            index % 2 === 0
                              ? colors.accentLight
                              : colors.purpleLight,
                        }}
                      />

                      {/* Arrow Circle */}
                      <motion.div
                        whileHover={{
                          scale: 1.1,
                        }}
                        className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center bg-white"
                        style={{
                          border: `1.5px solid ${
                            index % 2 === 0
                              ? colors.accentLight
                              : colors.purpleLight
                          }`,
                        }}
                      >
                        <ArrowRight
                          size={20}
                          style={{
                            color:
                              index % 2 === 0
                                ? colors.accent
                                : colors.purple,
                          }}
                        />
                      </motion.div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
