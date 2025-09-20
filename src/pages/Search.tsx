import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { MapPin, Star, Clock, Users, Filter, Grid, List, Map } from 'lucide-react';
import { destinations, hotels, guides, vendors, Destination, Hotel, Guide, Vendor } from '@/data/mockData';

const Search = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type') || 'destinations';
  const query = searchParams.get('query') || '';
  
  const [searchTerm, setSearchTerm] = useState(query);
  const [sortBy, setSortBy] = useState('rating');
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list' | 'map'>('grid');
  const [filteredResults, setFilteredResults] = useState<any[]>([]);

  // Get data based on type
  const getData = (): any[] => {
    switch (type) {
      case 'hotels': return hotels;
      case 'guides': return guides;
      case 'vendors': return vendors;
      default: return destinations;
    }
  };

  // Filter and sort results
  useEffect(() => {
    let data: any[] = getData();
    
    // Filter by search term
    if (searchTerm) {
      data = data.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by location
    if (selectedLocation !== 'all') {
      data = data.filter(item => item.location === selectedLocation);
    }

    // Filter by price range
    data = data.filter(item => {
      const price = type === 'hotels' ? (item as Hotel).pricePerNight : 
                   type === 'guides' ? (item as Guide).pricePerDay : (item as Destination | Vendor).price;
      return price >= priceRange[0] && price <= priceRange[1];
    });

    // Sort results
    data.sort((a: any, b: any) => {
      switch (sortBy) {
        case 'price_low':
          const priceA = type === 'hotels' ? (a as Hotel).pricePerNight : 
                        type === 'guides' ? (a as Guide).pricePerDay : (a as Destination | Vendor).price;
          const priceB = type === 'hotels' ? (b as Hotel).pricePerNight : 
                        type === 'guides' ? (b as Guide).pricePerDay : (b as Destination | Vendor).price;
          return priceA - priceB;
        case 'price_high':
          const priceA2 = type === 'hotels' ? (a as Hotel).pricePerNight : 
                         type === 'guides' ? (a as Guide).pricePerDay : (a as Destination | Vendor).price;
          const priceB2 = type === 'hotels' ? (b as Hotel).pricePerNight : 
                         type === 'guides' ? (b as Guide).pricePerDay : (b as Destination | Vendor).price;
          return priceB2 - priceA2;
        case 'rating':
        default:
          return b.rating - a.rating;
      }
    });

    setFilteredResults(data);
  }, [searchTerm, sortBy, priceRange, selectedLocation, type]);

  const getUniqueLocations = () => {
    const data = getData();
    return [...new Set(data.map(item => item.location))];
  };

  const getPrice = (item: any) => {
    if (type === 'hotels') return `₹${(item as Hotel).pricePerNight}/night`;
    if (type === 'guides') return `₹${(item as Guide).pricePerDay}/day`;
    return `₹${(item as Destination | Vendor).price}`;
  };

  const getRoutePrefix = () => {
    switch (type) {
      case 'hotels': return '/hotel';
      case 'guides': return '/guide';
      case 'vendors': return '/vendor';
      default: return '/destination';
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
              {type.charAt(0).toUpperCase() + type.slice(1)} Search Results
            </h1>
            <p className="text-muted-foreground">
              {filteredResults.length} results found {query && `for "${query}"`}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <Card className="glass sticky top-24">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-6">
                    <Filter className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-foreground">Filters</h3>
                  </div>

                  {/* Search Input */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Search
                    </label>
                    <Input
                      placeholder={`Search ${type}...`}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>

                  {/* Location Filter */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Location
                    </label>
                    <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Locations</SelectItem>
                        {getUniqueLocations().map(location => (
                          <SelectItem key={location} value={location}>
                            {location}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Price Range */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}
                    </label>
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={5000}
                      min={0}
                      step={100}
                      className="mt-4"
                    />
                  </div>

                  {/* Sort By */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Sort By
                    </label>
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="rating">Rating (High to Low)</SelectItem>
                        <SelectItem value="price_low">Price (Low to High)</SelectItem>
                        <SelectItem value="price_high">Price (High to Low)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Results */}
            <div className="lg:col-span-3">
              {/* View Mode Toggle */}
              <div className="flex justify-between items-center mb-6">
                <p className="text-muted-foreground">
                  Showing {filteredResults.length} results
                </p>
                <div className="flex gap-2">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'map' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('map')}
                  >
                    <Map className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Results Grid/List */}
              {viewMode === 'map' ? (
                <Card className="glass p-6 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <Map className="h-16 w-16 mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">Map View</h3>
                    <p className="text-muted-foreground">Map integration coming soon!</p>
                  </div>
                </Card>
              ) : (
                <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
                  {filteredResults.map((item) => (
                    <Card key={item.id} className="glass hover-card overflow-hidden">
                      <div className={`${viewMode === 'list' ? 'flex' : ''}`}>
                        <div className={`${viewMode === 'list' ? 'w-48 flex-shrink-0' : 'w-full h-48'} relative overflow-hidden`}>
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                          />
                          <div className="absolute top-4 right-4">
                            <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                              <Star className="h-3 w-3 mr-1 text-yellow-500 fill-current" />
                              {item.rating}
                            </Badge>
                          </div>
                        </div>
                        
                        <CardContent className={`${viewMode === 'list' ? 'flex-1' : ''} p-6`}>
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-poppins font-semibold text-foreground">
                              {item.name}
                            </h3>
                            <Badge variant="outline">{getPrice(item)}</Badge>
                          </div>
                          
                          <div className="flex items-center gap-1 mb-3">
                            <MapPin className="h-4 w-4 text-primary" />
                            <span className="text-sm text-muted-foreground">{item.location}</span>
                          </div>

                          <p className="text-muted-foreground mb-4 line-clamp-2">
                            {type === 'destinations' ? item.shortDescription : item.description}
                          </p>

                          {/* Features/Amenities */}
                          <div className="flex flex-wrap gap-1 mb-4">
                            {(item.features || item.amenities || item.specialties || []).slice(0, 3).map((feature: string, index: number) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                          </div>

                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Users className="h-4 w-4" />
                                {item.reviewCount} reviews
                              </span>
                              {type === 'destinations' && (
                                <span className="flex items-center gap-1">
                                  <Clock className="h-4 w-4" />
                                  {item.duration}
                                </span>
                              )}
                            </div>
                            
                            <Button asChild>
                              <Link to={`${getRoutePrefix()}/${item.id}`}>
                                View Details
                              </Link>
                            </Button>
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  ))}
                </div>
              )}

              {filteredResults.length === 0 && (
                <Card className="glass p-12 text-center">
                  <h3 className="text-xl font-semibold text-foreground mb-2">No results found</h3>
                  <p className="text-muted-foreground mb-4">
                    Try adjusting your filters or search terms
                  </p>
                  <Button onClick={() => {
                    setSearchTerm('');
                    setSelectedLocation('all');
                    setPriceRange([0, 5000]);
                  }}>
                    Clear Filters
                  </Button>
                </Card>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Search;