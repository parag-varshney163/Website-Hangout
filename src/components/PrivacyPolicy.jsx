import React from "react";

import colors from "../constants/colors";


export default function PrivacyPolicy() {
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
    boxShadow: "0px 10px 30px rgba(0,0,0,0.25)",
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
    margin: "14px 0 10px",
    fontSize: "18px",
  };

  const text = {
    color: colors.textSecondary,
    fontSize: "16px",
    lineHeight: "1.75",
    whiteSpace: "pre-line",
    marginBottom: "12px",
  };

  const list = {
    color: colors.textSecondary,
    fontSize: "16px",
    lineHeight: "1.9",
    paddingLeft: "20px",
    marginBottom: "12px",
  };

  const accentLink = { color: colors.accent, fontWeight: 600 };

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
          Privacy Policy for ChatSpark
        </h1>

        {/* Intro */}
        <div style={section}>
          <p className="text-center" style={subHeading}>Effective Date: 1st December, 2025 <br/>
              Last Updated: 1st December, 2025</p>
          <p style={text}>
            This Privacy Policy (“Policy”) explains how{" "}
            <strong style={{ color: colors.textPrimary }}>
              HangoutX Media Private Limited
            </strong>{" "}
            (“Company,” “we,” “us,” or “our”), a private company established under
            the laws of India with its registered office at B-128, First Floor,
            Sector-2, Gautam Buddha Nagar, Uttar Pradesh 201301, collects, uses,
            processes, shares, and stores your information through the ChatSpark
            mobile application and its versions (“App”), collectively referred
            to as the “Platform.”
          </p>

          <p style={text}>
            By using ChatSpark, you agree to the collection and use of your
            information as described in this Policy. This Policy complies with
            the <strong>Information Technology Act, 2000</strong>, the{" "}
            <strong>Information Technology (Intermediary Guidelines and Digital
            Media Ethics Code) Rules, 2021</strong>, and the{" "}
            <strong>Digital Personal Data Protection Act, 2023</strong>.
          </p>

          <p style={text}>
            If you are accessing our Platform from outside India, please ensure
            compliance with your local laws.
          </p>
        </div>

        {/* 1. Information We Collect */}
        <div style={section}>
          <h2 style={heading}>1. Information We Collect</h2>
          <p style={text}>
            We collect the following types of information to operate, secure,
            and improve our Services:
          </p>

          <h3 style={subHeading}>a. Information You Provide</h3>
          <ul style={list}>
            <li>
              <strong>Registration Information:</strong> When you register on
              ChatSpark, we collect your mobile number, email address, or
              third-party login details (e.g., Google, Apple).
            </li>
            <li>
              <strong>Profile Information:</strong> Includes your username,
              gender, language preference, and interest tags (used for matching
              and discovery).
            </li>
            <li>
              <strong>User Content:</strong> Audio interactions, call logs, and
              other communication metadata created through your use of 1:1 audio
              features or interactive experiences.
            </li>
            <li>
              <strong>Payment Information:</strong> Details related to in-app
              purchases or CS Coin transactions, processed securely through
              authorized third-party payment gateways.
            </li>
            <li>
              <strong>Communications:</strong> Any messages, feedback, or
              complaints submitted via in-app support, email (e.g.,{" "}
              <span style={accentLink}>grievance@chatspark.in</span>), In-App
              chat, or Customer Support (support@chatspark.in).
            </li>
          </ul>

          <h3 style={subHeading}>b. Information Collected Automatically</h3>
          <ul style={list}>
            <li>
              <strong>Device Information:</strong> Device model, operating
              system, IP address, network information, and unique device
              identifiers.
            </li>
            <li>
              <strong>Usage Data:</strong> Activity logs including call
              duration, time spent on the app, features used, and pass
              purchases.
            </li>
            <li>
              <strong>Cookies and Tracking:</strong> We use cookies, pixels, and
              similar technologies to track usage patterns and preferences for
              improving performance.
            </li>
          </ul>

          <h3 style={subHeading}>c. Information from Third Parties</h3>
          <ul style={list}>
            <li>
              <strong>Login Services:</strong> Information from third-party
              accounts (e.g., Google, Apple) used for login or authentication.
            </li>
            <li>
              <strong>Analytics Partners:</strong> Aggregated data from
              analytics and crash-reporting providers to improve functionality
              and stability.
            </li>
          </ul>
        </div>

        {/* 2. How We Use Your Information */}
        {/* <div style={section}>
          <h2 style={heading}>2. How We Use Your Information</h2>

          <ul style={list}>
            <li>
              <strong>Provide Services:</strong> Enable 1:1 audio calls and
              pass-based interactive experiences.
            </li>
            <li>
              <strong>Personalize Experience:</strong> Recommend creators,
              users, or interactions that match your interests.
            </li>
            <li>
              <strong>Process Transactions:</strong> Facilitate payments and
              wallet operations for CS Coin purchases.
            </li>
            <li>
              <strong>Ensure Safety and Compliance:</strong> Monitor and
              moderate user interactions, detect fraud, and comply with Indian
              regulatory requirements.
            </li>
            <li>
              <strong>Improve Platform:</strong> Analyze usage trends to enhance
              app performance and develop new features.
            </li>
            <li>
              <strong>Marketing and Advertising:</strong> Display relevant
              promotions and in-app offers (with user consent for sensitive
              data).
            </li>
            <li>
              <strong>Grievance and Support:</strong> Address user complaints,
              appeals, or support requests promptly.
            </li>
          </ul>
        </div> */}
        <div style={section}>
        <h2 style={heading}>How We Use Your Information</h2>

        <ul
          style={{
            ...text,
            paddingLeft: "34px",
            marginTop: "12px",
          }}
        >
          <li style={{ marginBottom: "14px" }}>
            <strong>Provide Services:</strong> Enable 1:1 audio calls, private chat,
            astrology features, and other in-app services.
          </li>

          <li style={{ marginBottom: "14px" }}>
            <strong>Personalize Your Experience:</strong> Recommend creators, users,
            astrology content, and features based on your interests and activity.
          </li>

          <li style={{ marginBottom: "14px" }}>
            <strong>Process Transactions:</strong> Facilitate payments, wallet
            operations, and purchases of CS Coins and other eligible in-app services.
          </li>

          <li style={{ marginBottom: "14px" }}>
            <strong>Ensure Safety and Compliance:</strong> Monitor and moderate user
            interactions, detect fraud, prevent abuse, and comply with applicable
            laws and regulatory requirements.
          </li>

          <li style={{ marginBottom: "14px" }}>
            <strong>Improve the Platform:</strong> Analyze usage trends and feedback
            to enhance app performance, security, reliability, and develop new
            features.
          </li>

          <li style={{ marginBottom: "14px" }}>
            <strong>Marketing and Promotions:</strong> Display relevant offers,
            promotions, notifications, and advertisements, and send marketing
            communications where permitted by law or with your consent where
            required.
          </li>

          <li>
            <strong>Customer Support and Grievance Handling:</strong> Respond to user
            inquiries, complaints, appeals, and provide timely customer support.
          </li>
        </ul>
      </div>

        {/* 3. How We Share Your Information */}
        <div style={section}>
          <h2 style={heading}>3. How We Share Your Information</h2>

          <ul style={list}>
            <li>
              <strong>With Other Users:</strong> Your username and activity
              status may be visible to others depending on your privacy
              settings.
            </li>
            <li>
              <strong>Service Providers:</strong> We share limited data with
              third-party providers for payment processing (e.g., Cashfree),
              analytics, storage, or communication APIs (e.g., Exotel/Twilio
              for audio calls).
            </li>
            <li>
              <strong>Advertisers:</strong> Non-personally identifiable data may
              be used to show targeted ads or promotional offers.
            </li>
            <li>
              <strong>Legal and Regulatory Authorities:</strong> We may disclose
              information when required to comply with legal obligations or
              respond to lawful requests.
            </li>
            <li>
              <strong>Business Transfers:</strong> In the event of a merger,
              acquisition, or sale, user data may be transferred under the same
              privacy terms.
            </li>
            <li>
              <strong>InterNational Transfers:</strong> Some of our service providers (e.g., cloud storage, analytics) may be located outside India. We ensure such transfers comply with applicable data protection laws and use appropriate safeguards.
            </li>
          </ul>
        </div>

        {/* 4. Data Retention */}
        <div style={section}>
          <h2 style={heading}>4. Data Retention</h2>

          <ul style={list}>
            <li>
              <strong>Account Data:</strong> We retain your account information
              as long as your account is active. Once deleted, data may be
              retained for a short duration for legal or compliance reasons.
            </li>
            <li>
              <strong>Transaction Data:</strong> CS Coin transactions and
              payment records are retained as required by financial and audit
              regulations.
            </li>
            <li>
              <strong>Call Logs:</strong> Call logs and related metadata are retained for 90 days for safety and quality purposes.
            </li>
            <li>
              <strong>Usage and Logs:</strong> Non-personal, aggregated
              analytics data may be stored indefinitely for improving services.
            </li>
          </ul>
        </div>

        {/* 5. Your Rights and Choices */}
        <div style={section}>
          <h2 style={heading}>5. Your Rights and Choices</h2>

          <ul style={list}>
            <li>
              <strong>Access and Correction:</strong> You can access or correct
              your personal details via in-app profile settings or by emailing{" "}
              <span style={accentLink}>grievance@chatspark.in</span>.
            </li>
            <li>
              <strong>Deletion:</strong> You may delete your account from the
              app, after which your personal data will be erased within a
              reasonable timeframe, except where retention is required by law.
            </li>
            <li>
              <strong>Consent Withdrawal:</strong> You may withdraw consent for data usage (e.g., marketing or analytics) through in-app settings. Where processing is based on consent, you have the right to withdraw it at any time.
            </li>
            <li>
              <strong>Grievance Redressal:</strong> You may report content or raise data-related concerns through the in-app chat or support@chatspark.in.
              <a style={accentLink} href="https://support.chatspark.in">
                
              </a>
              .
            </li>
          </ul>
        </div>

        {/* 6. Security */}
        <div style={section}>
          <h2 style={heading}>6. Security</h2>
          <p style={text}>
            We employ industry-standard measures to safeguard your data, including encryption (both in transit and at rest), secure servers, and controlled access. However, no digital system is entirely immune from risks. You are advised to maintain security on your own device (e.g., updated antivirus software). In the event of a data breach that may cause harm to your rights, we will notify affected users and the Data Protection Board of India within the timeframe prescribed by law.
          </p>
        </div>

        {/* 7. Cookies */}
        <div style={section}>
          <h2 style={heading}>7. Cookies and Tracking Technologies</h2>
          <p style={text}>
            We use cookies and similar tracking technologies to enhance user
            experience and app functionality. You can modify or disable cookies
            in your device settings, though this may impact certain features.
          </p>
        </div>

        {/* 8. Third-Party Services */}
        <div style={section}>
          <h2 style={heading}>8. Third-Party Services</h2>
          <p style={text}>
            Our Platform integrates with trusted third-party services (e.g.,
            payment gateways, analytics tools, communication APIs). These
            providers follow their own privacy policies, which we encourage you
            to review.
          </p>
        </div>
        <div style={section}>
          <h2 style={heading}>9. Children's Privacy</h2>
          <p style={text}>
           ChatSpark is intended exclusively for users aged 18 years and above. We do not knowingly collect, use, or share personal information from individuals under 18. If we become aware that a user is under 18, we will immediately delete their account and associated data. If you believe a minor has provided us with personal information, please contact us at grievance@chatspark.in.
          </p>
        </div>
         <div style={section}>
        <h2 style={heading}>10. Ban Policy</h2>
        <p style={text}>
          ChatSpark maintains a zero-tolerance policy toward any activity that endangers the safety of users, particularly minors. Any user found impersonating a minor, attempting to contact or exploit minors, engaging in grooming behavior, sharing child sexual abuse material (CSAM), or otherwise violating applicable child safety laws will have their account permanently suspended or terminated. Where required by applicable law, ChatSpark may preserve relevant information and report such activity to the appropriate law enforcement or regulatory authorities.
        </p>
      </div>

        {/* 9. Grievance */}
        <div style={section}>
          <h2 style={heading}>11. Grievance Redressal Mechanism</h2>
          <p style={text}>
            If you have any concerns about data safety, privacy, or Platform
            usage, please contact:
          </p>

          <p style={text}>
            <strong>Grievance Officer:</strong> Mr. Ayush Kumar
            <br />
            <strong>Address:</strong> HangoutX Media Private Limited, B-128,
            First Floor, Sector-2, Gautam Buddha Nagar, Uttar Pradesh 201301
            <br />
            <strong>Email:</strong>{" "}
            <span style={accentLink}>grievance@chatspark.in</span>
            <br />
            <strong>Nodal Officer (for law enforcement only):</strong>{" "}
            <span style={accentLink}>nodalofficer@chatspark.in</span>
          </p>

          <p style={text}>
            You can also reach us via{" "}
            <a style={accentLink} >
              support@chatspark.in
            </a>
            . We aim to address all valid complaints within{" "}
            <strong style={{ color: colors.textPrimary }}>15 days</strong>.
            {/* Transparency reports will be published periodically at{" "}
            <a style={accentLink} href="https://help.chatspark.in/transparency-report">
              https://help.chatspark.in/transparency-report
            </a> */}
            .
          </p>
        </div>

        {/* 10. Changes */}
        <div style={section}>
          <h2 style={heading}>12. Changes to This Policy</h2>
          <p style={text}>
            We may update this Policy periodically to reflect new features,
            legal requirements, or service changes. Users will be notified of
            significant updates through in-app alerts or email.
          </p>
        </div>

        {/* 11. Contact */}
        <div style={section}>
          <h2 style={heading}>13. Contact Us</h2>
          <p style={text}>
            For general questions about this Policy, contact:
            <br />
            <strong>HangoutX Media Private Limited</strong>
            <br />
            B-128, First Floor, Sector-2, Gautam Buddha Nagar, Uttar Pradesh
            201301
            <br />
            <strong>Email:</strong>{" "}
            <span style={accentLink}>support@chatspark.in</span>
          </p>
        </div>
      </div>
    </div>
  );
}
