import { useLocation } from "wouter";
import { Users, Globe, Target, Zap, ArrowRight } from "lucide-react";

export default function About() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-[#030712] text-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none"></div>

      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <button onClick={() => navigate("/")} className="flex items-center gap-2 text-2xl font-bold">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="font-display tracking-tight">Cloud<span className="text-blue-400">Vault</span></span>
          </button>
          <div className="hidden md:flex gap-8 items-center text-sm font-medium text-slate-300">
            <a onClick={() => navigate("/features")} className="hover:text-white transition cursor-pointer">Features</a>
            <a onClick={() => navigate("/pricing")} className="hover:text-white transition cursor-pointer">Pricing</a>
            <a onClick={() => navigate("/about")} className="text-white transition cursor-pointer">About Us</a>
            <a onClick={() => navigate("/contact")} className="hover:text-white transition cursor-pointer">Contact</a>
          </div>
          <button onClick={() => navigate("/login")} className="px-5 py-2 text-sm font-medium rounded-lg border border-white/10 hover:bg-white/5 transition">
            Sign In
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight text-gradient">Empowering Global Business</h1>
          <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-light">
            We're building the infrastructure that powers the next generation of global SaaS companies. Born in India, built for the world.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 border-y border-white/5 bg-white/[0.02] relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "5,000+", label: "Active Companies" },
            { number: "150+", label: "Countries Served" },
            { number: "99.99%", label: "Uptime Guaranteed" },
            { number: "250+", label: "Team Members" },
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 glass-panel rounded-2xl border border-white/5">
              <p className="text-4xl md:text-5xl font-bold text-blue-400 mb-2 font-display">{stat.number}</p>
              <p className="text-slate-400 font-medium uppercase tracking-wider text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Story</h2>
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed font-light">
              <p>
                Founded in 2024, CloudVault started with a simple observation: building globally scalable software was too hard for growing companies.
              </p>
              <p>
                We set out to create a platform that abstracts away the complexity of global infrastructure, compliance, and multi-tenant architecture, allowing developers to focus on what matters most: building great products.
              </p>
              <p>
                Today, we serve thousands of companies from our headquarters in Bengaluru to offices in San Francisco, London, and Singapore.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="glass-card rounded-3xl p-8 aspect-square flex flex-col items-center justify-center text-center">
              <Target className="w-16 h-16 text-blue-400 mb-6 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
              <h3 className="font-bold text-2xl mb-2">Our Mission</h3>
              <p className="text-slate-400">Democratize access to global software infrastructure.</p>
            </div>
            <div className="glass-card rounded-3xl p-8 aspect-square flex flex-col items-center justify-center text-center mt-12 border-indigo-500/20">
              <Globe className="w-16 h-16 text-indigo-400 mb-6 drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]" />
              <h3 className="font-bold text-2xl mb-2">Our Vision</h3>
              <p className="text-slate-400">A borderless digital economy powered by CloudVault.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-32 px-6 border-t border-white/5 bg-slate-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Leadership Team</h2>
            <p className="text-xl text-slate-400 font-light">Driven by passion, guided by experience</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Arjun Mehta", role: "CEO & Co-founder", color: "from-blue-500 to-blue-700" },
              { name: "Sarah Chen", role: "CTO", color: "from-purple-500 to-purple-700" },
              { name: "Rahul Verma", role: "Head of Product", color: "from-emerald-500 to-emerald-700" },
              { name: "Elena Rodriguez", role: "VP of Global Sales", color: "from-amber-500 to-amber-700" },
            ].map((member, i) => (
              <div key={i} className="glass-card rounded-3xl overflow-hidden group">
                <div className={`aspect-square bg-gradient-to-br ${member.color} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                  <Users className="w-20 h-20 text-white/50 group-hover:scale-110 group-hover:text-white/80 transition-all duration-500 z-10" />
                </div>
                <div className="p-8 text-center bg-slate-900/80 backdrop-blur-md">
                  <h3 className="font-bold text-2xl mb-1">{member.name}</h3>
                  <p className="text-blue-400 font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center bg-gradient-to-br from-blue-900/40 to-indigo-900/40 border border-blue-500/20 rounded-3xl p-16 shadow-2xl shadow-blue-900/20 backdrop-blur-xl">
          <h2 className="text-4xl font-bold mb-6 text-white">Join Our Journey</h2>
          <p className="text-xl mb-10 text-slate-300 font-light max-w-2xl mx-auto">We're always looking for talented individuals to join our global team.</p>
          <button className="px-8 py-4 bg-white text-blue-900 hover:text-blue-600 rounded-xl font-bold hover:bg-slate-50 transition flex items-center gap-2 mx-auto text-lg shadow-xl">
            View Open Positions <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
