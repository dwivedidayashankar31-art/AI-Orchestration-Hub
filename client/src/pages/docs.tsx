import { useLocation } from "wouter";
import { BookOpen, Code2, Shield, Zap, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Docs() {
  const [, navigate] = useLocation();
  const [activeSection, setActiveSection] = useState("getting-started");

  const sections = [
    { id: "getting-started", title: "Getting Started", icon: BookOpen },
    { id: "api-reference", title: "API Reference", icon: Code2 },
    { id: "security", title: "Security", icon: Shield },
    { id: "best-practices", title: "Best Practices", icon: Zap },
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none"></div>

      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <button onClick={() => navigate("/")} className="flex items-center gap-2 text-2xl font-bold">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="font-display tracking-tight">Cloud<span className="text-blue-400">Vault</span></span>
          </button>
          <button onClick={() => navigate("/login")} className="px-5 py-2 text-sm font-medium rounded-lg border border-white/10 hover:bg-white/5 transition">
            Sign In
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-10">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-32 space-y-2 glass-panel p-6 rounded-2xl">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">Documentation</h3>
            {sections.map(section => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center gap-3 text-sm font-medium ${
                  activeSection === section.id 
                  ? "bg-blue-500/20 border border-blue-500/30 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.15)]" 
                  : "text-slate-400 hover:text-white hover:bg-white/5 border border-transparent"
                }`}
                data-testid={`nav-doc-${section.id}`}
              >
                <section.icon className={`w-4 h-4 ${activeSection === section.id ? "text-blue-400" : "text-slate-500"}`} />
                {section.title}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-3">
          {activeSection === "getting-started" && (
            <div className="space-y-12">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Getting Started</h1>
                <p className="text-slate-400 text-lg font-light">Learn how to integrate CloudVault into your application</p>
              </div>

              <div className="space-y-8">
                <div className="glass-card rounded-2xl p-8">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center text-sm border border-blue-500/20">1</span>
                    Create an Account
                  </h2>
                  <p className="text-slate-400 mb-6 font-light leading-relaxed">Sign up for a free trial of CloudVault. No credit card required. Get access to the dashboard and API keys instantly.</p>
                  <button onClick={() => navigate("/signup")} className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium">
                    Create free account <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="glass-card rounded-2xl p-8">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center text-sm border border-blue-500/20">2</span>
                    Get Your API Keys
                  </h2>
                  <p className="text-slate-400 mb-6 font-light leading-relaxed">Navigate to Settings → API Keys to generate your production and development keys.</p>
                  <div className="bg-black/60 border border-white/5 p-4 rounded-xl relative group">
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">Copy</div>
                    <code className="text-sm text-green-400 font-mono">sk_live_1234567890abcdef</code>
                  </div>
                </div>

                <div className="glass-card rounded-2xl p-8">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center text-sm border border-blue-500/20">3</span>
                    Install SDK
                  </h2>
                  <p className="text-slate-400 mb-6 font-light leading-relaxed">Install the CloudVault SDK for your preferred language to interact with our API.</p>
                  <div className="bg-black/60 border border-white/5 p-6 rounded-xl space-y-3 font-mono text-sm">
                    <div className="flex items-center gap-4"><span className="text-slate-500 w-8">npm</span><span className="text-blue-300">install cloudvault-sdk</span></div>
                    <div className="flex items-center gap-4"><span className="text-slate-500 w-8">pip</span><span className="text-blue-300">install cloudvault</span></div>
                    <div className="flex items-center gap-4"><span className="text-slate-500 w-8">go</span><span className="text-blue-300">get github.com/cloudvault/sdk</span></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === "api-reference" && (
            <div className="space-y-12">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">API Reference</h1>
                <p className="text-slate-400 text-lg font-light">Complete API documentation for CloudVault REST endpoints</p>
              </div>

              <div className="space-y-6">
                {[
                  { 
                    method: "POST", 
                    color: "text-green-400 bg-green-500/10 border border-green-500/20",
                    endpoint: "/api/v1/users", 
                    desc: "Create a new user with specified role and permissions.",
                    code: "curl -X POST https://api.cloudvault.io/v1/users \\ \n  -H 'Authorization: Bearer sk_live_...' \\ \n  -d '{\"email\": \"user@example.com\"}'" 
                  },
                  { 
                    method: "GET", 
                    color: "text-blue-400 bg-blue-500/10 border border-blue-500/20",
                    endpoint: "/api/v1/users/:id", 
                    desc: "Retrieve details for a specific user.",
                    code: "curl https://api.cloudvault.io/v1/users/usr_12345 \\ \n  -H 'Authorization: Bearer sk_live_...'" 
                  },
                  { 
                    method: "PUT", 
                    color: "text-amber-400 bg-amber-500/10 border border-amber-500/20",
                    endpoint: "/api/v1/users/:id", 
                    desc: "Update existing user information.",
                    code: "curl -X PUT https://api.cloudvault.io/v1/users/usr_12345 \\ \n  -H 'Authorization: Bearer sk_live_...' \\ \n  -d '{\"role\": \"admin\"}'" 
                  },
                ].map((endpoint, i) => (
                  <div key={i} className="glass-card rounded-2xl p-8">
                    <div className="flex items-center gap-4 mb-6 border-b border-white/5 pb-4">
                      <span className={`px-3 py-1 rounded-md font-bold text-xs ${endpoint.color}`}>{endpoint.method}</span>
                      <code className="text-sm font-mono text-slate-200">{endpoint.endpoint}</code>
                    </div>
                    <p className="text-slate-400 mb-6 font-light">{endpoint.desc}</p>
                    <div className="bg-black/60 border border-white/5 p-4 rounded-xl">
                      <pre className="text-xs text-slate-300 font-mono overflow-x-auto whitespace-pre-wrap">{endpoint.code}</pre>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === "security" && (
            <div className="space-y-12">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Security</h1>
                <p className="text-slate-400 text-lg font-light">How CloudVault keeps your data safe</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "End-to-End Encryption", desc: "All data is encrypted in transit using TLS 1.3 and at rest using AES-256." },
                  { title: "Authentication", desc: "Supports OAuth 2.0, SAML, JWT tokens, and secure API key authentication." },
                  { title: "Compliance", desc: "SOC 2 Type II, GDPR, HIPAA, and ISO 27001 certified data centers." },
                  { title: "Backup & Recovery", desc: "Automated daily backups with point-in-time recovery and 99.99% uptime SLA." },
                ].map((feature, i) => (
                  <div key={i} className="glass-card rounded-2xl p-8">
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-slate-400 font-light leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === "best-practices" && (
            <div className="space-y-12">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Best Practices</h1>
                <p className="text-slate-400 text-lg font-light">Get the most out of CloudVault</p>
              </div>

              <div className="space-y-6">
                {[
                  { title: "Use Environment Variables", desc: "Never hardcode API keys in your application source code. Always use environment variables (.env files) and ensure they are not committed to version control." },
                  { title: "Implement Rate Limiting Strategies", desc: "Respect API rate limits by implementing exponential backoff and retry logic in your application to ensure stable performance during traffic spikes." },
                  { title: "Monitor API Usage", desc: "Regularly check your CloudVault dashboard to track API usage and optimize requests to prevent unnecessary costs." },
                  { title: "Test in Sandbox Environment", desc: "Always test new integrations using your development keys in the sandbox environment before deploying to production." },
                ].map((practice, i) => (
                  <div key={i} className="glass-card rounded-2xl p-8 flex gap-6">
                    <div className="hidden sm:flex w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 shrink-0 items-center justify-center">
                      <Zap className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">{practice.title}</h3>
                      <p className="text-slate-400 font-light leading-relaxed">{practice.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
