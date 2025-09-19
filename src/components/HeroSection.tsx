import React, { useState } from 'react';
import { Search, MapPin, Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import heroImage from '@/assets/hero-jharkhand.jpg';

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState('destinations');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to search results
    window.location.href = `/search?type=${searchType}&query=${searchQuery}`;
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Jharkhand's natural beauty with tribal culture" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent"></div>
        <div className="absolute inset-0 tribal-pattern opacity-20"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Welcome Message */}
          <div className="mb-8 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-poppins font-bold text-primary-foreground mb-6 leading-tight">
              <span className="block">Johar!</span>
              <span className="block bg-gradient-to-r from-accent to-accent-warm bg-clip-text text-transparent">
                Discover Jharkhand
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
              Explore the land of forests, waterfalls, and rich tribal heritage. 
              Experience authentic culture, breathtaking landscapes, and warm hospitality.
            </p>
          </div>

          {/* Search Card */}
          <Card className="glass max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-6">
              <form onSubmit={handleSearch} className="space-y-4">
                {/* Search Type Tabs */}
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {[
                    { id: 'destinations', label: 'Destinations', icon: MapPin },
                    { id: 'hotels', label: 'Hotels', icon: Calendar },
                    { id: 'guides', label: 'Tour Guides', icon: Users },
                  ].map(({ id, label, icon: Icon }) => (
                    <Button
                      key={id}
                      type="button"
                      variant={searchType === id ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSearchType(id)}
                      className="gap-2"
                    >
                      <Icon className="h-4 w-4" />
                      {label}
                    </Button>
                  ))}
                </div>

                {/* Search Input */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                    <Input
                      type="text"
                      placeholder={`Search ${searchType}... (e.g., Hundru Falls, Netarhat)`}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 h-12 text-lg"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="h-12 px-8 bg-gradient-primary hover:shadow-glow transition-all duration-300"
                  >
                    <Search className="h-5 w-5 mr-2" />
                    Explore
                  </Button>
                </div>
              </form>

              {/* Quick Suggestions */}
              <div className="mt-6 flex flex-wrap gap-2 justify-center">
                <span className="text-sm text-muted-foreground">Popular:</span>
                {['Hundru Falls', 'Netarhat Hills', 'Tribal Villages', 'Ranchi Hotels'].map((suggestion) => (
                  <Button
                    key={suggestion}
                    variant="ghost"
                    size="sm"
                    onClick={() => setSearchQuery(suggestion)}
                    className="h-auto py-1 px-3 text-sm hover:bg-primary/10"
                  >
                    {suggestion}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="gap-2 hover:shadow-warm transition-all duration-300"
                onClick={() => window.location.href = '/destinations'}
              >
                <MapPin className="h-5 w-5" />
                Explore Destinations
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="gap-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                onClick={() => window.location.href = '/itineraries'}
              >
                <Calendar className="h-5 w-5" />
                View Itineraries
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Cultural Elements */}
      <div className="absolute bottom-10 left-10 hidden lg:block animate-float">
        <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center backdrop-blur-sm">
          <span className="text-2xl">🏛️</span>
        </div>
      </div>
      <div className="absolute top-1/3 right-10 hidden lg:block animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center backdrop-blur-sm">
          <span className="text-xl">🌿</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;