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
      a: "Yes. All KYC information is encrypted and stored securely. ChatSpark complies with government data protection standards.",
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
      a: "CS Coin is ChatSpark’s in-app currency. Use it to make calls, buy Smart Passes, or unlock premium experiences.",
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
      a: "Report issues through the in-app Support option or email support@chatspark.in with screenshots.",
    },
  ];

  return (
    <div 
      style={{
        padding: "50px 80px",
        minHeight: "100vh",
        background: colors.gradientVertical,
        color: colors.textPrimary,
      }}
    >
      {/* Heading */}
      <h1
        style={{
          fontSize: "40px",
          marginBottom: "40px",
          color: colors.accent,
          fontWeight: "700",
          textAlign: "center",
        }}
      >
        Frequently Asked Questions
      </h1>

      {/* FAQ Cards */}
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        {faqList.map((item, index) => (
          <div
            key={index}
            style={{
              marginBottom: "22px",
              padding: "20px 28px",
              borderRadius: "14px",
              backgroundColor: colors.secondary,
              border: `1px solid ${colors.cardBorder}`,
              transition: "0.25s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = colors.primary)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = colors.secondary)
            }
          >
            <h3
              style={{
                color: colors.accent,
                marginBottom: "10px",
                fontSize: "20px",
                fontWeight: "600",
              }}
            >
              {item.q}
            </h3>

            <p
              style={{
                color: colors.textSecondary,
                lineHeight: "1.8",
                fontSize: "16px",
              }}
            >
              {item.a}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
