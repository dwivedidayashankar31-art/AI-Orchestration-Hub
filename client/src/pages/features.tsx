import { useLocation } from "wouter";
import { Lock, Zap, Globe, BarChart3, Users, Layers } from "lucide-react";

export default function Features() {
  const [, navigate] = useLocation();

  const features = [
    {
      icon: Lock,
      title: "Bank-Level Security",
      description: "Enterprise-grade encryption with AES-256, SOC 2 Type II compliance, and regular security audits",
      points: ["End-to-end encryption", "Two-factor authentication", "IP whitelisting", "Audit logs"]
    },
    {
      icon: Zap,
      title: "Lightning Fast Performance",
      description: "Optimized infrastructure with 150+ global data centers ensuring <100ms latency worldwide",
      points: ["99.99% uptime", "Auto-scaling", "CDN integration", "Real-time syncing"]
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Support for 50+ currencies and 100+ languages with localized compliance for every region",
      points: ["Multi-currency", "Local compliance", "Regional data centers", "24/7 support"]
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Real-time dashboards with actionable insights to track performance and grow your business",
      points: ["Custom reports", "Data export", "API analytics", "Trend analysis"]
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Invite unlimited team members with granular role-based access control and activity tracking",
      points: ["Role-based access", "Audit trails", "Team workflows", "Notifications"]
    },
    {
      icon: Layers,
      title: "API & Integrations",
      description: "Comprehensive REST API with SDKs for 15+ languages and 100+ pre-built integrations",
      points: ["REST API", "WebHooks", "Pre-built SDKs", "Zapier integration"]
    },
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-blue-900/20 to-transparent pointer-events-none"></div>

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
            <a onClick={() => navigate("/features")} className="text-white transition cursor-pointer">Features</a>
            <a onClick={() => navigate("/pricing")} className="hover:text-white transition cursor-pointer">Pricing</a>
            <a onClick={() => navigate("/about")} className="hover:text-white transition cursor-pointer">About Us</a>
            <a onClick={() => navigate("/contact")} className="hover:text-white transition cursor-pointer">Contact</a>
          </div>
          <button onClick={() => navigate("/login")} className="px-5 py-2 text-sm font-medium rounded-lg border border-white/10 hover:bg-white/5 transition">
            Sign In
          </button>
        </div>
      </nav>

      <section className="pt-40 pb-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-gradient">Powerful Features <br/>for Modern Businesses</h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">Everything you need to scale globally, built right into the platform.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="glass-card rounded-3xl p-10 group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 flex items-center justify-center mb-8 border border-white/5 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-3xl font-bold mb-4">{feature.title}</h3>
                <p className="text-slate-400 mb-8 font-light leading-relaxed text-lg">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.points.map((point, j) => (
                    <li key={j} className="flex items-center gap-3 text-slate-300 font-medium">
                      <div className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-white/5 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to experience CloudVault?</h2>
          <button onClick={() => navigate("/signup")} className="px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition glow-button text-lg mt-8">
            Start Your Free Trial
          </button>
        </div>
      </section>
    </div>
  );
}
