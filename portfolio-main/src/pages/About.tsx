import { motion } from "framer-motion";
import { ArrowLeft, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { portfolioData } from "@/config/portfolioData";

export default function About() {
  const navigate = useNavigate();
  const text = `About ${portfolioData.personal.fullName}`;
  const [displayedText, setDisplayedText] = useState("");

  // TYPING EFFECT
  useEffect(() => {
    let index = 0;
    let interval: NodeJS.Timeout;

    const startTyping = () => {
      setDisplayedText("");
      interval = setInterval(() => {
        index++;
        setDisplayedText(text.slice(0, index));

        if (index === text.length) {
          clearInterval(interval);
          setTimeout(() => {
            index = 0;
            startTyping();
          }, 5000);
        }
      }, 100);
    };

    startTyping();
    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden text-white px-4 sm:px-6 py-10 font-mono">
      {/* ANIMATED BACKGROUND EFFECTS */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl opacity-20" />
      </div>

      {/* TOP NAV & BACK BUTTON */}
      <div className="relative z-10 max-w-5xl mx-auto flex items-center justify-between mb-8 sm:mb-12">
        <button
          onClick={() => navigate("/")}
          className="
            flex items-center gap-2
            px-4 py-2
            rounded-xl
            bg-white/5
            border border-white/15
            text-white/80
            hover:text-white
            hover:bg-white/10
            hover:border-white/30
            transition-all
            duration-300
            cursor-pointer
            backdrop-blur-md
          "
        >
          <ArrowLeft size={16} />
          <span className="text-xs font-semibold uppercase tracking-wider">Back to Home</span>
        </button>

        <span className="text-xs text-white/50 tracking-widest uppercase font-mono">
          ~/about-me
        </span>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto space-y-12">
        {/* HEADER TYPING TITLE */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white min-h-[56px] flex items-center justify-center">
            <span>
              {displayedText || "\u00A0"}
              <span className="inline-block w-3 h-8 bg-white ml-1 align-middle animate-pulse" />
            </span>
          </h1>
          <p className="text-xs sm:text-sm text-white/60 uppercase tracking-widest">
            {portfolioData.personal.role} · {portfolioData.education[0].institution}
          </p>
        </div>

        {/* BIO & SUMMARY CARD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="
            p-6
            sm:p-8
            rounded-3xl
            bg-white/[0.03]
            border
            border-white/15
            backdrop-blur-2xl
            space-y-4
            shadow-[0_20px_50px_rgba(0,0,0,0.8)]
          "
        >
          <h2 className="text-lg font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <span className="text-white/40">//</span> Professional Summary
          </h2>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed font-sans">
            {portfolioData.about.summary}
          </p>
          
          <div className="pt-3 border-t border-white/10 space-y-1">
            <span className="text-xs font-mono text-white/50 uppercase tracking-widest">// Mission</span>
            <p className="text-sm sm:text-base text-white font-sans font-medium italic">
              &quot;{portfolioData.about.careerObjective}&quot;
            </p>
          </div>
        </motion.div>

        {/* EDUCATION SECTION */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-white tracking-wide flex items-center gap-2">
            <span className="text-white/40">//</span> Education
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {portfolioData.education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="
                  p-5
                  rounded-2xl
                  bg-white/[0.02]
                  border
                  border-white/10
                  hover:border-white/30
                  transition-all
                  space-y-2
                "
              >
                <span className="text-[10px] text-white/50 uppercase tracking-wider">{edu.years}</span>
                <h3 className="text-sm font-bold text-white">{edu.institution}</h3>
                <p className="text-xs text-white/70 font-sans">{edu.degree}</p>
                <div className="pt-2 text-xs font-bold text-white">{edu.score}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* KEY HIGHLIGHTS & STRENGTHS */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-white tracking-wide flex items-center gap-2">
            <span className="text-white/40">//</span> Key Strengths &amp; Competencies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {portfolioData.about.strengths.map((strength, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="
                  p-4
                  rounded-xl
                  bg-white/[0.03]
                  border
                  border-white/10
                  hover:border-white/30
                  text-xs
                  text-white/90
                  font-sans
                  flex
                  items-center
                  gap-3
                "
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                <span>{strength}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* DIRECT RESUME PDF DOWNLOAD BUTTON */}
        <div className="pt-8 flex justify-center">
          <a
            href="/assets/Krishna_Singh_Resume.pdf"
            download="Krishna_Singh_Resume.pdf"
            className="
              relative
              group
              px-8
              py-4
              rounded-2xl
              border
              border-white/20
              bg-white/10
              backdrop-blur-xl
              hover:bg-white/20
              hover:border-white/40
              transition-all
              duration-300
              shadow-[0_10px_40px_rgba(0,0,0,0.6)]
              cursor-pointer
              font-mono
              inline-flex
              items-center
              gap-3
            "
          >
            <Download
              size={20}
              className="
                group-hover:scale-110
                group-hover:-translate-y-1
                transition-all
                duration-300
                text-white
              "
            />
            <span className="font-semibold tracking-wide text-white">
              Download Resume PDF
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}