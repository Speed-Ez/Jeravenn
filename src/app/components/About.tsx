import truckImg from "figma:asset/7d16dca7ee0f60f1f0f9c9faab3b7f2e1d4c138d.png";
import { MapPin, Calendar, Target, CheckCircle2 } from "lucide-react";

const highlights = [
  "Last-mile delivery across Abuja",
  "Inventory storage & management",
  "Order fulfillment for e-commerce",
  "Real-time shipment tracking",
];

export function About() {
  return (
    <section
      id="about"
      style={{
        padding: "100px 24px",
        backgroundColor: "#ffffff",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Section Label */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span style={{
            backgroundColor: "rgba(110,43,184,0.08)",
            color: "#6E2BB8",
            padding: "6px 18px",
            borderRadius: "50px",
            fontSize: "13px",
            fontWeight: 600,
          }}>
            Who We Are
          </span>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 800,
            color: "#1a1a2e",
            marginTop: "16px",
            marginBottom: "0",
          }}>
            About <span style={{ color: "#6E2BB8" }}>Jeraven Logistics</span>
          </h2>
        </div>

        <div className="about-grid">
          {/* Left Image */}
          <div style={{ position: "relative" }}>
            <div style={{
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 16px 50px rgba(110,43,184,0.18)",
            }}>
              <img
                src={truckImg}
                alt="Jeraven Logistics Truck"
                style={{ width: "100%", height: "380px", objectFit: "cover", display: "block" }}
              />
            </div>
            {/* Company info cards */}
            <div style={{
              position: "absolute",
              bottom: "24px",
              left: "24px",
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "16px 20px",
              boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
              display: "flex",
              gap: "20px",
            }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#6E2BB8" }}>
                  <Calendar size={16} />
                  <span style={{ fontSize: "12px", fontWeight: 600, color: "#666" }}>FOUNDED</span>
                </div>
                <p style={{ margin: 0, fontSize: "20px", fontWeight: 800, color: "#1a1a2e" }}>2024</p>
              </div>
              <div style={{ width: "1px", backgroundColor: "#eee" }} />
              <div style={{ textAlign: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#6E2BB8" }}>
                  <MapPin size={16} />
                  <span style={{ fontSize: "12px", fontWeight: 600, color: "#666" }}>LOCATION</span>
                </div>
                <p style={{ margin: 0, fontSize: "14px", fontWeight: 700, color: "#1a1a2e" }}>Apo, Abuja</p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px", justifyContent: "center" }}>
            <p className="about-body-text" style={{
              color: "#555",
              lineHeight: 1.85,
              margin: 0,
            }}>
              Jeraven Logistics Limited is a <strong style={{ color: "#6E2BB8" }}>technology-driven logistics company</strong> based in Abuja, providing end-to-end delivery and fulfillment services for e-commerce businesses.
            </p>
            <p className="about-body-text" style={{
              color: "#555",
              lineHeight: 1.85,
              margin: 0,
            }}>
              We help businesses manage their entire logistics chain — from the warehouse shelf to the customer's doorstep.
            </p>

            {/* Highlights */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {highlights.map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <CheckCircle2 size={20} color="#6E2BB8" style={{ flexShrink: 0 }} />
                  <span className="about-highlight-text" style={{ color: "#444", fontWeight: 500 }}>{item}</span>
                </div>
              ))}
            </div>

            {/* Mission */}
            <div style={{
              backgroundColor: "#f8f4ff",
              borderLeft: "4px solid #6E2BB8",
              borderRadius: "0 12px 12px 0",
              padding: "20px 24px",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                <Target size={18} color="#6E2BB8" />
                <span className="about-mission-label" style={{ fontWeight: 700, color: "#6E2BB8", textTransform: "uppercase", letterSpacing: "0.5px" }}>Our Mission</span>
              </div>
              <p className="about-mission-text" style={{ margin: 0, color: "#444", lineHeight: 1.7, fontStyle: "italic" }}>
                "Deliver fast, reliable, and scalable logistics solutions that power e-commerce growth."
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }
        .about-body-text { font-size: 16px; }
        .about-highlight-text { font-size: 15px; }
        .about-mission-label { font-size: 13px; }
        .about-mission-text { font-size: 15px; }

        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        /* Mobile: match Services section font sizes */
        @media (max-width: 600px) {
          .about-body-text { font-size: 13px; }
          .about-highlight-text { font-size: 13px; }
          .about-mission-label { font-size: 11px; }
          .about-mission-text { font-size: 13px; }
        }
      `}</style>
    </section>
  );
}