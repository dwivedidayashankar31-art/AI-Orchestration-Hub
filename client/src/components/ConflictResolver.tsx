import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, Check } from "lucide-react";

type ConflictState = {
  active: boolean;
  models: string[];
  topic: string;
  resolution: string;
};

export function ConflictResolver() {
  const [conflict, setConflict] = useState<ConflictState>({ 
    active: false, 
    models: [], 
    topic: "",
    resolution: ""
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const r = Math.random();
      if (r > 0.92) {
        // Trigger conflict
        const conflicts = [
          { models: ["GPT-4o", "Claude"], topic: "Legal Intent", res: "Consensus: High confidence" },
          { models: ["Claude", "Gemini"], topic: "Data Interpretation", res: "Consensus: Medium confidence" },
          { models: ["GPT-4o", "Gemini"], topic: "Risk Assessment", res: "Consensus: Verified" },
        ];
        const picked = conflicts[Math.floor(Math.random() * conflicts.length)];
        
        setConflict({ 
          active: true, 
          models: picked.models, 
          topic: picked.topic,
          resolution: picked.res
        });

        setTimeout(() => {
          setConflict(prev => ({ ...prev, active: false }));
        }, 4000);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-full">
      <h3 className="text-xs font-display text-primary uppercase tracking-widest mb-3 pb-2 border-b border-primary/10">
        Conflict Resolution
      </h3>

      <AnimatePresence mode="wait">
        {conflict.active ? (
          <motion.div 
            key="conflict"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex-1 flex flex-col gap-2 justify-center"
          >
            <div className="bg-red-500/10 border border-red-400/30 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-red-400 animate-pulse" />
                <span className="text-xs font-mono uppercase text-red-400 tracking-widest font-bold">Disagreement Detected</span>
              </div>
              <div className="text-[11px] text-white/80 font-mono">
                <div className="opacity-70">{conflict.models.join(" ↔ ")}</div>
                <div className="mt-1 font-bold text-red-300">{conflict.topic}</div>
              </div>
            </div>

            <motion.div 
              animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="h-6 flex items-center justify-center"
            >
              <div className="text-primary font-mono text-xs font-bold">⚡ Resolving...</div>
            </motion.div>

            <div className="bg-emerald-500/10 border border-emerald-400/30 rounded-lg p-2">
              <div className="text-[9px] font-mono text-emerald-300 text-center">
                ✓ {conflict.resolution}
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="stable"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex-1 flex flex-col items-center justify-center text-center gap-2"
          >
            <Check className="w-8 h-8 text-emerald-400 opacity-50" />
            <div className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider">
              All Models in Consensus
            </div>
            <div className="text-xs font-mono text-white/60">
              Zero conflicts detected
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}