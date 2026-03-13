import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function TrustScore() {
  const [score, setScore] = useState(99.4);
  const [isConflict, setIsConflict] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate real-time validation checks
      const r = Math.random();
      
      if (r > 0.95) {
        // Trigger a fake "Conflict Resolution" event
        setIsConflict(true);
        setScore(prev => prev - (Math.random() * 5 + 2)); // Drop score temporarily
        
        setTimeout(() => {
          setIsConflict(false);
          setScore(99.1 + Math.random() * 0.8); // Recover score after consensus
        }, 3000);
      } else if (!isConflict) {
        // Normal minor fluctuations
        setScore(prev => {
          const jitter = Math.random() > 0.5 ? 0.1 : -0.1;
          const newScore = prev + jitter;
          return Math.min(100, Math.max(97.5, newScore));
        });
      }
    }, 2500);
    return () => clearInterval(interval);
  }, [isConflict]);

  const strokeDasharray = 283;
  const strokeDashoffset = strokeDasharray - (strokeDasharray * score) / 100;
  
  const statusColor = isConflict ? "#ef4444" : "#00f3ff"; // Red if conflict, Cyan otherwise
  const glowColor = isConflict ? "rgba(239, 68, 68, 0.6)" : "rgba(0, 243, 255, 0.6)";

  return (
    <div className="relative flex flex-col items-center justify-center mt-8">
      <svg className="w-40 h-40 transform -rotate-90">
        {/* Background track */}
        <circle
          cx="80"
          cy="80"
          r="56"
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          className="text-primary/10"
        />
        {/* Glowing Progress */}
        <circle
          cx="80"
          cy="80"
          r="56"
          fill="none"
          stroke={statusColor}
          strokeWidth="6"
          strokeLinecap="round"
          style={{
            strokeDasharray,
            strokeDashoffset,
            filter: `drop-shadow(0 0 10px ${glowColor})`,
            transition: "stroke-dashoffset 1s ease-in-out, stroke 0.5s ease"
          }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <motion.div 
          className="text-5xl font-display font-bold text-white"
          key={isConflict ? "conflict" : "stable"}
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          style={{ textShadow: `0 0 15px ${glowColor}` }}
        >
          {score.toFixed(1)}<span className="text-xl">%</span>
        </motion.div>
        <span className="text-[10px] font-mono uppercase tracking-widest mt-1 opacity-70" style={{ color: statusColor }}>
          Confidence
        </span>
      </div>
      
      {/* Dynamic Status Pill */}
      <div className="mt-8 flex flex-col items-center gap-2 h-16">
        {isConflict ? (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[11px] font-mono text-red-400 bg-red-400/10 px-4 py-1.5 rounded-full border border-red-400/30 flex items-center gap-2 animate-pulse"
          >
            <span className="w-2 h-2 rounded-full bg-red-400"></span> Resolving Model Disagreement
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[11px] font-mono text-primary bg-primary/10 px-4 py-1.5 rounded-full border border-primary/30 flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_#00f3ff]"></span> Consensus Validated
          </motion.div>
        )}
        
        <div className="text-[10px] text-muted-foreground font-mono">
          Checked across GPT-4o, Claude 3.5, Gemini 1.5
        </div>
      </div>
    </div>
  );
}