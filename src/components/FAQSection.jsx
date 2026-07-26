import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import React, { useState } from "react";

import colors from "../constants/colors";
import FAQItem from "./FAQItem";


const faqs = [
  {
    question: "Are My Conversations Safe And Private?",
    answer:
      "Absolutely. We Use Advanced Security Measures To Protect Your Data And Ensure A Safe, Respectful Community.",
  },
  {
    question: "How Can I Earn On ChatSpark?",
    answer:
      "You Can Earn By Becoming A Creator And Earn During Audio Conversations.",
  },
  {
    question: "What Is CS Coin?",
    answer:
      "CS Coin Is ChatSpark's In-App Currency. Use It To Make Calls Or Unlock Premium Experiences.",
  },
  {
    question: "How Can I Buy CS Coins?",
    answer:
      "Recharge Using UPI, Debit/Credit Card, Or Net Banking — All Payments Are Securely Processed.",
  },
  {
    question: "How Can I Delete My Account?",
    answer:
      "Go To Settings → Account → Delete Account. Once Confirmed, Your Account Will Be Permanently Removed.",
  },
];

export default function FAQSection() {
  const [active, setActive] = useState(0);
  const navigate=useNavigate();

  return (
    <section
      id="faq"
      className="py-16"
      style={{
        background: colors.gradientVertical,
      }}
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* Left */}

          <div className="lg:sticky top-28">

            <span
              className="inline-flex px-7 py-3 rounded-full font-semibold"
              style={{
                color: colors.accent,
                border: `1px solid ${colors.accent}40`,
                background: colors.hover,
              }}
            >
              FAQ
            </span>

            <h2
              className="font-black leading-none mt-8 text-4xl text-6xl"
              style={{
                color: colors.textPrimary,
                //fontSize: "clamp(3rem,7vw,5.5rem)",
              }}
            >
              Frequently
              <br />
              Asked
              <br />
              <span style={{ color: colors.accent }}>
                Questions
              </span>
            </h2>

            <p
              className="mt-8 text-xl leading-9"
              style={{
                color: colors.textSecondary,
              }}
            >
              Find Quick Answers To Common Questions
              About ChatSpark.
            </p>

            <button
              className="mt-10 px-8 py-4 rounded-full flex items-center gap-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
              style={{
                color: colors.textPrimary,
                border: `1px solid ${colors.cardBorder}`,
              }}
              onClick={()=>{navigate("/faq")}}
            >
              View All
              <ArrowRight size={22} />
            </button>

          </div>

          {/* Right */}

          <div className="space-y-6">

            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                active={active === index}
                onClick={() =>
                  setActive(active === index ? -1 : index)
                }
                index={index}
              />
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}
