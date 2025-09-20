import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Search from "./pages/Search";
import DestinationDetail from "./pages/DestinationDetail";
import HotelDetail from "./pages/HotelDetail";
import GuideDetail from "./pages/GuideDetail";
import Marketplace from "./pages/Marketplace";
import VendorDetail from "./pages/VendorDetail";
import Itineraries from "./pages/Itineraries";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Destinations from "./pages/Destinations";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import BookingFlow from "./pages/BookingFlow";
import Dashboard from "./pages/Dashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Search and Listings */}
          <Route path="/search" element={<Search />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/hotels" element={<Search />} />
          <Route path="/guides" element={<Search />} />
          
          {/* Detail Pages */}
          <Route path="/destination/:id" element={<DestinationDetail />} />
          <Route path="/hotel/:id" element={<HotelDetail />} />
          <Route path="/guide/:id" element={<GuideDetail />} />
          
          {/* Marketplace */}
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/vendor/:id" element={<VendorDetail />} />
          
          {/* Other Pages */}
          <Route path="/itineraries" element={<Itineraries />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Booking Flow */}
          <Route path="/book/:type/:id" element={<BookingFlow />} />
          
          {/* Auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
