import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import React from "react";

import colors from "../constants/colors";


export default function FAQItem({
  faq,
  active,
  onClick,
  index,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 80,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: .25,
      }}
      transition={{
        duration: .55,
        delay: index * .12,
      }}
      className="rounded-3xl overflow-hidden shadow-lg"
      style={{
        background: "#fff",
      }}
    >

      <button
        onClick={onClick}
        className="w-full px-8 py-8 flex justify-between items-center text-left"
      >

        <h3
          className="font-bold text-2xl"
          style={{
            color: "#1d1d1d",
          }}
        >
          {faq.question}
        </h3>

        <motion.div
          whileTap={{
            scale: .9,
          }}
          className="w-11 h-11 rounded-full flex items-center justify-center"
          style={{
            background: colors.accent,
          }}
        >
          {active ? (
            <ChevronUp
              size={20}
              color="#000"
            />
          ) : (
            <ChevronDown
              size={20}
              color="#000"
            />
          )}
        </motion.div>

      </button>

      <AnimatePresence>

        {active && (

          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: .35,
            }}
            className="overflow-hidden"
          >

            <div
              className="px-8 py-6 text-lg leading-8 border-t"
              style={{
                color: "#555",
                borderColor: "#ececec",
              }}
            >
              {faq.answer}
            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </motion.div>
  );
}
