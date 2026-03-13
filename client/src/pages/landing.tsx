import { useLocation } from "wouter";
import { ArrowRight, CheckCircle2, Zap, Globe, Shield, TrendingUp, ChevronRight, Play } from "lucide-react";

export default function Landing() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-[#030712] text-slate-50 overflow-hidden relative">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 blur-[100px] rounded-full mix-blend-screen"></div>
      </div>
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 text-2xl font-bold">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="font-display tracking-tight">Cloud<span className="text-blue-400">Vault</span></span>
          </div>
          <div className="hidden md:flex gap-8 items-center text-sm font-medium text-slate-300">
            <a onClick={() => navigate("/features")} className="hover:text-white transition cursor-pointer">Features</a>
            <a onClick={() => navigate("/pricing")} className="hover:text-white transition cursor-pointer">Pricing</a>
            <a onClick={() => navigate("/about")} className="hover:text-white transition cursor-pointer">About Us</a>
            <a onClick={() => navigate("/contact")} className="hover:text-white transition cursor-pointer">Contact</a>
          </div>
          <div className="flex gap-4 items-center">
            <button onClick={() => navigate("/login")} className="text-sm font-medium text-slate-300 hover:text-white transition hidden sm:block">
              Sign In
            </button>
            <button onClick={() => navigate("/signup")} className="px-5 py-2.5 text-sm font-medium rounded-lg bg-white text-slate-900 hover:bg-slate-200 transition shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-24 px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-sm font-medium text-slate-300">Announcing CloudVault 2.0 Global Release</span>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-[1.1] tracking-tight text-gradient">
            Infrastructure for the <br/>
            <span className="text-gradient-blue">Next Generation</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 mb-12 leading-relaxed max-w-3xl mx-auto font-light">
            The complete global SaaS platform that handles your backend, billing, and user management so you can focus on building your product.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button onClick={() => navigate("/signup")} className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold flex items-center justify-center gap-2 glow-button text-lg">
              Start Building Free <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-xl font-semibold flex items-center justify-center gap-2 transition text-lg backdrop-blur-md">
              <Play className="w-5 h-5 fill-current" /> Watch Demo
            </button>
          </div>
          
          {/* Dashboard Preview Graphic */}
          <div className="relative mx-auto w-full max-w-5xl">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-20"></div>
            <div className="relative rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-2xl p-2 shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-12 border-b border-white/5 flex items-center px-4 gap-2 bg-slate-950/50">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="pt-12 p-4 grid grid-cols-4 gap-4 h-[400px] md:h-[500px]">
                <div className="col-span-1 border-r border-white/5 pr-4 hidden md:block space-y-3">
                  {[1,2,3,4,5].map(i => (
                    <div key={i} className="h-8 rounded bg-white/5 w-full"></div>
                  ))}
                </div>
                <div className="col-span-4 md:col-span-3 space-y-4">
                  <div className="flex gap-4">
                    <div className="h-24 rounded-lg bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/20 flex-1"></div>
                    <div className="h-24 rounded-lg bg-white/5 border border-white/5 flex-1"></div>
                    <div className="h-24 rounded-lg bg-white/5 border border-white/5 flex-1"></div>
                  </div>
                  <div className="h-64 rounded-lg bg-white/5 border border-white/5 w-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-10 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-medium text-slate-500 mb-6 uppercase tracking-widest">Trusted by innovative teams worldwide</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {['Acme Corp', 'GlobalTech', 'Nexus', 'Stark Ind', 'Wayne Ent'].map((brand, i) => (
              <span key={i} className="text-xl font-bold font-display">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-32 px-6 relative">
        <div className="absolute right-0 top-1/4 w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Everything you need to scale</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">Stop worrying about infrastructure. CloudVault provides enterprise-grade tools out of the box.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: "Bank-Level Security", desc: "Enterprise-grade AES-256 encryption, SOC2 compliance, and automated threat detection built right in." },
              { icon: TrendingUp, title: "Real-time Analytics", desc: "Monitor performance with live dashboards, custom reports, and deep insights into user behavior." },
              { icon: Globe, title: "Global Edge Network", desc: "Deployed across 150+ data centers worldwide ensuring sub-50ms latency for all your users." },
            ].map((feature, i) => (
              <div key={i} className="glass-card rounded-2xl p-8 group">
                <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300 border border-blue-500/20">
                  <feature.icon className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-32 px-6 relative">
        <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Simple, transparent pricing</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">Start for free, then pay as you grow. No hidden fees or surprise charges.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {[
              { name: "Starter", price: "₹999", desc: "Perfect for indie hackers and small teams", features: ["Up to 10 users", "5GB storage", "Community support", "Basic analytics"] },
              { name: "Professional", price: "₹4,999", desc: "For scaling startups and growing businesses", features: ["Up to 100 users", "500GB storage", "Priority 24/7 support", "Advanced analytics", "Custom domain"], popular: true },
              { name: "Enterprise", price: "Custom", desc: "For large organizations with custom needs", features: ["Unlimited users", "Unlimited storage", "Dedicated account manager", "Custom integrations", "SLA guarantee"] },
            ].map((plan, i) => (
              <div key={i} className={`rounded-3xl p-8 relative ${plan.popular ? "bg-gradient-to-b from-blue-900/40 to-slate-900 border-2 border-blue-500 md:-translate-y-4 shadow-2xl shadow-blue-500/20" : "bg-white/5 border border-white/10 hover:border-white/20 transition-colors"}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-500 text-white text-xs font-bold uppercase tracking-wider rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-slate-400 text-sm mb-6 h-10">{plan.desc}</p>
                <div className="mb-8">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-slate-400">/month</span>}
                </div>
                <button onClick={() => navigate("/signup")} className={`w-full py-3 rounded-xl font-semibold transition mb-8 ${plan.popular ? "bg-blue-500 hover:bg-blue-400 text-white" : "bg-white/10 hover:bg-white/20 text-white"}`}>
                  Get Started
                </button>
                <ul className="space-y-4">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-800 p-12 md:p-20 text-center relative overflow-hidden border border-blue-400/30 shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[50px]"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/20 rounded-full blur-[50px]"></div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-10 text-white">Ready to scale globally?</h2>
          <p className="text-xl mb-10 text-blue-100 max-w-2xl mx-auto relative z-10 font-light">
            Join thousands of modern companies building their next generation products on CloudVault.
          </p>
          <button onClick={() => navigate("/signup")} className="px-10 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-slate-50 hover:scale-105 transition-all duration-300 relative z-10 shadow-xl text-lg">
            Create Free Account
          </button>
          <p className="mt-6 text-sm text-blue-200 relative z-10">No credit card required. 14-day free trial.</p>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="border-t border-white/10 py-12 bg-black/50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-xl font-bold">
            <Zap className="w-6 h-6 text-blue-500" />
            <span>CloudVault</span>
          </div>
          <p className="text-slate-500 text-sm">© 2026 CloudVault Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
