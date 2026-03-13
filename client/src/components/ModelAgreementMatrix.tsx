import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function ModelAgreementMatrix() {
  const [agreements, setAgreements] = useState([
    { model1: "GPT-4o", model2: "Claude 3.5", agreement: 98.2 },
    { model1: "GPT-4o", model2: "Gemini 1.5", agreement: 96.5 },
    { model1: "Claude 3.5", model2: "Gemini 1.5", agreement: 97.8 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setAgreements(prev => prev.map(a => ({
        ...a,
        agreement: Math.min(100, Math.max(92, a.agreement + (Math.random() - 0.5) * 2))
      })));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-full">
      <h3 className="text-sm font-display text-primary uppercase tracking-widest mb-4 pb-3 border-b border-primary/10">
        Model Consensus Matrix
      </h3>
      
      <div className="flex-1 flex flex-col gap-3 justify-center">
        {agreements.map((pair, idx) => {
          const isAgreement = pair.agreement > 95;
          const color = isAgreement ? "text-emerald-400" : "text-yellow-400";
          
          return (
            <motion.div 
              key={idx}
              className="flex items-center gap-4 p-3 bg-black/30 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors group"
            >
              <div className="flex-1 min-w-0">
                <div className="text-xs text-muted-foreground font-mono uppercase tracking-wider mb-1.5">
                  {pair.model1} ↔ {pair.model2}
                </div>
                <div className="w-full h-2 bg-black/50 rounded-full overflow-hidden border border-primary/10">
                  <motion.div 
                    className={`h-full ${isAgreement ? "bg-gradient-to-r from-emerald-500 to-emerald-400" : "bg-gradient-to-r from-yellow-500 to-yellow-400"} shadow-lg`}
                    animate={{ width: `${pair.agreement}%` }}
                    transition={{ duration: 0.8 }}
                  />
                </div>
              </div>
              <motion.div 
                className={`font-mono font-bold text-lg w-14 text-right ${color}`}
                animate={{ scale: isAgreement ? 1 : [1, 1.1, 1] }}
                transition={{ duration: 0.3 }}
              >
                {pair.agreement.toFixed(1)}%
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}