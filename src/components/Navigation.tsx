import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X, Phone, Globe, User, Heart, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('English');

  return (
    <nav className="sticky top-0 z-50 glass border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">J</span>
            </div>
            <div>
              <h1 className="text-xl font-poppins font-bold bg-gradient-hero bg-clip-text text-transparent">
                Johar Jharkhand
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="text-foreground hover:text-primary transition-colors">
                Destinations
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link to="/destination/hundru-falls">Hundru Falls</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/destination/netarhat">Netarhat Hills</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/destination/tribal-villages">Tribal Villages</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/destinations">View All Destinations</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/hotels" className="text-foreground hover:text-primary transition-colors">
              Hotels
            </Link>

            <Link to="/guides" className="text-foreground hover:text-primary transition-colors">
              Guides
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="text-foreground hover:text-primary transition-colors">
                Marketplace
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link to="/marketplace/homestays">Homestays</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/marketplace/handicrafts">Handicrafts</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/marketplace/experiences">Cultural Experiences</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/marketplace">View All</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/itineraries" className="text-foreground hover:text-primary transition-colors">
              Itineraries
            </Link>

            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              About Jharkhand
            </Link>
          </div>

          {/* Right side controls */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Globe className="h-4 w-4" />
                  <span className="hidden sm:inline">{language}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setLanguage('English')}>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('हिंदी')}>
                  हिंदी
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Emergency SOS Button */}
            <Button 
              size="sm" 
              className="emergency-btn gap-2 hidden sm:flex"
              onClick={() => window.location.href = 'tel:112'}
            >
              <Phone className="h-4 w-4" />
              SOS
            </Button>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <User className="h-4 w-4" />
                  <span className="hidden sm:inline">Account</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Link to="/login" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Login
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/register" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Sign Up
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/dashboard" className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    My Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/dashboard/saved" className="flex items-center gap-2">
                    <Heart className="h-4 w-4" />
                    Saved Trips
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border/50">
            <div className="flex flex-col space-y-4">
              <Link to="/destinations" className="text-foreground hover:text-primary transition-colors py-2">
                Destinations
              </Link>
              <Link to="/hotels" className="text-foreground hover:text-primary transition-colors py-2">
                Hotels
              </Link>
              <Link to="/guides" className="text-foreground hover:text-primary transition-colors py-2">
                Guides
              </Link>
              <Link to="/marketplace" className="text-foreground hover:text-primary transition-colors py-2">
                Marketplace
              </Link>
              <Link to="/itineraries" className="text-foreground hover:text-primary transition-colors py-2">
                Itineraries
              </Link>
              <Link to="/about" className="text-foreground hover:text-primary transition-colors py-2">
                About Jharkhand
              </Link>
              <Link to="/contact" className="text-foreground hover:text-primary transition-colors py-2">
                Contact & Support
              </Link>
              
              {/* Mobile Emergency Button */}
              <Button 
                className="emergency-btn gap-2 w-full mt-4"
                onClick={() => window.location.href = 'tel:112'}
              >
                <Phone className="h-4 w-4" />
                Emergency SOS
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;