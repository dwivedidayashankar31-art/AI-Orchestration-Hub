import { useLocation } from "wouter";
import { LogOut, Users, Building2, TrendingUp, AlertCircle, Activity, Globe, Database, Search } from "lucide-react";
import { useState } from "react";

export default function AdminPanel() {
  const [, navigate] = useLocation();
  const [activeTab, setActiveTab] = useState("companies");

  return (
    <div className="min-h-screen bg-[#030712] text-slate-50 flex flex-col md:flex-row">
      {/* Mobile Header (visible only on small screens) */}
      <div className="md:hidden glass-panel border-b border-white/5 p-4 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-red-600 flex items-center justify-center font-bold text-sm">AD</div>
          <span className="font-display font-bold">Admin Controls</span>
        </div>
        <button onClick={() => navigate("/")} className="p-2 bg-white/5 rounded border border-white/10">
          <LogOut className="w-4 h-4" />
        </button>
      </div>

      {/* Sidebar Navigation */}
      <div className="hidden md:flex w-64 glass-panel border-r border-white/5 flex-col h-screen sticky top-0">
        <div className="p-6 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500 to-rose-700 flex items-center justify-center font-bold shadow-lg shadow-red-500/20">
              AD
            </div>
            <div>
              <p className="font-bold font-display leading-tight">CloudVault</p>
              <p className="text-xs text-red-400 font-mono">Super Admin</p>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
          <p className="px-3 text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Platform</p>
          {[
            { id: "companies", label: "Companies", icon: Building2 },
            { id: "users", label: "Global Users", icon: Users },
            { id: "analytics", label: "Financials", icon: TrendingUp },
            { id: "infrastructure", label: "Infrastructure", icon: Database },
            { id: "alerts", label: "System Alerts", icon: AlertCircle },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all text-sm font-medium ${
                activeTab === tab.id 
                ? "bg-red-500/10 text-red-400 border border-red-500/20" 
                : "text-slate-400 hover:text-slate-200 hover:bg-white/5 border border-transparent"
              }`}
              data-testid={`tab-admin-${tab.id}`}
            >
              <tab.icon className={`w-4 h-4 ${activeTab === tab.id ? "text-red-400" : ""}`} />
              {tab.label}
            </button>
          ))}
        </div>

        <div className="p-4 border-t border-white/5">
          <button onClick={() => navigate("/")} className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm font-medium transition text-slate-300 hover:text-white">
            <LogOut className="w-4 h-4" />
            Exit Admin
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto p-4 md:p-8 relative">
        {/* Background glow specific to admin */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-6xl mx-auto space-y-8 relative z-10">
          
          {/* Header row with search (common across tabs) */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4">
            <h1 className="text-2xl font-bold capitalize">{activeTab}</h1>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input 
                type="text" 
                placeholder={`Search ${activeTab}...`} 
                className="w-full bg-slate-900/80 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-sm focus:border-red-500 focus:outline-none transition text-white"
              />
            </div>
          </div>

          {/* Companies Tab */}
          {activeTab === "companies" && (
            <div className="space-y-8 animate-in fade-in duration-300">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { label: "Total Workspaces", value: "5,234", trend: "+124 this week" },
                  { label: "Active Subscriptions", value: "4,987", trend: "95% conversion" },
                  { label: "Enterprise Clients", value: "142", trend: "+5 this month" },
                ].map((stat, i) => (
                  <div key={i} className="glass-card rounded-2xl p-6 border-t-2 border-t-red-500/50">
                    <p className="text-slate-400 text-sm font-medium mb-1">{stat.label}</p>
                    <p className="text-3xl font-bold font-display mb-2">{stat.value}</p>
                    <p className="text-xs text-green-400 font-medium">{stat.trend}</p>
                  </div>
                ))}
              </div>

              <div className="glass-card rounded-2xl overflow-hidden">
                <div className="p-6 border-b border-white/5 flex justify-between items-center">
                  <h3 className="text-lg font-bold">Recent Signups & Activity</h3>
                  <button className="text-xs font-medium text-slate-400 hover:text-white border border-white/10 rounded px-3 py-1 bg-white/5">Filter</button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-slate-900/50 text-xs font-bold text-slate-400 uppercase tracking-wider">
                        <th className="px-6 py-4">Company</th>
                        <th className="px-6 py-4">Plan</th>
                        <th className="px-6 py-4">Users/Storage</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {[
                        { name: "TechMark Solutions", domain: "techmark.com", plan: "Professional", users: 45, storage: "120GB", status: "Active", color: "bg-green-500/20 text-green-400 border-green-500/20" },
                        { name: "DataSync Pvt Ltd", domain: "datasync.io", plan: "Enterprise", users: 120, storage: "2.5TB", status: "Active", color: "bg-green-500/20 text-green-400 border-green-500/20" },
                        { name: "CloudBase Inc", domain: "cloudbase.net", plan: "Starter", users: 8, storage: "4GB", status: "Past Due", color: "bg-red-500/20 text-red-400 border-red-500/20" },
                        { name: "InnovateTech", domain: "innovate.co", plan: "Professional", users: 32, storage: "45GB", status: "Trial", color: "bg-blue-500/20 text-blue-400 border-blue-500/20" },
                        { name: "Nexus Systems", domain: "nexus.dev", plan: "Starter", users: 2, storage: "1GB", status: "Active", color: "bg-green-500/20 text-green-400 border-green-500/20" },
                      ].map((company, i) => (
                        <tr key={i} className="hover:bg-white/[0.02] transition-colors group">
                          <td className="px-6 py-4">
                            <p className="font-semibold text-slate-200">{company.name}</p>
                            <p className="text-xs text-slate-500 font-mono">{company.domain}</p>
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-sm font-medium text-slate-300">{company.plan}</span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm">
                              <span className="text-slate-300">{company.users}</span> <span className="text-slate-500 text-xs">seats</span>
                              <span className="mx-2 text-slate-700">|</span>
                              <span className="text-slate-300">{company.storage}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`px-2.5 py-1 rounded text-xs font-bold uppercase tracking-wider border ${company.color}`}>
                              {company.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <button className="text-xs font-medium text-slate-400 hover:text-white px-3 py-1.5 rounded bg-white/5 border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">Manage</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Analytics Tab */}
          {activeTab === "analytics" && (
            <div className="space-y-8 animate-in fade-in duration-300">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: "MRR", value: "$425,000", subtitle: "Monthly Rec. Rev" },
                  { label: "ARR", value: "$5.1M", subtitle: "Annual Run Rate" },
                  { label: "ARPU", value: "$85", subtitle: "Avg Rev Per User" },
                  { label: "Churn", value: "1.2%", subtitle: "Monthly Churn Rate" },
                ].map((metric, i) => (
                  <div key={i} className="glass-card rounded-xl p-5 border-l-2 border-l-red-500">
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">{metric.label}</p>
                    <p className="text-2xl font-bold font-mono text-slate-100 mb-1">{metric.value}</p>
                    <p className="text-xs text-slate-500">{metric.subtitle}</p>
                  </div>
                ))}
              </div>

              <div className="glass-card rounded-2xl p-6 md:p-8">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-xl font-bold">Revenue Growth (YTD)</h3>
                  <select className="bg-slate-900 border border-white/10 rounded px-3 py-1 text-sm text-slate-300 outline-none">
                    <option>2026</option>
                    <option>2025</option>
                  </select>
                </div>
                
                {/* Mock Chart Area */}
                <div className="h-64 flex items-end justify-between gap-2 border-b border-white/10 pb-2 relative">
                  {/* Chart Grid Lines */}
                  <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                    <div className="w-full border-t border-white/5"></div>
                    <div className="w-full border-t border-white/5"></div>
                    <div className="w-full border-t border-white/5"></div>
                    <div className="w-full border-t border-white/5"></div>
                  </div>
                  
                  {/* Bars */}
                  {[40, 55, 45, 60, 75, 65, 80, 85, 95, 88, 100, 110].map((height, i) => (
                    <div key={i} className="w-full relative group h-full flex items-end justify-center">
                      <div 
                        className="w-full max-w-[40px] bg-gradient-to-t from-red-600/40 to-red-400/80 rounded-t-sm transition-all duration-500 group-hover:from-red-500/60 group-hover:to-red-300 relative"
                        style={{ height: `${(height/120)*100}%` }}
                      >
                        {/* Tooltip */}
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 border border-white/10 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                          ${height}k
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-4 text-xs text-slate-500 font-mono px-2">
                  <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                  <span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
                </div>
              </div>
            </div>
          )}

          {/* Infrastructure Tab */}
          {activeTab === "infrastructure" && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="glass-card rounded-2xl p-6 flex flex-col items-center text-center">
                  <Globe className="w-10 h-10 text-blue-400 mb-4" />
                  <h3 className="text-lg font-bold mb-1">Global Edge Nodes</h3>
                  <p className="text-3xl font-display font-bold text-slate-200">156 <span className="text-sm text-green-400 font-sans tracking-normal">Online</span></p>
                </div>
                <div className="glass-card rounded-2xl p-6 flex flex-col items-center text-center">
                  <Database className="w-10 h-10 text-purple-400 mb-4" />
                  <h3 className="text-lg font-bold mb-1">Database Clusters</h3>
                  <p className="text-3xl font-display font-bold text-slate-200">24 <span className="text-sm text-green-400 font-sans tracking-normal">Healthy</span></p>
                </div>
                <div className="glass-card rounded-2xl p-6 flex flex-col items-center text-center">
                  <Activity className="w-10 h-10 text-emerald-400 mb-4" />
                  <h3 className="text-lg font-bold mb-1">Avg Global Latency</h3>
                  <p className="text-3xl font-display font-bold text-slate-200">42<span className="text-sm text-slate-500 ml-1 font-sans">ms</span></p>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-lg font-bold mb-6 border-b border-white/10 pb-4">Region Status</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { region: "ap-south-1 (Mumbai)", status: "Optimal", load: "64%" },
                    { region: "us-east-1 (N. Virginia)", status: "Optimal", load: "78%" },
                    { region: "eu-central-1 (Frankfurt)", status: "High Load", load: "92%" },
                    { region: "ap-southeast-1 (Singapore)", status: "Optimal", load: "45%" },
                  ].map((node, i) => (
                    <div key={i} className="bg-slate-900/50 border border-white/5 rounded-xl p-4 flex justify-between items-center">
                      <div>
                        <p className="font-mono text-sm text-slate-300">{node.region}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <div className={`w-2 h-2 rounded-full ${node.load > "85%" ? "bg-amber-500" : "bg-green-500"}`}></div>
                          <span className="text-xs text-slate-500">{node.status}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-slate-500 mb-1">Capacity</p>
                        <p className="font-mono text-sm font-bold text-slate-300">{node.load}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Placeholders for other tabs */}
          {(activeTab === "users" || activeTab === "alerts") && (
            <div className="glass-card rounded-2xl p-12 text-center border-dashed border-white/20">
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                {activeTab === "users" ? <Users className="w-8 h-8 text-slate-400" /> : <AlertCircle className="w-8 h-8 text-slate-400" />}
              </div>
              <h3 className="text-xl font-bold mb-2 capitalize">{activeTab} Management</h3>
              <p className="text-slate-400 max-w-md mx-auto">This module is currently operating in headless mode. Data is being collected but visualization UI is rendering.</p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
