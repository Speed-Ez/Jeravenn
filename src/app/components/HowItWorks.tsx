import { ShoppingBag, PackageCheck, Bike, Home } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ShoppingBag,
    title: "Merchant Sends Order",
    description: "You receive an order from your customer and notify Jeraven through our easy merchant portal.",
    color: "#6E2BB8",
  },
  {
    number: "02",
    icon: PackageCheck,
    title: "Jeraven Picks & Packs",
    description: "Our team retrieves your item from storage, carefully packs it, and prepares it for dispatch.",
    color: "#8B4DC8",
  },
  {
    number: "03",
    icon: Bike,
    title: "Package Dispatched",
    description: "Our trained dispatch rider picks up the package and heads directly to your customer's location.",
    color: "#A060D8",
  },
  {
    number: "04",
    icon: Home,
    title: "Customer Receives Delivery",
    description: "Your customer gets their order fast and safe. Real-time tracking keeps everyone in the loop.",
    color: "#B870E8",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      style={{
        padding: "100px 24px",
        background: "linear-gradient(180deg, #1a1a2e 0%, #2d1b5e 100%)",
        fontFamily: "'Poppins', sans-serif",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Background pattern */}
      <div style={{
        position: "absolute",
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: "radial-gradient(circle at 20% 50%, rgba(110,43,184,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(110,43,184,0.12) 0%, transparent 40%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <span style={{
            backgroundColor: "rgba(255,255,255,0.1)",
            color: "rgba(255,255,255,0.85)",
            padding: "6px 18px",
            borderRadius: "50px",
            fontSize: "13px",
            fontWeight: 600,
          }}>
            Simple Process
          </span>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 800,
            color: "white",
            marginTop: "16px",
            marginBottom: "16px",
          }}>
            How It <span style={{ color: "#c084fc" }}>Works</span>
          </h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.65)", maxWidth: "480px", margin: "0 auto", lineHeight: 1.7 }}>
            From order to doorstep in 4 simple steps. We make logistics effortless.
          </p>
        </div>

        {/* Steps */}
        <div className="steps-grid">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="step-card">
                <div className="step-inner">
                  {/* Number + Icon */}
                  <div style={{ position: "relative", display: "inline-flex" }}>
                    <div className="step-circle">
                      <Icon size={32} color="#c084fc" />
                    </div>
                    <div className="step-number">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="step-title">
                      {step.title}
                    </h3>
                    <p className="step-desc">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 28px;
          position: relative;
        }
        .step-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(110,43,184,0.25);
          border-radius: 20px;
          padding: 32px 20px;
          transition: all 0.3s;
        }
        .step-card:hover {
          background: rgba(110,43,184,0.15);
          border-color: rgba(110,43,184,0.5);
          transform: translateY(-4px);
        }
        .step-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 18px;
        }
        .step-circle {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: rgba(110,43,184,0.25);
          border: 2px solid rgba(110,43,184,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 24px rgba(110,43,184,0.3);
        }
        .step-number {
          position: absolute;
          top: -8px;
          right: -8px;
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: #6E2BB8;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 800;
          color: white;
          box-shadow: 0 4px 10px rgba(110,43,184,0.5);
        }
        .step-title {
          font-size: 16px;
          font-weight: 700;
          color: white;
          margin: 0 0 8px 0;
        }
        .step-desc {
          font-size: 13px;
          color: rgba(255,255,255,0.6);
          line-height: 1.65;
          margin: 0;
        }

        @media (max-width: 1000px) {
          .steps-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }

        /* Mobile: stays 2×2, more compact */
        @media (max-width: 600px) {
          .steps-grid {
            grid-template-columns: 1fr 1fr;
            gap: 14px;
          }
          .step-card {
            padding: 22px 14px;
            border-radius: 16px;
          }
          .step-circle {
            width: 60px;
            height: 60px;
          }
          .step-number {
            width: 22px;
            height: 22px;
            font-size: 10px;
            top: -6px;
            right: -6px;
          }
          .step-title {
            font-size: 13px;
            margin: 0 0 6px 0;
          }
          .step-desc {
            font-size: 11.5px;
            line-height: 1.55;
          }
          .step-inner {
            gap: 12px;
          }
        }

        @media (max-width: 360px) {
          .step-card {
            padding: 18px 10px;
          }
          .step-circle {
            width: 52px;
            height: 52px;
          }
        }
      `}</style>
    </section>
  );
}