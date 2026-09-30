// import { Heart, IndianRupee, Users, Shield, Zap, Star, } from "lucide-react";
// import React from "react";
// import colors from "../constants/colors";
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
//     <section
//       className="relative py-8 px-6 overflow-hidden"
//       style={{
//         background: colors.gradientVertical,
//       }}
//     >
//       {/* Heading */}
//       <div className="text-center max-w-4xl mx-auto">
//         {/* Badge */}
//         <div
//           className="inline-flex items-center px-8 py-3 rounded-full font-semibold tracking-wide"
//           style={{
//             background: "#141414",
//             border: `1px solid ${colors.accent}40`,
//             color: colors.accent,
//           }}
//         >
//           WHY CHOOSE CHATSPARK
//         </div>
//         {/* Title */}
//         <h2
//           className="mt-8 font-bold leading-tight text-4xl lg:text-6xl"
//           style={{
//             color: colors.textPrimary,
//             //fontSize: "clamp(42px,7vw,78px)",
//           }}
//         >
//           Built For Meaningful
//           <br />
//           <span style={{ color: colors.accent }}>
//             Connections.
//           </span>
//         </h2>
//         {/* Description */}
//         <p
//           className="mt-8 text-xl leading-9 mx-auto"
//           style={{
//             color: colors.textSecondary,
//             maxWidth: 760,
//           }}
//         >
//           More than just an app. It's a trusted community built for
//           real connections, safety and meaningful conversations.
//         </p>
//       </div>
//       {/* Cards */}
//       <div className="max-w-6xl mx-auto mt-24">
//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">
//           {cards.map((card, index) => (
//             <WhyCard
//               key={card.title}
//               {...card}
//               delay={index * 0.1}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
import { Heart, MessageCircle, Phone, Gamepad2, Users, ShieldCheck, } from "lucide-react";
import React from "react";

import colors from "../constants/colors";
import WhyCard from "./WhyCard";


const cards = [
  {
    icon: Heart,
    title: "Mood Based Discovery",
    description:
      "Choose Your Mood And Discover Conversations That Fit Your Vibe.",
    iconBg: colors.pinkLight,
    iconColor: colors.accent,
    borderColor: "#F3D8DE",
  },
  {
    icon: MessageCircle,
    title: "Real Conversations",
    description:
      "Chat Or Call With People Who Are Ready To Connect.",
    iconBg: "#EDE8FC",
    iconColor: colors.purple,
    borderColor: "#DDD5F8",
  },
  {
    icon: Phone,
    title: "Chat & Call",
    description:
      "Start With A Chat Or Jump On A Call — Your Choice.",
    iconBg: colors.pinkLight,
    iconColor: colors.accent,
    borderColor: "#F3D8DE",
  },
  {
    icon: Gamepad2,
    title: "Easy & Fun",
    description:
      "Send Messages, Share Gifts, And Keep Conversations Interesting.",
    iconBg: "#EDE8FC",
    iconColor: colors.purple,
    borderColor: "#DDD5F8",
  },
  {
    icon: Users,
    title: "Meet New People",
    description:
      "Connect With Interesting People Who Match Your Mood And Vibe.",
    iconBg: colors.pinkLight,
    iconColor: colors.accent,
    borderColor: "#F3D8DE",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Respectful",
    description:
      "Built-In Reporting And Blocking Tools Help You Stay Comfortable.",
    iconBg: "#EDE8FC",
    iconColor: colors.purple,
    borderColor: "#DDD5F8",
  },
];

export default function WhyChooseCards() {
  return (
    <section
      id="feature"
      className="relative overflow-hidden py-16 px-6"
      style={{
        background: colors.gradientVertical,
      }}
    >
      {/* Soft Background Glow - Left */}
      <div
        className="absolute left-[-180px] top-[220px] w-[420px] h-[420px] rounded-full blur-3xl opacity-40 pointer-events-none"
        style={{
          background: colors.pinkLight,
        }}
      />

      {/* Soft Background Glow - Right */}
      <div
        className="absolute right-[-180px] bottom-[40px] w-[420px] h-[420px] rounded-full blur-3xl opacity-40 pointer-events-none"
        style={{
          background: "#F0E5FC",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div
            className="inline-flex items-center justify-center px-8 py-3 rounded-full text-sm font-bold tracking-[0.18em]"
            style={{
              background: colors.badgeGradient,
              color: colors.accentDark,
            }}
          >
            WHY HANGOUT?
          </div>

          {/* Title */}
          <h2
            className="mt-7 font-bold leading-[1.12] text-4xl md:text-5xl lg:text-[54px]"
            style={{
              color: colors.textPrimary,
            }}
          >
            Feature That Make
            <br />
            <span
              style={{
                background: colors.heroGradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Connecting Easier.
            </span>
          </h2>
        </div>

        {/* Cards */}
        <div className="max-w-[1160px] mx-auto mt-14">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <WhyCard
                key={card.title}
                {...card}
                delay={index * 0.08}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}