import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AiAssistant } from "@/components/AiAssistant";
import NotFound from "@/pages/not-found";
import Dashboard from "@/pages/dashboard";
import Landing from "@/pages/landing";
import Pricing from "@/pages/pricing";
import Login from "@/pages/login";
import Signup from "@/pages/signup";
import Checkout from "@/pages/checkout";
import CompanyDashboard from "@/pages/company-dashboard";
import AdminPanel from "@/pages/admin-panel";
import Docs from "@/pages/docs";
import Features from "@/pages/features";
import Blog from "@/pages/blog";
import Contact from "@/pages/contact";
import About from "@/pages/about";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing}/>
      <Route path="/pricing" component={Pricing}/>
      <Route path="/features" component={Features}/>
      <Route path="/docs" component={Docs}/>
      <Route path="/blog" component={Blog}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/about" component={About}/>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/checkout" component={Checkout}/>
      <Route path="/dashboard" component={Dashboard}/>
      <Route path="/company-dashboard" component={CompanyDashboard}/>
      <Route path="/admin" component={AdminPanel}/>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
        <AiAssistant />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;