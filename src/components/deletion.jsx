import React from "react";
import colors from "../constants/colors";

export default function DeletionPolicy() {
  const sections = [
    {
      title: "Account Deletion",
      content: [
        "Last updated: 1st December, 2025",
      ],
    },
    {
      title: "1. How do I delete my ChatSpark account?",
      content: [
        "To initiate account deletion:",
        "• Open the ChatSpark app and go to Settings",
        "• Tap on 'Delete Account'",
        "• Select the reason for deletion",
        "• Tap 'Submit'",
      ],
    },
    {
      title: "2. What happens after I submit a deletion request?",
      content: [
        "Review process: After you submit a deletion request, it is sent to our Trust and Safety team for review. The deletion process is initiated within 12–24 hours.",
        "Grace period: During the first 12 hours after submission, you may contact our customer support through the app to revoke your deletion request.",
        "After deletion: Once your account is deleted, you will no longer be able to access it using your phone number. Logging in again will create a new account. Previous data cannot be recovered.",
        "Data retention: Certain personal data may be retained for regulatory, legal, and compliance purposes for a limited period. Aggregated and anonymized data may be retained for analytics.",
      ],
    },
    {
      title: "3. Can I cancel my deletion request?",
      content: [
        "Yes, but only within 12 hours of submitting the request.",
        "To cancel, contact ChatSpark support through the app within the 12-hour grace period.",
        "After 12 hours, the deletion process cannot be stopped and your account will be permanently deleted within 12–24 hours.",
      ],
    },
    {
      title: "4. How can I download my account data?",
      content: [
        "Data download is available on request.",
        "You can request a copy of your account data by emailing support@chatspark.in within 7 days of submitting your deletion request.",
        "We'll provide data related to your account, including profile details, transaction history, and other information you provided during registration.",
        "Important notes:",
        "• Requests must be made within 7 days of deletion request",
        "• Email must be sent from your registered email address",
        "• We respond within a few business days",
      ],
    },
    {
      title: "5. What happens to my Coins when I delete my account?",
      content: [
        "Coins are non-refundable.",
        "Any remaining Coins will be forfeited once your account is deleted.",
        "We strongly recommend using all Coins before requesting account deletion.",
        "For full details, please refer to the Coins Policy.",
      ],
    },
    {
      title: "Need Help?",
      content: [
        "If you are facing issues or have questions about account deletion, please contact our support team through the ChatSpark app before deleting your account.",
        "You can also reach us at support@chatspark.in.",
      ],
    },
  ];

  return (
    <div
      className="min-h-screen px-5 py-12 md:px-20"
      style={{ background: colors.gradientVertical, color: colors.textPrimary }}
    >
      {/* Heading */}
      <h1
        className="text-4xl md:text-5xl font-bold text-center mb-12"
        style={{ color: colors.accent }}
      >
        Deletion Policy
      </h1>

      {/* Content Sections */}
      <div className="max-w-3xl w-full mx-auto space-y-6">
        {sections.map((section, index) => (
          <div
            key={index}
            className="rounded-xl border p-6"
            style={{
              backgroundColor: colors.secondary,
              borderColor: colors.cardBorder,
            }}
          >
            <h2
              className="text-xl md:text-2xl font-semibold mb-3"
              style={{ color: colors.accent }}
            >
              {section.title}
            </h2>

            {section.content.map((text, i) => (
              <p
                key={i}
                className="text-base md:text-lg leading-relaxed mb-2"
                style={{ color: colors.textSecondary }}
              >
                {text}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
