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
                className="service-card"
                style={{
                  backgroundColor: isHovered ? "#6E2BB8" : "white",
                  boxShadow: isHovered
                    ? "0 20px 50px rgba(110,43,184,0.35)"
                    : "0 4px 20px rgba(0,0,0,0.06)",
                  transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                  transform: isHovered ? "translateY(-6px)" : "translateY(0)",
                  cursor: "pointer",
                  border: "1px solid",
                  borderColor: isHovered ? "transparent" : "rgba(0,0,0,0.06)",
                }}
              >
                {/* Icon */}
                <div className="service-icon-wrap" style={{
                  backgroundColor: isHovered ? "rgba(255,255,255,0.15)" : service.bg,
                  transition: "all 0.35s",
                }}>
                  <Icon size={26} color={isHovered ? "white" : service.color} />
                </div>

                {/* Content */}
                <div className="service-content">
                  <h3 className="service-title" style={{
                    color: isHovered ? "white" : "#1a1a2e",
                    transition: "color 0.35s",
                  }}>
                    {service.title}
                  </h3>
                  <p className="service-desc" style={{
                    color: isHovered ? "rgba(255,255,255,0.82)" : "#666",
                    transition: "color 0.35s",
                  }}>
                    {service.description}
                  </p>
                </div>

                {/* Learn More */}
                <button
                  className="service-btn"
                  style={{
                    color: isHovered ? "white" : "#6E2BB8",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  Learn More
                  <ArrowRight size={14} />
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
        .service-card {
          border-radius: 20px;
          padding: 36px 28px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .service-icon-wrap {
          width: 56px;
          height: 56px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .service-title {
          font-size: 18px;
          font-weight: 700;
          margin: 0 0 8px 0;
        }
        .service-desc {
          font-size: 13px;
          line-height: 1.7;
          margin: 0;
        }
        .service-btn {
          background: transparent;
          border: none;
          cursor: pointer;
          font-size: 13px;
          font-weight: 600;
          padding: 0;
          display: flex;
          align-items: center;
          gap: 5px;
          margin-top: auto;
        }

        @media (max-width: 1100px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* Mobile: compact 2×2 grid */
        @media (max-width: 600px) {
          .services-grid {
            grid-template-columns: 1fr 1fr;
            gap: 12px;
          }
          .service-card {
            border-radius: 16px;
            padding: 20px 16px;
            gap: 10px;
          }
          .service-icon-wrap {
            width: 44px;
            height: 44px;
            border-radius: 10px;
          }
          .service-title {
            font-size: 14px;
            margin: 0 0 4px 0;
          }
          .service-desc {
            font-size: 12px;
            line-height: 1.6;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .service-btn {
            font-size: 12px;
            gap: 4px;
          }
        }

        @media (max-width: 360px) {
          .services-grid {
            grid-template-columns: 1fr 1fr;
            gap: 10px;
          }
          .service-card {
            padding: 16px 12px;
          }
        }
      `}</style>
    </section>
  );
}