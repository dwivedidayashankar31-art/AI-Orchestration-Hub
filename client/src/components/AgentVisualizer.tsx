import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const agents = [
  { id: "inquisitor", name: "Inquisitor", x: 20, y: 30, color: "#00f3ff", type: "core" },
  { id: "retrieval", name: "Search & Retrieval (Tavily/Serper)", x: 80, y: 20, color: "#a855f7", type: "external" },
  { id: "gpt4", name: "GPT-4o Verification", x: 75, y: 75, color: "#10b981", type: "llm" },
  { id: "claude", name: "Claude 3.5 Ver.", x: 50, y: 85, color: "#f59e0b", type: "llm" },
  { id: "gemini", name: "Gemini 1.5 Ver.", x: 25, y: 75, color: "#3b82f6", type: "llm" },
  { id: "memory", name: "Memory (Milvus/Pinecone)", x: 50, y: 45, color: "#ec4899", type: "db" },
];

export function AgentVisualizer() {
  const [activeConnections, setActiveConnections] = useState<string[]>([]);
  const [particles, setParticles] = useState<{ id: number, from: any, to: any }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly activate connections
      const source = agents[Math.floor(Math.random() * agents.length)];
      let target = agents[Math.floor(Math.random() * agents.length)];
      while (target.id === source.id) {
        target = agents[Math.floor(Math.random() * agents.length)];
      }

      const connectionId = `${source.id}-${target.id}`;
      setActiveConnections(prev => [...prev, connectionId].slice(-4));
      
      const newParticle = { id: Date.now(), from: source, to: target };
      setParticles(prev => [...prev, newParticle].slice(-10));

    }, 600);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background">
      {/* Grid Background */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'linear-gradient(rgba(0, 243, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 243, 255, 0.05) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        backgroundPosition: 'center center'
      }}></div>

      {/* Connections Layer */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {agents.map((a, i) => (
          agents.slice(i + 1).map(b => {
            const isActive = activeConnections.includes(`${a.id}-${b.id}`) || activeConnections.includes(`${b.id}-${a.id}`);
            return (
              <line 
                key={`${a.id}-${b.id}`}
                x1={`${a.x}%`} y1={`${a.y}%`}
                x2={`${b.x}%`} y2={`${b.y}%`}
                stroke={isActive ? "#00f3ff" : "rgba(0, 243, 255, 0.05)"}
                strokeWidth={isActive ? 2 : 1}
                className="transition-all duration-300"
                strokeDasharray={isActive ? "none" : "5,5"}
              />
            );
          })
        ))}
      </svg>

      {/* Data Particles flowing between nodes */}
      {particles.map(p => (
        <motion.div
          key={p.id}
          initial={{ left: `${p.from.x}%`, top: `${p.from.y}%`, opacity: 1, scale: 0 }}
          animate={{ left: `${p.to.x}%`, top: `${p.to.y}%`, opacity: 0, scale: 1.5 }}
          transition={{ duration: 1.2, ease: "linear" }}
          className="absolute w-2.5 h-2.5 rounded-full bg-white blur-[1px] z-10 transform -translate-x-1/2 -translate-y-1/2"
          style={{ boxShadow: `0 0 15px ${p.from.color}, 0 0 30px ${p.from.color}` }}
        />
      ))}

      {/* Agent Nodes */}
      {agents.map((agent) => (
        <motion.div
          key={agent.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3 z-20"
          style={{ left: `${agent.x}%`, top: `${agent.y}%` }}
          animate={{
            y: ["-50%", "-55%", "-50%"],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div 
            className="w-16 h-16 rounded-full glass border border-solid flex items-center justify-center relative cursor-pointer group"
            style={{ 
              borderColor: agent.color,
              boxShadow: `0 0 20px ${agent.color}40, inset 0 0 15px ${agent.color}20` 
            }}
          >
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                 style={{ boxShadow: `0 0 30px ${agent.color}` }}></div>
                 
            {/* Core Element */}
            <div 
              className="w-6 h-6 rounded-full animate-pulse"
              style={{ backgroundColor: agent.color, filter: 'blur(4px)', opacity: 0.8 }}
            ></div>
            <div 
              className="absolute w-2 h-2 rounded-full bg-white"
              style={{ boxShadow: `0 0 10px #fff` }}
            ></div>
          </div>
          
          {/* Label */}
          <div className="bg-black/80 px-4 py-1.5 rounded-md backdrop-blur-md border border-primary/20 font-mono text-[11px] text-white whitespace-nowrap flex flex-col items-center shadow-lg group-hover:border-primary/60 transition-colors">
            <span className="font-bold tracking-wider">{agent.name}</span>
            <span className="text-[9px] uppercase tracking-widest opacity-50" style={{ color: agent.color }}>[{agent.type}]</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}