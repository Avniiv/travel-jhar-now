import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Calendar } from '@/components/ui/calendar';
import { MapPin, Star, Wifi, Car, Coffee, Utensils, Waves, Heart, Share2, Phone, Mail } from 'lucide-react';
import { hotels, reviews } from '@/data/mockData';
import { BackButton } from '@/components/BackButton';

const HotelDetail = () => {
  const { id } = useParams();
  const hotel = hotels.find(h => h.id === id);
  const [checkIn, setCheckIn] = useState<Date | undefined>(new Date());
  const [checkOut, setCheckOut] = useState<Date | undefined>(new Date(Date.now() + 86400000));
  const [isLiked, setIsLiked] = useState(false);

  if (!hotel) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <main className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Hotel not found</h1>
            <Button asChild>
              <Link to="/search?type=hotels">Browse Hotels</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const amenityIcons: { [key: string]: any } = {
    'WiFi': Wifi,
    'Restaurant': Utensils,
    'Parking': Car,
    'Spa': Waves,
    'Coffee': Coffee,
  };

  const hotelReviews = reviews.slice(0, 2); // Mock reviews

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <BackButton to="/search?type=hotels" label="Back to Hotels" />
          </div>
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link to="/search?type=hotels" className="hover:text-primary">Hotels</Link>
            <span>/</span>
            <span className="text-foreground">{hotel.name}</span>
          </nav>

          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-2">
                {hotel.name}
              </h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">{hotel.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="font-semibold">{hotel.rating}</span>
                  <span className="text-muted-foreground">({hotel.reviewCount} reviews)</span>
                </div>
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
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Hotel Image */}
              <Card className="glass mb-8 overflow-hidden">
                <div className="relative h-96">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>

              {/* Hotel Description */}
              <Card className="glass mb-8">
                <CardHeader>
                  <CardTitle>About {hotel.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {hotel.description}
                  </p>

                  {/* Amenities */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Amenities</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {hotel.amenities.map((amenity, index) => {
                        const IconComponent = amenityIcons[amenity] || Coffee;
                        return (
                          <div key={index} className="flex items-center gap-2 text-muted-foreground">
                            <IconComponent className="h-4 w-4 text-primary" />
                            <span className="text-sm">{amenity}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Room Types */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Room Types</h4>
                    <div className="flex flex-wrap gap-2">
                      {hotel.roomTypes.map((roomType, index) => (
                        <Badge key={index} variant="secondary">
                          {roomType}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map Section */}
              <Card className="glass mb-8">
                <CardHeader>
                  <CardTitle>Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 mx-auto mb-2 text-primary" />
                      <p className="text-muted-foreground">Interactive map coming soon</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Located in {hotel.location}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Reviews */}
              <Card className="glass">
                <CardHeader>
                  <CardTitle>Guest Reviews</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {hotelReviews.map((review) => (
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
                        {hotelReviews.indexOf(review) < hotelReviews.length - 1 && (
                          <Separator className="mt-6" />
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Booking Sidebar */}
            <div className="lg:col-span-1">
              <Card className="glass mb-6 sticky top-24">
                <CardHeader>
                  <CardTitle>Book Your Stay</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary mb-1">₹{hotel.pricePerNight}</p>
                    <p className="text-sm text-muted-foreground">per night</p>
                  </div>

                  <Separator />

                  {/* Date Selection */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Select Dates</h4>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Check-in</label>
                        <Calendar
                          mode="single"
                          selected={checkIn}
                          onSelect={setCheckIn}
                          className="rounded-md border w-full"
                          disabled={(date) => date < new Date()}
                        />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Pricing Breakdown */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Base price (1 night)</span>
                      <span>₹{hotel.pricePerNight}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Service fee</span>
                      <span>₹{Math.round(hotel.pricePerNight * 0.1)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Taxes</span>
                      <span>₹{Math.round(hotel.pricePerNight * 0.12)}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span>₹{hotel.pricePerNight + Math.round(hotel.pricePerNight * 0.22)}</span>
                    </div>
                  </div>

                  <Button className="w-full" size="lg">
                    Book Now
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    You won't be charged yet
                  </p>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card className="glass">
                <CardHeader>
                  <CardTitle>Contact Hotel</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-primary" />
                    <span className="text-sm">+91 9876543210</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-primary" />
                    <span className="text-sm">info@{hotel.name.toLowerCase().replace(/\s+/g, '')}.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-sm">{hotel.location}, Jharkhand</span>
                  </div>
                  
                  <Button variant="outline" className="w-full">
                    Contact Hotel
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HotelDetail;