import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FeaturedDestinations from '@/components/FeaturedDestinations';
import MarketplaceHighlights from '@/components/MarketplaceHighlights';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturedDestinations />
        <MarketplaceHighlights />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
