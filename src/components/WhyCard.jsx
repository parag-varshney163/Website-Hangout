import { motion } from "framer-motion";
import React from "react";

import colors from "../constants/colors";


export default function WhyCard({
  icon: Icon,
  title,
  description,
  delay = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut",
      }}
      whileHover={{
        y: -12,
        scale: 1.03,
      }}
      className="group rounded-[28px] p-8 cursor-pointer overflow-hidden relative"
      style={{
        background: "#F8F8F8",
        minHeight: 300,
      }}
    >
      {/* Glow */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100"
        transition={{ duration: 0.35 }}
        style={{
          background: `radial-gradient(circle at top right, ${colors.accent}20, transparent 70%)`,
        }}
      />

      {/* Icon */}
      <motion.div
        whileHover={{ rotate: -10, scale: 1.1 }}
        transition={{ duration: 0.25 }}
        className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center"
        style={{
          background: "#FFECC0",
        }}
      >
        <Icon
          size={30}
          color={colors.accent}
        />
      </motion.div>

      {/* Title */}
      <h3
        className="relative z-10 mt-8 text-4xl font-bold"
        style={{
          color: "#171717",
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="relative z-10 mt-5 leading-9 text-xl"
        style={{
          color: "#5D5D5D",
        }}
      >
        {description}
      </p>

      {/* Bottom Line */}
      <motion.div
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.35 }}
        className="absolute bottom-0 left-0 h-1 rounded-full"
        style={{
          background: colors.accent,
        }}
      />
    </motion.div>
  );
}
