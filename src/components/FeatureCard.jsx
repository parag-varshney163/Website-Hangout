// import React from "react";
// import colors from "../constants/colors";
// export function FeatureCard({ icon: Icon, title, description }) {
//   return (
//     <div
//       style={{
//         backgroundColor: colors.gradientVertical,
//         border: `1px solid ${colors.cardBorder}`,
//         borderRadius: "18px",
//         padding: "28px",
//         width: "360px",
//         height: "180px",
//         display: "flex",
//         flexDirection: "column",
//         gap: "10px",
//       }}
//     >
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           gap: "10px",
//           color: colors.accent,
//           fontWeight: "600",
//           fontSize: "18px",
//         }}
//       >
//         <Icon size={22} />
//         {title}
//       </div>
//       <p
//         style={{
//           color: colors.textSecondary,
//           fontSize: "15px",
//           lineHeight: "22px",
//           marginTop: "4px",
//         }}
//       >
//         {description}
//       </p>
//     </div>
//   );
// }
import { motion } from "framer-motion";
import React from "react";

import colors from "../constants/colors";


export default function FeatureCard({ feature }) {
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 80,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.7,
      }}
      viewport={{ once: false }}
      className="
      rounded-[40px]
      shadow-2xl
      overflow-hidden
      min-h-[650px]
      lg:h-[650px]
      w-full
      flex
      flex-col
      lg:flex-row
      "
      style={{
        background: "#FDFBF8",
      }}
    >
      {/* LEFT SIDE */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 md:p-12 lg:p-16">

        {/* Icon */}
        <div
          className="w-20 h-20 rounded-2xl flex items-center justify-center"
          style={{
            background: `${feature.color}20`,
          }}
        >
          <Icon
            size={38}
            color={feature.color}
          />
        </div>

        {/* Title */}
        <h2
          className="mt-10 font-extrabold leading-tight"
          style={{
            color: colors.primary,
            fontSize: "clamp(2.6rem,4vw,4rem)",
          }}
        >
          {feature.title}
        </h2>

        {/* Subtitle */}
        <p
          className="mt-6"
          style={{
            color: "#5C5C5C",
            fontSize: "22px",
            lineHeight: 1.7,
            maxWidth: "520px",
          }}
        >
          {feature.subtitle}
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-14">

          {feature.points.map((item, index) => (

            <div
              key={index}
              className="flex items-center gap-3"
            >

              <div
                className="w-14 h-14 rounded-xl flex justify-center items-center"
                style={{
                  background: `${feature.color}20`,
                }}
              >
                <Icon
                  size={22}
                  color={feature.color}
                />
              </div>

              <span
                style={{
                  color: colors.primary,
                  fontWeight: 600,
                  fontSize: "17px",
                }}
              >
                {item}
              </span>

            </div>

          ))}

        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/2 flex items-center justify-center relative p-10">

        {/* Background Glow */}
        <div
          className="absolute w-80 h-80 rounded-full blur-[120px]"
          style={{
            background: `${feature.color}30`,
          }}
        />

        {/* Image */}
        <motion.img
          whileHover={{
            scale: 1.04,
          }}
          transition={{
            duration: 0.4,
          }}
          src={feature.image}
          alt={feature.title}
          className="relative z-10 w-full max-w-[600px] object-contain"
        />

      </div>
    </motion.div>
  );
}
