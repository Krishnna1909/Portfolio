import { useState, useRef, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { portfolioData } from "@/config/portfolioData";

interface Message {
  sender: "system" | "user" | "bot";
  text: string;
}

export default function TerminalHero() {
  const [typedName, setTypedName] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const fullName = portfolioData.personal.fullName; // "Krishna Singh"
  const [inputMsg, setInputMsg] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "system",
      text: `connected to ${portfolioData.personal.fullName.toLowerCase().replace(/\s+/g, "")}.dev — ask anything about Krishna's resume, NIT Kurukshetra, AI/ML projects, or availability.`,
    },
  ]);

  // CONTINUOUS TYPEWRITER LOOP EFFECT
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (!isDeleting && typedName.length < fullName.length) {
      // Type forward
      timer = setTimeout(() => {
        setTypedName(fullName.slice(0, typedName.length + 1));
      }, 130);
    } else if (!isDeleting && typedName.length === fullName.length) {
      // Hold for 3.5s when fully typed
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 3500);
    } else if (isDeleting && typedName.length > 0) {
      // Backspace / delete
      timer = setTimeout(() => {
        setTypedName(fullName.slice(0, typedName.length - 1));
      }, 70);
    } else if (isDeleting && typedName.length === 0) {
      // Pause before repeating
      timer = setTimeout(() => {
        setIsDeleting(false);
      }, 600);
    }

    return () => clearTimeout(timer);
  }, [typedName, isDeleting, fullName]);

  // Auto scroll chat box
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const presetQuestions = [
    { label: "education & college?", answer: `🎓 Education:\n• NIT Kurukshetra (2023–2027): B.Tech Electrical Engg (CGPA: 8.35)\n• GVN The Global School (Class XII CBSE): 90.40%\n• G.S Convent School (Class X CBSE): 93.0%` },
    { label: "tell me about InterviewIQ", answer: `🤖 InterviewIQ (AI-Powered Interview Prep Platform):\n• Built full-stack SaaS platform parsing resumes & generating tailored interview questions using Claude AI.\n• Real-time answer evaluation scoring Confidence, Communication, and Correctness in < 2 seconds.\n• Razorpay credit payments, Firebase/JWT auth, and optimized MERN/REST APIs.` },
    { label: "tell me about FraudShield", answer: `🛡️ FraudShield (AI Fraud Detection System):\n• Trained XGBoost on 284K+ transactions with 99.4% accuracy & 0.974 ROC-AUC.\n• Applied SMOTE balancing & integrated SHAP explainability.\n• Claude AI automated fraud summaries + interactive Streamlit dashboard.` },
    { label: "achievements & DSA?", answer: `🏆 Achievements:\n• Solved 500+ DSA problems on LeetCode across multiple difficulties.\n• Full-Stack Web Development & Application Engineering.` },
  ];

  const handleSend = (questionText?: string) => {
    const textToProcess = questionText || inputMsg;
    if (!textToProcess.trim()) return;

    const userMsg: Message = { sender: "user", text: textToProcess };
    setMessages((prev) => [...prev, userMsg]);

    if (!questionText) setInputMsg("");

    // Process Response
    setTimeout(() => {
      const lower = textToProcess.toLowerCase();
      let reply = "";

      const matchedPreset = presetQuestions.find((q) => q.label.toLowerCase() === lower);
      if (matchedPreset) {
        reply = matchedPreset.answer;
      } else if (lower.includes("education") || lower.includes("college") || lower.includes("nit") || lower.includes("degree")) {
        reply = `Krishna is pursuing B.Tech in Electrical Engineering at NIT Kurukshetra (2023-2027) with an 8.35 CGPA.`;
      } else if (lower.includes("interview") || lower.includes("iq") || lower.includes("claude")) {
        reply = `InterviewIQ is an AI-powered SaaS platform that parses resumes, evaluates user answers in real-time, and uses Claude AI, MERN stack, Firebase, JWT, and Razorpay.`;
      } else if (lower.includes("fraud") || lower.includes("xgboost") || lower.includes("shap")) {
        reply = `FraudShield achieves 99.4% accuracy on 284K+ transactions using XGBoost, SMOTE, SHAP, and Streamlit.`;
      } else if (lower.includes("analytics") || lower.includes("sql") || lower.includes("power bi") || lower.includes("trends")) {
        reply = `Krishna's Customer Trends project transforms raw data into SQL insights and interactive Power BI dashboards.`;
      } else if (lower.includes("dsa") || lower.includes("leetcode") || lower.includes("web")) {
        reply = `Krishna has solved 500+ DSA problems on LeetCode and specializes in Full-Stack Web Development.`;
      } else if (lower.includes("contact") || lower.includes("email") || lower.includes("phone")) {
        reply = `Email: ${portfolioData.personal.email}\nPhone: ${portfolioData.personal.phone}\nGitHub: github.com/Krishnna1909\nLinkedIn: linkedin.com/in/krishnna1909`;
      } else {
        reply = `Krishna Singh is an NIT Kurukshetra Electrical Engg undergrad, Full-Stack & AI/ML Engineer with 500+ DSA solved. Check out the project cards & resume details below!`;
      }

      setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
    }, 400);
  };

  return (
    <section className="relative w-full min-h-screen bg-transparent text-white overflow-hidden pt-28 pb-16 lg:pb-4 px-6 md:px-12 lg:px-20 flex items-center justify-center font-mono select-none">
      
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[550px] h-[550px] rounded-full bg-white/10 blur-[140px] pointer-events-none opacity-25" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full bg-white/5 blur-[140px] pointer-events-none opacity-20" />

      <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center lg:mt-16">
        
        {/* LEFT COLUMN: HERO INTRO & BIO (CENTERED INSIDE ITS COLUMN) */}
        <div className="lg:col-span-6 flex flex-col items-center text-center gap-6 w-full">
          
          {/* AVAILABILITY BADGE */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/20 bg-white/5 text-xs text-white/90 font-mono w-fit backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span>Open to Internships &amp; Full-Time Roles · AI/ML • Data Science • Full-Stack</span>
          </div>

          {/* MAIN PROMPT TYPING HEADER */}
          <div className="space-y-2 flex flex-col items-center">
            <p className="text-xl sm:text-2xl text-white/70 font-mono font-medium">
              Hi, I&apos;m
            </p>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight font-mono min-h-[64px] flex items-center justify-center">
              <span className="text-white inline-block">
                {typedName || "\u00A0"}
                <span className="inline-block w-3.5 h-10 bg-white ml-1 align-middle animate-pulse" />
              </span>
            </h1>

            {/* SUBTITLE */}
            <p className="text-sm sm:text-base text-white/60 tracking-wide font-mono pt-3 font-semibold">
              Full-Stack Developer <span className="text-white/30">|</span> AI/ML Engineer <span className="text-white/30">|</span> Data Analyst
            </p>
          </div>

          {/* BIO DESCRIPTION */}
          <p className="text-base sm:text-lg text-white/80 leading-relaxed font-sans max-w-xl text-center">
            Building intelligent AI solutions, scalable web applications, and data-driven products that create real-world impact.
          </p>

          {/* ACTION BUTTONS */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            
            {/* VIEW PROJECTS BUTTON */}
            <button
              onClick={() => document.getElementById("showcase")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3.5 rounded-xl bg-white text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-zinc-200 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              View Projects →
            </button>

            {/* GET IN TOUCH BUTTON */}
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3.5 rounded-xl bg-white/[0.05] border border-white/20 text-white font-mono font-bold text-xs uppercase tracking-wider hover:border-white hover:bg-white/[0.1] transition-all duration-300 cursor-pointer backdrop-blur-md"
            >
              Get in Touch
            </button>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-2">
              <a
                href={portfolioData.socials.find(s => s.name === "GitHub")?.url || "https://github.com/Krishnna1909"}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 transition-all backdrop-blur-md"
              >
                <FaGithub size={16} />
              </a>
              <a
                href={portfolioData.socials.find(s => s.name === "LinkedIn")?.url || "https://linkedin.com/in/krishnna1909"}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 transition-all backdrop-blur-md"
              >
                <FaLinkedin size={16} />
              </a>
              <a
                href={portfolioData.socials.find(s => s.name === "LeetCode")?.url || "https://leetcode.com/u/Krishnna07/"}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 transition-all backdrop-blur-md"
              >
                <SiLeetcode size={16} />
              </a>
            </div>

          </div>

        </div>

        {/* RIGHT COLUMN: INTERACTIVE AI TERMINAL (CENTERED INSIDE ITS COLUMN) */}
        <div className="lg:col-span-6 w-full max-w-2xl mx-auto flex justify-center">
          <div className="relative w-full rounded-2xl bg-black/90 border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.9)] backdrop-blur-2xl overflow-hidden">
            
            {/* TERMINAL TOP BAR */}
            <div className="flex items-center justify-between px-4 py-3 bg-white/[0.04] border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>

              <span className="text-xs text-white/50 font-mono tracking-widest">
                ~/ask-me.sh
              </span>

              <div className="flex items-center gap-1.5 text-[10px] text-white/70 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                ready
              </div>
            </div>

            {/* TERMINAL CONTENT / CONVERSATION AREA */}
            <div className="p-5 h-[320px] overflow-y-auto space-y-4 font-mono text-xs scrollbar-thin scrollbar-thumb-white/10">
              {messages.map((msg, idx) => (
                <div key={idx} className="space-y-1">
                  {msg.sender === "system" && (
                    <div className="text-white/40">
                      <span className="text-white/70">// system</span>
                      <p className="text-white/80 mt-1">{msg.text}</p>
                    </div>
                  )}

                  {msg.sender === "user" && (
                    <div className="flex items-start gap-2 text-white font-semibold">
                      <span className="text-white/50">&gt;</span>
                      <p className="text-white">{msg.text}</p>
                    </div>
                  )}

                  {msg.sender === "bot" && (
                    <div className="bg-white/[0.05] border border-white/10 p-3 rounded-lg text-white/90 whitespace-pre-line leading-relaxed backdrop-blur-md">
                      {msg.text}
                    </div>
                  )}
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>

            {/* PRESET CHIPS */}
            <div className="px-4 py-2 border-t border-white/10 bg-black/40 flex flex-wrap gap-2">
              {presetQuestions.map((q, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(q.label)}
                  className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/15 text-[11px] text-white/70 hover:text-white hover:border-white/40 transition-all cursor-pointer font-mono"
                >
                  {q.label}
                </button>
              ))}
            </div>

            {/* TERMINAL INPUT BAR */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 bg-white/[0.02] border-t border-white/10 flex items-center gap-2"
            >
              <span className="text-white/50 text-sm pl-2">&gt;</span>
              <input
                type="text"
                value={inputMsg}
                onChange={(e) => setInputMsg(e.target.value)}
                placeholder="ask anything about krishna..."
                className="flex-1 bg-transparent text-xs text-white placeholder:text-white/30 outline-none font-mono"
              />
              <button
                type="submit"
                className="px-3.5 py-1.5 rounded-lg bg-white hover:bg-zinc-200 text-black font-mono text-xs font-bold transition-all cursor-pointer"
              >
                send ↵
              </button>
            </form>

          </div>
        </div>

      </div>
    </section>
  );
}
