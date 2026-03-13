import { useEffect, useState, useRef } from "react";
import { Terminal, Shield, Globe, Cpu, Database } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type LogEntry = {
  id: string;
  timestamp: string;
  source: string;
  message: string;
  type: "info" | "verify" | "fetch" | "stream" | "db";
};

const MOCK_LOGS = [
  { source: "Inquisitor", msg: "Deconstructing prompt into 5 sub-tasks...", type: "info" },
  { source: "Tavily", msg: "Scraping SEC EDGAR database for 2026 filings", type: "fetch" },
  { source: "Milvus", msg: "Retrieved long-term user bias context from session #842", type: "db" },
  { source: "GPT-4o", msg: "Analyzing financial sentiment from raw data", type: "verify" },
  { source: "Claude 3.5", msg: "Cross-referencing legal precedence", type: "verify" },
  { source: "Gemini 1.5", msg: "Validating statistical anomalies in dataset", type: "verify" },
  { source: "Consensus", msg: "Zero conflict detected. Trust score: 99.8%", type: "info" },
  { source: "Gateway", msg: "Streaming output chunk 1 of 5 via API", type: "stream" },
  { source: "Redis", msg: "Cached response signature for latency reduction", type: "db" },
  { source: "Inquisitor", msg: "Executing sub-task 2: Real-time news extraction", type: "info" }
];

export function LogSidebar() {
  const [logs, setLogs] = useState<LogEntry[]>([
    {
      id: "init-1",
      timestamp: new Date().toISOString().split("T")[1].substring(0, 12),
      source: "System",
      message: "AetherOS Multi-Agent Loop Initialized.",
      type: "info"
    }
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Stream word by word effect
  const [streamText, setStreamText] = useState("");
  const currentStreamMessage = "AetherOS orchestrating global AI consensus...";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      const template = MOCK_LOGS[Math.floor(Math.random() * MOCK_LOGS.length)];
      const newLog: LogEntry = {
        id: Math.random().toString(36).substring(2, 9),
        timestamp: new Date().toISOString().split("T")[1].substring(0, 12),
        source: template.source,
        message: template.msg,
        type: template.type as any,
      };

      setLogs(prev => [...prev.slice(-49), newLog]); // Keep last 50 logs

      // Auto-scroll
      if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }
    }, 1500 + Math.random() * 1000);

    return () => clearInterval(interval);
  }, []);

  // Simulate word-by-word streaming effect for the bottom panel
  useEffect(() => {
    let i = 0;
    const streamInterval = setInterval(() => {
      if (i <= currentStreamMessage.length) {
        setStreamText(currentStreamMessage.slice(0, i));
        i++;
      } else {
        i = 0; // reset for demo purposes
      }
    }, 100);
    return () => clearInterval(streamInterval);
  }, []);

  const getIcon = (type: string) => {
    switch(type) {
      case 'verify': return <Shield className="w-3 h-3 text-emerald-400" />;
      case 'fetch': return <Globe className="w-3 h-3 text-purple-400" />;
      case 'stream': return <Terminal className="w-3 h-3 text-primary" />;
      case 'db': return <Database className="w-3 h-3 text-pink-400" />;
      default: return <Cpu className="w-3 h-3 text-blue-400" />;
    }
  };

  const getSourceColor = (source: string) => {
    if (source.includes('GPT')) return 'text-emerald-400 border-emerald-400/20 bg-emerald-400/10';
    if (source.includes('Claude')) return 'text-amber-400 border-amber-400/20 bg-amber-400/10';
    if (source.includes('Gemini')) return 'text-blue-400 border-blue-400/20 bg-blue-400/10';
    if (source === 'Milvus' || source === 'Redis') return 'text-pink-400 border-pink-400/20 bg-pink-400/10';
    if (source === 'Tavily') return 'text-purple-400 border-purple-400/20 bg-purple-400/10';
    return 'text-white border-white/10 bg-white/5';
  };

  return (
    <div className="flex flex-col h-full bg-black/20">
      <div className="p-5 border-b border-primary/20 flex items-center justify-between bg-card/40 backdrop-blur">
        <h2 className="text-sm font-display text-primary uppercase tracking-widest flex items-center gap-2">
          <Terminal className="w-4 h-4" /> Activity Matrix
        </h2>
        <div className="flex gap-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
        </div>
      </div>
      
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 font-mono text-[11px] scroll-smooth custom-scrollbar"
      >
        <AnimatePresence initial={false}>
          {logs.map((log) => (
            <motion.div
              key={log.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex flex-col gap-1.5"
            >
              <div className="flex items-center gap-2 text-muted-foreground">
                {getIcon(log.type)}
                <span className="text-[10px] opacity-70">{log.timestamp}</span>
                <span className={`px-1.5 py-0.5 rounded border uppercase text-[9px] tracking-wider font-bold ${getSourceColor(log.source)}`}>
                  {log.source}
                </span>
              </div>
              <div className="text-foreground/90 pl-5 break-words leading-relaxed">
                {log.message}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Live Output Streamer */}
      <div className="h-24 border-t border-primary/20 bg-primary/5 p-4 flex flex-col justify-between">
        <div className="text-[10px] uppercase text-primary font-bold tracking-widest mb-1 opacity-70 flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
          Live Output Stream
        </div>
        <div className="font-mono text-xs text-white">
          {streamText}<span className="inline-block w-2 h-3 bg-primary ml-1 animate-pulse align-middle"></span>
        </div>
      </div>
    </div>
  );
}