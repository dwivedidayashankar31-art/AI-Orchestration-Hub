import { useLocation } from "wouter";
import { Calendar, User, ArrowRight, Zap } from "lucide-react";

export default function Blog() {
  const [, navigate] = useLocation();

  const posts = [
    {
      title: "How to Scale Your SaaS Business to 10,000 Users",
      excerpt: "Learn the strategies and tools successful SaaS companies use to scale rapidly without sacrificing quality or breaking their infrastructure.",
      author: "Priya Singh",
      date: "March 10, 2026",
      category: "Growth",
      readTime: "8 min read",
    },
    {
      title: "Global Payment Processing: A Complete Guide",
      excerpt: "Supporting multiple currencies and payment methods is essential for global businesses. Here is how to implement it securely.",
      author: "Raj Kumar",
      date: "March 8, 2026",
      category: "Business",
      readTime: "6 min read",
    },
    {
      title: "Security Best Practices for SaaS Applications",
      excerpt: "Protect your users' data with these essential security measures and compliance standards used by top enterprise companies.",
      author: "Amit Patel",
      date: "March 5, 2026",
      category: "Security",
      readTime: "10 min read",
    },
    {
      title: "Building a Global Team: Hiring Across Borders",
      excerpt: "Expand your team internationally and manage a distributed workforce effectively with these proven frameworks.",
      author: "Neha Sharma",
      date: "March 1, 2026",
      category: "Team",
      readTime: "7 min read",
    },
    {
      title: "API Design Patterns That Scale",
      excerpt: "Design your APIs for scalability, flexibility, and ease of use with these proven patterns from industry leaders.",
      author: "Vikram Singh",
      date: "February 28, 2026",
      category: "Engineering",
      readTime: "12 min read",
    },
    {
      title: "Customer Success: The Key to Retention",
      excerpt: "Reduce churn and increase customer lifetime value with a customer-first approach to SaaS metrics.",
      author: "Aisha Khan",
      date: "February 25, 2026",
      category: "Success",
      readTime: "9 min read",
    },
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-1/3 w-[600px] h-[600px] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none"></div>

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
            <a onClick={() => navigate("/about")} className="hover:text-white transition cursor-pointer">About Us</a>
            <a onClick={() => navigate("/contact")} className="hover:text-white transition cursor-pointer">Contact</a>
          </div>
          <button onClick={() => navigate("/login")} className="px-5 py-2 text-sm font-medium rounded-lg border border-white/10 hover:bg-white/5 transition">
            Sign In
          </button>
        </div>
      </nav>

      <section className="pt-40 pb-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-gradient">The CloudVault Blog</h1>
            <p className="text-xl text-slate-400 font-light">Insights, strategies, and engineering deep dives</p>
          </div>

          {/* Featured Post */}
          <div className="glass-card rounded-3xl p-1 relative overflow-hidden mb-16 group cursor-pointer border-blue-500/30">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="bg-slate-900/90 rounded-[22px] p-8 md:p-12 relative z-10">
              <div className="flex items-center gap-2 mb-6">
                <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 text-blue-400 rounded-full text-xs font-bold uppercase tracking-wider">Featured Post</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight group-hover:text-blue-400 transition-colors duration-300">{posts[0].title}</h2>
              <p className="text-xl text-slate-400 mb-8 font-light leading-relaxed max-w-3xl">{posts[0].excerpt}</p>
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-white/10 pt-6">
                <div className="flex items-center gap-6 text-sm text-slate-400 font-medium">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
                      <User className="w-4 h-4 text-slate-300" />
                    </div>
                    {posts[0].author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-slate-500" />
                    {posts[0].date}
                  </div>
                  <span className="text-blue-400/80">{posts[0].readTime}</span>
                </div>
                <button className="flex items-center gap-2 text-white bg-white/5 hover:bg-white/10 px-5 py-2.5 rounded-lg transition font-medium border border-white/10">
                  Read Article <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Other Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post, i) => (
              <div key={i} className="glass-card rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300 cursor-pointer group flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">{post.category}</span>
                  <span className="text-xs text-slate-500">{post.readTime}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors leading-snug">{post.title}</h3>
                <p className="text-slate-400 text-sm mb-8 font-light leading-relaxed flex-1">{post.excerpt}</p>
                <div className="flex items-center gap-3 text-xs text-slate-400 border-t border-white/5 pt-6 mt-auto">
                  <div className="w-6 h-6 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
                    <User className="w-3 h-3 text-slate-300" />
                  </div>
                  <span className="font-medium text-slate-300">{post.author}</span>
                  <span className="mx-2 text-slate-600">•</span>
                  <span>{post.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
