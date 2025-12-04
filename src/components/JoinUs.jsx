import React, { useState } from "react";

import HeroSectionI from "../assets/HeroSectionI.webp";
import colors from "../constants/colors";
import Button from "./ui/Buttton";


export default function JoinUs() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    reason: "creator",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Handle input updates
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle API Submit
  const handleSubmit = async () => {
    if (!formData.name || !formData.phone) {
      setMessage("Please fill all fields.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("https://api.chatspark.in/api/v1/website/join-us", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setMessage("Submitted successfully!");
        setFormData({ name: "", phone: "", reason: "creator" });
      } else {
        setMessage(data.message || "Something went wrong.");
      }
    } catch (err) {
      setMessage("Server error. Try again later.");
    }

    setLoading(false);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        background: colors.gradientVertical,
        padding: "40px 20px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: "60px",
          flexWrap: "wrap",
        }}
      >
        {/* LEFT IMAGE */}
        <div style={{ flex: 1, minWidth: "320px" }}>
          <img
            src={HeroSectionI}
            alt="Join Us"
            style={{ width: "100%", borderRadius: "12px" }}
          />
        </div>

        {/* RIGHT FORM */}
        <div style={{ flex: 1, minWidth: "360px" }}>
          <h1
            style={{
              fontSize: "44px",
              fontWeight: "700",
              color: "white",
              marginBottom: "10px",
            }}
          >
            Want To <span style={{ color: colors.accent }}>Join Us?</span>
          </h1>

          <p
            style={{
              color: colors.accent,
              fontSize: "19px",
              lineHeight: "1.6",
              marginBottom: "32px",
              maxWidth: "480px",
            }}
          >
            Help us create games that spark fun, destiny, and real connections.
            Join our team and be part of building playful worlds where
            entertainment meets friendship.
          </p>

          {/* NAME */}
          <label style={{ color: colors.textPrimary, fontSize: "16px", fontWeight: "600" }}>
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "14px 18px",
              marginTop: "8px",
              marginBottom: "20px",
              borderRadius: "12px",
              backgroundColor: colors.inputBg,
              border: `1px solid ${colors.cardBorder}`,
              color: colors.textPrimary,
              fontSize: "15px",
            }}
          />

          {/* PHONE */}
          <label style={{ color: colors.textPrimary, fontSize: "16px", fontWeight: "600" }}>
            Phone Number
          </label>
          <input
            type="text"
            name="phone"
            placeholder="+91 | Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "14px 18px",
              marginTop: "8px",
              marginBottom: "20px",
              borderRadius: "12px",
              backgroundColor: colors.inputBg,
              border: `1px solid ${colors.cardBorder}`,
              color: colors.textPrimary,
              fontSize: "15px",
            }}
          />

          {/* REASON */}
          <label style={{ color: colors.textPrimary, fontSize: "16px", fontWeight: "600" }}>
            Reason To Contact Us
          </label>
          <select
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "14px 18px",
              marginTop: "8px",
              marginBottom: "30px",
              borderRadius: "12px",
              backgroundColor: colors.inputBg,
              border: `1px solid ${colors.cardBorder}`,
              color: colors.textSecondary,
              fontSize: "15px",
            }}
          >
            <option value="creator">Want to join as creator</option>
            <option value="job">Looking for job</option>
          </select>

          {/* SUBMIT BUTTON */}
          <Button
            size="lg"
            variant="primary"
            style={{ borderRadius: "12px", paddingLeft: "40px", paddingRight: "40px" }}
            onClick={handleSubmit}
          >
            {loading ? "Submitting..." : "Submit"}
          </Button>

          {/* MESSAGE */}
          {message && (
            <p style={{ marginTop: "16px", color: colors.accent, fontSize: "16px" }}>
              {message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
