import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";


export default function OrbitCard({
  radius = 300,
  speed = 0.005,
  startAngle = 0,
  children,
}) {
  const [angle, setAngle] = useState(startAngle);

  useEffect(() => {
    let frame;

    const animate = () => {
      setAngle((prev) => prev + speed);
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [speed]);

  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 z-20"
      animate={{
        x: x - 100,
        y: y - 35,
      }}
      transition={{
        duration: 0,
      }}
    >
      <div className="bg-white rounded-full px-6 py-4 shadow-2xl flex items-center gap-3 whitespace-nowrap">
        {children}
      </div>
    </motion.div>
  );
}