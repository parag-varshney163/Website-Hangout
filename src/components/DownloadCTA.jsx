// import { motion } from "framer-motion";
// import React from "react";
// import PlayStoreImg from "../assets/playstore.webp";
// import QRCodeImg from "../assets/qr.webp";
// import colors from "../constants/colors";
// export default function DownloadCTA() {
//     return (
//         <section
//             id="download"
//             className="py-8 overflow-hidden"
//             style={{
//                 background: colors.gradientVertical,
//             }}
//         >
//             <div className="max-w-6xl mx-auto px-6 text-center">
//                 {/* Badge */}
//                 <motion.span
//                     initial={{ opacity: 0, y: -30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: .5 }}
//                     className="inline-flex rounded-full px-8 py-3 font-semibold"
//                     style={{
//                         color: colors.accent,
//                         border: `1px solid ${colors.accent}40`,
//                         background: colors.hover,
//                     }}
//                 >
//                     GET CHATSPARK
//                 </motion.span>
//                 {/* Heading */}
//                 <motion.h2
//                     initial={{ opacity: 0, y: 60 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: .6 }}
//                     className="font-black mt-8 leading-tight text-4xl lg:text-6xl"
//                     style={{
//                         color: colors.textPrimary,
//                         //fontSize: "clamp(3rem,7vw,5.5rem)",
//                     }}
//                 >
//                     Ready To Start
//                     <br />
//                     <span style={{ color: colors.accent }}>
//                         Real Conversations?
//                     </span>
//                 </motion.h2>
//                 {/* Subtitle */}
//                 <motion.p
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: .2 }}
//                     className="mx-auto mt-8"
//                     style={{
//                         color: colors.textSecondary,
//                         maxWidth: "850px",
//                         fontSize: "22px",
//                         lineHeight: 1.7,
//                     }}
//                 >
//                     Download ChatSpark Now And Connect With Amazing
//                     People Through Voice Calls, Chat And Daily Astrology.
//                 </motion.p>
//                 {/* Play Store */}
//                 {/* <motion.a
//           href="#"
//           initial={{ opacity: 0, scale: .9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           whileHover={{
//             scale: 1.03,
//             y: -5,
//           }}
//           transition={{ duration: .5 }}
//           className="block mx-auto mt-20 max-w-3xl"
//         >
//           <img
//             src={PlayStoreImg}
//             alt="Google Play"
//             className="w-20 h-20 rounded-3xl shadow-2xl"
//           />
//         </motion.a> */}
//                 {/* <motion.a
//                     href="#"
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     whileHover={{
//                         scale: 1.03,
//                         y: -5,
//                     }}
//                     transition={{ duration: 0.5 }}
//                     className="mx-auto mt-20 w-full max-w-lg"
//                 >
//                     <div
//                         className="rounded-[30px] flex items-center gap-6 px-6 sm:px-10 py-6 transition-all duration-300"
//                         style={{
//                             background: "#000",
//                             boxShadow: "0 20px 50px rgba(0,0,0,.35)",
//                         }}
//                     >
//                         <img
//                             src={PlayStoreImg}
//                             alt="Play Store"
//                             className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
//                         />
//                         <div className="text-left">
//                             <p
//                                 className="uppercase tracking-widest text-sm sm:text-lg font-semibold"
//                                 style={{ color: "#fff" }}
//                             >
//                                 Get it on
//                             </p>
//                             <h3
//                                 className="font-bold leading-none mt-1"
//                                 style={{
//                                     color: "#fff",
//                                     fontSize: "clamp(2rem,5vw,4rem)",
//                                 }}
//                             >
//                                 Google Play
//                             </h3>
//                         </div>
//                     </div>
//                 </motion.a> */}
//                 {/* QR */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 60 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{
//                         delay: .25,
//                         duration: .6,
//                     }}
//                     className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-14"
//                 >
//                     <img
//                         src={QRCodeImg}
//                         alt="QR Code"
//                         className="w-40 h-40 rounded-3xl"
//                     />
//                     <div className="text-center sm:text-left">
//                         <h3
//                             className="text-4xl font-bold"
//                             style={{
//                                 color: colors.textPrimary,
//                             }}
//                         >
//                             Scan To Download
//                         </h3>
//                         <p
//                             className="mt-4 text-xl leading-9"
//                             style={{
//                                 color: colors.textSecondary,
//                             }}
//                         >
//                             Open Your Camera And Scan
//                             <br />
//                             The QR Code To Download
//                             <br />
//                             ChatSpark Instantly.
//                         </p>
//                     </div>
//                 </motion.div>
//             </div>
//         </section>
//     );
// }
import { motion } from "framer-motion";
import React from "react";

import PlayStoreImg from "../assets/playstore.webp";
import colors from "../constants/colors";


export default function DownloadCTA() {
  return (
    <section
      id="download"
      className="py-14 px-5"
      style={{ background: colors.pageBg }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto rounded-[28px] overflow-hidden"
        style={{
          background: colors.heroGradient,
          boxShadow: "0 18px 45px rgba(233,87,103,.18)",
        }}
      >
        <div className="grid lg:grid-cols-[1.3fr_0.7fr] items-center gap-10 px-8 md:px-12 py-8">
          {/* Left Section */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center rounded-full px-8 py-2 font-semibold uppercase tracking-[3px] text-xs"
              style={{
                background: "#fff",
                color: colors.textPrimary,
              }}
            >
              Download Hangout
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-6 font-extrabold text-white leading-tight"
              style={{
                fontSize: "clamp(2rem,4vw,3.5rem)",
              }}
            >
              Join A Fun & Friendly
              <br />
              Audio Community
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-5 text-white"
              style={{
                fontSize: "20px",
                lineHeight: 1.5,
                maxWidth: 450,
              }}
            >
              Download Hangout Now And Start
              <br />
              Your Conversation Today.
            </motion.p>
          </div>

          {/* Right Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <a href="#">
              <div
                className="bg-black rounded-[24px] flex items-center gap-5 px-6 py-5"
                style={{
                  width: 360,
                  height: 120,
                  boxShadow: "0 14px 35px rgba(0,0,0,.3)",
                }}
              >
                <img
                  src={PlayStoreImg}
                  alt="Play Store"
                  className="w-14 h-14 object-contain flex-shrink-0"
                />

                <div>
                  <p
                    className="uppercase tracking-[2px]"
                    style={{
                      color: "#fff",
                      fontSize: "15px",
                      fontWeight: 500,
                    }}
                  >
                    GET IT ON
                  </p>

                  <h3
                    className="font-bold mt-1"
                    style={{
                      color: "#fff",
                      fontSize: "34px",
                      lineHeight: 1.1,
                    }}
                  >
                    Google Play
                  </h3>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}