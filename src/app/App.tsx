import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { HowItWorks } from "./components/HowItWorks";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { CTA } from "./components/CTA";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", overflowX: "hidden" }}>
      <style>{`
        /* Global mobile section padding reduction */
        @media (max-width: 600px) {
          #about, #services, #why-us, #contact {
            padding-top: 64px !important;
            padding-bottom: 64px !important;
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
          #how-it-works {
            padding-top: 60px !important;
            padding-bottom: 60px !important;
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
          #home > div {
            padding-left: 16px !important;
            padding-right: 16px !important;
            padding-top: 40px !important;
            padding-bottom: 40px !important;
          }
        }
        /* Full-width CTA buttons on very small screens */
        @media (max-width: 420px) {
          .cta-btn-row {
            flex-direction: column !important;
            align-items: stretch !important;
          }
          .cta-btn-row a,
          .cta-btn-row button {
            justify-content: center !important;
            width: 100% !important;
          }
        }
      `}</style>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <HowItWorks />
      <WhyChooseUs />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}