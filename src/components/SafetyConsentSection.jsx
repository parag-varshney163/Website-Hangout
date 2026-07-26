import { Shield, Handshake, Ban, Eye, BadgePlus, Heart, TriangleAlert } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
// import React from "react";
// import colors from "../constants/colors";
// export default function SafetyConsentSection() {
//   const topFeatures = [
//     "Real-name KYC for creators",
//     "On-call guidelines & warnings",
//     "Moderation + fraud checks",
//   ];
//   const rules = [
//     "18+ community. Be respectful. No harassment.",
//     "Zero tolerance for spam, scams, or hate speech.",
//   ];
//   return (
//     <div style={{overflowX:"hidden"}}
//       id="safety"
//       className="w-full flex flex-col items-center py-20 px-4"
//     >
//       {/* Title */}
//       <h2 className="text-white font-bold text-4xl md:text-[42px] mb-2 text-center">
//         Safety & Consent,{" "}
//         <span style={{ color: colors.accent }}>Always</span>
//       </h2>
//       {/* Subheading */}
//       <p
//         className="text-center text-base md:text-lg leading-7 max-w-3xl mb-10"
//         style={{ color: colors.accent }}
//       >
//         We built ChatSpark with a consent-first philosophy. You control who you
//         talk to, when to connect, and when to end. Easy report & block.
//       </p>
//       {/* Feature Pills */}
//       <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16">
//         {topFeatures.map((item, idx) => (
//           <div
//             key={idx}
//             className="px-6 py-3 rounded-xl text-sm md:text-base font-medium"
//             style={{
//               border: `1px solid ${colors.cardBorder}`,
//               color: colors.accent,
//             }}
//           >
//             {item}
//           </div>
//         ))}
//       </div>
//       {/* Consent Box */}
//       <div
//         className="w-full max-w-md rounded-3xl p-8 shadow-xl flex flex-col items-center"
//         style={{ backgroundColor: colors.secondary }}
//       >
//         {/* Header Yellow Box */}
//         <div
//           className="w-full rounded-xl px-5 py-3 mb-6 text-center"
//           style={{ backgroundColor: colors.accent }}
//         >
//           <h3 className="text-lg font-bold mb-1 text-black">Consent Reminder</h3>
//           <p className="text-sm text-black">
//             We ask for consent before every call. Violations lead to bans.
//           </p>
//         </div>
//         {/* Rules */}
//         {rules.map((rule, idx) => (
//           <div
//             key={idx}
//             className="w-full text-center px-5 py-3 rounded-xl text-sm mb-4"
//             style={{
//               border: `1px solid ${colors.cardBorder}`,
//               color: colors.accent,
//             }}
//           >
//             {rule}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
import React from "react";

import colors from "../constants/colors";
import SafetyCard from "./SafetyCard";


const safetyData = [
  {
    id: 1,
    title: "Verified Creators",
    description:
      "Every Creator Completes Identity Verification Before Joining ChatSpark, Helping Build A Trusted And Authentic Community.",
    icon: Shield,
  },
  {
    id: 2,
    title: "Consent-First Conversations",
    description:
      "You Stay In Control Of Every Conversation. Connect, Continue Or End A Call Whenever You Choose.",
    icon: Handshake,
  },
  {
    id: 3,
    title: "Report & Block",
    description:
      "Instantly Report Or Block Users Who Violate Community Guidelines.",
    icon: Ban,
  },
  {
    id: 4,
    title: "Active Moderation",
    description:
      "Our Moderation Team Reviews Reports To Keep The Platform Safe.",
    icon: Eye,
  },
  {
    id: 5,
    title: "18+ Community",
    description:
      "ChatSpark Is Designed Exclusively For Adults.",
    icon: BadgePlus,
  },
  {
    id: 6,
    title: "Respect First",
    description:
      "Kindness And Mutual Respect Are At The Core Of Every Conversation.",
    icon: Heart,
  },
  {
    id: 7,
    title: "No Spam & Scam",
    description:
      "We Continuously Detect And Reduce Spam, Fake Profiles And Scams.",
    icon: TriangleAlert,
  },
];

export default function SafetyConsentSection() {
  const [expandedCard, setExpandedCard] = useState(null);
  return (
    <section
      id="safety"
      className="py-24"
      style={{ background: colors.gradientVertical }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* LEFT */}
          <div className="lg:sticky lg:top-28 h-fit text-center lg:text-left">

            <span
              className="inline-flex rounded-full px-5 py-2 sm:px-6 sm:py-3 font-semibold text-sm sm:text-base"
              style={{
                color: colors.accent,
                border: `1px solid ${colors.accent}40`,
                background: colors.hover,
              }}
            >
              TRUST & SAFETY
            </span>

            <h2
              className="font-black mt-6 sm:mt-8 leading-tight text-4xl lg:text-6xl"
              style={{
                color: colors.textPrimary,
                //fontSize: "clamp(2.5rem,8vw,4.5rem)",
              }}
            >
              Built For{" "}
              <span style={{ color: colors.accent }}>
                Safe
              </span>
              <br />
              Conversations.
            </h2>

            <p
              className="mt-6 text-base sm:text-lg lg:text-xl leading-7 lg:leading-9 max-w-xl mx-auto lg:mx-0"
              style={{
                color: colors.textSecondary,
              }}
            >
              Connect With Confidence Through Verified Creators,
              Consent And Trusted Safety Features.
            </p>

          </div>

          {/* RIGHT */}

          <div className="space-y-5 sm:space-y-6 lg:space-y-8">

            {safetyData.map((item, index) => (
              <SafetyCard
                key={item.id}
                item={item}
                index={index}
                isExpanded={expandedCard === item.id}
                onToggle={() =>
                  setExpandedCard(
                    expandedCard === item.id ? null : item.id
                  )
                }
              />
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}
