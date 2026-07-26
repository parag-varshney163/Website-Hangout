import { Download, MessageCircle, Phone, Rocket, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
// import React, { useState, useEffect, lazy } from "react";
// import { Download, Rocket } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import HeroSectionI from "../assets/HeroSectionI.webp";
// import colors from "../constants/colors";
// import Button from "./ui/Buttton";
// export default function HeroSection() {
//   const navigate = useNavigate();
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
//   const [isTablet, setIsTablet] = useState(window.innerWidth < 1024);
//   useEffect(() => {
//     const updateSize = () => {
//       setIsMobile(window.innerWidth < 768);
//       setIsTablet(window.innerWidth < 1024);
//     };
//     window.addEventListener("resize", updateSize);
//     return () => window.removeEventListener("resize", updateSize);
//   }, []);
//   return (
//     <div
//       style={{
//         width: "100%",
//         padding: isMobile ? "40px 20px" : isTablet ? "60px 40px" : "80px 60px",
//         display: "flex",
//         flexDirection: isMobile ? "column" : "row",
//         justifyContent: "space-between",
//         alignItems: "center",
//         gap: isMobile ? "40px" : "20px",
//         overflowX: "hidden"
//       }}
//     >
//       {/* LEFT SECTION */}
//       <div style={{ width: isMobile ? "100%" : "50%" }}>
//         <h1
//           style={{
//             color: colors.textPrimary,
//             fontSize: isMobile ? "40px" : "64px",
//             fontWeight: "700",
//             lineHeight: "1.1",
//           }}
//         >
//           Challenge <span style={{ color: colors.accent }}>& Connect</span>
//         </h1>
//         <h2
//           style={{
//             color: colors.textPrimary,
//             fontSize: isMobile ? "22px" : "36px",
//             marginTop: "10px",
//             marginBottom: "20px",
//           }}
//         >
//           India’s top <span style={{ color: colors.accent }}>Audio Hangout</span>
//         </h2>
//         <p
//           style={{
//             color: colors.textSecondary,
//             fontSize: isMobile ? "16px" : "20px",
//             lineHeight: "1.6",
//             maxWidth: "620px",
//           }}
//         >
//           Jump into bite-sized voice challenges, vibe with new people, and build
//           real connections.
//         </p>
//         {/* BUTTONS */}
//         <div
//           style={{
//             display: "flex",
//             gap: "20px",
//             marginTop: "40px",
//             flexWrap: "wrap",
//           }}
//         >
//           <Button
//             variant="ghost"
//             size="lg"
//             icon={Download}
//             onClick={() =>
//               window.open(
//                 "https://play.google.com/store/apps/details?id=com.chatspark.user&hl=en_IN",
//                 "_blank"
//               )
//             }
//           >
//             Get The App
//           </Button>
//           <Button
//             variant="custom"
//             bg={colors.accent}
//             text="#000"
//             size="lg"
//             icon={Rocket}
//             onClick={() => navigate("/join-us")}
//           >
//             Become a Creator
//           </Button>
//         </div>
//         {/* Icons */}
//         <div
//           style={{
//             display: "flex",
//             gap: isMobile ? "20px" : "40px",
//             marginTop: "40px",
//             flexWrap: "wrap",
//             fontSize: "17px",
//           }}
//         >
//           <div style={{ display: "flex", gap: 8, color: colors.accent }}>
//             🛡️ KYC & Safety First
//           </div>
//           <div style={{ display: "flex", gap: 8, color: colors.accent }}>
//             ⭐ Trendy Challenges
//           </div>
//           <div style={{ display: "flex", gap: 8, color: colors.accent }}>
//             👥 Global Community
//           </div>
//         </div>
//       </div>
//       {/* RIGHT SECTION */}
//       <div
//         style={{
//           width: isMobile ? "100%" : "50%",
//           display: "flex",
//           justifyContent: "center",
//           position: "relative",
//         }}
//       >
//         <div
//           style={{
//             position: "absolute",
//             bottom: "-20px",
//             width: isMobile ? "200px" : "320px",
//             height: isMobile ? "40px" : "60px",
//             background: "rgba(255, 185, 0, 0.35)",
//             filter: "blur(45px)",
//             borderRadius: "50%",
//             zIndex: 1,
//           }}
//         />
//         <img
//           src={HeroSectionI}
//           alt="hero"
//           style={{
//             width: isMobile ? "95%" : isTablet ? "550px" : "750px",
//             zIndex: 2,
//           }}
//         />
//       </div>
//     </div>
//   );
// }
import React from "react";

import HeroSectionI from "../assets/logo.webp";
import colors from "../constants/colors";
import OrbitCard from "./OrbitCard";
import Button from "./ui/Buttton";


const heading1 = "Real Conversations,".split(" ");
const heading2 = "One Tap Away".split(" ");

export default function HeroSection() {
  const navigate = useNavigate();

  const isMobile = window.innerWidth < 768;
  const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

  const heroHeight = isMobile ? 420 : isTablet ? 560 : 700;

  const glow = isMobile ? 220 : isTablet ? 320 : 420;

  const ring1 = isMobile ? 320 : isTablet ? 500 : 640;
  const ring2 = isMobile ? 270 : isTablet ? 430 : 560;
  const ring3 = isMobile ? 220 : isTablet ? 360 : 470;
  const ring4 = isMobile ? 180 : isTablet ? 280 : 380;

  const center = isMobile ? 190 : isTablet ? 280 : 360;

  const imageSize = isMobile ? 120 : isTablet ? 170 : 230;

  const orbitRadius = isMobile ? 150 : isTablet ? 220 : 300;

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: colors.primary,
      }}
    >
      <div className="max-w-[1450px] mx-auto px-6 lg:px-12 ">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ================= LEFT ================= */}

          <div>

            {/* Badge */}

            <motion.div
              initial={{ opacity: 0, y: -25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .8 }}
              className="inline-flex items-center rounded-full border border-yellow-500/30 bg-black/40 px-6 py-3 text-yellow-400 font-semibold mb-8"
            >
              <motion.span
                animate={{ y: [0, -4, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 2
                }}
              >
                JOIN 10,00,000+ HAPPY USERS 💛
              </motion.span>
            </motion.div>

            {/* Heading */}

            <h1 className="font-bold leading-none whitespace-nowrap">

              {heading1.map((word, index) => (
                <motion.span
                  key={word}
                  initial={{
                    opacity: 0,
                    y: 70
                  }}
                  animate={{
                    opacity: 1,
                    y: 0
                  }}
                  transition={{
                    delay: index * .15,
                    duration: .6
                  }}
                  className="inline-block mr-4 text-white text-4xl lg:text-6xl"
                >
                  {word}
                </motion.span>
              ))}

              <br />

              {heading2.map((word, index) => (
                <motion.span
                  key={word}
                  initial={{
                    opacity: 0,
                    y: 70
                  }}
                  animate={{
                    opacity: 1,
                    y: 0
                  }}
                  transition={{
                    delay: .6 + index * .15,
                    duration: .6
                  }}
                  className={`inline-block mr-2 text-4xl lg:text-6xl ${word === "One" || word === "Tap"
                    ? "text-yellow-400"
                    : "text-white"
                    }`}
                >
                  {word}
                </motion.span>
              ))}

            </h1>

            {/* Description */}

            <motion.p
              initial={{
                opacity: 0,
                y: 30
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                delay: 1.2
              }}
              className="text-gray-300 text-lg lg:text-2xl leading-relaxed mt-10 max-w-xl"
            >
              Connect Through Live Audio Calls, Private Chat,
              And Personalized Daily Horoscope All In One App.
            </motion.p>

            {/* Buttons */}

            <motion.div
              initial={{
                opacity: 0,
                y: 40
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                delay: 1.4
              }}
              className="flex flex-wrap gap-5 mt-12"
            >

              <Button
                variant="custom"
                bg={colors.accent}
                text="#111"
                icon={Download}
                size="lg"
                onClick={() =>
                  window.open(
                    "https://play.google.com/store/apps/details?id=com.chatspark.user",
                    "_blank"
                  )
                }
              >
                Download App
              </Button>

              <Button
                variant="ghost"
                size="lg"
                icon={Rocket}
                onClick={() => navigate("/join-us")}
              >
                Become a Creator
              </Button>

            </motion.div>

          </div>

          {/* ================= RIGHT ================= */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center items-center h-[700px]"
          >
            

            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.25, 0.45, 0.25],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="absolute w-[420px] h-[420px] rounded-full bg-yellow-400 blur-[120px]"
            />

            

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute w-[640px] h-[640px] rounded-full border border-dashed border-white/40"
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 45,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute w-[560px] h-[560px] rounded-full border border-white/20"
            />

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute w-[470px] h-[470px] rounded-full border border-white/10"
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 28,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute w-[380px] h-[380px] rounded-full border border-white/20"
            />

            

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute w-[640px] h-[640px]"
            >
              <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-4 h-4 bg-white rounded-full" />
            </motion.div>

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute w-[470px] h-[470px]"
            >
              <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-3 h-3 bg-yellow-400 rounded-full" />
            </motion.div>

            

            <OrbitCard radius={300} duration={22} startAngle={0}>
              <div className="w-12 h-12 rounded-full bg-[#23263a] flex items-center justify-center">
                <Phone size={22} className="text-yellow-400" />
              </div>
              <span>Audio Calls</span>
            </OrbitCard>

            <OrbitCard radius={300} duration={22} startAngle={120}>
              <div className="w-12 h-12 rounded-full bg-[#23263a] flex items-center justify-center">
                <MessageCircle size={22} className="text-blue-500" />
              </div>
              <span>Chat</span>
            </OrbitCard>

            <OrbitCard radius={300} duration={22} startAngle={240}>
              <div className="w-12 h-12 rounded-full bg-[#23263a] flex items-center justify-center">
                <Sparkles size={22} className="text-purple-500" />
              </div>
              <span>Daily Horoscope</span>
            </OrbitCard>

           

            <motion.div
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.03, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="relative w-[360px] h-[360px] rounded-full overflow-hidden flex items-center justify-center"
            >
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle,#2d3652 0%,#1a2235 50%,#111827 100%)",
                }}
              />

              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="absolute w-56 h-56 rounded-full bg-yellow-400 blur-[90px]"
              />

              <img
                src={HeroSectionI}
                alt="Hero"
                className="relative w-56 object-contain z-10"
              />
            </motion.div>
          </motion.div> */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center items-center overflow-visible"
            style={{
              height: heroHeight,
            }}
          >
            {/* Glow */}

            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.25, 0.45, 0.25],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="absolute rounded-full bg-yellow-400 blur-[120px]"
              style={{
                width: glow,
                height: glow,
              }}
            />

            {/* Ring 1 */}

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute rounded-full border border-dashed border-white/40"
              style={{
                width: ring1,
                height: ring1,
              }}
            />

            {/* Ring 2 */}

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 45,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute rounded-full border border-white/20"
              style={{
                width: ring2,
                height: ring2,
              }}
            />

            {/* Ring 3 */}

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute rounded-full border border-white/10"
              style={{
                width: ring3,
                height: ring3,
              }}
            />

            {/* Ring 4 */}

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 28,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute rounded-full border border-white/20"
              style={{
                width: ring4,
                height: ring4,
              }}
            />

            {/* Moving Dot */}

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute"
              style={{
                width: ring1,
                height: ring1,
              }}
            >
              <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-4 h-4 rounded-full bg-white" />
            </motion.div>

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute"
              style={{
                width: ring3,
                height: ring3,
              }}
            >
              <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-3 h-3 rounded-full bg-yellow-400" />
            </motion.div>

            {/* Orbit Cards */}

            {!isMobile && (
              <>
                <OrbitCard radius={orbitRadius} startAngle={0} speed={0.003}>
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#23263a] flex items-center justify-center">
                    <Phone size={20} className="text-yellow-400" />
                  </div>
                  <span className="text-sm md:text-base">Audio Calls</span>
                </OrbitCard>

                <OrbitCard radius={orbitRadius} startAngle={2.09} speed={0.003}>
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#23263a] flex items-center justify-center">
                    <MessageCircle size={20} className="text-blue-500" />
                  </div>
                  <span className="text-sm md:text-base">Chat</span>
                </OrbitCard>

                <OrbitCard radius={orbitRadius} startAngle={4.18} speed={0.003}>
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#23263a] flex items-center justify-center">
                    <Sparkles size={20} className="text-purple-500" />
                  </div>
                  <span className="text-sm md:text-base">Daily Horoscope</span>
                </OrbitCard>
              </>
            )}

            {/* Center */}

            <motion.div
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.03, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="relative rounded-full overflow-hidden flex items-center justify-center"
              style={{
                width: center,
                height: center,
              }}
            >
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle,#2d3652 0%,#1a2235 50%,#111827 100%)",
                }}
              />

              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="absolute rounded-full bg-yellow-400 blur-[90px]"
                style={{
                  width: imageSize + 60,
                  height: imageSize + 60,
                }}
              />

              <img
                src={HeroSectionI}
                alt="Hero"
                className="relative object-contain z-10"
                style={{
                  width: imageSize,
                }}
              />
            </motion.div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
