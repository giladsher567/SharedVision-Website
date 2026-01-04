import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import FloatingCTA from "@/components/ui/floating-cta";
import FloatingContactButtons from "@/components/ui/floating-contact-buttons";
import Home from "@/pages/home";
import Services from "@/pages/services";
import About from "@/pages/about";
import CaseStudies from "@/pages/case-studies";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";
import logoImage from "@/assets/logo.png";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <img src={logoImage} alt="" className="logo-background" />
      <img src={logoImage} alt="" className="logo-background-small" />
      <img src={logoImage} alt="" className="logo-background-tiny" />
      <Header />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/about" component={About} />
          <Route path="/case-studies" component={CaseStudies} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <FloatingCTA />
      <FloatingContactButtons />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
        <Analytics />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
