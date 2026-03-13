import { useLocation } from "wouter";
import { LogOut, Settings, Users, CreditCard, BarChart3, ArrowUpRight, CheckCircle2, Copy, MessageSquare } from "lucide-react";
import { SmsSender } from "@/components/SmsSender";
import { useState } from "react";

export default function CompanyDashboard() {
  const [, navigate] = useLocation();
  const [activeTab, setActiveTab] = useState("overview");

  const [workspaceName, setWorkspaceName] = useState("TechMark Solutions");
  const [workspaceEmail, setWorkspaceEmail] = useState("admin@techmark.com");

  const [teamMembers, setTeamMembers] = useState([
    { id: 1, name: "Raj Kumar", email: "raj@techmark.com", role: "Owner", status: "Active", joined: "Jan 15, 2024", initials: "RK", color: "bg-blue-500" },
    { id: 2, name: "Priya Singh", email: "priya@techmark.com", role: "Admin", status: "Active", joined: "Feb 20, 2024", initials: "PS", color: "bg-purple-500" },
    { id: 3, name: "Amit Patel", email: "amit@techmark.com", role: "Developer", status: "Active", joined: "Mar 10, 2024", initials: "AP", color: "bg-emerald-500" },
    { id: 4, name: "Neha Sharma", email: "neha@techmark.com", role: "Viewer", status: "Invited", joined: "Pending", initials: "NS", color: "bg-slate-600" },
  ]);

  const [isInviting, setIsInviting] = useState(false);
  const [newMemberEmail, setNewMemberEmail] = useState("");
  const [newMemberRole, setNewMemberRole] = useState("Viewer");

  const handleInviteMember = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMemberEmail) return;

    const emailName = newMemberEmail.split('@')[0];
    const newMember = {
      id: Date.now(),
      name: emailName.charAt(0).toUpperCase() + emailName.slice(1),
      email: newMemberEmail,
      role: newMemberRole,
      status: "Invited",
      joined: "Pending",
      initials: emailName.substring(0, 2).toUpperCase(),
      color: "bg-slate-600"
    };

    setTeamMembers([...teamMembers, newMember]);
    setNewMemberEmail("");
    setIsInviting(false);
  };

  const removeMember = (id: number) => {
    setTeamMembers(teamMembers.filter(m => m.id !== id));
  };

  const menuItems = [
    { id: "overview", label: "Overview", icon: BarChart3 },
    { id: "team", label: "Team Members", icon: Users },
    { id: "billing", label: "Billing", icon: CreditCard },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-slate-50">
      {/* Top Nav */}
      <nav className="border-b border-white/5 glass-panel sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center font-bold shadow-lg shadow-blue-500/20">TM</div>
            <div>
              <p className="font-bold text-lg leading-tight">TechMark Solutions</p>
              <div className="flex items-center gap-2 text-xs">
                <span className="text-blue-400 font-medium">Professional Plan</span>
                <span className="text-slate-600">•</span>
                <span className="text-slate-400">ID: cmp_9x8f7d</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <button onClick={() => navigate("/dashboard")} className="text-sm font-medium text-slate-400 hover:text-white transition">
              System Orchestration
            </button>
            <button onClick={() => navigate("/")} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm font-medium transition">
              <LogOut className="w-4 h-4" />
              Sign Out
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Tabs */}
        <div className="flex gap-2 mb-10 border-b border-white/10 pb-px overflow-x-auto">
          {menuItems.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center gap-2 px-5 py-3 border-b-2 font-medium transition-all whitespace-nowrap ${
                activeTab === item.id 
                ? "border-blue-500 text-blue-400" 
                : "border-transparent text-slate-400 hover:text-slate-200 hover:border-white/20"
              }`}
              data-testid={`tab-${item.id}`}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: "Active Users", value: "248", change: "+12.5%", isPositive: true, icon: Users },
                { label: "Storage Used", value: "456 GB", change: "91% capacity", isPositive: false, icon: CreditCard },
                { label: "API Calls", value: "1.2M", change: "+32.1%", isPositive: true, icon: ArrowUpRight },
                { label: "System Uptime", value: "99.98%", change: "Stable", isPositive: true, icon: BarChart3 },
              ].map((stat, i) => (
                <div key={i} className="glass-card rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">{stat.label}</p>
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                      <stat.icon className="w-4 h-4 text-blue-400" />
                    </div>
                  </div>
                  <p className="text-3xl font-bold mb-2 font-display">{stat.value}</p>
                  <p className={`text-xs font-medium ${stat.isPositive ? 'text-green-400' : 'text-amber-400'}`}>{stat.change}</p>
                </div>
              ))}
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-6">Resource Usage</h3>
                <div className="space-y-6">
                  {[
                    { name: "API Calls", val: 85, text: "85M / 100M" },
                    { name: "Storage", val: 91, text: "456GB / 500GB" },
                    { name: "Team Seats", val: 45, text: "45 / 100" },
                    { name: "Compute", val: 62, text: "620 hrs / 1000 hrs" }
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-medium text-slate-300">{item.name}</span>
                        <span className="text-slate-400 font-mono">{item.text}</span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden border border-white/5">
                        <div 
                          className={`h-full rounded-full relative ${item.val > 90 ? 'bg-amber-500' : 'bg-blue-500'}`} 
                          style={{ width: `${item.val}%` }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card rounded-2xl p-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold">Audit Log</h3>
                  <button className="text-xs text-blue-400 hover:text-blue-300 font-medium">View All</button>
                </div>
                <div className="space-y-4">
                  {[
                    { action: "API Key Created", user: "raj@techmark.com", time: "2 hours ago", status: "success" },
                    { action: "User Invited", user: "admin", time: "5 hours ago", status: "success" },
                    { action: "Failed Login Attempt", user: "Unknown IP", time: "1 day ago", status: "warning" },
                    { action: "Billing Plan Updated", user: "raj@techmark.com", time: "3 days ago", status: "success" },
                    { action: "Database Export", user: "system", time: "4 days ago", status: "info" },
                  ].map((activity, i) => (
                    <div key={i} className="flex items-center gap-4 py-3 border-b border-white/5 last:border-0 last:pb-0">
                      <div className={`w-2 h-2 rounded-full shrink-0 ${
                        activity.status === 'success' ? 'bg-green-400 shadow-[0_0_8px_#4ade80]' :
                        activity.status === 'warning' ? 'bg-amber-400 shadow-[0_0_8px_#fbbf24]' :
                        'bg-blue-400 shadow-[0_0_8px_#60a5fa]'
                      }`}></div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-slate-200 truncate">{activity.action}</p>
                        <p className="text-xs text-slate-500 truncate">by {activity.user}</p>
                      </div>
                      <p className="text-xs text-slate-400 whitespace-nowrap">{activity.time}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Communication Tools */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1">
                <SmsSender />
              </div>
              <div className="lg:col-span-2 glass-card rounded-2xl p-8 border-dashed border-white/20 flex flex-col items-center justify-center text-center">
                 <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-4">
                   <MessageSquare className="w-8 h-8 text-blue-400" />
                 </div>
                 <h3 className="text-xl font-bold mb-2">Message Campaign Logs</h3>
                 <p className="text-slate-400 max-w-md mx-auto">Send a message using the tool on the left to see campaign metrics and delivery status appear here.</p>
              </div>
            </div>
          </div>
        )}

        {/* Team Tab */}
        {activeTab === "team" && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-6">
              <div>
                <h2 className="text-2xl font-bold mb-1">Team Members</h2>
                <p className="text-slate-400 text-sm">Manage who has access to this workspace. 45/100 seats used.</p>
              </div>
              <button 
                onClick={() => setIsInviting(!isInviting)}
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium transition shadow-lg shadow-blue-500/20 whitespace-nowrap" 
                data-testid="button-add-member"
              >
                {isInviting ? "Cancel" : "+ Invite Member"}
              </button>
            </div>

            {isInviting && (
              <form onSubmit={handleInviteMember} className="glass-card rounded-2xl p-6 border-blue-500/30 mb-6">
                <h3 className="text-lg font-bold mb-4">Invite New Member</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium mb-2 text-slate-400">Email Address</label>
                    <input 
                      type="email" 
                      required
                      value={newMemberEmail}
                      onChange={(e) => setNewMemberEmail(e.target.value)}
                      placeholder="colleague@techmark.com" 
                      className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:border-blue-500 focus:outline-none transition" 
                    />
                  </div>
                  <div className="sm:w-48">
                    <label className="block text-sm font-medium mb-2 text-slate-400">Role</label>
                    <select 
                      value={newMemberRole}
                      onChange={(e) => setNewMemberRole(e.target.value)}
                      className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:border-blue-500 focus:outline-none transition appearance-none"
                    >
                      <option value="Admin">Admin</option>
                      <option value="Developer">Developer</option>
                      <option value="Viewer">Viewer</option>
                    </select>
                  </div>
                  <div className="flex items-end">
                    <button type="submit" className="w-full sm:w-auto px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium transition shadow-lg shadow-blue-500/20">
                      Send Invite
                    </button>
                  </div>
                </div>
              </form>
            )}

            <div className="glass-card rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-white/5 border-b border-white/10">
                      <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">User</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Role</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Joined</th>
                      <th className="px-6 py-4"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {teamMembers.map((member) => (
                      <tr key={member.id} className="hover:bg-white/[0.02] transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-full ${member.color} flex items-center justify-center text-sm font-bold shadow-inner`}>
                              {member.initials}
                            </div>
                            <div>
                              <p className="font-semibold text-slate-200">{member.name}</p>
                              <p className="text-xs text-slate-500">{member.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-2.5 py-1 rounded-md text-xs font-medium border ${
                            member.role === 'Owner' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' :
                            member.role === 'Admin' ? 'bg-purple-500/10 text-purple-400 border-purple-500/20' :
                            'bg-slate-800 text-slate-300 border-slate-700'
                          }`}>
                            {member.role}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${member.status === 'Active' ? 'bg-green-500' : member.status === 'Invited' ? 'bg-amber-500' : 'bg-slate-500'}`}></div>
                            <span className="text-sm text-slate-300">{member.status}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-400">
                          {member.joined}
                        </td>
                        <td className="px-6 py-4 text-right">
                          {member.role !== 'Owner' && (
                            <button 
                              onClick={() => removeMember(member.id)}
                              className="text-red-400 hover:text-red-300 font-medium text-sm ml-4"
                            >
                              Remove
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Billing Tab */}
        {activeTab === "billing" && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 glass-card rounded-3xl p-8 relative overflow-hidden border-blue-500/30">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[60px] pointer-events-none"></div>
                <div className="flex flex-col sm:flex-row justify-between items-start gap-6 relative z-10">
                  <div>
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Current Plan</h3>
                    <div className="flex items-baseline gap-3 mb-1">
                      <h2 className="text-4xl font-bold font-display">Professional</h2>
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-full">Active</span>
                    </div>
                    <p className="text-slate-400">₹4,999/month, billed monthly.</p>
                  </div>
                  <button className="px-6 py-3 bg-white text-slate-900 rounded-xl font-bold hover:bg-slate-200 transition whitespace-nowrap shadow-xl" data-testid="button-upgrade-plan">
                    Upgrade to Enterprise
                  </button>
                </div>
                
                <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6">
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Renewal Date</p>
                    <p className="font-semibold text-slate-200">April 15, 2026</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Payment Method</p>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-5 bg-slate-800 rounded border border-slate-700 flex items-center justify-center text-[8px] font-bold">VISA</div>
                      <span className="font-mono text-slate-200">•••• 4242</span>
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <p className="text-xs text-slate-500 mb-1">Billing Email</p>
                    <p className="font-semibold text-slate-200">finance@techmark.com</p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-3xl p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold mb-2">Need a custom contract?</h3>
                  <p className="text-slate-400 text-sm mb-6">For teams with specific security, compliance, or high-volume needs.</p>
                </div>
                <button className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition font-medium text-sm">
                  Contact Sales
                </button>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6">Billing History</h3>
              <div className="space-y-2">
                {[
                  { date: "Mar 15, 2026", amount: "₹4,999.00", status: "Paid", invoice: "INV-2026-003" },
                  { date: "Feb 15, 2026", amount: "₹4,999.00", status: "Paid", invoice: "INV-2026-002" },
                  { date: "Jan 15, 2026", amount: "₹4,999.00", status: "Paid", invoice: "INV-2026-001" },
                  { date: "Dec 15, 2025", amount: "₹999.00", status: "Paid", invoice: "INV-2025-012" }, // Starter plan before
                ].map((invoice, i) => (
                  <div key={i} className="flex flex-wrap sm:flex-nowrap justify-between items-center p-4 bg-white/5 border border-white/5 rounded-xl hover:border-white/10 transition">
                    <div className="w-full sm:w-auto mb-2 sm:mb-0">
                      <p className="font-semibold text-slate-200">{invoice.date}</p>
                      <p className="text-xs font-mono text-slate-500">{invoice.invoice}</p>
                    </div>
                    <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                      <span className="font-mono text-slate-300">{invoice.amount}</span>
                      <span className="flex items-center gap-1 px-2.5 py-1 bg-green-500/10 text-green-400 border border-green-500/20 rounded-md text-xs font-medium">
                        <CheckCircle2 className="w-3 h-3" /> {invoice.status}
                      </span>
                      <button className="text-blue-400 hover:text-blue-300 text-sm font-medium ml-2">PDF</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === "settings" && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl">
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6">General Information</h3>
              <div className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-slate-400">Workspace Name</label>
                    <input type="text" defaultValue="TechMark Solutions" className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition" data-testid="input-company-name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-slate-400">Workspace ID</label>
                    <input type="text" defaultValue="cmp_9x8f7d2k1m" disabled className="w-full bg-slate-900/30 border border-white/5 rounded-xl px-4 py-3 text-slate-500 cursor-not-allowed font-mono" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-400">Contact Email</label>
                  <input type="email" defaultValue="admin@techmark.com" className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition" data-testid="input-company-email" />
                </div>
                <div className="pt-2">
                  <button className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium transition shadow-lg shadow-blue-500/20">Save Changes</button>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-xl font-bold">API Keys</h3>
                  <p className="text-sm text-slate-400">Use these keys to authenticate API requests.</p>
                </div>
                <button className="px-4 py-2 bg-white/5 border border-white/10 hover:bg-white/10 rounded-lg text-sm font-medium transition">Generate New Key</button>
              </div>
              <div className="space-y-4">
                {[
                  { name: "Production Live Key", key: "HIDDEN_FOR_SECURITY", created: "Jan 15, 2024", lastUsed: "2 mins ago" },
                  { name: "Development Test Key", key: "HIDDEN_FOR_SECURITY", created: "Jan 15, 2024", lastUsed: "3 days ago" },
                ].map((api, i) => (
                  <div key={i} className="bg-slate-900/80 border border-white/5 rounded-xl p-5">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-semibold text-slate-200">{api.name}</p>
                          {api.name.includes('Live') && <span className="px-2 py-0.5 bg-red-500/10 text-red-400 text-[10px] font-bold uppercase rounded border border-red-500/20">Live</span>}
                        </div>
                        <p className="text-xs text-slate-500">Created {api.created} • Last used {api.lastUsed}</p>
                      </div>
                      <button className="text-slate-400 hover:text-white p-2 bg-white/5 rounded-lg border border-white/5 transition group">
                        <Copy className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      </button>
                    </div>
                    <div className="bg-black/50 border border-white/5 rounded-lg p-3 overflow-hidden">
                      <code className="text-sm font-mono text-green-400">{api.key}</code>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8 border-red-500/20">
              <h3 className="text-xl font-bold text-red-400 mb-2">Danger Zone</h3>
              <p className="text-slate-400 text-sm mb-6">Permanently delete your workspace and all its data. This action cannot be undone.</p>
              <button className="px-6 py-3 bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500/20 hover:border-red-500/50 rounded-xl font-medium transition" data-testid="button-delete-account">
                Delete Workspace
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
