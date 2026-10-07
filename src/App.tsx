import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import PricingPage from "./pages/PricingPage";
import ContactPage from "./pages/ContactPage";
import FormPage from "./pages/FormPage";
import NotFound from "./pages/NotFound";
import ServicePage from "./pages/ServicePage";
import PackagesPage from "./pages/PackagesPage";
import { services } from "@/data/services";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tjanster" element={<Navigate to="/#tjanster" replace />} />
          <Route path="/om-oss" element={<AboutPage />} />
          <Route path="/prisberakning" element={<PricingPage />} />
          <Route path="/vara-paket" element={<PackagesPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
          <Route path="/form" element={<FormPage />} />
          {services.map((service) => (
            <Route key={service.path} path={service.path} element={<ServicePage service={service} />} />
          ))}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
