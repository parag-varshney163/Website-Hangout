import React from "react";

import colors from "../constants/colors";


export default function RefundPolicy() {
  const containerStyle = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    padding: "60px 0",
    color: "white",
  };

  const wrapperStyle = {
    width: "90%",
    maxWidth: "900px",
  };

  const sectionStyle = {
    backgroundColor: colors.secondary,
    padding: "24px 28px",
    borderRadius: "16px",
    border: `1px solid ${colors.cardBorder}`,
    marginBottom: "22px",
    boxShadow: "0px 4px 18px rgba(0,0,0,0.2)",
  };

  const headingStyle = {
    fontSize: "22px",
    fontWeight: "700",
    color: colors.accent,
    marginBottom: "12px",
    textAlign:"center"
  };

  const subHeadingStyle = {
    color: colors.accent,
    marginTop:"20px",
    fontWeight: "600",
  };

  const textStyle = {
    color: colors.textSecondary,
    fontSize: "16px",
    lineHeight: "1.75",
  };

  return (
    <div style={containerStyle}>
      <div style={wrapperStyle}>
        {/* Title */}
        <h1
          style={{
            fontSize: "40px",
            fontWeight: "700",
            marginBottom: "25px",
            color: colors.accent,
            textAlign: "center",
          }}
        >
          Refund Policy
        </h1>

        {/* Intro */}
        <p style={{ ...textStyle, marginBottom: "35px", textAlign: "center" }}>
          This Refund Policy governs the refund process for services provided by <strong style={{color:colors.accent}}>Hangout</strong>, a mobile application operated by <strong style={{color:colors.accent}}>HangoutX Media Private Limited</strong> (“Company,” “we,” “us,” or “our”), with its registered office at <strong style={{color:colors.accent}}>B-128, First Floor, Sector-2, Gautam Buddha Nagar, Uttar Pradesh 201301</strong>. This policy applies to purchases and transactions made using CS Coin, the virtual currency of the ChatSpark platform (“Platform”), for 1:1 audio calls and interactive pass-based features.
        </p>

        {/* General Refund Conditions */}
        <div style={sectionStyle}>
          <h2 style={headingStyle}>General Refund Conditions</h2>

          <h4 style={subHeadingStyle}>Non-Refundable After Processing or Execution</h4>
          <p style={textStyle}>
            • No refunds will be processed for 1:1 audio calls once the call has been connected, regardless of duration. <br />
            • No refunds will be processed for pass purchases (e.g., access passes for games or interactive experiences) once the pass has been activated or used. <br />
            • The risk and responsibility of placing an order in haste or error lie with the user. HangoutX Media Private Limited will not be liable for refunds once the service has started or been executed.
          </p>

          <h4 style={subHeadingStyle}>Cancellation Before Execution</h4>
          <p style={textStyle}>
            Audio call and pass purchases cannot be canceled once initiated, as they involve real-time participation and digital activation.
          </p>

          <h4 style={subHeadingStyle}>Technical Issues</h4>
          <p style={textStyle}>
            Refunds may be considered for verified technical problems such as: <br />
            • Audio Calls: Network failures, weak signals, or dropped calls. <br />
            • Pass-Based Features: Platform errors preventing access or completion (e.g., activation failure, server downtime). <br />
            • Users must report such issues to customer care within 1 hour of the incident, providing relevant details (screenshots, timestamps, or error messages). <br />
            • Refunds for technical issues are subject to internal verification and may be processed on a pro-rata basis within 10 business days.
          </p>

          <h4 style={subHeadingStyle}>User Dissatisfaction or Experience Quality</h4>
          <p style={textStyle}>
            No refunds will be issued based solely on dissatisfaction with call experiences or outcomes of pass-based activities, as these are real-time user interactions.
          </p>
        </div>

        {/* CS Coin Transactions */}
        <div style={sectionStyle}>
          <h2 style={headingStyle}>CS Coin Transactions</h2>

          <h4 style={subHeadingStyle}>Payment Verification</h4>
          <p style={textStyle}>
            • If there is a delay or technical issue during payment (e.g., session timeout, slow processing), users must verify their bank account or CS Coin wallet before attempting a second payment. <br />
            • If the wallet or account has been debited, do not make another payment — contact support immediately for confirmation. <br />
            • In the event of duplicate payments caused by technical errors, the excess amount will be refunded in full to the user’s CS Coin wallet, retaining only the valid transaction amount.
          </p>

          <h4 style={subHeadingStyle}>Transaction Charges</h4>
          <p style={textStyle}>
            Refunds, if approved, will be credited to the user’s CS Coin wallet after deducting applicable bank or payment gateway charges. Any additional costs incurred during the transaction (such as fees or taxes) may also be deducted where applicable.
          </p>
        </div>

        {/* Order Cancellations */}
        <div style={sectionStyle}>
          <h2 style={headingStyle}>Order Cancellations by HangoutX Media</h2>
          <p style={textStyle}>
            HangoutX Media Private Limited reserves the right to cancel any order due to technical issues, unavailability of services, pricing errors, or suspicious activity. If an order is canceled after payment, the full amount paid in CS Coins will be refunded to the user’s CS Coin wallet within 10 business days.
          </p>
        </div>

        {/* Refund Process */}
        <div style={sectionStyle}>
          <h2 style={headingStyle}>Refund Process</h2>

          <h4 style={subHeadingStyle}>Quality Audits</h4>
          <p style={textStyle}>
            Refund requests for calls or pass-based activities may undergo review by HangoutX Media’s quality audit team. By requesting a refund, users grant consent for internal review of relevant call logs or activity data to determine eligibility. Refunds, if approved, may be partial or full, based on verified issues. Processing may take up to 72 hours after approval.
          </p>

          <h4 style={subHeadingStyle}>Refund Medium</h4>
          <p style={textStyle}>
            All refunds will be credited exclusively to the user’s CS Coin wallet, which can be used for future purchases within the ChatSpark app.
          </p>

          <h4 style={subHeadingStyle}>Eligible Refund Scenarios</h4>
          <p style={textStyle}>
            • Audio Calls: Refunds may be approved for verified disruptions, dropped calls, or system-level failures. <br />
            • Pass Purchases: Refunds may be approved for technical issues preventing access or activation.
          </p>

          <h4 style={subHeadingStyle}>Non-Eligible Cases</h4>
          <p style={textStyle}>
            • Poor internet connectivity, dissatisfaction, or misunderstanding of features will not qualify for refunds.
          </p>
        </div>

        {/* Contact */}
        <div style={sectionStyle}>
          <h2 style={headingStyle}>Contact for Refund Requests</h2>
          <p style={textStyle}>
            Email: <span style={{ color: colors.accent }}>support@hangoutclub.in</span> <br />
            Chatbot: <a href="https://support.hangoutclub.in" style={{ color: colors.accent }}>https://support.hangoutclub.in</a> <br />
            Response Time: We aim to acknowledge refund requests within 15 days, with approved refunds processed within 10 business days.
          </p>
        </div>

        {/* Disclaimer */}
        <div style={sectionStyle}>
          <h2 style={headingStyle}>Disclaimer</h2>
          <p style={textStyle}>
            HangoutX Media Private Limited strives to deliver a seamless experience through Hangout's audio and interactive services. However, we are not liable for losses or damages resulting from user errors, poor connectivity, or factors beyond our control. Users are responsible for ensuring stable connections and compatible devices before using the Platform.
          </p>
        </div>
      </div>
    </div>
  );
}
