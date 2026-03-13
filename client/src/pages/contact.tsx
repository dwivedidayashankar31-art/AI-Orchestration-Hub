import { useLocation } from "wouter";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Zap } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [, navigate] = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>

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
            <a onClick={() => navigate("/contact")} className="text-white transition cursor-pointer">Contact</a>
          </div>
          <button onClick={() => navigate("/login")} className="px-5 py-2 text-sm font-medium rounded-lg border border-white/10 hover:bg-white/5 transition">
            Sign In
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-32 relative z-10">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-gradient">Get in Touch</h1>
          <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto">Whether you have a question about features, pricing, or anything else, our global team is ready to answer all your questions.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-10">
            <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
            
            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 group-hover:border-blue-500/30 transition-all">
                <MapPin className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-slate-200">Global Headquarters</h3>
                <p className="text-slate-400 font-light leading-relaxed">123 CloudVault Tower, Tech Park<br />Bengaluru, Karnataka 560001<br />India</p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 group-hover:border-blue-500/30 transition-all">
                <Mail className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-slate-200">Email Us</h3>
                <p className="text-slate-400 font-light leading-relaxed">Support: support@cloudvault.com<br />Sales: sales@cloudvault.com</p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 group-hover:border-blue-500/30 transition-all">
                <Phone className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-slate-200">Call Us</h3>
                <p className="text-slate-400 font-light leading-relaxed">India: +91 1800 123 4567<br />Intl: +1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 group-hover:border-blue-500/30 transition-all">
                <Clock className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-slate-200">Support Hours</h3>
                <p className="text-slate-400 font-light leading-relaxed">24/7 Global Support for Enterprise<br />Mon-Fri, 9AM-6PM IST for Standard</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="glass-card rounded-3xl p-10 lg:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[60px]"></div>
              
              <h2 className="text-3xl font-bold mb-8 relative z-10">Send a Message</h2>
              
              {isSubmitted ? (
                <div className="h-[400px] flex flex-col items-center justify-center text-center relative z-10">
                  <div className="w-20 h-20 bg-green-500/20 border border-green-500/30 rounded-2xl flex items-center justify-center mb-6">
                    <MessageSquare className="w-10 h-10 text-green-400" />
                  </div>
                  <h3 className="text-3xl font-bold text-green-400 mb-4 tracking-tight">Message Sent!</h3>
                  <p className="text-slate-400 text-lg font-light">We've received your inquiry and will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-slate-300">Your Name</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 focus:outline-none transition font-light"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2 text-slate-300">Email Address</label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 focus:outline-none transition font-light"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-slate-300">Subject</label>
                    <select 
                      className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 focus:outline-none transition font-light appearance-none"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      required
                    >
                      <option value="" className="bg-slate-900">Select a topic</option>
                      <option value="sales" className="bg-slate-900">Sales Inquiry</option>
                      <option value="support" className="bg-slate-900">Technical Support</option>
                      <option value="billing" className="bg-slate-900">Billing Question</option>
                      <option value="partnership" className="bg-slate-900">Partnership</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-slate-300">Message</label>
                    <textarea 
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 focus:outline-none transition min-h-[160px] font-light resize-none"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white rounded-xl py-4 font-bold flex items-center justify-center gap-2 transition glow-button mt-8 text-lg">
                    Send Message <Send className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
