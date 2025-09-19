import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Star, Users, Search, Store, Home, Palette, Sparkles } from 'lucide-react';
import { vendors } from '@/data/mockData';

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rating');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Filter and sort vendors
  const getFilteredVendors = () => {
    let filtered = vendors;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(vendor =>
        vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vendor.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vendor.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(vendor => vendor.type === selectedCategory);
    }

    // Sort vendors
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price_low':
          return a.price - b.price;
        case 'price_high':
          return b.price - a.price;
        case 'rating':
        default:
          return b.rating - a.rating;
      }
    });

    return filtered;
  };

  const getCategoryIcon = (type: string) => {
    switch (type) {
      case 'homestay': return Home;
      case 'artisan': return Palette;
      case 'experience': return Sparkles;
      default: return Store;
    }
  };

  const getCategoryLabel = (type: string) => {
    switch (type) {
      case 'homestay': return 'Homestays';
      case 'artisan': return 'Artisans';
      case 'experience': return 'Experiences';
      default: return 'All';
    }
  };

  const filteredVendors = getFilteredVendors();

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-6">
              Local Marketplace
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Connect with authentic local experiences, traditional artisans, and welcoming homestays 
              that showcase the true spirit of Jharkhand.
            </p>
            
            {/* Search and Filters */}
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Search vendors, services, or locations..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="homestay">Homestays</SelectItem>
                    <SelectItem value="artisan">Artisans</SelectItem>
                    <SelectItem value="experience">Experiences</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="price_low">Price: Low to High</SelectItem>
                    <SelectItem value="price_high">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Category Tabs */}
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-12">
            <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto">
              <TabsTrigger value="all" className="flex items-center gap-2">
                <Store className="h-4 w-4" />
                All
              </TabsTrigger>
              <TabsTrigger value="homestay" className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                Homestays
              </TabsTrigger>
              <TabsTrigger value="artisan" className="flex items-center gap-2">
                <Palette className="h-4 w-4" />
                Artisans
              </TabsTrigger>
              <TabsTrigger value="experience" className="flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                Experiences
              </TabsTrigger>
            </TabsList>

            <TabsContent value={selectedCategory} className="mt-8">
              {/* Results Count */}
              <div className="flex justify-between items-center mb-6">
                <p className="text-muted-foreground">
                  {filteredVendors.length} {getCategoryLabel(selectedCategory).toLowerCase()} found
                </p>
                
                <Button variant="outline" asChild>
                  <Link to="/vendor/apply">
                    Become a Vendor
                  </Link>
                </Button>
              </div>

              {/* Vendor Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredVendors.map((vendor) => {
                  const IconComponent = getCategoryIcon(vendor.type);
                  
                  return (
                    <Card key={vendor.id} className="glass hover-card overflow-hidden">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={vendor.image}
                          alt={vendor.name}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                            <IconComponent className="h-3 w-3 mr-1" />
                            {getCategoryLabel(vendor.type).slice(0, -1)}
                          </Badge>
                        </div>
                        <div className="absolute top-4 right-4">
                          <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                            <Star className="h-3 w-3 mr-1 text-yellow-500 fill-current" />
                            {vendor.rating}
                          </Badge>
                        </div>
                      </div>
                      
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-poppins font-semibold text-foreground">
                            {vendor.name}
                          </h3>
                          <Badge variant="outline">₹{vendor.price}</Badge>
                        </div>
                        
                        <div className="flex items-center gap-1 mb-3">
                          <MapPin className="h-4 w-4 text-primary" />
                          <span className="text-sm text-muted-foreground">{vendor.location}</span>
                        </div>

                        <p className="text-muted-foreground mb-4 line-clamp-2">
                          {vendor.description}
                        </p>

                        {/* Features */}
                        <div className="flex flex-wrap gap-1 mb-4">
                          {vendor.features.slice(0, 3).map((feature, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              {vendor.reviewCount} reviews
                            </span>
                          </div>
                          
                          <Button asChild>
                            <Link to={`/vendor/${vendor.id}`}>
                              View Details
                            </Link>
                          </Button>
                        </div>

                        {/* Owner Info */}
                        <div className="mt-4 pt-4 border-t border-border">
                          <p className="text-sm text-muted-foreground">
                            By <span className="font-semibold text-foreground">{vendor.owner}</span>
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {filteredVendors.length === 0 && (
                <Card className="glass p-12 text-center">
                  <div className="max-w-md mx-auto">
                    <Store className="h-16 w-16 mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">No vendors found</h3>
                    <p className="text-muted-foreground mb-4">
                      Try adjusting your search terms or browse different categories
                    </p>
                    <Button onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('all');
                    }}>
                      View All Vendors
                    </Button>
                  </div>
                </Card>
              )}
            </TabsContent>
          </Tabs>

          {/* Call to Action */}
          <Card className="glass p-8 text-center mt-16">
            <h2 className="text-2xl font-poppins font-bold text-foreground mb-4">
              Want to Join Our Marketplace?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Share your authentic Jharkhand experiences, traditional crafts, or homestay with travelers 
              from around the world. Join our community of local vendors and grow your business.
            </p>
            <Button size="lg" asChild>
              <Link to="/vendor/apply">
                Apply to Become a Vendor
              </Link>
            </Button>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Marketplace;