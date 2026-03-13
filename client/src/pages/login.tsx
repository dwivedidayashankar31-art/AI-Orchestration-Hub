import { useLocation } from "wouter";
import { Mail, Lock, ArrowRight, Zap, ChevronLeft } from "lucide-react";
import { useState } from "react";

export default function Login() {
  const [, navigate] = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-50 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      {/* Back Button */}
      <button 
        onClick={() => navigate("/")} 
        className="absolute top-8 left-8 flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition z-20"
      >
        <ChevronLeft className="w-4 h-4" /> Back to home
      </button>

      <div className="w-full max-w-md relative z-10">
        {/* Logo */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 text-3xl font-bold mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="font-display tracking-tight">Cloud<span className="text-blue-400">Vault</span></span>
          </div>
          <p className="text-slate-400 font-light text-lg">Log in to your dashboard</p>
        </div>

        {/* Form */}
        <div className="glass-card rounded-3xl p-8 md:p-10 border-white/10 shadow-2xl">
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-slate-300">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full bg-slate-900/60 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 focus:outline-none transition font-light"
                  data-testid="input-email"
                  required
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-slate-300">Password</label>
                <button type="button" className="text-xs font-medium text-blue-400 hover:text-blue-300 transition">Forgot password?</button>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-slate-900/60 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 focus:outline-none transition font-light"
                  data-testid="input-password"
                  required
                />
              </div>
            </div>

            <div className="flex items-center text-sm">
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="relative flex items-center justify-center w-5 h-5 border border-white/20 rounded bg-slate-900/50 group-hover:border-blue-500 transition">
                  <input type="checkbox" className="opacity-0 absolute inset-0 cursor-pointer" />
                </div>
                <span className="text-slate-300 select-none">Remember me for 30 days</span>
              </label>
            </div>

            <button type="submit" data-testid="button-login" className="w-full bg-blue-600 hover:bg-blue-500 text-white rounded-xl py-4 font-bold flex items-center justify-center gap-2 transition glow-button text-lg mt-2">
              Sign In <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <p className="text-slate-400 font-light">
              Don't have an account? <button type="button" onClick={() => navigate("/signup")} className="text-blue-400 font-medium hover:text-blue-300 transition ml-1">Sign up</button>
            </p>
          </div>
        </div>

        {/* Demo Info */}
        <div className="mt-8 bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 backdrop-blur-sm text-center">
          <p className="text-sm font-medium text-blue-300 mb-1">Demo Credentials</p>
          <p className="text-sm text-slate-400 font-light">Email: <span className="font-mono text-slate-200">demo@cloudvault.com</span> | Password: <span className="font-mono text-slate-200">demo123</span></p>
        </div>
      </div>
    </div>
  );
}
