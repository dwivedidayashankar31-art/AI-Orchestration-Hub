import { useLocation } from "wouter";
import { CheckCircle2, X, Zap } from "lucide-react";

export default function Pricing() {
  const [, navigate] = useLocation();

  const plans = [
    {
      name: "Starter",
      price: "₹999",
      description: "Perfect for indie hackers and small teams",
      features: [
        { name: "Up to 10 users", included: true },
        { name: "5GB storage", included: true },
        { name: "Community support", included: true },
        { name: "Basic analytics", included: true },
        { name: "Custom domain", included: false },
        { name: "API access", included: false },
      ]
    },
    {
      name: "Professional",
      price: "₹4,999",
      description: "For scaling startups and growing businesses",
      popular: true,
      features: [
        { name: "Up to 100 users", included: true },
        { name: "500GB storage", included: true },
        { name: "Priority 24/7 support", included: true },
        { name: "Advanced analytics", included: true },
        { name: "Custom domain", included: true },
        { name: "API access", included: false },
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations with custom needs",
      features: [
        { name: "Unlimited users", included: true },
        { name: "Unlimited storage", included: true },
        { name: "Dedicated account manager", included: true },
        { name: "Custom integrations", included: true },
        { name: "SLA guarantee", included: true },
        { name: "API access", included: true },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-1/4 w-[800px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Navigation */}
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
            <a onClick={() => navigate("/pricing")} className="text-white transition cursor-pointer">Pricing</a>
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
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-gradient">Simple, Transparent Pricing</h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">Choose the plan that fits your needs. Start for free, upgrade when you need to.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {plans.map((plan, i) => (
              <div key={i} className={`rounded-3xl p-8 relative flex flex-col ${plan.popular ? "bg-gradient-to-b from-blue-900/40 to-slate-900 border-2 border-blue-500 md:-translate-y-4 shadow-2xl shadow-blue-500/20" : "glass-card"}`}>
                {plan.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-500 text-white text-xs font-bold uppercase tracking-wider rounded-full">★ MOST POPULAR</div>}
                <h3 className="text-3xl font-bold mb-2">{plan.name}</h3>
                <p className="text-slate-400 text-sm mb-8 h-10">{plan.description}</p>
                <div className="mb-8">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-xl text-slate-400 font-light">/mo</span>}
                </div>
                <button onClick={() => navigate(`/checkout?plan=${plan.name}`)} className={`w-full py-4 rounded-xl font-bold mb-8 transition-all duration-300 ${plan.popular ? "bg-blue-600 hover:bg-blue-500 text-white glow-button" : "bg-white/5 border border-white/10 hover:bg-white/10 text-white"}`}>
                  Get Started
                </button>
                <div className="space-y-4 flex-1">
                  <p className="text-sm font-medium text-slate-300 uppercase tracking-wider mb-4">What's included</p>
                  {plan.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-3">
                      {feature.included ? (
                        <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-slate-600 flex-shrink-0" />
                      )}
                      <span className={feature.included ? "text-slate-200" : "text-slate-500"}>{feature.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div className="max-w-3xl mx-auto mt-20">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: "Can I change my plan anytime?", a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately." },
                { q: "Is there a free trial?", a: "Yes! All plans come with a 14-day free trial. No credit card required." },
                { q: "What payment methods do you accept?", a: "We accept all major credit cards, UPI, and bank transfers for Indian customers." },
                { q: "Do you offer discounts for annual billing?", a: "Yes! Get 20% off when you choose annual billing." },
              ].map((item, i) => (
                <div key={i} className="glass-panel rounded-xl p-6 hover:bg-white/[0.03] transition">
                  <h3 className="font-semibold text-lg mb-2 text-blue-100">{item.q}</h3>
                  <p className="text-slate-400 font-light">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
