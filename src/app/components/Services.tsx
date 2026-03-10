import { Bike, Warehouse, Package, Radio, ArrowRight } from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: Bike,
    title: "Last-Mile Delivery",
    description: "Same-day, next-day, and scheduled delivery across Abuja. Fast, reliable dispatch riders ready to move your packages.",
    color: "#6E2BB8",
    bg: "#f8f4ff",
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    description: "Secure storage facilities with real-time inventory tracking. Your products are safe, organized, and ready to ship.",
    color: "#6E2BB8",
    bg: "#f8f4ff",
  },
  {
    icon: Package,
    title: "Order Fulfillment",
    description: "Pick, pack, and ship services for online merchants. We handle every order with precision and care.",
    color: "#6E2BB8",
    bg: "#f8f4ff",
  },
  {
    icon: Radio,
    title: "Real-Time Tracking",
    description: "Live updates for merchants and customers. Know exactly where your package is at every step of the journey.",
    color: "#6E2BB8",
    bg: "#f8f4ff",
  },
];

export function Services() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="services"
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
            What We Offer
          </span>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 800,
            color: "#1a1a2e",
            marginTop: "16px",
            marginBottom: "16px",
          }}>
            Our <span style={{ color: "#6E2BB8" }}>Services</span>
          </h2>
          <p style={{ fontSize: "16px", color: "#666", maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>
            End-to-end logistics solutions designed specifically for e-commerce businesses in Abuja.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="services-grid">
          {services.map((service, idx) => {
            const Icon = service.icon;
            const isHovered = hovered === idx;
            return (
              <div
                key={service.title}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  backgroundColor: isHovered ? "#6E2BB8" : "white",
                  borderRadius: "20px",
                  padding: "40px 32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  boxShadow: isHovered
                    ? "0 20px 50px rgba(110,43,184,0.35)"
                    : "0 4px 20px rgba(0,0,0,0.06)",
                  transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                  transform: isHovered ? "translateY(-8px)" : "translateY(0)",
                  cursor: "pointer",
                  border: "1px solid",
                  borderColor: isHovered ? "transparent" : "rgba(0,0,0,0.06)",
                }}
              >
                {/* Icon */}
                <div style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "16px",
                  backgroundColor: isHovered ? "rgba(255,255,255,0.15)" : service.bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.35s",
                }}>
                  <Icon size={28} color={isHovered ? "white" : service.color} />
                </div>

                {/* Content */}
                <div>
                  <h3 style={{
                    fontSize: "20px",
                    fontWeight: 700,
                    color: isHovered ? "white" : "#1a1a2e",
                    margin: "0 0 10px 0",
                    transition: "color 0.35s",
                  }}>
                    {service.title}
                  </h3>
                  <p style={{
                    fontSize: "14px",
                    color: isHovered ? "rgba(255,255,255,0.82)" : "#666",
                    lineHeight: 1.75,
                    margin: 0,
                    transition: "color 0.35s",
                  }}>
                    {service.description}
                  </p>
                </div>

                {/* Learn More */}
                <button
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    cursor: "pointer",
                    color: isHovered ? "white" : "#6E2BB8",
                    fontSize: "14px",
                    fontWeight: 600,
                    padding: 0,
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    marginTop: "auto",
                    transition: "gap 0.2s",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  Learn More
                  <ArrowRight size={16} />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        @media (max-width: 1100px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
