import { AgentVisualizer } from "@/components/AgentVisualizer";
import { TrustScore } from "@/components/TrustScore";
import { LogSidebar } from "@/components/LogSidebar";
import { ApiKeyManager } from "@/components/ApiKeyManager";
import { ModelAgreementMatrix } from "@/components/ModelAgreementMatrix";
import { MetricsDashboard } from "@/components/MetricsDashboard";
import { ConflictResolver } from "@/components/ConflictResolver";
import { Activity, ShieldCheck, Database, Zap } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden flex flex-col">
      {/* Header */}
      <header className="glass-panel border-b border-primary/20 px-6 py-4 flex items-center justify-between z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/50 flex items-center justify-center neon-border">
            <Zap className="text-primary w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold text-white tracking-widest neon-text font-display">
            Aether<span className="text-primary">OS</span>
          </h1>
        </div>
        <div className="flex items-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981] animate-pulse"></span>
            <span className="text-muted-foreground uppercase tracking-wider font-semibold font-mono text-[10px]">System Online</span>
          </div>
          <div className="flex items-center gap-2 text-primary font-mono bg-primary/10 px-3 py-1 border border-primary/20 rounded">
            <Activity className="w-4 h-4" />
            <span>Lat: 12ms</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden h-[calc(100vh-73px)]">
        {/* Left Sidebar - Logs */}
        <div className="w-80 border-r border-primary/20 glass-panel h-full flex flex-col z-10">
          <LogSidebar />
        </div>

        {/* Center & Right Content */}
        <div className="flex-1 flex flex-col relative h-full p-6 gap-6 overflow-y-auto custom-scrollbar">
          {/* Top Row: Visualizer + Conflict Resolver */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[420px]">
            {/* Visualizer - 2 cols */}
            <div className="col-span-1 lg:col-span-2 glass rounded-xl relative overflow-hidden neon-border">
              <div className="absolute top-4 left-4 z-10 bg-black/40 p-3 backdrop-blur border border-primary/10 rounded">
                <h2 className="text-lg font-display text-primary uppercase tracking-widest flex items-center gap-2">
                  <Activity className="w-5 h-5" /> Live Consensus Graph
                </h2>
                <p className="text-xs text-muted-foreground font-mono mt-1">Monitoring multi-agent cross-reference loop</p>
              </div>
              <AgentVisualizer />
            </div>

            {/* Right Column: Trust Score + Conflict Resolver */}
            <div className="col-span-1 flex flex-col gap-6">
              <div className="glass rounded-xl p-5 border border-primary/20 flex flex-col items-center justify-center relative overflow-hidden flex-1">
                <div className="absolute top-4 left-4 w-full border-b border-primary/10 pb-3">
                  <h3 className="text-sm font-display text-white uppercase tracking-widest flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-primary" /> Trust Score
                  </h3>
                </div>
                <TrustScore />
              </div>
              
              <div className="glass rounded-xl p-4 border border-primary/20 flex-1">
                <ConflictResolver />
              </div>
            </div>
          </div>

          {/* Middle Row: Model Agreement Matrix + Metrics */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[280px]">
            <div className="col-span-1 lg:col-span-2 glass rounded-xl p-5 border border-primary/20">
              <ModelAgreementMatrix />
            </div>
            <div className="col-span-1 glass rounded-xl p-5 border border-primary/20">
              <MetricsDashboard />
            </div>
          </div>

          {/* Bottom Row: Gateway Manager */}
          <div className="glass rounded-xl p-5 border border-primary/20 flex flex-col h-[320px] shrink-0">
            <h3 className="text-sm font-display text-white uppercase tracking-widest mb-4 flex items-center gap-2 pb-3 border-b border-primary/10">
              <Database className="w-4 h-4 text-primary" /> Gateway API Manager
            </h3>
            <ApiKeyManager />
          </div>
        </div>
      </div>
    </div>
  );
}