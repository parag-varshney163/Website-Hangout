// import { motion } from "framer-motion";
// import React from "react";
// import colors from "../constants/colors";
// export default function SafetyCard({
//     item,
//     index,
// }) {
//     const Icon = item.icon;
//     return (
//         <motion.div
//             initial={{
//                 opacity: 0,
//                 y: 80,
//                 scale: .9
//             }}
//             whileInView={{
//                 opacity: 1,
//                 y: 0,
//                 scale: 1
//             }}
//             viewport={{
//                 once: true,
//                 amount: .3
//             }}
//             transition={{
//                 duration: .6,
//                 delay: index * .12
//             }}
//             whileHover={{
//                 y: -8,
//                 scale: 1.02
//             }}
//             className="rounded-3xl p-8 relative overflow-hidden"
//             style={{
//                 background: "#fff",
//             }}
//         >
//             <div className="flex gap-5">
//                 <div
//                     className="w-14 h-14 rounded-2xl flex items-center justify-center"
//                     style={{
//                         background: "#FFF4D8",
//                     }}
//                 >
//                     <Icon
//                         size={26}
//                         color={colors.accent}
//                     />
//                 </div>
//                 <div>
//                     <h3
//                         className="text-3xl font-bold mb-4"
//                         style={{
//                             color: "#1d1d1d",
//                         }}
//                     >
//                         {item.title}
//                     </h3>
//                     <p
//                         className="leading-8 text-lg"
//                         style={{
//                             color: "#555",
//                         }}
//                     >
//                         {item.description}
//                     </p>
//                 </div>
//             </div>
//             <div
//                 className="absolute right-8 bottom-3 text-7xl font-black opacity-20"
//                 style={{
//                     color: colors.accent,
//                 }}
//             >
//                 {String(index + 1).padStart(2, "0")}
//             </div>
//         </motion.div>
//     );
// }
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import React from "react";

import colors from "../constants/colors";


export default function SafetyCard({
  item,
  index,
  isExpanded,
  onToggle,
}) {
  const Icon = item.icon;

  return (
    <motion.div
      layout
      initial={{
        opacity: 0,
        y: 80,
        scale: 0.9,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
      }}
      className="rounded-3xl relative overflow-hidden cursor-pointer"
      style={{
        background: "#fff",
      }}
      onClick={onToggle}
    >
      <div className="p-8">
        <div className="flex justify-between items-start gap-5">
          <div className="flex gap-5 flex-1">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
              style={{
                background: "#FFF4D8",
              }}
            >
              <Icon size={26} color={colors.accent} />
            </div>

            <div className="flex-1">
              <h3
                className="text-3xl font-bold"
                style={{
                  color: "#1d1d1d",
                }}
              >
                {item.title}
              </h3>

              <AnimatePresence>
                {isExpanded && (
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
                      duration: 0.3,
                    }}
                    className="overflow-hidden"
                  >
                    <p
                      className="leading-8 text-lg mt-4"
                      style={{
                        color: "#555",
                      }}
                    >
                      {item.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <motion.div
            animate={{
              rotate: isExpanded ? 180 : 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className="shrink-0"
          >
            <ChevronDown
              size={28}
              color={colors.accent}
            />
          </motion.div>
        </div>
      </div>

      <div
        className="absolute right-8 bottom-3 text-7xl font-black opacity-20 pointer-events-none"
        style={{
          color: colors.accent,
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </div>
    </motion.div>
  );
}
