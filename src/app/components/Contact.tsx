import { MapPin, Phone, Instagram, Send, CheckCircle } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    businessName: "",
    deliveryRequest: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px 16px",
    borderRadius: "10px",
    border: "1.5px solid rgba(110,43,184,0.15)",
    fontSize: "14px",
    fontFamily: "'Poppins', sans-serif",
    color: "#333",
    backgroundColor: "#fafafa",
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
    boxSizing: "border-box",
  };

  return (
    <section
      id="contact"
      style={{
        padding: "100px 24px",
        backgroundColor: "#f9f9fb",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <span style={{
            backgroundColor: "rgba(110,43,184,0.08)",
            color: "#6E2BB8",
            padding: "6px 18px",
            borderRadius: "50px",
            fontSize: "13px",
            fontWeight: 600,
          }}>
            Get In Touch
          </span>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 800,
            color: "#1a1a2e",
            marginTop: "16px",
            marginBottom: "16px",
          }}>
            Contact <span style={{ color: "#6E2BB8" }}>Jeraven</span>
          </h2>
          <p style={{ fontSize: "16px", color: "#666", maxWidth: "480px", margin: "0 auto", lineHeight: 1.7 }}>
            Ready to get started? Reach out and our team will get back to you within minutes.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left: Contact Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            <div>
              <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#1a1a2e", marginBottom: "8px", marginTop: 0 }}>
                Let's Talk Logistics
              </h3>
              <p style={{ fontSize: "15px", color: "#666", lineHeight: 1.7, margin: 0 }}>
                Whether you need a one-time delivery or a long-term fulfillment partner, we're here for you.
              </p>
            </div>

            {/* Info Cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{
                display: "flex",
                gap: "16px",
                padding: "20px",
                backgroundColor: "white",
                borderRadius: "14px",
                border: "1px solid rgba(110,43,184,0.1)",
                boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
              }}>
                <div style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(110,43,184,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <MapPin size={22} color="#6E2BB8" />
                </div>
                <div>
                  <p style={{ margin: "0 0 4px 0", fontSize: "12px", fontWeight: 700, color: "#6E2BB8", textTransform: "uppercase", letterSpacing: "0.5px" }}>Address</p>
                  <p style={{ margin: 0, fontSize: "14px", color: "#444", lineHeight: 1.6 }}>
                    Block C, C1001 Apo Urban Market<br />
                    Apo Resettlement, Abuja
                  </p>
                </div>
              </div>

              <div style={{
                display: "flex",
                gap: "16px",
                padding: "20px",
                backgroundColor: "white",
                borderRadius: "14px",
                border: "1px solid rgba(110,43,184,0.1)",
                boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
              }}>
                <div style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(110,43,184,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <Phone size={22} color="#6E2BB8" />
                </div>
                <div>
                  <p style={{ margin: "0 0 4px 0", fontSize: "12px", fontWeight: 700, color: "#6E2BB8", textTransform: "uppercase", letterSpacing: "0.5px" }}>Phone</p>
                  <a href="tel:+2349026707113" style={{ display: "block", fontSize: "14px", color: "#444", textDecoration: "none", fontWeight: 600 }}>+234 902 670 7113</a>
                  <a href="tel:+2348132800260" style={{ display: "block", fontSize: "14px", color: "#666", textDecoration: "none" }}>+234 813 280 0260</a>
                </div>
              </div>

              <div style={{
                display: "flex",
                gap: "16px",
                padding: "20px",
                backgroundColor: "white",
                borderRadius: "14px",
                border: "1px solid rgba(110,43,184,0.1)",
                boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
              }}>
                <div style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(110,43,184,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <Instagram size={22} color="#6E2BB8" />
                </div>
                <div>
                  <p style={{ margin: "0 0 4px 0", fontSize: "12px", fontWeight: 700, color: "#6E2BB8", textTransform: "uppercase", letterSpacing: "0.5px" }}>Instagram</p>
                  <a href="https://instagram.com/abuja_ecommerce_logistics" target="_blank" rel="noopener noreferrer" style={{ fontSize: "14px", color: "#444", textDecoration: "none", fontWeight: 600 }}>
                    @abuja_ecommerce_logistics
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div style={{
            backgroundColor: "white",
            borderRadius: "20px",
            padding: "40px",
            boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
            border: "1px solid rgba(110,43,184,0.08)",
          }}>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "40px 20px" }}>
                <div style={{
                  width: "72px",
                  height: "72px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(110,43,184,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px",
                }}>
                  <CheckCircle size={36} color="#6E2BB8" />
                </div>
                <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#1a1a2e", margin: "0 0 12px 0" }}>
                  Message Sent!
                </h3>
                <p style={{ fontSize: "15px", color: "#666", lineHeight: 1.7, margin: "0 0 24px" }}>
                  Thank you for reaching out! Our team will contact you within minutes.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: "", phone: "", businessName: "", deliveryRequest: "", message: "" }); }}
                  style={{
                    backgroundColor: "#6E2BB8",
                    color: "white",
                    padding: "12px 28px",
                    borderRadius: "8px",
                    border: "none",
                    cursor: "pointer",
                    fontWeight: 600,
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "14px",
                  }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#1a1a2e", margin: "0 0 4px 0" }}>
                  Send Us a Message
                </h3>

                <div>
                  <label style={{ fontSize: "13px", fontWeight: 600, color: "#444", display: "block", marginBottom: "6px" }}>Full Name *</label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    style={inputStyle}
                    onFocus={(e) => { e.target.style.borderColor = "#6E2BB8"; e.target.style.boxShadow = "0 0 0 3px rgba(110,43,184,0.1)"; }}
                    onBlur={(e) => { e.target.style.borderColor = "rgba(110,43,184,0.15)"; e.target.style.boxShadow = "none"; }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: "13px", fontWeight: 600, color: "#444", display: "block", marginBottom: "6px" }}>Phone Number *</label>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+234 800 000 0000"
                    required
                    style={inputStyle}
                    onFocus={(e) => { e.target.style.borderColor = "#6E2BB8"; e.target.style.boxShadow = "0 0 0 3px rgba(110,43,184,0.1)"; }}
                    onBlur={(e) => { e.target.style.borderColor = "rgba(110,43,184,0.15)"; e.target.style.boxShadow = "none"; }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: "13px", fontWeight: 600, color: "#444", display: "block", marginBottom: "6px" }}>Business Name</label>
                  <input
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    placeholder="Your business or store name"
                    style={inputStyle}
                    onFocus={(e) => { e.target.style.borderColor = "#6E2BB8"; e.target.style.boxShadow = "0 0 0 3px rgba(110,43,184,0.1)"; }}
                    onBlur={(e) => { e.target.style.borderColor = "rgba(110,43,184,0.15)"; e.target.style.boxShadow = "none"; }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: "13px", fontWeight: 600, color: "#444", display: "block", marginBottom: "6px" }}>Delivery Request</label>
                  <select
                    name="deliveryRequest"
                    value={formData.deliveryRequest}
                    onChange={handleChange}
                    style={{ ...inputStyle, cursor: "pointer" }}
                    onFocus={(e) => { e.target.style.borderColor = "#6E2BB8"; e.target.style.boxShadow = "0 0 0 3px rgba(110,43,184,0.1)"; }}
                    onBlur={(e) => { e.target.style.borderColor = "rgba(110,43,184,0.15)"; e.target.style.boxShadow = "none"; }}
                  >
                    <option value="">Select a service</option>
                    <option value="same-day">Same-Day Delivery</option>
                    <option value="next-day">Next-Day Delivery</option>
                    <option value="scheduled">Scheduled Delivery</option>
                    <option value="warehousing">Warehousing</option>
                    <option value="fulfillment">Order Fulfillment</option>
                    <option value="partnership">Merchant Partnership</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: "13px", fontWeight: 600, color: "#444", display: "block", marginBottom: "6px" }}>Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your delivery needs..."
                    rows={4}
                    style={{ ...inputStyle, resize: "vertical" }}
                    onFocus={(e) => { e.target.style.borderColor = "#6E2BB8"; e.target.style.boxShadow = "0 0 0 3px rgba(110,43,184,0.1)"; }}
                    onBlur={(e) => { e.target.style.borderColor = "rgba(110,43,184,0.15)"; e.target.style.boxShadow = "none"; }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    backgroundColor: loading ? "#9a5fd4" : "#6E2BB8",
                    color: "white",
                    padding: "15px 28px",
                    borderRadius: "10px",
                    border: "none",
                    cursor: loading ? "not-allowed" : "pointer",
                    fontSize: "15px",
                    fontWeight: 600,
                    fontFamily: "'Poppins', sans-serif",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    transition: "all 0.25s",
                    boxShadow: "0 4px 20px rgba(110,43,184,0.3)",
                  }}
                >
                  {loading ? "Sending..." : (
                    <>
                      Send Message
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 60px;
          align-items: start;
        }
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
        }
      `}</style>
    </section>
  );
}
