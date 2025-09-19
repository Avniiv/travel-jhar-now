import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Star, Clock, Users, Calendar, Search, TrendingUp, Award } from 'lucide-react';
import { itineraries } from '@/data/mockData';

const Itineraries = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rating');
  const [filterDuration, setFilterDuration] = useState('all');
  const [filterDifficulty, setFilterDifficulty] = useState('all');

  // Filter and sort itineraries
  const getFilteredItineraries = () => {
    let filtered = itineraries;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(itinerary =>
        itinerary.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        itinerary.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        itinerary.destinations.some(dest => dest.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by duration
    if (filterDuration !== 'all') {
      filtered = filtered.filter(itinerary => {
        const days = parseInt(itinerary.duration.split(' ')[0]);
        switch (filterDuration) {
          case 'short': return days <= 3;
          case 'medium': return days >= 4 && days <= 6;
          case 'long': return days >= 7;
          default: return true;
        }
      });
    }

    // Filter by difficulty
    if (filterDifficulty !== 'all') {
      filtered = filtered.filter(itinerary => itinerary.difficulty === filterDifficulty);
    }

    // Sort itineraries
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price_low':
          return a.price - b.price;
        case 'price_high':
          return b.price - a.price;
        case 'duration':
          return parseInt(a.duration) - parseInt(b.duration);
        case 'rating':
        default:
          return b.rating - a.rating;
      }
    });

    return filtered;
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Moderate': return 'bg-yellow-100 text-yellow-800';
      case 'Challenging': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredItineraries = getFilteredItineraries();

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-6">
              Curated Itineraries
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Discover Jharkhand through expertly crafted journeys that showcase the best of 
              tribal culture, natural wonders, and authentic experiences.
            </p>
            
            {/* Search and Filters */}
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Search itineraries..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                <Select value={filterDuration} onValueChange={setFilterDuration}>
                  <SelectTrigger>
                    <SelectValue placeholder="Duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Any Duration</SelectItem>
                    <SelectItem value="short">1-3 Days</SelectItem>
                    <SelectItem value="medium">4-6 Days</SelectItem>
                    <SelectItem value="long">7+ Days</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select value={filterDifficulty} onValueChange={setFilterDifficulty}>
                  <SelectTrigger>
                    <SelectValue placeholder="Difficulty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Any Difficulty</SelectItem>
                    <SelectItem value="Easy">Easy</SelectItem>
                    <SelectItem value="Moderate">Moderate</SelectItem>
                    <SelectItem value="Challenging">Challenging</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="price_low">Price: Low to High</SelectItem>
                    <SelectItem value="price_high">Price: High to Low</SelectItem>
                    <SelectItem value="duration">Duration</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Popular Tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
              <TrendingUp className="h-3 w-3 mr-1" />
              Most Popular
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
              Cultural Heritage
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
              Adventure
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
              Wildlife
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
              Waterfalls
            </Badge>
          </div>

          {/* Results Count */}
          <div className="flex justify-between items-center mb-8">
            <p className="text-muted-foreground">
              {filteredItineraries.length} itineraries found
            </p>
            
            <Button variant="outline">
              <Award className="h-4 w-4 mr-2" />
              Custom Itinerary Request
            </Button>
          </div>

          {/* Itineraries Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredItineraries.map((itinerary) => (
              <Card key={itinerary.id} className="glass hover-card overflow-hidden">
                <div className="md:flex">
                  {/* Image */}
                  <div className="md:w-80 h-64 md:h-auto relative overflow-hidden">
                    <img
                      src={itinerary.image}
                      alt={itinerary.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                        <Star className="h-3 w-3 mr-1 text-yellow-500 fill-current" />
                        {itinerary.rating}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge 
                        variant="secondary" 
                        className={`${getDifficultyColor(itinerary.difficulty)} border-0`}
                      >
                        {itinerary.difficulty}
                      </Badge>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <CardContent className="flex-1 p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-poppins font-semibold text-foreground">
                        {itinerary.title}
                      </h3>
                      <Badge variant="outline" className="ml-2">₹{itinerary.price.toLocaleString()}</Badge>
                    </div>
                    
                    <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {itinerary.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {itinerary.reviewCount} reviews
                      </span>
                    </div>

                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {itinerary.description}
                    </p>

                    {/* Destinations */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-foreground mb-2">Destinations:</h4>
                      <div className="flex flex-wrap gap-1">
                        {itinerary.destinations.slice(0, 3).map((destination, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            <MapPin className="h-3 w-3 mr-1" />
                            {destination}
                          </Badge>
                        ))}
                        {itinerary.destinations.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{itinerary.destinations.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-foreground mb-2">Highlights:</h4>
                      <ul className="space-y-1">
                        {itinerary.highlights.slice(0, 3).map((highlight, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          Available year-round
                        </span>
                      </div>
                      
                      <Button asChild>
                        <Link to={`/itinerary/${itinerary.id}`}>
                          View Details
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          {filteredItineraries.length === 0 && (
            <Card className="glass p-12 text-center">
              <div className="max-w-md mx-auto">
                <Calendar className="h-16 w-16 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold text-foreground mb-2">No itineraries found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your search criteria or browse our popular itineraries
                </p>
                <Button onClick={() => {
                  setSearchTerm('');
                  setFilterDuration('all');
                  setFilterDifficulty('all');
                }}>
                  View All Itineraries
                </Button>
              </div>
            </Card>
          )}

          {/* Custom Itinerary CTA */}
          <Card className="glass p-8 text-center mt-16">
            <h2 className="text-2xl font-poppins font-bold text-foreground mb-4">
              Need a Custom Itinerary?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our travel experts can create a personalized itinerary based on your interests, 
              budget, and travel preferences. Get a tailor-made Jharkhand experience just for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Request Custom Itinerary
              </Button>
              <Button variant="outline" size="lg">
                Talk to Travel Expert
              </Button>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Itineraries;