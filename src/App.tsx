
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';

import Layout from "./components/layout/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import SideNav from "./components/layout/SideNav";
import SideEmail from "./components/layout/SideEmail";

// Create company logo directories
const companyLogos = [
  { name: 'outlier.png', url: 'https://via.placeholder.com/80/3a3f51/64ffda?text=Outlier.ai' },
  { name: 'bitwise.png', url: 'https://via.placeholder.com/80/3a3f51/64ffda?text=Bitwise' },
  { name: 'securly.png', url: 'https://via.placeholder.com/80/3a3f51/64ffda?text=Securly' },
  { name: 'spegi.png', url: 'https://via.placeholder.com/80/3a3f51/64ffda?text=SPEGI' }
];

// Pre-load company logos
companyLogos.forEach(logo => {
  const img = new Image();
  img.src = logo.url;
  // Create a virtual link for the images to be accessible
  if (!document.querySelector(`link[href="${logo.url}"]`)) {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = logo.url;
    link.as = 'image';
    document.head.appendChild(link);
  }
});

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen dark overflow-x-hidden w-full">
            <SideNav />
            <SideEmail />
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Index />} />
                <Route path="about" element={<About />} />
                <Route path="skills" element={<Skills />} />
                <Route path="experience" element={<Experience />} />
                <Route path="projects" element={<Projects />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
