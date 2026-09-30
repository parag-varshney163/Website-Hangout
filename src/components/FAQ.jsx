import React from "react";

import colors from "../constants/colors";


export default function FAQ() {
  const faqList = [
    {
      q: "How to become an Expert?",
      a: "You can apply through the “Join as Expert” section in the app. Submit your KYC and profile details — our team will review and approve your application.",
    },
    {
      q: "What is a Smart Pass?",
      a: "Smart Pass gives you entry to exclusive chat sessions or Expert calls. It’s a one-time access pass valid for the selected duration.",
    },
    {
      q: "Is my KYC data safe?",
      a: "Yes. All KYC information is encrypted and stored securely. Hangout complies with government data protection standards.",
    },
    {
      q: "Refund Policy",
      a: "Refunds are processed only for verified technical issues like failed connections. Refunds are credited back to your CS Coin wallet.",
    },
    {
      q: "Can I block or report someone?",
      a: "Yes. You can block or report any user or Expert directly from their profile or chat screen.",
    },
    {
      q: "What is CS Coin?",
      a: "CS Coin is Hangout's in-app currency. Use it to make calls, buy Smart Passes, or unlock premium experiences.",
    },
    {
      q: "How can I buy CS Coins?",
      a: "Recharge using UPI, debit/credit card, or net banking — all payments are securely processed.",
    },
    {
      q: "How can I delete my account?",
      a: "Go to Profile → Settings → Delete Account. Your personal data will be permanently removed.",
    },
    {
      q: "How do I report technical issues?",
      a: "Report issues through the in-app Support option or email support@hangoutclub.in with screenshots.",
    },
  ];

  return (
    <div
      className="min-h-screen px-5 py-12 md:px-20"
      style={{ background: colors.gradientVertical, color: colors.textPrimary }}
    >
      {/* Heading */}
      <h1
        className="text-4xl md:text-5xl font-bold text-center mb-10"
        style={{ color: colors.accent }}
      >
        Frequently Asked Questions
      </h1>

      {/* FAQ Cards */}
      <div className="max-w-3xl w-full mx-auto space-y-5">
        {faqList.map((item, index) => (
          <div
            key={index}
            className="rounded-xl border p-6 transition-colors duration-300"
            style={{ backgroundColor: colors.secondary, borderColor: colors.cardBorder }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = colors.primary)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = colors.secondary)}
          >
            <h3
              className="text-xl md:text-2xl font-semibold mb-2"
              style={{ color: colors.accent }}
            >
              {item.q}
            </h3>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: colors.textSecondary }}>
              {item.a}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
