import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Calendar, 
  MapPin, 
  Star, 
  Download, 
  Heart, 
  Settings, 
  User, 
  CreditCard,
  Clock,
  CheckCircle,
  XCircle,
  Eye
} from 'lucide-react';

const Dashboard = () => {
  // Mock user data
  const user = {
    name: 'Priya Sharma',
    email: 'priya.sharma@email.com',
    phone: '+91 9876543210',
    avatar: '',
    memberSince: '2024-01-15'
  };

  // Mock bookings data
  const bookings = [
    {
      id: 'JH123456',
      type: 'destination',
      name: 'Hundru Falls',
      location: 'Ranchi',
      checkIn: '2024-02-15',
      checkOut: '2024-02-17',
      guests: 2,
      status: 'confirmed',
      amount: 2360,
      image: '/src/assets/hundru-falls.jpg'
    },
    {
      id: 'JH789012',
      type: 'hotel',
      name: 'Forest View Resort',
      location: 'Netarhat',
      checkIn: '2024-03-20',
      checkOut: '2024-03-23',
      guests: 4,
      status: 'upcoming',
      amount: 14160,
      image: '/src/assets/netarhat-hills.jpg'
    },
    {
      id: 'JH345678',
      type: 'guide',
      name: 'Cultural Heritage Tour with Sunita Devi',
      location: 'Tribal Villages',
      checkIn: '2024-01-10',
      checkOut: '2024-01-12',
      guests: 2,
      status: 'completed',
      amount: 4720,
      image: '/src/assets/tribal-village.jpg'
    }
  ];

  // Mock saved trips
  const savedTrips = [
    {
      id: '1',
      name: 'Netarhat',
      location: 'Latehar',
      type: 'destination',
      image: '/src/assets/netarhat-hills.jpg',
      rating: 4.7,
      price: 800
    },
    {
      id: '2',
      name: 'Betla National Park',
      location: 'Palamu',
      type: 'destination',
      image: '/src/assets/hero-jharkhand.jpg',
      rating: 4.3,
      price: 1500
    },
    {
      id: '3',
      name: 'Tribal Heritage Stay',
      location: 'Khunti',
      type: 'hotel',
      image: '/src/assets/tribal-village.jpg',
      rating: 4.8,
      price: 2000
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'upcoming':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'completed':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      case 'cancelled':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed':
      case 'upcoming':
        return <CheckCircle className="h-4 w-4" />;
      case 'completed':
        return <CheckCircle className="h-4 w-4" />;
      case 'cancelled':
        return <XCircle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Welcome Header */}
          <div className="flex items-center gap-6 mb-8">
            <Avatar className="h-20 w-20">
              <AvatarImage src={user.avatar} />
              <AvatarFallback className="bg-primary text-primary-foreground text-xl">
                {user.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-1">
                Welcome back, {user.name}!
              </h1>
              <p className="text-muted-foreground">
                Member since {new Date(user.memberSince).toLocaleDateString('en-IN', { 
                  year: 'numeric', 
                  month: 'long' 
                })}
              </p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="glass">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-foreground mb-1">
                  {bookings.filter(b => b.status === 'upcoming').length}
                </div>
                <p className="text-muted-foreground text-sm">Upcoming Trips</p>
              </CardContent>
            </Card>
            <Card className="glass">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-foreground mb-1">
                  {bookings.filter(b => b.status === 'completed').length}
                </div>
                <p className="text-muted-foreground text-sm">Completed Trips</p>
              </CardContent>
            </Card>
            <Card className="glass">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-foreground mb-1">
                  {savedTrips.length}
                </div>
                <p className="text-muted-foreground text-sm">Saved Places</p>
              </CardContent>
            </Card>
            <Card className="glass">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-foreground mb-1">
                  ₹{bookings.reduce((sum, b) => sum + b.amount, 0).toLocaleString()}
                </div>
                <p className="text-muted-foreground text-sm">Total Spent</p>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Tabs */}
          <Tabs defaultValue="bookings" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="bookings" className="gap-2">
                <Calendar className="h-4 w-4" />
                My Bookings
              </TabsTrigger>
              <TabsTrigger value="saved" className="gap-2">
                <Heart className="h-4 w-4" />
                Saved Trips
              </TabsTrigger>
              <TabsTrigger value="profile" className="gap-2">
                <User className="h-4 w-4" />
                Profile
              </TabsTrigger>
              <TabsTrigger value="settings" className="gap-2">
                <Settings className="h-4 w-4" />
                Settings
              </TabsTrigger>
            </TabsList>

            {/* Bookings Tab */}
            <TabsContent value="bookings" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-foreground">My Bookings</h2>
                <Button asChild>
                  <Link to="/destinations">Book New Trip</Link>
                </Button>
              </div>

              <div className="grid gap-6">
                {bookings.map((booking) => (
                  <Card key={booking.id} className="glass">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <img
                          src={booking.image}
                          alt={booking.name}
                          className="w-24 h-24 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h3 className="text-lg font-semibold text-foreground">
                                {booking.name}
                              </h3>
                              <p className="text-muted-foreground flex items-center gap-1">
                                <MapPin className="h-3 w-3" />
                                {booking.location}
                              </p>
                            </div>
                            <Badge variant="outline" className={getStatusColor(booking.status)}>
                              {getStatusIcon(booking.status)}
                              {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                            </Badge>
                          </div>
                          
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div>
                              <p className="text-muted-foreground">Booking ID</p>
                              <p className="font-mono">{booking.id}</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Check-in</p>
                              <p>{new Date(booking.checkIn).toLocaleDateString()}</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Guests</p>
                              <p>{booking.guests} guest{booking.guests > 1 ? 's' : ''}</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Total Amount</p>
                              <p className="font-semibold">₹{booking.amount.toLocaleString()}</p>
                            </div>
                          </div>

                          <div className="flex gap-2 mt-4">
                            <Button size="sm" variant="outline" className="gap-1">
                              <Eye className="h-3 w-3" />
                              View Details
                            </Button>
                            <Button size="sm" variant="outline" className="gap-1">
                              <Download className="h-3 w-3" />
                              Download
                            </Button>
                            {booking.status === 'completed' && (
                              <Button size="sm" variant="outline" className="gap-1">
                                <Star className="h-3 w-3" />
                                Write Review
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Saved Trips Tab */}
            <TabsContent value="saved" className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Saved Trips</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {savedTrips.map((trip) => (
                  <Card key={trip.id} className="glass hover-card overflow-hidden">
                    <div className="relative">
                      <img
                        src={trip.image}
                        alt={trip.name}
                        className="w-full h-48 object-cover"
                      />
                      <Button
                        size="sm"
                        variant="ghost"
                        className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm"
                      >
                        <Heart className="h-4 w-4 text-red-500 fill-current" />
                      </Button>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-foreground mb-1">{trip.name}</h3>
                      <p className="text-sm text-muted-foreground flex items-center gap-1 mb-2">
                        <MapPin className="h-3 w-3" />
                        {trip.location}
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span className="text-sm">{trip.rating}</span>
                        </div>
                        <span className="font-semibold">₹{trip.price}</span>
                      </div>
                      <Button className="w-full mt-3" size="sm" asChild>
                        <Link to={`/${trip.type}/${trip.id}`}>
                          Book Now
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Profile Tab */}
            <TabsContent value="profile" className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Profile Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="glass">
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Full Name</p>
                      <p className="font-medium">{user.name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email Address</p>
                      <p className="font-medium">{user.email}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone Number</p>
                      <p className="font-medium">{user.phone}</p>
                    </div>
                    <Button variant="outline" className="w-full">
                      Edit Profile
                    </Button>
                  </CardContent>
                </Card>

                <Card className="glass">
                  <CardHeader>
                    <CardTitle>Travel Preferences</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Preferred Language</p>
                      <p className="font-medium">English</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Travel Style</p>
                      <p className="font-medium">Cultural & Nature</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Budget Range</p>
                      <p className="font-medium">₹2,000 - ₹10,000</p>
                    </div>
                    <Button variant="outline" className="w-full">
                      Update Preferences
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Settings Tab */}
            <TabsContent value="settings" className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Settings</h2>
              
              <div className="grid gap-6">
                <Card className="glass">
                  <CardHeader>
                    <CardTitle>Notifications</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Email Notifications</p>
                        <p className="text-sm text-muted-foreground">Receive booking confirmations and updates</p>
                      </div>
                      <Button variant="outline" size="sm">Enable</Button>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">SMS Notifications</p>
                        <p className="text-sm text-muted-foreground">Receive important alerts via SMS</p>
                      </div>
                      <Button variant="outline" size="sm">Enable</Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass">
                  <CardHeader>
                    <CardTitle>Privacy & Security</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button variant="outline" className="w-full justify-start gap-2">
                      <CreditCard className="h-4 w-4" />
                      Manage Payment Methods
                    </Button>
                    <Button variant="outline" className="w-full justify-start gap-2">
                      <User className="h-4 w-4" />
                      Change Password
                    </Button>
                    <Button variant="outline" className="w-full justify-start gap-2">
                      <Download className="h-4 w-4" />
                      Download My Data
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;