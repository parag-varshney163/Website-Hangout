import React from "react";

import colors from "../constants/colors";


export default function ChildSafetyPolicy() {
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
        textAlign: "center",
    };

    const subHeadingStyle = {
        color: colors.accent,
        marginTop: "20px",
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
                {/* TITLE */}
                <h1
                    style={{
                        fontSize: "40px",
                        fontWeight: "700",
                        marginBottom: "25px",
                        color: colors.accent,
                        textAlign: "center",
                    }}
                >
                    Child Safety Policy
                </h1>

                {/* INTRO */}
                <p style={{ ...textStyle, marginBottom: "35px", textAlign: "center" }}>
                    <strong style={{ color: colors.accent }}>Hangout </strong> <br />
                    HangoutX Media Private Limited <br />
                    Effective Date: 1st October, 2026
                </p>

                {/* SECTION 1 */}
                <div style={sectionStyle}>
                    <h2 style={headingStyle}>1. Our Commitment Against CSAE</h2>
                    <p style={textStyle}>
                        Hangout, operated by HangoutX Media Private Limited, has a zero-tolerance policy
                        toward Child Sexual Abuse and Exploitation (CSAE) in any form. Any content, behavior,
                        communication, or activity on the Hangoutclub platform that sexually exploits, abuses, or
                        endangers minors is strictly prohibited and will result in immediate account termination,
                        permanent ban, and reporting to law enforcement authorities.
                    </p>
                </div>

                {/* SECTION 2 */}
                <div style={sectionStyle}>
                    <h2 style={headingStyle}>2. Prohibited Content & Behavior</h2>
                    <p style={textStyle}>
                        The following are strictly prohibited on Hangout:<br />
                        • Child Sexual Abuse Material (CSAM) of any kind <br />
                        • Any Content that sexualizes,exploits ,or endangers minors <br />
                        • Grooming behavior toward minors <br />
                        • Sharing, soliciting, or distributing exploitative content involving persons under 18  <br />
                        • Any attempt to contact minors for sexual purposes
                    </p>
                </div>

                {/* SECTION 3 */}
                <div style={sectionStyle}>
                    <h2 style={headingStyle}>3. Platform Age Restriction</h2>
                    <p style={textStyle}>
                        Hangout is exclusively intended for users aged 18 years and above. We do not
                        knowingly allow, collect, or process personal information from individuals under the age
                        of 18. If we become aware that a user is a minor, their account will be immediately
                        terminated and all associated data deleted.
                    </p>
                </div>

                {/* SECTION 4 */}
                <div style={sectionStyle}>
                    <h2 style={headingStyle}>4. In-App Reporting Mechanism</h2>

                    <p style={textStyle}>
                        Hangout provides users with accessible, in-app tools to report violations:
                    </p>

                    <p style={textStyle}>
                        • <strong>Report Button:</strong> Available on every user profile and conversation screen <br />
                        • <strong>Block & Report:</strong> Users can block and report any account they find suspicious or harmful <br />
                        • All reports are reviewed by our moderation team within 24 hours <br />
                        • Reports involving minors or CSAE are escalated with highest priority
                    </p>
                </div>

                {/* SECTION 5 */}
                <div style={sectionStyle}>
                    <h2 style={headingStyle}>5. CSAM Detection & Reporting</h2>
                    <p style={textStyle}>
                        Any Child Sexual Abuse Material (CSAM) detected on the platform is immediately
                        removed. We report all confirmed CSAM incidents to relevant Indian law enforcement
                        authorities and comply fully with applicable child safety laws and regulations, including
                        the Protection of Children from Sexual Offences (POCSO) Act, 2012 and the IT Act,
                        2000.
                    </p>
                </div>

                {/* SECTION 6 */}
                <div style={sectionStyle}>
                    <h2 style={headingStyle}>6. Content Moderation</h2>
                    <p style={textStyle}>
                        Hangout employs AI-powered content moderation including audio transcription and
                        analysis to detect and remove policy-violating content. Our moderation systems are
                        designed to proactively identify CSAE-related content and behavior before it causes
                        harm.
                    </p>
                </div>
                <div style={sectionStyle}>
                    <h2 style={headingStyle}>7. Ban Policy</h2>
                    <p style={textStyle}>
                        Hangout maintains a zero-tolerance policy toward any activity that endangers the safety of users, particularly minors. Any user found impersonating a minor, attempting to contact or exploit minors, engaging in grooming behavior, sharing child sexual abuse material (CSAM), or otherwise violating applicable child safety laws will have their account permanently suspended or terminated. Where required by applicable law, Hangout may preserve relevant information and report such activity to the appropriate law enforcement or regulatory authorities.
                    </p>
                </div>

                {/* SECTION 7 */}
                <div style={sectionStyle}>
                    <h2 style={headingStyle}>8. Child Safety Point of Contact</h2>

                    <p style={textStyle}>
                        For all child safety related concerns, please contact:
                    </p>

                    <p style={textStyle}>
                        • <strong>Child Safety / Grievance Officer:</strong>{" "}
                        <span style={{ color: colors.accent }}>Mr. Ayush Kumar</span> <br />

                        • <strong>Email:</strong>{" "}
                        <span style={{ color: colors.accent }}>grievance@hangoutclub.in</span> <br />

                        • <strong>Support:</strong>{" "}
                        <span style={{ color: colors.accent }}>support@hangoutclub.in</span> <br />

                        • <strong>Nodal Officer (Law Enforcement):</strong>{" "}
                        <span style={{ color: colors.accent }}>nodalofficer@hangoutclub.in</span> <br />

                        • <strong>Address:</strong> HangoutX Media Private Limited, B-128, First Floor,
                        Sector-2, Gautam Buddha Nagar, Uttar Pradesh 201301, India <br />

                        • <strong>Response Time:</strong> We aim to address all child safety complaints within 48 Hours.
                    </p>
                </div>
            </div>
        </div>
    );
}
