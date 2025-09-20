import React, { useState } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Calendar, Users, MapPin, Star, ArrowLeft, ArrowRight, Check, CreditCard, Download, Share } from 'lucide-react';
import { destinations, hotels, guides, vendors } from '@/data/mockData';

const BookingFlow = () => {
  const { type, id } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const step = parseInt(searchParams.get('step') || '1');
  
  // Booking state
  const [bookingDetails, setBookingDetails] = useState({
    checkIn: '',
    checkOut: '',
    guests: 2,
    specialRequests: '',
    contactInfo: {
      name: '',
      email: '',
      phone: ''
    },
    paymentMethod: 'razorpay'
  });

  // Get item data
  const getItemData = () => {
    switch (type) {
      case 'hotel':
        return hotels.find(h => h.id === id);
      case 'guide':
        return guides.find(g => g.id === id);
      case 'vendor':
        return vendors.find(v => v.id === id);
      default:
        return destinations.find(d => d.id === id);
    }
  };

  const item = getItemData();
  
  if (!item) {
    return <div>Item not found</div>;
  }

  const calculatePrice = () => {
    if (type === 'hotel') return (item as any).pricePerNight * 2; // Assuming 2 nights
    if (type === 'guide') return (item as any).pricePerDay;
    return (item as any).price;
  };

  const totalPrice = calculatePrice();
  const taxes = Math.round(totalPrice * 0.18);
  const finalPrice = totalPrice + taxes;

  const handleNextStep = () => {
    if (step < 3) {
      navigate(`/book/${type}/${id}?step=${step + 1}`);
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      navigate(`/book/${type}/${id}?step=${step - 1}`);
    } else {
      navigate(-1);
    }
  };

  const handleBookingComplete = () => {
    // Simulate payment processing
    setTimeout(() => {
      navigate(`/book/${type}/${id}?step=3`);
    }, 2000);
  };

  // Step 1: Booking Details
  const renderStep1 = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <Card className="glass">
          <CardHeader>
            <CardTitle className="text-foreground">Booking Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="checkin">Check-in Date</Label>
                <Input
                  id="checkin"
                  type="date"
                  value={bookingDetails.checkIn}
                  onChange={(e) => setBookingDetails({
                    ...bookingDetails,
                    checkIn: e.target.value
                  })}
                />
              </div>
              <div>
                <Label htmlFor="checkout">Check-out Date</Label>
                <Input
                  id="checkout"
                  type="date"
                  value={bookingDetails.checkOut}
                  onChange={(e) => setBookingDetails({
                    ...bookingDetails,
                    checkOut: e.target.value
                  })}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="guests">Number of Guests</Label>
              <Select
                value={bookingDetails.guests.toString()}
                onValueChange={(value) => setBookingDetails({
                  ...bookingDetails,
                  guests: parseInt(value)
                })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {[1,2,3,4,5,6,7,8].map(num => (
                    <SelectItem key={num} value={num.toString()}>
                      {num} Guest{num > 1 ? 's' : ''}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="requests">Special Requests (Optional)</Label>
              <Textarea
                id="requests"
                placeholder="Any special requirements or requests..."
                value={bookingDetails.specialRequests}
                onChange={(e) => setBookingDetails({
                  ...bookingDetails,
                  specialRequests: e.target.value
                })}
              />
            </div>
          </CardContent>
        </Card>
      </div>

      <div>
        <Card className="glass sticky top-24">
          <CardHeader>
            <CardTitle className="text-foreground">Booking Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div>
                <h4 className="font-semibold text-foreground">{item.name}</h4>
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {item.location}
                </p>
                <p className="text-sm flex items-center gap-1">
                  <Star className="h-3 w-3 text-yellow-500" />
                  {item.rating} ({item.reviewCount} reviews)
                </p>
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">
                  {type === 'hotel' ? 'Per night × 2 nights' : 
                   type === 'guide' ? 'Per day' : 'Total price'}
                </span>
                <span>₹{totalPrice.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Taxes & fees</span>
                <span>₹{taxes.toLocaleString()}</span>
              </div>
              <Separator />
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>₹{finalPrice.toLocaleString()}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  // Step 2: Payment
  const renderStep2 = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-6">
        <Card className="glass">
          <CardHeader>
            <CardTitle className="text-foreground">Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                placeholder="Enter your full name"
                value={bookingDetails.contactInfo.name}
                onChange={(e) => setBookingDetails({
                  ...bookingDetails,
                  contactInfo: { ...bookingDetails.contactInfo, name: e.target.value }
                })}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={bookingDetails.contactInfo.email}
                  onChange={(e) => setBookingDetails({
                    ...bookingDetails,
                    contactInfo: { ...bookingDetails.contactInfo, email: e.target.value }
                  })}
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  placeholder="+91 9876543210"
                  value={bookingDetails.contactInfo.phone}
                  onChange={(e) => setBookingDetails({
                    ...bookingDetails,
                    contactInfo: { ...bookingDetails.contactInfo, phone: e.target.value }
                  })}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass">
          <CardHeader>
            <CardTitle className="text-foreground">Payment Method</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Select
              value={bookingDetails.paymentMethod}
              onValueChange={(value) => setBookingDetails({
                ...bookingDetails,
                paymentMethod: value
              })}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="razorpay">Razorpay (Cards, UPI, Net Banking)</SelectItem>
                <SelectItem value="stripe">International Cards (Stripe)</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex items-center gap-2 p-4 bg-primary/5 rounded-lg">
              <CreditCard className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium">Secure Payment</p>
                <p className="text-xs text-muted-foreground">Your payment information is encrypted and secure</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div>
        <Card className="glass sticky top-24">
          <CardHeader>
            <CardTitle className="text-foreground">Final Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Booking for</span>
                <span>{bookingDetails.guests} guest{bookingDetails.guests > 1 ? 's' : ''}</span>
              </div>
              {bookingDetails.checkIn && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Dates</span>
                  <span>{bookingDetails.checkIn} to {bookingDetails.checkOut}</span>
                </div>
              )}
            </div>

            <Separator />

            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>₹{totalPrice.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Taxes & fees</span>
                <span>₹{taxes.toLocaleString()}</span>
              </div>
              <Separator />
              <div className="flex justify-between font-semibold text-lg">
                <span>Total Amount</span>
                <span>₹{finalPrice.toLocaleString()}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  // Step 3: Confirmation
  const renderStep3 = () => (
    <div className="max-w-2xl mx-auto text-center space-y-6">
      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto">
        <Check className="h-8 w-8 text-white" />
      </div>
      
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">Booking Confirmed!</h2>
        <p className="text-muted-foreground">
          Your booking has been successfully confirmed. You'll receive a confirmation email shortly.
        </p>
      </div>

      <Card className="glass">
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4 text-left">
              <div>
                <Label>Booking ID</Label>
                <p className="font-mono text-sm">JH{Date.now().toString().slice(-6)}</p>
              </div>
              <div>
                <Label>Confirmation Email</Label>
                <p className="text-sm">{bookingDetails.contactInfo.email}</p>
              </div>
            </div>
            
            <Separator />
            
            <div className="text-left">
              <h4 className="font-semibold mb-2">{item.name}</h4>
              <p className="text-sm text-muted-foreground">{item.location}</p>
              <p className="text-sm font-semibold">₹{finalPrice.toLocaleString()}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-4 justify-center">
        <Button variant="outline" className="gap-2">
          <Download className="h-4 w-4" />
          Download Receipt
        </Button>
        <Button variant="outline" className="gap-2">
          <Share className="h-4 w-4" />
          Share Booking
        </Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-8">
            {[1, 2, 3].map((stepNum) => (
              <div key={stepNum} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step >= stepNum 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {step > stepNum ? <Check className="h-4 w-4" /> : stepNum}
                </div>
                {stepNum < 3 && (
                  <div className={`w-20 h-0.5 ${step > stepNum ? 'bg-primary' : 'bg-muted'}`} />
                )}
              </div>
            ))}
          </div>

          {/* Step Titles */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              {step === 1 ? 'Booking Details' : step === 2 ? 'Payment & Contact' : 'Booking Confirmed'}
            </h1>
            <p className="text-muted-foreground">
              Step {step} of 3
            </p>
          </div>

          {/* Step Content */}
          {step === 1 && renderStep1()}
          {step === 2 && renderStep2()}
          {step === 3 && renderStep3()}

          {/* Navigation Buttons */}
          {step < 3 && (
            <div className="flex justify-between mt-8">
              <Button variant="outline" onClick={handlePrevStep} className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                {step === 1 ? 'Back to Details' : 'Previous Step'}
              </Button>
              <Button 
                onClick={step === 2 ? handleBookingComplete : handleNextStep} 
                className="gap-2"
              >
                {step === 2 ? 'Complete Booking' : 'Continue'}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          )}

          {step === 3 && (
            <div className="text-center mt-8">
              <Button onClick={() => navigate('/')} size="lg">
                Return to Home
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BookingFlow;