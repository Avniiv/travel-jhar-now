import React from 'react';
import { MapPin, Star, ArrowRight, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import hundruFalls from '@/assets/hundru-falls.jpg';
import tribalVillage from '@/assets/tribal-village.jpg';
import netarhatHills from '@/assets/netarhat-hills.jpg';
import culturalMarketplace from '@/assets/cultural-marketplace.jpg';

const destinations = [
  {
    id: 1,
    name: 'Hundru Falls',
    location: 'Ranchi District',
    image: hundruFalls,
    rating: 4.8,
    reviews: 324,
    description: 'Majestic 98-meter waterfall surrounded by lush forests, perfect for nature lovers and photographers.',
    price: 'From ₹1,200',
    category: 'Natural Wonder',
    highlights: ['Waterfall', 'Photography', 'Trekking']
  },
  {
    id: 2,
    name: 'Tribal Heritage Village',
    location: 'Various Districts',
    image: tribalVillage,
    rating: 4.9,
    reviews: 189,
    description: 'Authentic tribal villages showcasing traditional lifestyle, art, and cultural practices.',
    price: 'From ₹800',
    category: 'Cultural Experience',
    highlights: ['Tribal Culture', 'Art & Craft', 'Authentic Stay']
  },
  {
    id: 3,
    name: 'Netarhat Hills',
    location: 'Latehar District',
    image: netarhatHills,
    rating: 4.7,
    reviews: 267,
    description: 'Queen of Chotanagpur with breathtaking sunrise views and pleasant hill station climate.',
    price: 'From ₹1,500',
    category: 'Hill Station',
    highlights: ['Sunrise Views', 'Cool Climate', 'Scenic Beauty']
  },
  {
    id: 4,
    name: 'Cultural Marketplace',
    location: 'Ranchi City',
    image: culturalMarketplace,
    rating: 4.6,
    reviews: 442,
    description: 'Vibrant markets offering authentic tribal handicrafts, textiles, and traditional artifacts.',
    price: 'From ₹500',
    category: 'Shopping & Culture',
    highlights: ['Handicrafts', 'Local Shopping', 'Artisan Meet']
  }
];

const FeaturedDestinations = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-6">
            Featured Destinations
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover the most captivating places in Jharkhand, from majestic waterfalls 
            to authentic tribal villages, each offering unique experiences.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination, index) => (
            <Card 
              key={destination.id} 
              className="cultural-card group cursor-pointer overflow-hidden hover:scale-105 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => window.location.href = `/destination/${destination.id}`}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Category Badge */}
                <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                  {destination.category}
                </Badge>

                {/* Heart Icon */}
                <Button
                  size="sm"
                  variant="ghost"
                  className="absolute top-4 right-4 w-10 h-10 bg-background/80 hover:bg-background/90 rounded-full p-0"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Add to wishlist logic
                  }}
                >
                  <Heart className="h-4 w-4" />
                </Button>

                {/* Price Tag */}
                <div className="absolute bottom-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  {destination.price}
                </div>
              </div>

              <CardContent className="p-6">
                {/* Rating and Reviews */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span className="font-semibold text-foreground">{destination.rating}</span>
                    <span className="text-sm text-muted-foreground">({destination.reviews})</span>
                  </div>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <MapPin className="h-4 w-4 mr-1" />
                    {destination.location}
                  </div>
                </div>

                {/* Name and Description */}
                <h3 className="text-xl font-poppins font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {destination.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {destination.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {destination.highlights.map((highlight) => (
                    <Badge key={highlight} variant="secondary" className="text-xs">
                      {highlight}
                    </Badge>
                  ))}
                </div>

                {/* Explore Button */}
                <Button 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                  variant="outline"
                >
                  Explore Destination
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline"
            className="gap-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            onClick={() => window.location.href = '/destinations'}
          >
            View All Destinations
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;