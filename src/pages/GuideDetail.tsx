import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Calendar } from '@/components/ui/calendar';
import { MapPin, Star, Languages, Award, Calendar as CalendarIcon, Heart, Share2, Phone, Mail, CheckCircle } from 'lucide-react';
import { guides, reviews } from '@/data/mockData';

const GuideDetail = () => {
  const { id } = useParams();
  const guide = guides.find(g => g.id === id);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [isLiked, setIsLiked] = useState(false);

  if (!guide) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <main className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Guide not found</h1>
            <Button asChild>
              <Link to="/search?type=guides">Browse Guides</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const guideReviews = reviews.slice(0, 2); // Mock reviews

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link to="/search?type=guides" className="hover:text-primary">Guides</Link>
            <span>/</span>
            <span className="text-foreground">{guide.name}</span>
          </nav>

          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
            <div className="flex items-start gap-6">
              <div className="relative">
                <img
                  src={guide.image}
                  alt={guide.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-background shadow-lg"
                />
                {guide.isVerified && (
                  <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                )}
              </div>
              
              <div>
                <h1 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-2">
                  {guide.name}
                </h1>
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">{guide.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="font-semibold">{guide.rating}</span>
                    <span className="text-muted-foreground">({guide.reviewCount} reviews)</span>
                  </div>
                  {guide.isVerified && (
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">{guide.experience} years experience</span>
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
              {/* Guide Description */}
              <Card className="glass mb-8">
                <CardHeader>
                  <CardTitle>About {guide.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {guide.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Languages */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Languages className="h-4 w-4 text-primary" />
                        Languages
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {guide.languages.map((language, index) => (
                          <Badge key={index} variant="secondary">
                            {language}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    {/* Specialties */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Specialties</h4>
                      <div className="flex flex-wrap gap-2">
                        {guide.specialties.map((specialty, index) => (
                          <Badge key={index} variant="outline">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Photo Gallery */}
              <Card className="glass mb-8">
                <CardHeader>
                  <CardTitle>Tour Highlights</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className="aspect-square rounded-lg overflow-hidden">
                        <img
                          src={guide.image}
                          alt={`Tour highlight ${i}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Reviews */}
              <Card className="glass">
                <CardHeader>
                  <CardTitle>Client Reviews</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {guideReviews.map((review) => (
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
                        {guideReviews.indexOf(review) < guideReviews.length - 1 && (
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
                  <CardTitle>Book a Tour</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary mb-1">₹{guide.pricePerDay}</p>
                    <p className="text-sm text-muted-foreground">per day</p>
                  </div>

                  <Separator />

                  {/* Date Selection */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <CalendarIcon className="h-4 w-4 text-primary" />
                      Select Date
                    </h4>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      className="rounded-md border w-full"
                      disabled={(date) => date < new Date()}
                    />
                  </div>

                  <Separator />

                  {/* Quick Info */}
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Experience</span>
                      <span className="font-semibold">{guide.experience} years</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Languages</span>
                      <span className="font-semibold">{guide.languages.length}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Specialties</span>
                      <span className="font-semibold">{guide.specialties.length}</span>
                    </div>
                  </div>

                  <Separator />

                  {/* Pricing */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Guide fee (1 day)</span>
                      <span>₹{guide.pricePerDay}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Service fee</span>
                      <span>₹{Math.round(guide.pricePerDay * 0.1)}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span>₹{guide.pricePerDay + Math.round(guide.pricePerDay * 0.1)}</span>
                    </div>
                  </div>

                  <Button className="w-full" size="lg">
                    Book This Guide
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Free cancellation up to 24 hours before tour
                  </p>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card className="glass">
                <CardHeader>
                  <CardTitle>Contact Guide</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-primary" />
                    <span className="text-sm">+91 9876543210</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-primary" />
                    <span className="text-sm">guide@joharjharkhand.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-sm">{guide.location}, Jharkhand</span>
                  </div>
                  
                  <Separator />
                  
                  <Button variant="outline" className="w-full">
                    Send Message
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

export default GuideDetail;