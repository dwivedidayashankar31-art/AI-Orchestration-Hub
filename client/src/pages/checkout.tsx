import { useState } from "react";
import { useLocation } from "wouter";
import { CheckCircle2, CreditCard, Lock, Loader2, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Checkout() {
  const [, navigate] = useLocation();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Parse plan from URL or default
  const params = new URLSearchParams(window.location.search);
  const planName = params.get("plan") || "Professional";
  const planPrice = planName === "Starter" ? "₹999" : planName === "Professional" ? "₹4,999" : "Custom";

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      toast({
        title: "Payment Successful!",
        description: `You are now subscribed to the ${planName} plan.`,
      });
      
      // Redirect to dashboard after 2 seconds
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-[#030712] flex items-center justify-center p-6">
        <div className="glass-card max-w-md w-full p-10 text-center rounded-3xl border border-blue-500/30 shadow-2xl shadow-blue-500/20">
          <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-blue-400" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Payment Successful!</h2>
          <p className="text-slate-400 mb-8">Your subscription has been activated. Redirecting to your dashboard...</p>
          <Loader2 className="w-6 h-6 text-blue-500 animate-spin mx-auto" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030712] text-slate-50 flex flex-col md:flex-row">
      {/* Left side - Order Summary */}
      <div className="w-full md:w-1/3 bg-slate-900/50 p-8 md:p-12 border-r border-white/5 flex flex-col justify-between">
        <div>
          <button onClick={() => navigate("/pricing")} className="flex items-center gap-2 text-slate-400 hover:text-white transition mb-12">
            <ArrowLeft className="w-4 h-4" /> Back to Pricing
          </button>
          
          <h2 className="text-2xl font-bold mb-8">Order Summary</h2>
          
          <div className="space-y-4 mb-8">
            <div className="flex justify-between items-center pb-4 border-b border-white/10">
              <div>
                <p className="font-semibold text-lg">{planName} Plan</p>
                <p className="text-slate-400 text-sm">Billed monthly</p>
              </div>
              <p className="text-xl font-bold">{planPrice}</p>
            </div>
            
            <div className="flex justify-between items-center text-slate-400 text-sm">
              <p>Subtotal</p>
              <p>{planPrice}</p>
            </div>
            <div className="flex justify-between items-center text-slate-400 text-sm">
              <p>Tax (18% GST)</p>
              <p>₹{planName === 'Starter' ? '180' : planName === 'Professional' ? '900' : '0'}</p>
            </div>
          </div>
          
          <div className="flex justify-between items-center pt-4 border-t border-white/10">
            <p className="font-bold text-lg">Total Due Today</p>
            <p className="text-2xl font-bold text-blue-400">
              {planName === 'Starter' ? '₹1,179' : planName === 'Professional' ? '₹5,899' : 'Custom'}
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-sm text-slate-500 flex items-start gap-3">
          <Lock className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <p>Guaranteed safe & secure checkout. Your connection is encrypted and your data is protected.</p>
        </div>
      </div>

      {/* Right side - Payment Form */}
      <div className="w-full md:w-2/3 p-8 md:p-12 lg:p-20">
        <div className="max-w-xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Payment Details</h1>
          
          <form onSubmit={handlePayment} className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium border-b border-white/10 pb-2">Contact Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2 col-span-2 sm:col-span-1">
                  <label className="text-sm font-medium text-slate-300">First Name</label>
                  <input required type="text" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition" placeholder="John" />
                </div>
                <div className="space-y-2 col-span-2 sm:col-span-1">
                  <label className="text-sm font-medium text-slate-300">Last Name</label>
                  <input required type="text" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition" placeholder="Doe" />
                </div>
                <div className="space-y-2 col-span-2">
                  <label className="text-sm font-medium text-slate-300">Email Address</label>
                  <input required type="email" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition" placeholder="john@example.com" />
                </div>
              </div>
            </div>

            <div className="space-y-4 mt-8">
              <h3 className="text-lg font-medium border-b border-white/10 pb-2 flex items-center gap-2">
                <CreditCard className="w-5 h-5" /> Payment Method
              </h3>
              
              <div className="bg-black/50 border border-white/10 rounded-xl p-4 space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Card Number</label>
                  <input required type="text" maxLength={19} className="w-full bg-transparent border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition font-mono" placeholder="0000 0000 0000 0000" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Expiry Date</label>
                    <input required type="text" maxLength={5} className="w-full bg-transparent border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition font-mono" placeholder="MM/YY" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">CVC</label>
                    <input required type="text" maxLength={4} className="w-full bg-transparent border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition font-mono" placeholder="123" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Name on Card</label>
                  <input required type="text" className="w-full bg-transparent border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition" placeholder="JOHN DOE" />
                </div>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isProcessing}
              className="w-full py-4 rounded-xl font-bold mt-8 transition-all duration-300 bg-blue-600 hover:bg-blue-500 text-white glow-button flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4" />
                  Pay {planName === 'Starter' ? '₹1,179' : planName === 'Professional' ? '₹5,899' : 'Now'}
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
