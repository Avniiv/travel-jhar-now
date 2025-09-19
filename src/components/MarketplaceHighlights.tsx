import React from 'react';
import { ShoppingBag, Home, Palette, Music, ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const marketplaceItems = [
  {
    id: 1,
    title: 'Authentic Homestays',
    icon: Home,
    description: 'Stay with local families and experience traditional Jharkhand hospitality',
    items: 89,
    rating: 4.7,
    price: 'From ₹800/night',
    color: 'bg-secondary/10 text-secondary',
  },
  {
    id: 2,
    title: 'Tribal Handicrafts',
    icon: Palette,
    description: 'Handcrafted artworks, textiles, and traditional items by local artisans',
    items: 156,
    rating: 4.8,
    price: 'From ₹200',
    color: 'bg-accent/10 text-accent-foreground',
  },
  {
    id: 3,
    title: 'Cultural Experiences',
    icon: Music,
    description: 'Traditional dance performances, cooking classes, and tribal ceremonies',
    items: 34,
    rating: 4.9,
    price: 'From ₹1,500',
    color: 'bg-primary/10 text-primary',
  },
  {
    id: 4,
    title: 'Local Products',
    icon: ShoppingBag,
    description: 'Organic honey, tribal tea, traditional medicines, and local delicacies',
    items: 67,
    rating: 4.6,
    price: 'From ₹150',
    color: 'bg-nature-sage/10 text-nature-sage',
  },
];

const MarketplaceHighlights = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-6">
            Local Marketplace
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Support local communities and experience authentic Jharkhand culture through 
            our verified marketplace of homestays, handicrafts, and cultural experiences.
          </p>
        </div>

        {/* Marketplace Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {marketplaceItems.map((item, index) => (
            <Card 
              key={item.id}
              className="cultural-card group cursor-pointer hover:scale-105 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => window.location.href = `/marketplace/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <CardContent className="p-6 text-center">
                {/* Icon */}
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="h-8 w-8" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-poppins font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span className="font-semibold text-foreground">{item.rating}</span>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {item.items} items
                  </Badge>
                </div>

                {/* Price */}
                <p className="text-primary font-semibold mb-4">{item.price}</p>

                {/* Explore Button */}
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                >
                  Explore
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Highlight */}
        <Card className="glass max-w-4xl mx-auto">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <Badge className="bg-accent text-accent-foreground mb-4">
                Community Impact
              </Badge>
              <h3 className="text-2xl font-poppins font-bold text-foreground mb-4">
                Empowering Local Communities
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Every purchase and booking directly supports local artisans, families, and communities. 
                Help preserve traditional crafts and customs while experiencing authentic Jharkhand culture.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">250+</div>
                <div className="text-sm text-muted-foreground">Local Vendors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">₹12L+</div>
                <div className="text-sm text-muted-foreground">Community Income</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">95%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="gap-2"
                onClick={() => window.location.href = '/marketplace'}
              >
                Explore Marketplace
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="gap-2"
                onClick={() => window.location.href = '/vendor/apply'}
              >
                Become a Vendor
                <ShoppingBag className="h-5 w-5" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default MarketplaceHighlights;