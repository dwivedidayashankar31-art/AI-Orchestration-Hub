import { useState } from "react";
import { Key, Plus, Copy, Check, Trash2, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ApiKeyManager() {
  const [keys, setKeys] = useState([
    { id: 1, name: "Global Financial Corp", key: "aeth_live_8f92...3b1x", status: "active", usage: "1.2M", limit: "10M", lastUsed: "2 mins ago" },
    { id: 2, name: "LegalTech AI Solutions", key: "aeth_live_9a21...8n2z", status: "active", usage: "450K", limit: "1M", lastUsed: "14 mins ago" },
    { id: 3, name: "MedResearch Institute", key: "aeth_live_x7b4...9p0q", status: "active", usage: "85K", limit: "500K", lastUsed: "1 hr ago" }
  ]);
  const [copied, setCopied] = useState<number | null>(null);

  const generateKey = () => {
    const newKey = {
      id: Date.now(),
      name: `Enterprise_Node_${Math.floor(Math.random() * 1000)}`,
      key: `aeth_live_${Math.random().toString(36).substring(2, 6)}...${Math.random().toString(36).substring(2, 6)}`,
      status: "active",
      usage: "0",
      limit: "50K",
      lastUsed: "Just now"
    };
    setKeys([newKey, ...keys]);
  };

  const copyKey = (id: number) => {
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const revokeKey = (id: number) => {
    setKeys(keys.filter(k => k.id !== id));
  };

  return (
    <div className="flex flex-col h-full font-mono">
      <div className="flex justify-between items-center mb-4">
        <div className="text-[11px] text-muted-foreground font-sans">
          Manage Standard API Gateway access. <span className="text-primary">1,000+</span> theoretical capacity.
        </div>
        <Button 
          onClick={generateKey}
          variant="outline" 
          size="sm"
          className="bg-primary/10 border-primary/30 text-primary hover:bg-primary hover:text-black rounded transition-all font-display uppercase tracking-widest text-[10px] h-8"
        >
          <Plus className="w-3 h-3 mr-1" /> Provision Key
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
        <div className="space-y-3">
          {keys.map(k => (
            <div key={k.id} className="group bg-black/40 border border-primary/10 rounded-lg p-3.5 flex items-center justify-between hover:border-primary/50 transition-colors relative overflow-hidden">
              {/* Subtle gradient hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-10 h-10 rounded-md bg-card border border-primary/20 flex items-center justify-center shadow-[inset_0_0_10px_rgba(0,243,255,0.05)]">
                  <Key className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-white font-sans font-semibold mb-1 tracking-wide">{k.name}</div>
                  <div className="text-[11px] text-muted-foreground flex items-center gap-3 bg-black/50 px-2 py-1 rounded border border-white/5">
                    <span className="text-primary/90">{k.key}</span>
                    <button onClick={() => copyKey(k.id)} className="text-muted-foreground hover:text-white transition-colors" title="Copy API Key">
                      {copied === k.id ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-8 relative z-10">
                <div className="text-right hidden sm:block">
                  <div className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1 flex justify-end items-center gap-1">
                    <Activity className="w-3 h-3" /> Requests
                  </div>
                  <div className="text-sm text-white font-bold">{k.usage} <span className="text-muted-foreground text-xs font-normal">/ {k.limit}</span></div>
                </div>
                
                <div className="text-right hidden md:block w-24">
                  <div className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1">Last Active</div>
                  <div className="text-xs text-white/80">{k.lastUsed}</div>
                </div>

                <div className="flex items-center gap-3 border-l border-primary/10 pl-4">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse"></span>
                  <button 
                    onClick={() => revokeKey(k.id)} 
                    className="opacity-0 group-hover:opacity-100 p-2 text-red-400/70 hover:text-red-400 hover:bg-red-400/10 rounded-md transition-all"
                    title="Revoke Key"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
          
          {keys.length === 0 && (
            <div className="flex flex-col items-center justify-center py-10 text-muted-foreground border border-dashed border-primary/20 rounded-lg bg-black/20">
              <Key className="w-8 h-8 opacity-20 mb-3" />
              <div className="text-sm font-sans">No active gateways found.</div>
              <div className="text-[11px] mt-1">Provision a new key to allow external connections.</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}