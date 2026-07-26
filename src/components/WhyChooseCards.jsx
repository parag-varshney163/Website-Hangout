// import { Heart, IndianRupee, Users, Shield, Zap, Star, } from "lucide-react";
// import React from "react";
// import WhyCard from "./WhyCard";
// const cards = [
//   {
//     icon: Heart,
//     title: "Smart Matchmaking",
//     description:
//       "We Match You With People Who Share Your Interests And Vibe With You.",
//   },
//   {
//     icon: IndianRupee,
//     title: "Fair Earnings",
//     description:
//       "Creators Earn Fairly For Their Time And Conversations. Real Efforts, Real Rewards.",
//   },
//   {
//     icon: Users,
//     title: "Vibrant Community",
//     description:
//       "Join Thousands Of Active Users Who Love Connecting, Chatting And Having Fun.",
//   },
//   {
//     icon: Shield,
//     title: "Safe & Secure",
//     description:
//       "Verified Profiles, Private Conversation And 24/7 Monitoring Keep You Protected.",
//   },
//   {
//     icon: Zap,
//     title: "Fast & Smooth",
//     description:
//       "Quick Match, Low Wait Time And A Seamless Experience Every Time.",
//   },
//   {
//     icon: Star,
//     title: "Real Connection",
//     description:
//       "No Robots, No Fake Chats. Just Real People And Genuine Conversations.",
//   },
// ];
// export default function WhyChooseCards() {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">
//       {cards.map((card, index) => (
//         <WhyCard
//           key={card.title}
//           {...card}
//           delay={index * 0.1}
//         />
//       ))}
//     </div>
//   );
// }
import { Heart, IndianRupee, Users, Shield, Zap, Star, } from "lucide-react";
import React from "react";

import colors from "../constants/colors";
import WhyCard from "./WhyCard";


const cards = [
  {
    icon: Heart,
    title: "Smart Matchmaking",
    description:
      "We Match You With People Who Share Your Interests And Vibe With You.",
  },
  {
    icon: IndianRupee,
    title: "Fair Earnings",
    description:
      "Creators Earn Fairly For Their Time And Conversations. Real Efforts, Real Rewards.",
  },
  {
    icon: Users,
    title: "Vibrant Community",
    description:
      "Join Thousands Of Active Users Who Love Connecting, Chatting And Having Fun.",
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description:
      "Verified Profiles, Private Conversation And 24/7 Monitoring Keep You Protected.",
  },
  {
    icon: Zap,
    title: "Fast & Smooth",
    description:
      "Quick Match, Low Wait Time And A Seamless Experience Every Time.",
  },
  {
    icon: Star,
    title: "Real Connection",
    description:
      "No Robots, No Fake Chats. Just Real People And Genuine Conversations.",
  },
];

export default function WhyChooseCards() {
  return (
    <section
      className="relative py-8 px-6 overflow-hidden"
      style={{
        background: colors.gradientVertical,
      }}
    >
      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto">
        {/* Badge */}
        <div
          className="inline-flex items-center px-8 py-3 rounded-full font-semibold tracking-wide"
          style={{
            background: "#141414",
            border: `1px solid ${colors.accent}40`,
            color: colors.accent,
          }}
        >
          WHY CHOOSE CHATSPARK
        </div>

        {/* Title */}
        <h2
          className="mt-8 font-bold leading-tight text-4xl lg:text-6xl"
          style={{
            color: colors.textPrimary,
            //fontSize: "clamp(42px,7vw,78px)",
          }}
        >
          Built For Meaningful
          <br />
          <span style={{ color: colors.accent }}>
            Connections.
          </span>
        </h2>

        {/* Description */}
        <p
          className="mt-8 text-xl leading-9 mx-auto"
          style={{
            color: colors.textSecondary,
            maxWidth: 760,
          }}
        >
          More than just an app. It's a trusted community built for
          real connections, safety and meaningful conversations.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">
          {cards.map((card, index) => (
            <WhyCard
              key={card.title}
              {...card}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
