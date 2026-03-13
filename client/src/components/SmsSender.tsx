import { useState } from "react";
import { MessageSquare, Send, Phone, CheckCircle2 } from "lucide-react";

export function SmsSender() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSend = () => {
    if (!phoneNumber || !message) return;
    
    setStatus("sending");
    
    // Simulate sending
    setTimeout(() => {
      setStatus("sent");
      setTimeout(() => {
        setStatus("idle");
        setMessage("");
        setPhoneNumber("");
      }, 3000);
    }, 1500);
  };

  return (
    <div className="glass-card rounded-2xl p-6 relative overflow-hidden h-full flex flex-col">
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[40px] pointer-events-none"></div>
      
      <div className="flex items-center gap-3 mb-6 relative z-10 border-b border-white/5 pb-4">
        <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
          <MessageSquare className="w-5 h-5 text-blue-400" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-white">Send SMS Message</h3>
          <p className="text-xs text-slate-400">Direct global communication</p>
        </div>
      </div>

      <div className="space-y-4 flex-1 relative z-10 flex flex-col">
        <div>
          <label className="block text-xs font-medium text-slate-400 mb-1">Recipient Number</label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input 
              type="tel" 
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="+1 (555) 000-0000" 
              className="w-full bg-slate-900/50 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm focus:border-blue-500 focus:outline-none transition text-white"
              data-testid="input-sms-phone"
            />
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          <label className="block text-xs font-medium text-slate-400 mb-1">Message Content</label>
          <textarea 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here..." 
            className="w-full bg-slate-900/50 border border-white/10 rounded-xl py-3 px-4 text-sm focus:border-blue-500 focus:outline-none transition text-white resize-none flex-1 min-h-[100px]"
            data-testid="input-sms-message"
          ></textarea>
          <div className="text-right mt-1">
            <span className={`text-[10px] ${message.length > 160 ? 'text-amber-400' : 'text-slate-500'}`}>
              {message.length} / 160 chars {message.length > 160 && '(2 segments)'}
            </span>
          </div>
        </div>

        <button 
          onClick={handleSend}
          disabled={status !== "idle" || !phoneNumber || !message}
          className={`w-full py-3 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-all shadow-lg ${
            status === "sent" 
              ? "bg-green-500/20 text-green-400 border border-green-500/30" 
              : "bg-blue-600 hover:bg-blue-500 text-white shadow-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
          }`}
          data-testid="button-send-sms"
        >
          {status === "idle" && (
            <>Send Message <Send className="w-4 h-4" /></>
          )}
          {status === "sending" && (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              Sending...
            </>
          )}
          {status === "sent" && (
            <>Message Sent <CheckCircle2 className="w-4 h-4" /></>
          )}
        </button>
      </div>
    </div>
  );
}
