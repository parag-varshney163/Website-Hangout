// import { Trophy, PhoneCall, Users, Shield, BookMarked, IndianRupee, } from "lucide-react";
// import React from "react";

// import { FeatureCard } from "./FeatureCard";
// import colors from "../constants/colors";


// export default function WhyChatSpark() {
//   return (
//     <div
//       id="feature"
//       className="w-full px-6 md:px-16 lg:px-24 py-16"
//       style={{ background: "transparent",overflowX:"hidden" }}
//     >
//       {/* Title */}
//       <h2
//         className="text-center font-bold"
//         style={{
//           fontSize: "42px",
//           color: colors.textPrimary,
//         }}
//       >
//         Why <span style={{ color: colors.accent }}>ChatSpark?</span>
//       </h2>

//       <p
//         className="text-center mt-3 mb-12"
//         style={{
//           color: colors.accent,
//           fontSize: "18px",
//         }}
//       >
//         Built for India’s youth — fast, fun, and super safe. No cringe, only
//         connection.
//       </p>

//       {/* Cards Grid */}
//       <div
//         className="
//           grid 
//           grid-cols-1 
//           sm:grid-cols-2 
//           lg:grid-cols-3 
//           gap-6 
//           place-items-center
//         "
//       >
//         <FeatureCard
//           icon={Trophy}
//           title="Challenge Mode"
//           description="Break the ice with daily voice challenges—games, dares, and prompts that spark real conversation."
//         />

//         <FeatureCard
//           icon={PhoneCall}
//           title="1:1 Audio Calls"
//           description="Crystal-clear WebRTC calls with low-latency for a super smooth chat experience."
//         />

//         <FeatureCard
//           icon={Users}
//           title="Smart Matchmaking"
//           description="Connect with people who share your vibe—interests, language, and mood based."
//         />

//         <FeatureCard
//           icon={Shield}
//           title="Safety First"
//           description="KYC, moderation, and consent-first design. Report/Block in one tap."
//         />

//         <FeatureCard
//           icon={BookMarked}
//           title="Creator Playbook"
//           description="Creators get tools to host mini-games, manage audience, and grow faster."
//         />

//         <FeatureCard
//           icon={IndianRupee}
//           title="Fair Earnings"
//           description="Competitive payouts with transparent policies. Earn from calls, tips, and challenges."
//         />
//       </div>
//     </div>
//   );
// }


const features = [
  {
    id: 1,
    title: "1:1 Audio Calls",
    subtitle:
      "Connect Instantly With Verified Creators Through Crystal-Clear Voice Calls.",
    icon: PhoneCall,
    color: colors.accent,
    points: [
      "High Quality Audio Call",
      "Verified Creators",
      "One Tap To Connect",
    ],
    image: CallImg,
  },
  {
    id: 2,
    title: "Private Chat",
    subtitle:
      "Keep The Conversation Going Anytime, Anywhere With Secure Messaging.",
    icon: MessageCircle,
    color: colors.buttonBg,
    points: [
      "Instant Messages",
      "Verified Creators",
      "Smooth Experience",
    ],
    image: ChatImg,
  },
  {
    id: 3,
    title: "Astro Zone",
    subtitle:
      "Discover Daily Horoscope And Personalized Astrology Insights.",
    icon: Stars,
    color: "#8B5CF6",
    points: [
      "Daily Horoscope",
      "Lucky Number",
      "Zodiac Insights",
    ],
    image: AstroImg,
  },
];
import React from "react";
import { MessageCircle, PhoneCall, Stars } from "lucide-react";
import FeatureSection from "./FeatureSection";
import colors from "../constants/colors";
import AstroImg from "../assets/astro.webp";
import ChatImg from "../assets/chat.webp";
import CallImg from "../assets/call.webp";

export default function WhyChatSpark() {
  return (
  <section
    id="feature"
    className="relative py-28 overflow-hidden"
    style={{
      background: colors.gradientVertical,
    }}
  >
    <div className="max-w-7xl mx-auto px-6">

      {/* Header */}
      <div className="text-center mb-28">

        <span
          className="inline-flex items-center px-8 py-3 rounded-full font-semibold tracking-wide"
          style={{
            color: colors.accent,
            border: `1px solid ${colors.accent}55`,
            background: colors.hover,
            backdropFilter: "blur(10px)",
          }}
        >
          FEATURES
        </span>

        <h1
          className="font-extrabold leading-tight mt-8"
          style={{
            color: colors.textPrimary,
            fontSize: "clamp(3rem,7vw,5.5rem)",
          }}
        >
          Everything You
          <br />
          Need,
          <span
            style={{
              color: colors.accent,
            }}
          >
            {" "}
            In One App
          </span>
        </h1>

        <p
          className="mt-8 mx-auto"
          style={{
            color: colors.textSecondary,
            maxWidth: "850px",
            fontSize: "22px",
            lineHeight: 1.7,
          }}
        >
          ChatSpark Brings Voice Conversations,
          Private Chats And Daily Astrology
          Together For A Better Way To Connect.
        </p>

      </div>

      {/* Sticky Cards */}
      <div className="relative">

        {features.map((feature, index) => (
          <FeatureSection
            key={feature.id}
            feature={feature}
            index={index}
          />
        ))}

      </div>

    </div>
  </section>
);
}