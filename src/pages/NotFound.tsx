import { Link } from "react-router-dom";
import { Home, ArrowLeft, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center px-4">
      <div className="container max-w-2xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center space-x-2 group">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-xl">J</span>
            </div>
            <div>
              <h1 className="text-2xl font-poppins font-bold text-primary-foreground">
                Johar Jharkhand
              </h1>
            </div>
          </Link>
        </div>

        <Card className="glass">
          <CardContent className="p-12">
            {/* 404 Icon */}
            <div className="mb-8">
              <div className="text-8xl font-bold text-primary mb-4">404</div>
              <MapPin className="h-16 w-16 mx-auto text-muted-foreground" />
            </div>

            {/* Error Message */}
            <h2 className="text-3xl font-poppins font-bold text-foreground mb-4">
              Page Not Found
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Oops! The page you're looking for seems to have wandered off into 
              the forests of Jharkhand. Let us help you find your way back.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => window.history.back()}
                className="gap-2"
              >
                <ArrowLeft className="h-5 w-5" />
                Go Back
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => window.location.href = '/'}
                className="gap-2"
              >
                <Home className="h-5 w-5" />
                Return Home
              </Button>
            </div>

            {/* Quick Links */}
            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">
                Popular destinations you might be looking for:
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {[
                  { label: 'Hundru Falls', href: '/destination/hundru-falls' },
                  { label: 'Netarhat Hills', href: '/destination/netarhat' },
                  { label: 'Tribal Villages', href: '/destination/tribal-villages' },
                  { label: 'Cultural Marketplace', href: '/marketplace' },
                ].map((link) => (
                  <Button
                    key={link.href}
                    variant="ghost"
                    size="sm"
                    onClick={() => window.location.href = link.href}
                    className="text-primary hover:text-primary/80"
                  >
                    {link.label}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NotFound;
