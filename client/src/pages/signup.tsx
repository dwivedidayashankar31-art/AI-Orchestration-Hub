import { useLocation } from "wouter";
import { Mail, Lock, User, Building, ArrowRight, Zap, ChevronLeft } from "lucide-react";
import { useState } from "react";

export default function Signup() {
  const [, navigate] = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    password: "",
  });

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-50 flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none"></div>

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
          <p className="text-slate-400 font-light text-lg">Create your free account</p>
        </div>

        {/* Form */}
        <div className="glass-card rounded-3xl p-8 md:p-10 border-white/10 shadow-2xl">
          <form onSubmit={handleSignup} className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-2 text-slate-300">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="John Doe"
                  className="w-full bg-slate-900/60 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 focus:outline-none transition font-light"
                  data-testid="input-name"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-slate-300">Company Name</label>
              <div className="relative">
                <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  placeholder="Your Company"
                  className="w-full bg-slate-900/60 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 focus:outline-none transition font-light"
                  data-testid="input-company"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-slate-300">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="you@company.com"
                  className="w-full bg-slate-900/60 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 focus:outline-none transition font-light"
                  data-testid="input-email"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-slate-300">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  placeholder="••••••••"
                  className="w-full bg-slate-900/60 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 focus:outline-none transition font-light"
                  data-testid="input-password"
                  required
                />
              </div>
            </div>

            <div className="pt-2">
              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="relative flex items-center justify-center w-5 h-5 mt-0.5 border border-white/20 rounded bg-slate-900/50 group-hover:border-blue-500 transition shrink-0">
                  <input type="checkbox" className="opacity-0 absolute inset-0 cursor-pointer" required />
                </div>
                <span className="text-sm text-slate-400 font-light leading-snug">
                  I agree to the <button type="button" className="text-blue-400 hover:underline">Terms of Service</button> and <button type="button" className="text-blue-400 hover:underline">Privacy Policy</button>
                </span>
              </label>
            </div>

            <button type="submit" data-testid="button-signup" className="w-full bg-white hover:bg-slate-200 text-slate-900 rounded-xl py-4 font-bold flex items-center justify-center gap-2 transition shadow-[0_0_20px_rgba(255,255,255,0.1)] mt-6 text-lg">
              Create Account <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <p className="text-slate-400 font-light">
              Already have an account? <button type="button" onClick={() => navigate("/login")} className="text-blue-400 font-medium hover:text-blue-300 transition ml-1">Sign in</button>
            </p>
          </div>
        </div>

        <p className="text-center text-sm text-slate-500 mt-8 font-light">
          14-day free trial. No credit card required.
        </p>
      </div>
    </div>
  );
}
