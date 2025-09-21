import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { MapPin, Star, Clock, Calendar, Camera, Heart, Share2, Users, Thermometer } from 'lucide-react';
import { destinations, hotels, guides, reviews } from '@/data/mockData';
import { BackButton } from '@/components/BackButton';

const DestinationDetail = () => {
  const { id } = useParams();
  const destination = destinations.find(d => d.id === id);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  if (!destination) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <main className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Destination not found</h1>
            <Button asChild>
              <Link to="/search?type=destinations">Browse Destinations</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Related hotels and guides
  const relatedHotels = hotels.filter(h => h.destination === destination.name).slice(0, 3);
  const relatedGuides = guides.filter(g => g.location.includes(destination.location)).slice(0, 2);
  const destinationReviews = reviews.filter(r => r.destination === destination.name);

  // Mock gallery images (in real app, this would come from the destination data)
  const galleryImages = [destination.image, destination.image, destination.image, destination.image];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <BackButton to="/destinations" label="Back to Destinations" />
          </div>
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link to="/search?type=destinations" className="hover:text-primary">Destinations</Link>
            <span>/</span>
            <span className="text-foreground">{destination.name}</span>
          </nav>

          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-2">
                {destination.name}
              </h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">{destination.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="font-semibold">{destination.rating}</span>
                  <span className="text-muted-foreground">({destination.reviewCount} reviews)</span>
                </div>
                <Badge variant="secondary">{destination.category}</Badge>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsLiked(!isLiked)}
                className={isLiked ? 'text-red-500 border-red-500' : ''}
              >
                <Heart className={`h-4 w-4 mr-1 ${isLiked ? 'fill-current' : ''}`} />
                {isLiked ? 'Saved' : 'Save'}
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-1" />
                Share
              </Button>
              <Button>
                Book Now - ₹{destination.price}
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Gallery */}
              <Card className="glass mb-8 overflow-hidden">
                <div className="relative h-96">
                  <img
                    src={galleryImages[activeImageIndex]}
                    alt={destination.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Button variant="secondary" size="sm">
                      <Camera className="h-4 w-4 mr-1" />
                      {galleryImages.length} Photos
                    </Button>
                  </div>
                </div>
                
                {/* Thumbnail Gallery */}
                <div className="p-4">
                  <div className="flex gap-2 overflow-x-auto">
                    {galleryImages.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveImageIndex(index)}
                        className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                          activeImageIndex === index ? 'border-primary' : 'border-transparent'
                        }`}
                      >
                        <img src={img} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              </Card>

              {/* Description */}
              <Card className="glass mb-8">
                <CardHeader>
                  <CardTitle>About {destination.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {destination.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Highlights</h4>
                      <ul className="space-y-2">
                        {destination.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-center gap-2 text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Features</h4>
                      <div className="flex flex-wrap gap-2">
                        {destination.features.map((feature, index) => (
                          <Badge key={index} variant="secondary">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Reviews */}
              {destinationReviews.length > 0 && (
                <Card className="glass mb-8">
                  <CardHeader>
                    <CardTitle>Reviews</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {destinationReviews.map((review) => (
                        <div key={review.id}>
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                <span className="text-sm font-semibold text-primary">
                                  {review.user.charAt(0)}
                                </span>
                              </div>
                              <div>
                                <p className="font-semibold text-foreground">{review.user}</p>
                                <p className="text-sm text-muted-foreground">{review.location}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 text-yellow-500 fill-current" />
                              <span className="font-semibold">{review.rating}</span>
                            </div>
                          </div>
                          <p className="text-muted-foreground mb-2">{review.comment}</p>
                          <p className="text-sm text-muted-foreground">{review.date}</p>
                          {destinationReviews.indexOf(review) < destinationReviews.length - 1 && (
                            <Separator className="mt-6" />
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Quick Info */}
              <Card className="glass mb-6 sticky top-24">
                <CardHeader>
                  <CardTitle>Trip Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-sm">Best Time</span>
                    </div>
                    <span className="text-sm font-semibold">{destination.bestTime}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-sm">Duration</span>
                    </div>
                    <span className="text-sm font-semibold">{destination.duration}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Thermometer className="h-4 w-4 text-primary" />
                      <span className="text-sm">Weather</span>
                    </div>
                    <span className="text-sm font-semibold">Pleasant</span>
                  </div>

                  <Separator />
                  
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary mb-1">₹{destination.price}</p>
                    <p className="text-sm text-muted-foreground mb-4">Starting price per person</p>
                    <Button className="w-full" size="lg">
                      Book This Destination
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Related Hotels */}
              {relatedHotels.length > 0 && (
                <Card className="glass mb-6">
                  <CardHeader>
                    <CardTitle>Nearby Hotels</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {relatedHotels.map((hotel) => (
                      <Link key={hotel.id} to={`/hotel/${hotel.id}`} className="block">
                        <div className="flex gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                          <img
                            src={hotel.image}
                            alt={hotel.name}
                            className="w-16 h-16 rounded-lg object-cover"
                          />
                          <div className="flex-1">
                            <h4 className="font-semibold text-foreground">{hotel.name}</h4>
                            <div className="flex items-center gap-1 mb-1">
                              <Star className="h-3 w-3 text-yellow-500 fill-current" />
                              <span className="text-sm">{hotel.rating}</span>
                            </div>
                            <p className="text-sm font-semibold text-primary">₹{hotel.pricePerNight}/night</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                    <Button variant="outline" className="w-full" asChild>
                      <Link to={`/search?type=hotels&query=${destination.location}`}>
                        View All Hotels
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )}

              {/* Related Guides */}
              {relatedGuides.length > 0 && (
                <Card className="glass">
                  <CardHeader>
                    <CardTitle>Local Guides</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {relatedGuides.map((guide) => (
                      <Link key={guide.id} to={`/guide/${guide.id}`} className="block">
                        <div className="flex gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                          <img
                            src={guide.image}
                            alt={guide.name}
                            className="w-16 h-16 rounded-full object-cover"
                          />
                          <div className="flex-1">
                            <h4 className="font-semibold text-foreground">{guide.name}</h4>
                            <div className="flex items-center gap-1 mb-1">
                              <Star className="h-3 w-3 text-yellow-500 fill-current" />
                              <span className="text-sm">{guide.rating}</span>
                              {guide.isVerified && (
                                <Badge variant="secondary" className="text-xs ml-1">Verified</Badge>
                              )}
                            </div>
                            <p className="text-sm font-semibold text-primary">₹{guide.pricePerDay}/day</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                    <Button variant="outline" className="w-full" asChild>
                      <Link to={`/search?type=guides&query=${destination.location}`}>
                        View All Guides
                      </Link>
                    </Button>
                  </CardContent>
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

export default DestinationDetail;