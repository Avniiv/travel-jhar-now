import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Mumbai, Maharashtra',
    avatar: 'PS',
    rating: 5,
    text: 'The tribal village experience was absolutely magical! The homestay with the Santhal family opened my eyes to such rich traditions. The handicraft workshop was incredible.',
    experience: 'Tribal Heritage Tour',
    date: 'October 2024'
  },
  {
    id: 2,
    name: 'David Chen',
    location: 'Singapore',
    avatar: 'DC',
    rating: 5,
    text: 'Hundru Falls exceeded all expectations. The guide arranged through Johar Jharkhand was knowledgeable and passionate. Perfect blend of adventure and culture.',
    experience: 'Waterfalls & Nature Tour',
    date: 'September 2024'
  },
  {
    id: 3,
    name: 'Anjali Gupta',
    location: 'Delhi, India',
    avatar: 'AG',
    rating: 5,
    text: 'As a solo female traveler, I felt completely safe and welcomed. The cultural marketplace had such beautiful handwoven textiles. Planning to return with family!',
    experience: 'Cultural Immersion',
    date: 'August 2024'
  },
  {
    id: 4,
    name: 'Michael Thompson',
    location: 'London, UK',
    avatar: 'MT',
    rating: 5,
    text: 'Netarhat sunrise was breathtaking! The local guide shared fascinating stories about tribal history. This platform made booking everything so seamless.',
    experience: 'Hill Station Retreat',
    date: 'November 2024'
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-6">
            Traveler Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Hear from fellow travelers who have experienced the magic of Jharkhand's 
            culture, hospitality, and natural beauty through authentic local experiences.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="cultural-card animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="h-8 w-8 text-accent" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-foreground leading-relaxed mb-6 text-lg">
                  "{testimonial.text}"
                </p>

                {/* Experience Badge */}
                <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-6">
                  {testimonial.experience}
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="" alt={testimonial.name} />
                    <AvatarFallback className="bg-secondary text-secondary-foreground font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-poppins font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {testimonial.location} • {testimonial.date}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20">
          <Card className="glass">
            <CardContent className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">4.8/5</div>
                  <div className="text-muted-foreground">Average Rating</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-secondary mb-2">2,500+</div>
                  <div className="text-muted-foreground">Happy Travelers</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">850+</div>
                  <div className="text-muted-foreground">Reviews</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-nature-sage mb-2">95%</div>
                  <div className="text-muted-foreground">Recommend</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;