import React from "react";

import colors from "../constants/colors";


export default function TermsOfUse() {
  const section = {
    backgroundColor: colors.secondary,
    padding: "24px 28px",
    borderRadius: "14px",
    border: `1px solid ${colors.cardBorder}`,
    marginBottom: "22px",
    boxShadow: `0 0 0 1px ${colors.cardBorder}`,
  };

  const heading = {
    fontSize: "20px",
    fontWeight: "700",
    marginBottom: "14px",
    color: colors.accent,
  };

  const text = {
    fontSize: "16px",
    lineHeight: "1.7",
    color: colors.textSecondary,
    marginBottom: "12px",
  };

  return (
    <div style={{ padding: "20px", color: colors.textPrimary }}>
      <h1
        style={{
          fontSize: "40px",
          fontWeight: "700",
          marginBottom: "28px",
          color: colors.accent,
          textAlign: "center",
        }}
      >
        Terms Of Use
      </h1>

      {/* SECTION 1 */}
      <div style={section}>

        <p style={text}>
          <p>These Terms of Use (“Terms”) govern your access to and use of the ChatSpark mobile application and its versions (the “App”), collectively referred to as the “Platform,” provided by HangoutX Media Private Limited (“Company,” “we,” “us,” or “our”), a private company established under the laws of India with its registered office at B-128, First Floor, Sector-2, Gautam Buddha Nagar, Uttar Pradesh 201301.</p>
          The terms “you” and “your” refer to the user of the Platform.
          Our Services and these Terms comply with the Indian Penal Code, 1860, the Information Technology Act, 2000, and related rules. By using our Platform, you agree to these Terms. If you are using the Platform outside India, you are responsible for ensuring compliance with local laws.
        </p>
      </div>

      {/* SECTION 2 */}
      <div style={section}>
        <h2 style={heading}>Changes to Terms and Services</h2>
        <p style={text}>
          Our Platform is dynamic and may evolve. We may modify, suspend, or discontinue Services or features at our discretion, without notice unless consent is legally required. Please check this page periodically for updates.
        </p>
      </div>

      {/* SECTION 3 */}
      <div style={section}>
        <h2 style={heading}>Our Services</h2>

        {/* Intro Paragraph */}
        <p style={text}>
          <strong>ChatSpark</strong> is a mobile application offering:
        </p>

        {/* Numbered List */}
        <ol style={{ ...text, paddingLeft: "24px" }}>
          <li>
            <strong style={{ color: colors.accent }}>1:1 Audio Calling:</strong> Real-time audio conversations between
            users and creators based on mood, vibe, or interest.
          </li>
          <li>
            <strong style={{ color: colors.accent }}>Interactive Gaming:</strong> Multiplayer games including:
            <ul style={{ paddingLeft: "22px", marginTop: "6px" }}>
              <li>
                <strong style={{ color: colors.accent }}>Challenge & Connect</strong> (gameplay linked with in-app calling
                and engagement rewards).
              </li>
              <li>
                <strong style={{ color: colors.accent }}>Casual and Competitive Games</strong> designed for entertainment
                and connection.
              </li>
            </ul>
          </li>
        </ol>

        {/* Paragraphs */}
        <p style={text}>
          The Platform enables users to engage in voice-based interactions and
          participate in casual games. The Platform does not support public uploads of
          photographs, videos, or text content.
        </p>

        <p style={text}>
          Creators (hosts or game performers) may provide audio teasers, voice-based
          intros, or content managed by the Platform. You grant us a worldwide,
          royalty-free, sublicensable, and transferable license to use and process
          inputs you provide (e.g., gameplay interactions) solely for operating,
          improving, and promoting the Services.
        </p>

        <p style={text}>
          We may review or remove any content that violates these Terms or applicable
          laws. You remain responsible for any information you provide.
        </p>
      </div>


      {/* SECTION 4 */}
      <div style={section}>
        <h2 style={heading}>Who May Use Our Services</h2>
        <p style={text}>
          You may use our Services only if you can form a legally binding agreement under applicable law. If you accept these Terms on behalf of an organization, you confirm you have authority to bind it.
        </p>
      </div>

      {/* SECTION 5 */}
      <div style={section}>
        <h2 style={heading}>How to Use Our Services</h2>
        <p style={text}>
          To use ChatSpark, download the App and register using your mobile number. You may verify your account through a One-Time Password (OTP) sent via SMS.<br />
          You can then access audio calls and gaming features subject to these Terms.
        </p>
      </div>

      {/* SECTION 6 */}
      <div style={section}>
        <h2 style={heading}>Safety</h2>

        <ul style={{ ...text, paddingLeft: "20px", lineHeight: "1.8" }}>
          <li>• Use the Services for fraudulent, misleading, or unlawful purposes.</li>
          <li>• Use automated means (e.g., bots, scrapers) to collect or extract information.</li>
          <li>• Interfere with or disrupt the Platform.</li>
          <li>• Impersonate others or access another user’s account without authorization.</li>
          <li>• Post or share harmful, obscene, violent, or hateful content.</li>
          <li>• Upload viruses or malicious code.</li>
          <li>• Threaten India’s sovereignty, unity, or security.</li>
          <li>• Circumvent bans or suspensions imposed by us.</li>
        </ul>
      </div>


      {/* SECTION 7 */}
      <div style={section}>
        <h2 style={heading}>Privacy Policy</h2>
        <p style={text}>
          Our Privacy Policy explains how we collect, use, share, and store your information and your rights. Third-party service providers (e.g., Exotel/Twilio for calls) have their own terms, which you agree to when using their integrations.
        </p>
      </div>

      {/* SECTION 8 */}
      <div style={section}>
        <h2 style={heading}>Your Commitments</h2>

        {/* a */}
        <p style={{ ...text, fontWeight: "700", color: colors.accent }}>
          a. No False Information
        </p>
        <p style={text}>
          You must not misrepresent your identity or provide false information.
          Violation may lead to account suspension.
        </p>

        {/* b */}
        <p style={{ ...text, fontWeight: "700", color: colors.accent }}>
          b. Device Security
        </p>
        <p style={text}>
          You are responsible for securing your device. We are not liable for any
          compromise resulting from malware or security breaches.
        </p>

        {/* c */}
        <p style={{ ...text, fontWeight: "700", color: colors.accent }}>
          c. Content Removal and Termination
        </p>
        <p style={text}>
          We may remove content violating our guidelines. Repeated offenses can lead
          to permanent account termination. Appeals may be sent to{" "}
          <span style={{ color: colors.accent }}>grievance@chatspark.in</span>.
        </p>

        {/* d */}
        <p style={{ ...text, fontWeight: "700", color: colors.accent }}>
          d. Unlawful Activities
        </p>
        <p style={text}>
          You must not use the Platform to share or promote illegal, obscene, or
          discriminatory content.
        </p>

        {/* e */}
        <p style={{ ...text, fontWeight: "700", color: colors.accent }}>
          e. Content Rights and Liabilities
        </p>
        <p style={text}>
          You retain ownership of your content but grant us a limited license to use
          it for Platform functionality. We are not responsible for third-party
          content or transactions.
        </p>

        {/* f */}
        <p style={{ ...text, fontWeight: "700", color: colors.accent }}>
          f. Intermediary Status
        </p>
        <p style={text}>
          We operate as an intermediary under the Information Technology Act, 2000,
          and related rules. We are not liable for user-generated content.
        </p>

        {/* g */}
        <p style={{ ...text, fontWeight: "700", color: colors.accent }}>
          g. Service Integrity
        </p>
        <p style={text}>
          You must not attempt to hack, tamper, or disrupt our systems. Such acts may
          result in legal action.
        </p>
      </div>


      {/* SECTION 9 */}
      <div style={section}>
        <h2 style={heading}>Permissions You Grant Us</h2>
        <p style={text}>
          Profile Sharing: We may display your username, profile picture, and engagement statistics to others within the Platform.<br />
          Automatic Updates: You must update the App to access new features.<br />
          Cookies and Tracking: We use standard analytics and cookies for functionality and improvement.<br />
          Data Retention: We retain data as outlined in our Privacy Policy.
        </p>
      </div>

      {/* SECTION 10 */}
      {/* Sponsored Content */}
      <div style={section}>
        <h2 style={heading}>Sponsored Content</h2>

        <p style={text}>Creators providing sponsored or promotional content must:</p>

        <ul style={{ paddingLeft: "20px", marginBottom: "14px", color: colors.textSecondary }}>
          <li style={text}>Disclose paid promotions using the App’s relevant tools.</li>
          <li style={text}>Avoid false or misleading statements.</li>
          <li style={text}>Refrain from promoting harmful or illegal products/services.</li>
        </ul>

        <p style={text}>
          Violations can be reported via in-app tools or{" "}
          <span style={{ color: colors.accent }}>grievance@chatspark.in</span>.
        </p>
      </div>


      {/* Dispute Resolution */}
      <div style={section}>
        <h2 style={heading}>Dispute Resolution</h2>

        <p style={text}>
          All disputes are governed by Indian law and subject to exclusive jurisdiction of courts in{" "}
          <span style={{ fontWeight: "700", color: colors.accent }}>Delhi, India</span>.
        </p>
      </div>


      {/* Grievance Redressal Mechanism */}
      <div style={section}>
        <h2 style={heading}>Grievance Redressal Mechanism</h2>

        <p style={text}>For any complaints related to safety, privacy, or Platform use, contact:</p>

        <p style={text}>
          <span style={{ fontWeight: "700", color: colors.accent }}>Grievance Officer:</span> Mr. Ayush Kumar <br />
          <span style={{ fontWeight: "700", color: colors.accent }}>Address:</span> HangoutX Media Private Limited, B-128,
          First Floor, Sector-2, Gautam Buddha Nagar, Uttar Pradesh 201301 <br />
          <span style={{ fontWeight: "700", color: colors.accent }}>Email:</span>{" "}
          <span style={{ color: colors.accent }}>grievance@chatspark.in</span>
        </p>

        <p style={text}>
          <span style={{ fontWeight: "700", color: colors.accent }}>
            Nodal Officer (for law enforcement only):
          </span>{" "}
          Mr. Ayush Kumar <br />
          <span style={{ fontWeight: "700", color: colors.accent }}>Email:</span>{" "}
          <span style={{ color: colors.accent }}>nodalofficer@chatspark.in</span>
        </p>

        <p style={text}>
          We aim to resolve grievances within{" "}
          <span style={{ fontWeight: "700", color: colors.accent }}>15 days</span>.
        </p>
      </div>


      {/* SECTION 13 */}
      <div style={section}>
        <h2 style={heading}>Limitation of Liability</h2>
        <p style={text}>
          The Platform and Services are provided “as is.” We are not liable for indirect or consequential losses, except as explicitly provided. Liability is limited to the amount paid for services in the previous month.
        </p>
      </div>

      {/* SECTION 14 */}
      <div style={section}>
        <h2 style={heading}>Indemnification</h2>
        <p style={text}>
          You agree to indemnify HangoutX Media Private Limited and its affiliates from claims arising from your use, breach, or violation of third-party rights. This obligation survives termination.
        </p>
      </div>

      {/* SECTION 15 */}
      <div style={section}>
        <h2 style={heading}>Unsolicited Material</h2>
        <p style={text}>
          Feedback or suggestions may be used without compensation or confidentiality obligations.
        </p>
      </div>

      {/* SECTION 16 */}
      <div style={section}>
        <h2 style={heading}>General</h2>
        <p style={text}>
          • Your rights under these Terms cannot be assigned without our written consent.<br />
          • If any provision is invalid, remaining Terms remain effective.<br />
          • Modifications must be in writing and approved by us.<br />
          • Our failure to enforce a right does not constitute a waiver.<br />
          • All rights not expressly granted are reserved.
        </p>
      </div>

    </div>
  );
}
