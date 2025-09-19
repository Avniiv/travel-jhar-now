import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Youtube, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Emergency Contact Strip */}
      <div className="bg-destructive text-destructive-foreground py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              <span className="font-semibold">Emergency Helpline: 112 | Tourist Helpline: 1363</span>
            </div>
            <Button 
              size="sm" 
              variant="outline" 
              className="border-destructive-foreground text-destructive-foreground hover:bg-destructive-foreground hover:text-destructive"
              onClick={() => window.location.href = 'tel:112'}
            >
              <Phone className="h-4 w-4 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-xl">J</span>
              </div>
              <div>
                <h3 className="text-2xl font-poppins font-bold">Johar Jharkhand</h3>
                <p className="text-primary-foreground/80 text-sm">Discover. Experience. Celebrate.</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Your gateway to authentic Jharkhand experiences. Connecting travelers with 
              the rich tribal heritage, natural beauty, and warm hospitality of Jharkhand.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                <Button 
                  key={index}
                  size="sm" 
                  variant="ghost" 
                  className="w-10 h-10 p-0 hover:bg-primary-foreground/10"
                >
                  <Icon className="h-5 w-5" />
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-poppins font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Popular Destinations', href: '/destinations' },
                { label: 'Featured Hotels', href: '/hotels' },
                { label: 'Top Tour Guides', href: '/guides' },
                { label: 'Cultural Experiences', href: '/marketplace/experiences' },
                { label: 'Travel Itineraries', href: '/itineraries' },
                { label: 'About Jharkhand', href: '/about' },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href} 
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Business */}
          <div>
            <h4 className="text-lg font-poppins font-semibold mb-6">Support & Business</h4>
            <ul className="space-y-3">
              {[
                { label: 'Contact Us', href: '/contact' },
                { label: 'FAQ & Help', href: '/contact#faq' },
                { label: 'Travel Tips', href: '/about#travel-tips' },
                { label: 'Become a Vendor', href: '/vendor/apply' },
                { label: 'Partnership', href: '/contact#partnership' },
                { label: 'Travel Safety', href: '/about#safety' },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href} 
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-lg font-poppins font-semibold mb-6">Stay Connected</h4>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-accent" />
                <div>
                  <p className="text-primary-foreground/80 text-sm">
                    Tourism Department<br />
                    Government of Jharkhand<br />
                    Ranchi, Jharkhand 834001
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent" />
                <p className="text-primary-foreground/80 text-sm">+91-651-2446010</p>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent" />
                <p className="text-primary-foreground/80 text-sm">info@joharjharkhand.gov.in</p>
              </div>
              
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-accent" />
                <p className="text-primary-foreground/80 text-sm">Mon-Sat: 9:00 AM - 6:00 PM</p>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h5 className="font-semibold mb-3">Newsletter</h5>
              <p className="text-primary-foreground/80 text-sm mb-4">
                Get travel updates and cultural insights delivered to your inbox.
              </p>
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                />
                <Button size="sm" variant="secondary">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <Separator className="bg-primary-foreground/20" />
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-primary-foreground/80">
            <p>© 2024 Johar Jharkhand. All rights reserved.</p>
            <div className="flex gap-4">
              <Link to="/privacy" className="hover:text-primary-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary-foreground transition-colors">
                Terms of Service
              </Link>
              <Link to="/refund" className="hover:text-primary-foreground transition-colors">
                Refund Policy
              </Link>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-accent fill-accent" />
            <span>for Jharkhand</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;