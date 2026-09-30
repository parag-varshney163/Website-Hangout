import React from "react";

import colors from "../constants/colors";


export default function CommunityGuidelines() {
  const container = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    padding: "60px 0",
    color: "white",
  };

  const wrapper = {
    width: "90%",
    maxWidth: "900px",
  };

  const section = {
    backgroundColor: colors.secondary,
    padding: "24px 30px",
    borderRadius: "16px",
    border: `1px solid ${colors.cardBorder}`,
    marginBottom: "24px",
    boxShadow: "0px 4px 18px rgba(0,0,0,0.2)",
  };

  const heading = {
    fontSize: "22px",
    fontWeight: "700",
    color: colors.accent,
    marginBottom: "12px",
  };

  const subHeading = {
    color: colors.accent,
    fontWeight: "600",
    margin: "18px 0 10px",
  };

  const text = {
    color: colors.textSecondary,
    fontSize: "16px",
    lineHeight: "1.75",
    whiteSpace: "pre-line",
  };

  return (
    <div style={container}>
      <div style={wrapper}>
        
        {/* Title */}
        <h1
          style={{
            fontSize: "40px",
            fontWeight: "700",
            marginBottom: "28px",
            color: colors.accent,
            textAlign: "center",
          }}
        >
          Community Guidelines
        </h1>

        {/* ============================================================= */}
        {/* 1. WHY WE HAVE THESE GUIDELINES */}
        {/* ============================================================= */}
        <div style={section}>
          <h2 style={heading}>1. Why We Have These Guidelines</h2>
          <p style={text}>
            Hangout is built to be a space for meaningful, kind, and respectful
            connections — where people can talk, share, support, and connect in a
            safe, inclusive environment. These rules help ensure that everyone
            feels secure, respected, and free from harm or harassment.

            Violations may lead to content removal, account suspension or
            termination, or legal reporting depending on severity. These
            guidelines are inspired by industry-leading standards.
          </p>
        </div>

        {/* ============================================================= */}
        {/* 2. WHO CAN USE CHATSPARK */}
        {/* ============================================================= */}
        <div style={section}>
          <h2 style={heading}>2. Who Can Use Hangout (Eligibility & Profiles)</h2>
          <p style={text}>
            • Users must be 18 years or older. Accounts belonging to minors are strictly prohibited.{"\n"}
            • Misrepresenting age is forbidden.{"\n"}
            • Registration requires truthful and complete information (username, age, gender, contact info if required).{"\n"}
            • Impersonation or misrepresentation is strictly prohibited.{"\n"}
            • Each account must belong to one individual — no account sharing.
          </p>
        </div>

        {/* ============================================================= */}
        {/* 3. RESPECTFUL COMMUNICATION */}
        {/* ============================================================= */}
        <div style={section}>
          <h2 style={heading}>3. Respectful Communication & Privacy — What We Expect</h2>
          <p style={text}>
            • Treat everyone with courtesy, respect, and empathy.{"\n"}
            • Respect boundaries — do not push anyone to reveal private information.{"\n"}
            • Do not share your own sensitive information unnecessarily.{"\n"}
            • Do not share other users’ private media, details, or screenshots without consent.{"\n"}
            • No harassment, intimidation, stalking, or manipulative behaviour.{"\n"}
            • Permission is mandatory for recording or screenshots.{"\n"}
            • Respect anonymity at all times.
          </p>
        </div>

        {/* ============================================================= */}
        {/* 4. PROHIBITED CONTENT */}
        {/* ============================================================= */}
        <div style={section}>
          <h2 style={heading}>4. Prohibited Content & Behaviour</h2>

          <h4 style={subHeading}>Sexual Content & Exploitation</h4>
          <p style={text}>
            • No nudity, erotic, sexual, or suggestive content.{"\n"}
            • No sexual talk, innuendos, or uncomfortable flirting.{"\n"}
            • No solicitation of sexual services or paid interactions.{"\n"}
            • Zero tolerance for any content involving minors — even fictional or joking.
          </p>

          <h4 style={subHeading}>Harassment, Hate, Discrimination & Abuse</h4>
          <p style={text}>
            • No bullying, stalking, mocking, intimidation, threats, or abuse.{"\n"}
            • No hate speech targeting race, religion, caste, gender, orientation, nationality, etc.{"\n"}
            • No encouragement of violence, self-harm, or harm to others.
          </p>

          <h4 style={subHeading}>Misinformation & Harmful Content</h4>
          <p style={text}>
            • Do not spread harmful or misleading information about health, politics, safety, etc.{"\n"}
            • No promoting dangerous behaviour, illegal acts, or self-harm.
          </p>

          <h4 style={subHeading}>Fraud, Scams & Malicious Behaviour</h4>
          <p style={text}>
            • No scams, fraud, financial deception, or asking for money.{"\n"}
            • No impersonation, catfishing, or fake profiles.
          </p>

          <h4 style={subHeading}>Illegal or Violent Content</h4>
          <p style={text}>
            • No depiction or threats of violence, harm, or exploitation.{"\n"}
            • Users must follow applicable laws at all times.
          </p>
        </div>

        {/* ============================================================= */}
        {/* 5. USING PLATFORM */}
        {/* ============================================================= */}
        <div style={section}>
          <h2 style={heading}>5. Using Hangout as Intended</h2>
          <p style={text}>
            Use the platform for genuine social interaction — meaningful
            conversations, meeting new people, sharing experiences, and support.
           {"\n\n"}
            Avoid misuse such as spamming, harassment, misuse of features, or
            unwanted repeated contact. Respect boundaries and disconnect if
            someone wishes to end a conversation.
          </p>
        </div>

        {/* ============================================================= */}
        {/* 6. PRIVACY & SAFETY */}
        {/* ============================================================= */}
        <div style={section}>
          <h2 style={heading}>6. Privacy, Consent & Safety</h2>
          <p style={text}>
            • Respect anonymity.{"\n"}
            • Never pressure someone for personal or private details.{"\n"}
            • Consent is required before sharing, recording, or forwarding media.{"\n"}
            • Use block/report features if you feel unsafe.{"\n"}
            • Avoid sharing personal contact numbers, financial info, or sensitive data.
          </p>
        </div>

        {/* ============================================================= */}
        {/* 7. REPORTING & ENFORCEMENT */}
        {/* ============================================================= */}
        <div style={section}>
          <h2 style={heading}>7. Reporting Violations & Enforcement</h2>
          <p style={text}>
            You may report violations using in-app tools or support channels.
            Actions include warnings, content removal, temporary suspension, or
            permanent bans. Serious cases (illegal acts, exploitation, threats)
            may be reported to authorities.{"\n\n"}
            Misuse of reporting to harass others is prohibited.
          </p>
        </div>

        {/* ============================================================= */}
        {/* 8. LEGAL COMPLIANCE */}
        {/* ============================================================= */}
        <div style={section}>
          <h2 style={heading}>8. Legal Compliance & Liability</h2>
          <p style={text}>
            Users must comply with all applicable laws. Hangout functions as an
            intermediary platform and is not liable for user-generated content
            except where required by law. We may suspend or remove accounts that
            violate guidelines, pose security risks, or are required by law.
          </p>
        </div>

        {/* ============================================================= */}
        {/* 9. UPDATES */}
        {/* ============================================================= */}
        <div style={section}>
          <h2 style={heading}>9. Continuous Improvements & Updates</h2>
          <p style={text}>
            We regularly update our community guidelines to improve safety and
            comply with legal requirements. Users will be notified of major
            changes through official channels such as SMS or WhatsApp. Continued
            use after updates means acceptance of revised guidelines.
          </p>
        </div>

        {/* ============================================================= */}
        {/* 10. COMMUNITY VISION */}
        {/* ============================================================= */}
        <div style={section}>
          <h2 style={heading}>10. Our Community Vision – What We Encourage</h2>
          <p style={text}>
            • Kindness, empathy, and understanding.{"\n"}
            • Real friendships and supportive conversations.{"\n"}
            • Sharing stories, experiences, and support respectfully.{"\n"}
            • A diverse, inclusive community for people of all backgrounds.{"\n"}
            • A safe space built on consent, trust, and respect.
          </p>
        </div>
        <div style={section}>
          <h2 style={heading}>11. UPDATES TO COMMUNITY GUIDELINES</h2>
          <p style={text}>
            We regularly review and update these Community Guidelines to better serve our community. If there are significant changes, we will notify users through official channels such as SMS or WhatsApp. By continuing to use Dostt after any updates, you agree to the revised Community Guidelines. We also encourage you to check these Community Guidelines periodically to stay informed.
          </p>
        </div>

        {/* ============================================================= */}
        {/* DISAGREE WITH A DECISION */}
        {/* ============================================================= */}
        <div style={section}>
          <h2 style={heading}>Disagree With a Decision?</h2>
          <p style={text}>
            If you believe any moderation action was a mistake, contact our
            grievance officer at:{"\n"}
            <span style={{ color: colors.accent }}>grievance@hangoutclub.in</span>
          </p>
        </div>

      </div>
    </div>
  );
}
