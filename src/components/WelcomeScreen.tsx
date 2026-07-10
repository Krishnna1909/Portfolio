import { motion } from "framer-motion";
import { Code2, User, Globe } from "lucide-react";
import { useEffect } from "react";
import { portfolioData } from "@/config/portfolioData";

export default function WelcomeScreen({ onComplete }: { onComplete?: () => void }) {
  const icons = [Code2, User, Globe];

  useEffect(() => {
    // Lock scroll while welcome screen is active
    document.body.style.overflow = "hidden";

    // Auto complete welcome screen after 3.5 seconds
    const timer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 3500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array ensures timer runs once on mount without being reset by clock ticks!

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.05,
        transition: {
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        },
      }}
      onClick={() => onComplete?.()} // Also allow click-to-skip instantly
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black overflow-hidden p-5 cursor-pointer"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[420px] h-[420px] bg-white/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-150px] right-[-80px] w-[300px] h-[300px] bg-white/5 blur-[100px] rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative text-center text-white flex flex-col items-center gap-5 w-full max-w-[340px]"
      >
        {/* Icons */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="flex gap-4 items-center justify-center"
        >
          {icons.map((Icon, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: {
                  opacity: 0,
                  scale: 0.3,
                  rotate: -140,
                  y: 60,
                },
                visible: {
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                  y: 0,
                },
              }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                scale: 1.08,
              }}
              className="w-[48px] h-[48px] rounded-full border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-md shadow-[0_0_25px_rgba(255,255,255,0.05)]"
            >
              <Icon size={20} color="white" />
            </motion.div>
          ))}
        </motion.div>

        {/* Text */}
        <div className="flex flex-col items-center gap-1">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <motion.span
              initial={{ opacity: 0, x: 120 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-[clamp(22px,5vw,34px)] font-black tracking-tight"
            >
              Welcome
            </motion.span>

            <motion.span
              initial={{ opacity: 0, x: -120 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.7,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-[clamp(22px,5vw,34px)] font-black tracking-tight"
            >
              to
            </motion.span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.9,
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-[clamp(24px,6vw,38px)] font-black tracking-tight leading-tight text-center uppercase"
          >
            {portfolioData.personal.name}&apos;s Portfolio
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{
            delay: 1.2,
            duration: 0.8,
          }}
          className="text-xs text-white/60 tracking-wide max-w-[280px]"
        >
          {portfolioData.personal.role}
        </motion.p>

        {/* Website Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.4,
            duration: 0.5,
          }}
          className="px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs tracking-[0.25em] text-white/70 shadow-[0_0_30px_rgba(255,255,255,0.04)] overflow-hidden uppercase"
        >
          <motion.span
            initial={{ width: "0ch" }}
            animate={{ width: "22ch" }}
            transition={{
              delay: 1.5,
              duration: 1.5,
              ease: "easeInOut",
            }}
            className="inline-block overflow-hidden whitespace-nowrap"
          >
            {portfolioData.personal.brandName}
          </motion.span>

          <motion.span
            animate={{
              opacity: [1, 0, 1],
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
            }}
            className="ml-[2px]"
          >
            |
          </motion.span>
        </motion.div>

        {/* Bottom Loading Line */}
        <div className="mt-10 w-[240px] bg-white/20 h-[2px] overflow-hidden rounded-full">
          <motion.div
            initial={{ width: "10%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 3.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="h-full bg-white"
          />
        </div>

        <p className="text-[10px] text-white/30 font-mono tracking-widest pt-2">
          Click anywhere to skip
        </p>
      </motion.div>
    </motion.div>
  );
}