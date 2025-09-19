import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Phone, Mail, MapPin, Clock, AlertTriangle, MessageCircle, HelpCircle, Send, Shield } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      inquiryType: ''
    });
  };

  const officeLocations = [
    {
      name: "Main Office - Ranchi",
      address: "123 Main Road, Ranchi, Jharkhand 834001",
      phone: "+91 651 2234567",
      email: "ranchi@joharjharkhand.com",
      hours: "Mon-Sat: 9:00 AM - 6:00 PM"
    },
    {
      name: "Regional Office - Jamshedpur",
      address: "456 Steel City Plaza, Jamshedpur, Jharkhand 831001",
      phone: "+91 657 2345678",
      email: "jamshedpur@joharjharkhand.com",
      hours: "Mon-Sat: 9:00 AM - 6:00 PM"
    }
  ];

  const emergencyContacts = [
    {
      service: "Police Emergency",
      number: "100",
      description: "For immediate police assistance"
    },
    {
      service: "Medical Emergency",
      number: "108",
      description: "Ambulance and medical emergencies"
    },
    {
      service: "Fire Emergency",
      number: "101",
      description: "Fire department and rescue services"
    },
    {
      service: "Tourist Helpline",
      number: "1363",
      description: "24/7 tourist assistance and information"
    },
    {
      service: "Jharkhand Tourism",
      number: "+91 651 2446916",
      description: "Official state tourism department"
    }
  ];

  const faqs = [
    {
      question: "What is the best time to visit Jharkhand?",
      answer: "October to March is ideal with pleasant weather perfect for sightseeing and outdoor activities."
    },
    {
      question: "How do I book accommodation through your platform?",
      answer: "Browse hotels, select your dates, and click 'Book Now'. You'll need to create an account for booking confirmation."
    },
    {
      question: "Are local guides verified?",
      answer: "Yes, all our guides go through a verification process including background checks and certification validation."
    },
    {
      question: "What languages do the guides speak?",
      answer: "Our guides speak Hindi, English, and local tribal languages like Santhali, Mundari, and Ho."
    },
    {
      question: "Is it safe to travel to tribal villages?",
      answer: "Absolutely! Our partner villages are welcoming to tourists. We recommend respecting local customs and following guide instructions."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-6">
              Contact & Support
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're here to help you plan your perfect Jharkhand adventure. 
              Get in touch with our team or find answers to common questions.
            </p>
          </div>

          {/* Emergency SOS Button */}
          <Card className="glass border-red-200 mb-12">
            <CardContent className="p-6">
              <div className="flex items-center justify-center gap-4">
                <AlertTriangle className="h-8 w-8 text-red-500" />
                <div className="text-center">
                  <h3 className="text-xl font-bold text-foreground mb-2">Emergency Assistance</h3>
                  <p className="text-muted-foreground mb-4">
                    In case of emergency during your travel, click the button below for immediate help
                  </p>
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                    <Shield className="h-5 w-5 mr-2" />
                    SOS - Emergency Help
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Contact Form */}
            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+91 9876543210"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Inquiry Type
                      </label>
                      <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange('inquiryType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="booking">Booking Assistance</SelectItem>
                          <SelectItem value="destination">Destination Information</SelectItem>
                          <SelectItem value="vendor">Vendor Partnership</SelectItem>
                          <SelectItem value="complaint">Complaint</SelectItem>
                          <SelectItem value="feedback">Feedback</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <Input
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      placeholder="Brief subject of your inquiry"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Please provide details about your inquiry..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Office Locations */}
              <Card className="glass">
                <CardHeader>
                  <CardTitle>Office Locations</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {officeLocations.map((office, index) => (
                    <div key={index}>
                      <h4 className="font-semibold text-foreground mb-3">{office.name}</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 text-primary mt-0.5" />
                          <span className="text-muted-foreground">{office.address}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-primary" />
                          <span className="text-muted-foreground">{office.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-primary" />
                          <span className="text-muted-foreground">{office.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span className="text-muted-foreground">{office.hours}</span>
                        </div>
                      </div>
                      {index < officeLocations.length - 1 && <Separator className="mt-6" />}
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card className="glass">
                <CardHeader>
                  <CardTitle>Response Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Email Inquiries</span>
                      <Badge variant="secondary">24 hours</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Booking Support</span>
                      <Badge variant="secondary">2-4 hours</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Emergency Support</span>
                      <Badge className="bg-red-600">Immediate</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Phone Calls</span>
                      <Badge variant="secondary">Business hours</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Emergency Contacts */}
          <Card className="glass mb-16">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-red-500" />
                Emergency Contacts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {emergencyContacts.map((contact, index) => (
                  <div key={index} className="p-4 border border-border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-foreground">{contact.service}</h4>
                      <Badge variant="outline" className="font-mono">{contact.number}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{contact.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* FAQ Section */}
          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-primary" />
                Frequently Asked Questions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-foreground mb-2">{faq.question}</h4>
                    <p className="text-muted-foreground">{faq.answer}</p>
                    {index < faqs.length - 1 && <Separator className="mt-6" />}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;