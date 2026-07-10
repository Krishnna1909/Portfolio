import { useState, useEffect, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import TerminalHero from "./components/TerminalHero";
import FrontendDeveloperSection from "./components/FrontendDeveloperSection";
import Showcase from "./components/Showcase";
import ContactSection from "./components/ContactSection";
import WelcomeScreen from "./components/WelcomeScreen";
import About from "./pages/About";
import DotField from "./components/DotField";
import { portfolioData } from "./config/portfolioData";
import { Menu, X } from "lucide-react";

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [time, setTime] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* GLOBAL FIXED INTERACTIVE DOT FIELD BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <DotField
          dotRadius={1.5}
          dotSpacing={20}
          cursorRadius={380}
          glowRadius={200}
          gradientFrom="rgba(255, 255, 255, 0.35)"
          gradientTo="rgba(200, 200, 255, 0.15)"
          glowColor="#ffffff"
          sparkle={true}
          waveAmplitude={1.2}
        />
      </div>

      <AnimatePresence>
        {showWelcome && (
          <WelcomeScreen onComplete={() => setShowWelcome(false)} />
        )}
      </AnimatePresence>

      <Routes>
        <Route
          path="/"
          element={
            <div className="relative z-10">
              {/* GLOBAL NAVBAR */}
              <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 lg:px-20 py-6 backdrop-blur-md bg-black/60 border-b border-white/10">
                <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
                    <span className="font-mono text-xs font-extrabold tracking-widest text-white">
                      {portfolioData.personal.brandName}
                    </span>
                  </div>

                  <ul className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.25em] font-mono text-white/70">
                    <li
                      onClick={() =>
                        document.getElementById("Home")?.scrollIntoView({
                          behavior: "smooth",
                        })
                      }
                      className="relative hover:text-white transition-colors cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                    >
                      Home
                    </li>

                    <li
                      onClick={() =>
                        document.getElementById("about")?.scrollIntoView({
                          behavior: "smooth",
                        })
                      }
                      className="relative hover:text-white transition-colors cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                    >
                      About
                    </li>

                    <li
                      onClick={() =>
                        document.getElementById("showcase")?.scrollIntoView({
                          behavior: "smooth",
                        })
                      }
                      className="relative hover:text-white transition-colors cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                    >
                      Projects
                    </li>

                    <li
                      onClick={() =>
                        document.getElementById("contact")?.scrollIntoView({
                          behavior: "smooth",
                        })
                      }
                      className="relative hover:text-white transition-colors cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                    >
                      Contact
                    </li>
                  </ul>

                  <div className="hidden md:block text-[10px] tracking-[0.3em] text-white/70 uppercase font-mono">
                    {time}
                  </div>

                  <button
                    onClick={() => setMobileMenu(!mobileMenu)}
                    className="md:hidden text-white z-50 cursor-pointer"
                  >
                    {mobileMenu ? <X size={24} /> : <Menu size={24} />}
                  </button>
                </div>
              </nav>

              {mobileMenu && (
                <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-10 text-white uppercase tracking-[0.3em] text-sm md:hidden font-mono">
                  <div className="absolute top-30 text-center">
                    <p className="text-[10px] text-white/40 tracking-[0.3em] mb-2">
                      TIME
                    </p>
                    <h2 className="text-2xl tracking-widest font-semibold text-white">
                      {time}
                    </h2>
                  </div>

                  <button
                    onClick={() => {
                      document.getElementById("Home")?.scrollIntoView({
                        behavior: "smooth",
                      });
                      setMobileMenu(false);
                    }}
                    className="relative after:absolute after:left-0 after:-bottom-2 after:h-[1px] after:w-0 after:bg-white after:transition-all hover:after:w-full hover:text-white"
                  >
                    Home
                  </button>

                  <button
                    onClick={() => {
                      document.getElementById("about")?.scrollIntoView({
                        behavior: "smooth",
                      });
                      setMobileMenu(false);
                    }}
                    className="relative after:absolute after:left-0 after:-bottom-2 after:h-[1px] after:w-0 after:bg-white after:transition-all hover:after:w-full hover:text-white"
                  >
                    About
                  </button>

                  <button
                    onClick={() => {
                      document.getElementById("showcase")?.scrollIntoView({
                        behavior: "smooth",
                      });
                      setMobileMenu(false);
                    }}
                    className="relative after:absolute after:left-0 after:-bottom-2 after:h-[1px] after:w-0 after:bg-white after:transition-all hover:after:w-full hover:text-white"
                  >
                    Projects
                  </button>

                  <button
                    onClick={() => {
                      document.getElementById("contact")?.scrollIntoView({
                        behavior: "smooth",
                      });
                      setMobileMenu(false);
                    }}
                    className="relative after:absolute after:left-0 after:-bottom-2 after:h-[1px] after:w-0 after:bg-white after:transition-all hover:after:w-full hover:text-white"
                  >
                    Contact
                  </button>
                </div>
              )}


              {/* TERMINAL HERO SECTION */}
              <section id="Home">
                <TerminalHero />
              </section>

              {/* ROLLING MARQUEE BANNER */}
              <div className="bg-black/80 border-t border-b border-white/10 py-5 overflow-hidden backdrop-blur-md">
                <div className="flex items-center gap-16 animate-marquee whitespace-nowrap">
                  {[...portfolioData.marqueeLogos, ...portfolioData.marqueeLogos, ...portfolioData.marqueeLogos, ...portfolioData.marqueeLogos].map((logo, i) => (
                    <span
                      key={i}
                      className="text-white/40 text-xs tracking-[0.3em] uppercase font-mono"
                    >
                      ✦ {logo}
                    </span>
                  ))}
                </div>
              </div>

              <style>{`
                @keyframes marquee {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-25%); }
                }
                .animate-marquee {
                  animation: marquee 12s linear infinite;
                }
              `}</style>

              <section id="about">
                <FrontendDeveloperSection />
              </section>
              <section id="showcase">
                <Showcase />
              </section>
              <section id="contact">
                <ContactSection />
              </section>
            </div>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}