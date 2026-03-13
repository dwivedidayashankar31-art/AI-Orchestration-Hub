import { useState, useRef, useEffect } from "react";
import { X, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hello! I am your AetherOS AI Assistant. How can I help you manage your agents and integrations today?" }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    // Add user message
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: "I'm a mockup AI assistant. In a full application, I would connect to a real AI model to answer your questions, analyze logs, and manage system operations." 
      }]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-[0_0_15px_rgba(var(--primary),0.5)] border border-primary/50 bg-background/80 backdrop-blur-md hover:bg-primary/20 z-50 group hover:shadow-[0_0_25px_rgba(var(--primary),0.8)] transition-all duration-300"
          size="icon"
          data-testid="button-open-ai-assistant"
        >
          <Bot className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 sm:w-96 h-[500px] max-h-[80vh] bg-background/95 backdrop-blur-xl border border-primary/30 rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden neon-border animate-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="p-4 border-b border-primary/20 bg-primary/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/50">
                <Bot className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-sm tracking-wider text-white">AetherOS AI</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_5px_#10b981]"></span>
                  <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-mono">Online</span>
                </div>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-8 w-8 hover:bg-primary/20 text-muted-foreground hover:text-white" data-testid="button-close-ai-assistant">
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 custom-scrollbar">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border ${msg.role === 'user' ? 'bg-secondary border-secondary-foreground/20' : 'bg-primary/20 border-primary/50'}`}>
                  {msg.role === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4 text-primary" />}
                </div>
                <div className={`p-3 rounded-xl max-w-[80%] text-sm ${msg.role === 'user' ? 'bg-secondary text-secondary-foreground rounded-tr-sm' : 'bg-primary/10 border border-primary/20 text-foreground rounded-tl-sm'}`}>
                  {msg.content}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-primary/20 bg-background/50">
            <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex gap-2">
              <Input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..." 
                className="bg-black/40 border-primary/30 focus-visible:ring-primary/50 h-10 font-mono text-sm"
                data-testid="input-ai-message"
              />
              <Button type="submit" size="icon" className="h-10 w-10 shrink-0 bg-primary/20 hover:bg-primary/40 border border-primary/50 text-primary transition-colors" data-testid="button-send-ai-message">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
