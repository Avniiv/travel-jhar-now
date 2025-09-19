import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Star, Heart, Share2, Phone, Mail, User, Clock, CheckCircle, Home, Palette, Sparkles } from 'lucide-react';
import { vendors, reviews } from '@/data/mockData';

const VendorDetail = () => {
  const { id } = useParams();
  const vendor = vendors.find(v => v.id === id);
  const [isLiked, setIsLiked] = useState(false);
  const [inquiryMessage, setInquiryMessage] = useState('');

  if (!vendor) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <main className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Vendor not found</h1>
            <Button asChild>
              <Link to="/marketplace">Browse Marketplace</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'homestay': return Home;
      case 'artisan': return Palette;
      case 'experience': return Sparkles;
      default: return User;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'homestay': return 'Homestay';
      case 'artisan': return 'Artisan';
      case 'experience': return 'Experience Provider';
      default: return 'Vendor';
    }
  };

  const vendorReviews = reviews.slice(0, 3); // Mock reviews
  const TypeIcon = getTypeIcon(vendor.type);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link to="/marketplace" className="hover:text-primary">Marketplace</Link>
            <span>/</span>
            <span className="text-foreground">{vendor.name}</span>
          </nav>

          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <TypeIcon className="h-5 w-5 text-primary" />
                <Badge variant="secondary">{getTypeLabel(vendor.type)}</Badge>
              </div>
              <h1 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-2">
                {vendor.name}
              </h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">{vendor.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="font-semibold">{vendor.rating}</span>
                  <span className="text-muted-foreground">({vendor.reviewCount} reviews)</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">by {vendor.owner}</span>
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
              {/* Vendor Image */}
              <Card className="glass mb-8 overflow-hidden">
                <div className="relative h-96">
                  <img
                    src={vendor.image}
                    alt={vendor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>

              {/* Vendor Description */}
              <Card className="glass mb-8">
                <CardHeader>
                  <CardTitle>About {vendor.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {vendor.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">What's Included</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {vendor.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Additional Info based on vendor type */}
                  {vendor.type === 'homestay' && (
                    <div className="grid grid-cols-2 gap-4 p-4 bg-muted/20 rounded-lg">
                      <div className="text-center">
                        <Home className="h-6 w-6 mx-auto mb-1 text-primary" />
                        <p className="text-sm font-semibold">Authentic Stay</p>
                      </div>
                      <div className="text-center">
                        <Clock className="h-6 w-6 mx-auto mb-1 text-primary" />
                        <p className="text-sm font-semibold">24/7 Host Support</p>
                      </div>
                    </div>
                  )}

                  {vendor.type === 'artisan' && (
                    <div className="grid grid-cols-2 gap-4 p-4 bg-muted/20 rounded-lg">
                      <div className="text-center">
                        <Palette className="h-6 w-6 mx-auto mb-1 text-primary" />
                        <p className="text-sm font-semibold">Traditional Crafts</p>
                      </div>
                      <div className="text-center">
                        <CheckCircle className="h-6 w-6 mx-auto mb-1 text-primary" />
                        <p className="text-sm font-semibold">Authentic Products</p>
                      </div>
                    </div>
                  )}

                  {vendor.type === 'experience' && (
                    <div className="grid grid-cols-2 gap-4 p-4 bg-muted/20 rounded-lg">
                      <div className="text-center">
                        <Sparkles className="h-6 w-6 mx-auto mb-1 text-primary" />
                        <p className="text-sm font-semibold">Unique Experience</p>
                      </div>
                      <div className="text-center">
                        <User className="h-6 w-6 mx-auto mb-1 text-primary" />
                        <p className="text-sm font-semibold">Expert Guide</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Location */}
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
                        Located in {vendor.location}, Jharkhand
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Reviews */}
              <Card className="glass">
                <CardHeader>
                  <CardTitle>Customer Reviews</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {vendorReviews.map((review) => (
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
                        {vendorReviews.indexOf(review) < vendorReviews.length - 1 && (
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
                  <CardTitle>Book or Inquire</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary mb-1">₹{vendor.price}</p>
                    <p className="text-sm text-muted-foreground">
                      {vendor.type === 'homestay' ? 'per night' : 
                       vendor.type === 'experience' ? 'per person' : 'starting price'}
                    </p>
                  </div>

                  <Separator />

                  {/* Quick Stats */}
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Rating</span>
                      <span className="font-semibold flex items-center gap-1">
                        <Star className="h-3 w-3 text-yellow-500 fill-current" />
                        {vendor.rating}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Reviews</span>
                      <span className="font-semibold">{vendor.reviewCount}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Owner</span>
                      <span className="font-semibold">{vendor.owner}</span>
                    </div>
                  </div>

                  <Separator />

                  {/* Inquiry Form */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Send a message to {vendor.owner}
                    </label>
                    <Textarea
                      placeholder="Hi! I'm interested in your service. Could you provide more details about availability and pricing?"
                      value={inquiryMessage}
                      onChange={(e) => setInquiryMessage(e.target.value)}
                      rows={4}
                    />
                  </div>

                  <Button className="w-full" size="lg">
                    Send Inquiry
                  </Button>

                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1">
                      <Phone className="h-4 w-4 mr-1" />
                      Call
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Mail className="h-4 w-4 mr-1" />
                      Email
                    </Button>
                  </div>

                  <p className="text-xs text-muted-foreground text-center">
                    Response time: Usually within 24 hours
                  </p>
                </CardContent>
              </Card>

              {/* Vendor Info */}
              <Card className="glass">
                <CardHeader>
                  <CardTitle>About the {getTypeLabel(vendor.type)}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{vendor.owner}</p>
                      <p className="text-sm text-muted-foreground">{getTypeLabel(vendor.type)}</p>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{vendor.location}, Jharkhand</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Verified vendor</span>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full">
                    View All Listings by {vendor.owner}
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

export default VendorDetail;