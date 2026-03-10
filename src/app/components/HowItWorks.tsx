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
              <div key={step.number} style={{ position: "relative" }}>
                {/* Connector line */}
                {idx < steps.length - 1 && (
                  <div className="step-connector" />
                )}

                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  gap: "20px",
                }}>
                  {/* Number + Icon */}
                  <div style={{ position: "relative" }}>
                    <div style={{
                      width: "90px",
                      height: "90px",
                      borderRadius: "50%",
                      background: "rgba(110,43,184,0.25)",
                      border: "2px solid rgba(110,43,184,0.5)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 0 30px rgba(110,43,184,0.3)",
                      position: "relative",
                    }}>
                      <Icon size={36} color="#c084fc" />
                    </div>
                    <div style={{
                      position: "absolute",
                      top: "-8px",
                      right: "-8px",
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      backgroundColor: "#6E2BB8",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "11px",
                      fontWeight: 800,
                      color: "white",
                      boxShadow: "0 4px 10px rgba(110,43,184,0.5)",
                    }}>
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 style={{
                      fontSize: "18px",
                      fontWeight: 700,
                      color: "white",
                      margin: "0 0 10px 0",
                    }}>
                      {step.title}
                    </h3>
                    <p style={{
                      fontSize: "14px",
                      color: "rgba(255,255,255,0.6)",
                      lineHeight: 1.7,
                      margin: 0,
                      maxWidth: "220px",
                    }}>
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
          gap: 32px;
          position: relative;
        }
        .step-connector {
          position: absolute;
          top: 44px;
          right: -16px;
          width: 32px;
          height: 2px;
          background: linear-gradient(90deg, rgba(110,43,184,0.6), rgba(110,43,184,0.2));
          z-index: 1;
        }
        @media (max-width: 900px) {
          .steps-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 48px;
          }
          .step-connector {
            display: none;
          }
        }
        @media (max-width: 540px) {
          .steps-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
