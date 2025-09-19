import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { MapPin, Star, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Destinations = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-6">
              Explore Jharkhand Destinations
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the hidden gems and popular attractions across Jharkhand's diverse landscapes.
            </p>
          </div>
          
          <Card className="glass max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              <MapPin className="h-16 w-16 mx-auto mb-4 text-primary" />
              <h2 className="text-2xl font-poppins font-bold text-foreground mb-4">
                Coming Soon
              </h2>
              <p className="text-muted-foreground mb-6">
                We're working on bringing you detailed destination pages with comprehensive information, 
                booking options, and local insights.
              </p>
              <Button onClick={() => window.location.href = '/'}>
                Back to Home
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Destinations;