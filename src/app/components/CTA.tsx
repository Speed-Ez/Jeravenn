import { ArrowRight, Phone } from "lucide-react";

export function CTA() {
  const handleScroll = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      style={{
        padding: "80px 24px",
        background: "linear-gradient(135deg, #6E2BB8 0%, #4a1a8a 100%)",
        fontFamily: "'Poppins', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decorations */}
      <div style={{
        position: "absolute",
        top: "-60px",
        right: "-60px",
        width: "300px",
        height: "300px",
        borderRadius: "50%",
        background: "rgba(255,255,255,0.05)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute",
        bottom: "-80px",
        left: "10%",
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        background: "rgba(255,255,255,0.04)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute",
        top: "20px",
        left: "5%",
        width: "120px",
        height: "120px",
        borderRadius: "50%",
        border: "2px solid rgba(255,255,255,0.1)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center", position: "relative" }}>
        <span style={{
          backgroundColor: "rgba(255,255,255,0.15)",
          color: "rgba(255,255,255,0.9)",
          padding: "6px 18px",
          borderRadius: "50px",
          fontSize: "13px",
          fontWeight: 600,
          display: "inline-block",
          marginBottom: "24px",
        }}>
          Get Started Today
        </span>

        <h2 style={{
          fontSize: "clamp(28px, 4vw, 50px)",
          fontWeight: 800,
          color: "white",
          margin: "0 0 20px 0",
          lineHeight: 1.2,
        }}>
          Ready to Simplify Your Logistics?
        </h2>
        <p style={{
          fontSize: "17px",
          color: "rgba(255,255,255,0.75)",
          margin: "0 auto 40px",
          maxWidth: "540px",
          lineHeight: 1.7,
        }}>
          Join hundreds of e-commerce merchants across Abuja who trust Jeraven to handle their deliveries. Start today — it's simple.
        </p>

        <div className="cta-btn-row" style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}>
          <button
            onClick={() => handleScroll("#contact")}
            style={{
              backgroundColor: "white",
              color: "#6E2BB8",
              padding: "16px 34px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              fontSize: "15px",
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              gap: "8px",
              transition: "all 0.25s",
              boxShadow: "0 6px 24px rgba(0,0,0,0.15)",
              fontFamily: "'Poppins', sans-serif",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 32px rgba(0,0,0,0.2)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 24px rgba(0,0,0,0.15)"; }}
          >
            Get a Quote
            <ArrowRight size={18} />
          </button>
          <a
            href="tel:+2349026707113"
            style={{
              backgroundColor: "transparent",
              color: "white",
              padding: "16px 34px",
              borderRadius: "10px",
              border: "2px solid rgba(255,255,255,0.5)",
              cursor: "pointer",
              fontSize: "15px",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              gap: "8px",
              textDecoration: "none",
              transition: "all 0.25s",
              fontFamily: "'Poppins', sans-serif",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "white"; (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.1)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.5)"; (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"; }}
          >
            <Phone size={18} />
            Contact Us
          </a>
        </div>

        {/* Trust indicators */}
        <div className="cta-stats" style={{ display: "flex", flexWrap: "wrap", gap: "32px", justifyContent: "center", marginTop: "48px" }}>
          {[["500+", "Deliveries Made"], ["98%", "Satisfaction Rate"], ["24hr", "Support Available"], ["2024", "Est. Abuja, Nigeria"]].map(([val, label]) => (
            <div key={label} style={{ textAlign: "center" }}>
              <p style={{ margin: 0, fontSize: "26px", fontWeight: 800, color: "white" }}>{val}</p>
              <p style={{ margin: 0, fontSize: "13px", color: "rgba(255,255,255,0.65)" }}>{label}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .cta-stats {
            display: grid !important;
            grid-template-columns: 1fr 1fr;
            gap: 20px !important;
            margin-top: 36px !important;
          }
        }
      `}</style>
    </section>
  );
}