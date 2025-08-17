import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

// Pages
import Home from "@/pages/home";
import About from "@/pages/about";
import Execom from "@/pages/execom";
import Activities from "@/pages/activities";
import Achievements from "@/pages/achievements";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="min-h-screen cosmic-bg relative overflow-x-hidden">
  {/* Fixed theme background */}
  <div className="site-bg fixed inset-0 -z-10" />
  <div className="min-h-screen text-foreground">
        <Navbar />
        <main id="main-content" className="relative">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/execom" component={Execom} />
            <Route path="/activities" component={Activities} />
            <Route path="/achievements" component={Achievements} />
            <Route path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
  <ThemeProvider defaultTheme="light" storageKey="web-comp-theme">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
