// import { motion } from "framer-motion";
// import React from "react";
// import colors from "../constants/colors";
// export default function WhyCard({
//   icon: Icon,
//   title,
//   description,
//   delay = 0,
// }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 70 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.25 }}
//       transition={{
//         duration: 0.6,
//         delay,
//         ease: "easeOut",
//       }}
//       whileHover={{
//         y: -12,
//         scale: 1.03,
//       }}
//       className="group rounded-[28px] p-8 cursor-pointer overflow-hidden relative"
//       style={{
//         background: "#F8F8F8",
//         minHeight: 300,
//       }}
//     >
//       {/* Glow */}
//       <motion.div
//         className="absolute inset-0 opacity-0 group-hover:opacity-100"
//         transition={{ duration: 0.35 }}
//         style={{
//           background: `radial-gradient(circle at top right, ${colors.accent}20, transparent 70%)`,
//         }}
//       />
//       {/* Icon */}
//       <motion.div
//         whileHover={{ rotate: -10, scale: 1.1 }}
//         transition={{ duration: 0.25 }}
//         className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center"
//         style={{
//           background: "#FFECC0",
//         }}
//       >
//         <Icon
//           size={30}
//           color={colors.accent}
//         />
//       </motion.div>
//       {/* Title */}
//       <h3
//         className="relative z-10 mt-8 text-3xl font-bold"
//         style={{
//           color: "#171717",
//         }}
//       >
//         {title}
//       </h3>
//       {/* Description */}
//       <p
//         className="relative z-10 mt-5 leading-9 text-md"
//         style={{
//           color: "#5D5D5D",
//         }}
//       >
//         {description}
//       </p>
//       {/* Bottom Line */}
//       <motion.div
//         initial={{ width: 0 }}
//         whileHover={{ width: "100%" }}
//         transition={{ duration: 0.35 }}
//         className="absolute bottom-0 left-0 h-1 rounded-full"
//         style={{
//           background: colors.accent,
//         }}
//       />
//     </motion.div>
//   );
// }
import { motion } from "framer-motion";
import React from "react";

import colors from "../constants/colors";


export default function WhyCard({
  icon: Icon,
  title,
  description,
  iconBg = colors.pinkLight,
  iconColor = colors.accent,
  borderColor = colors.cardBorder,
  delay = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.55,
        delay,
        ease: "easeOut",
      }}
      whileHover={{
        y: -5,
      }}
      className="group relative overflow-hidden rounded-[28px] cursor-pointer"
      style={{
        background: colors.cardBg,
        border: `1.5px solid ${borderColor}`,
        minHeight: 245,
        boxShadow: "0 8px 30px rgba(32, 36, 61, 0.025)",
      }}
    >
      {/* Hover Glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100"
        transition={{ duration: 0.35 }}
        style={{
          background: `radial-gradient(
            circle at top right,
            ${iconColor}12,
            transparent 65%
          )`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 p-6 md:p-7">
        {/* Icon + Title */}
        <div className="flex items-center gap-4">
          {/* Icon */}
          <motion.div
            whileHover={{
              rotate: -6,
              scale: 1.05,
            }}
            transition={{
              duration: 0.25,
            }}
            className="w-[66px] h-[66px] rounded-[16px] flex items-center justify-center flex-shrink-0"
            style={{
              background: iconBg,
            }}
          >
            <Icon
              size={34}
              strokeWidth={2}
              style={{
                color: iconColor,
              }}
            />
          </motion.div>

          {/* Title */}
          <h3
            className="text-[20px] md:text-[21px] font-bold leading-tight"
            style={{
              color: colors.textPrimary,
            }}
          >
            {title}
          </h3>
        </div>

        {/* Description */}
        <p
          className="mt-7 text-[17px] md:text-[18px] font-medium leading-[1.75]"
          style={{
            color: colors.textSecondary,
          }}
        >
          {description}
        </p>
      </div>

      {/* Subtle Hover Bottom Line */}
      <motion.div
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{
          duration: 0.35,
          ease: "easeOut",
        }}
        className="absolute bottom-0 left-0 h-[2px] rounded-full"
        style={{
          background: `linear-gradient(
            90deg,
            ${colors.accent},
            ${colors.purple}
          )`,
        }}
      />
    </motion.div>
  );
}