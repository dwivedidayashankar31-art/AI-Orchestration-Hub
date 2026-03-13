import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Zap, Database, Clock } from "lucide-react";

export function MetricsDashboard() {
  const [metrics, setMetrics] = useState({
    latency: 12,
    tokens: 1240,
    cost: 0.0324,
    requests: 4521
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        latency: Math.max(8, prev.latency + (Math.random() - 0.5) * 4),
        tokens: prev.tokens + Math.floor(Math.random() * 100),
        cost: prev.cost + Math.random() * 0.001,
        requests: prev.requests + Math.floor(Math.random() * 10)
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const metricItems = [
    { label: "Latency", value: metrics.latency.toFixed(1), unit: "ms", icon: Clock, color: "text-cyan-400" },
    { label: "Tokens", value: metrics.tokens.toLocaleString(), unit: "", icon: Database, color: "text-purple-400" },
    { label: "Cost", value: "$" + metrics.cost.toFixed(4), unit: "", icon: Zap, color: "text-pink-400" },
  ];

  return (
    <div className="flex flex-col h-full gap-4">
      <h3 className="text-sm font-display text-primary uppercase tracking-widest pb-2 border-b border-primary/10">
        Live Metrics
      </h3>
      
      {metricItems.map((item, idx) => {
        const Icon = item.icon;
        return (
          <motion.div 
            key={idx}
            className="flex items-center gap-3 p-2.5 bg-black/30 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors"
          >
            <Icon className={`w-4 h-4 ${item.color}`} />
            <div className="flex-1 min-w-0">
              <div className="text-[10px] text-muted-foreground uppercase tracking-wider">{item.label}</div>
              <motion.div 
                className="text-sm font-mono font-bold text-white"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 0.3 }}
              >
                {item.value} <span className="text-[10px] opacity-70">{item.unit}</span>
              </motion.div>
            </div>
          </motion.div>
        );
      })}

      <div className="mt-auto pt-3 border-t border-primary/10">
        <motion.div 
          className="text-[10px] font-mono text-muted-foreground bg-black/40 p-2 rounded border border-primary/5 text-center"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Requests: {metrics.requests.toLocaleString()}
        </motion.div>
      </div>
    </div>
  );
}