import { motion } from "framer-motion";
// import { motion } from "framer-motion";
// import React from "react";
// import colors from "../constants/colors";
// export default function TimelineCard({
//   step,
//   index,
// }) {
//   const Icon = step.icon;
//   const isLeft = step.side === "left";
//   return (
//     <div className="relative flex justify-center items-center mb-24">
//       {/* Card */}
//       <motion.div
//         initial={{
//           opacity: 0,
//           x: isLeft ? -120 : 120,
//         }}
//         whileInView={{
//           opacity: 1,
//           x: 0,
//         }}
//         viewport={{
//           once: true,
//           amount: .3,
//         }}
//         transition={{
//           duration: .7,
//           delay: index * .15,
//         }}
//         whileHover={{
//           scale: 1.03,
//           y: -8,
//         }}
//         className={`w-[430px] rounded-3xl p-8 absolute ${
//           isLeft
//             ? "right-[55%]"
//             : "left-[55%]"
//         }`}
//         style={{
//           background: "#fff",
//         }}
//       >
//         <div
//           className="text-5xl font-black mb-4"
//           style={{
//             color: colors.accent,
//             opacity: .9,
//           }}
//         >
//           {String(step.id).padStart(2, "0")}
//         </div>
//         <div className="flex items-center gap-4 mb-5">
//           <div
//             className="w-14 h-14 rounded-2xl flex items-center justify-center"
//             style={{
//               background: "#FFF4D8",
//             }}
//           >
//             <Icon
//               size={26}
//               color={colors.accent}
//             />
//           </div>
//           <h3
//             className="text-3xl font-bold"
//             style={{
//               color: "#222",
//             }}
//           >
//             {step.title}
//           </h3>
//         </div>
//         <p
//           className="leading-8 text-lg"
//           style={{
//             color: "#555",
//           }}
//         >
//           {step.description}
//         </p>
//       </motion.div>
//       {/* Circle */}
//       <motion.div
//         initial={{
//           scale: 0,
//         }}
//         whileInView={{
//           scale: 1,
//         }}
//         viewport={{
//           once: true,
//         }}
//         transition={{
//           delay: .25,
//           type: "spring",
//           stiffness: 180,
//         }}
//         className="w-20 h-20 rounded-full flex items-center justify-center z-20 border-4"
//         style={{
//           background: "#FFF8E6",
//           borderColor: colors.accent,
//         }}
//       >
//         <span
//           className="font-black text-4xl"
//           style={{
//             color: colors.textPrimary,
//           }}
//         >
//           {String(step.id).padStart(2, "0")}
//         </span>
//       </motion.div>
//       {/* Connector */}
//       <div
//         className={`absolute top-1/2 w-24 h-[3px] ${
//           isLeft
//             ? "right-1/2"
//             : "left-1/2"
//         }`}
//         style={{
//           background: colors.accent,
//         }}
//       />
//     </div>
//   );
// }
import React from "react";

import colors from "../constants/colors";


export default function TimelineCard({
  step,
  index,
}) {

  const Icon = step.icon;
  const isLeft = step.side === "left";

  return (
    <div className="relative flex justify-center items-center lg:mb-24 mb-14">

      {/* Desktop Card */}

      <motion.div
        initial={{
          opacity: 0,
          x: isLeft ? -120 : 120,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: .7,
          delay: index * .15,
        }}
        whileHover={{
          scale: 1.02,
          y: -6,
        }}
        className={`
          hidden lg:block
          absolute
          w-[430px]
          rounded-3xl
          p-8
          ${isLeft ? "right-[55%]" : "left-[55%]"}
        `}
        style={{
          background: "#fff",
        }}
      >

        <div
          className="text-5xl font-black mb-5"
          style={{
            color: colors.accent,
          }}
        >
          {String(step.id).padStart(2, "0")}
        </div>

        <div className="flex gap-4 items-center mb-5">

          <div
            className="w-14 h-14 rounded-2xl flex justify-center items-center"
            style={{
              background: "#FFF5D6",
            }}
          >
            <Icon
              size={26}
              color={colors.accent}
            />
          </div>

          <h3 className="text-3xl font-bold">
            {step.title}
          </h3>

        </div>

        <p className="text-lg leading-8 text-gray-600">
          {step.description}
        </p>

      </motion.div>

      {/* Desktop Circle */}

      <div
        className="hidden lg:flex w-20 h-20 rounded-full justify-center items-center border-4 z-20"
        style={{
          background: "#FFF8E8",
          borderColor: colors.accent,
        }}
      >
        <span
          className="text-4xl font-black"
          style={{
            color: colors.textPrimary,
          }}
        >
          {String(step.id).padStart(2, "0")}
        </span>
      </div>

      {/* Desktop Connector */}

      <div
        className={`
          hidden lg:block
          absolute
          top-1/2
          w-24
          h-[3px]
          ${isLeft ? "right-1/2" : "left-1/2"}
        `}
        style={{
          background: colors.accent,
        }}
      />

      {/* Mobile Layout */}

      <motion.div
        initial={{
          opacity: 0,
          x: -60,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: .6,
        }}
        className="lg:hidden flex w-full pl-16"
      >

        <div
          className="absolute left-0 w-14 h-14 rounded-full border-4 flex justify-center items-center"
          style={{
            background: "#FFF8E8",
            borderColor: colors.accent,
          }}
        >
          <span className="font-bold">
            {step.id}
          </span>
        </div>

        <div
          className="rounded-3xl p-6 w-full"
          style={{
            background: "#fff",
          }}
        >

          <div className="flex items-center gap-4 mb-4">

            <div
              className="w-12 h-12 rounded-xl flex justify-center items-center"
              style={{
                background: "#FFF5D6",
              }}
            >
              <Icon
                size={22}
                color={colors.accent}
              />
            </div>

            <h3 className="text-xl font-bold">
              {step.title}
            </h3>

          </div>

          <p className="text-gray-600 leading-7">
            {step.description}
          </p>

        </div>

      </motion.div>

    </div>
  );
}