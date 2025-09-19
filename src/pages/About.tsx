import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { MapPin, Calendar, Users, Palette, Music, Utensils, Mountain, Leaf, Camera, Clock } from 'lucide-react';

const About = () => {
  const culturalHighlights = [
    {
      title: "Tribal Heritage",
      description: "Home to 32 indigenous tribes including Santhal, Munda, Oraon, and Ho, each with unique traditions and languages.",
      icon: Users,
      image: "/src/assets/tribal-village.jpg"
    },
    {
      title: "Traditional Arts",
      description: "Rich handicrafts including dokra metal work, bamboo crafts, stone carvings, and intricate tribal jewelry.",
      icon: Palette,
      image: "/src/assets/cultural-marketplace.jpg"
    },
    {
      title: "Folk Music & Dance",
      description: "Vibrant performances like Santali dance, Mundari songs, and traditional drum beats echoing through forests.",
      icon: Music,
      image: "/src/assets/cultural-marketplace.jpg"
    },
    {
      title: "Local Cuisine",
      description: "Authentic flavors with dishes like handia, dhuska, pitthas, and fresh forest vegetables and herbs.",
      icon: Utensils,
      image: "/src/assets/cultural-marketplace.jpg"
    }
  ];

  const geographicalFeatures = [
    {
      title: "Chota Nagpur Plateau",
      description: "Ancient plateau formation with rich mineral deposits and diverse ecosystems",
      icon: Mountain
    },
    {
      title: "Dense Forests",
      description: "Over 23% forest cover with sal, teak, and bamboo groves supporting diverse wildlife",
      icon: Leaf
    },
    {
      title: "Spectacular Waterfalls",
      description: "Numerous cascades including Hundru, Jonha, and Dassam falls",
      icon: Camera
    }
  ];

  const festivals = [
    { name: "Sarhul", season: "Spring", description: "Sal blossom festival celebrating nature's renewal" },
    { name: "Karma", season: "Autumn", description: "Harvest festival with traditional dance and music" },
    { name: "Sohrai", season: "Winter", description: "Cattle worship festival with beautiful wall paintings" },
    { name: "Tusu Parab", season: "Winter", description: "Folk festival celebrating the harvest season" }
  ];

  const travelTips = [
    "Best time to visit: October to March for pleasant weather",
    "Carry warm clothes for hill stations like Netarhat",
    "Respect local customs and tribal traditions",
    "Try local transportation for authentic experiences",
    "Book homestays in advance during festival seasons",
    "Carry cash as many rural areas have limited digital payment options"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-6">
              About Jharkhand
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              "Johar" - the traditional greeting of Jharkhand, meaning "respect to you." 
              Discover the land of forests, waterfalls, and vibrant tribal culture.
            </p>
          </div>

          {/* Hero Image */}
          <Card className="glass mb-16 overflow-hidden">
            <div className="relative h-96">
              <img
                src="/src/assets/hero-jharkhand.jpg"
                alt="Jharkhand landscape"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h2 className="text-2xl font-bold mb-2">The Land of Forests</h2>
                <p className="text-sm opacity-90">Where ancient traditions meet natural splendor</p>
              </div>
            </div>
          </Card>

          {/* Introduction */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <Card className="glass">
                <CardHeader>
                  <CardTitle>Jharkhand: A Cultural Mosaic</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Jharkhand, literally meaning "land of forests," is a state in eastern India formed in 2000. 
                    It's a treasure trove of indigenous culture, natural beauty, and mineral wealth. The state 
                    is renowned for its dense forests, cascading waterfalls, and most importantly, its rich 
                    tribal heritage that has been preserved for centuries.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Home to over 30 indigenous tribes, Jharkhand offers visitors a unique opportunity to 
                    experience authentic tribal culture, traditional art forms, and sustainable living 
                    practices. The state's natural landscapes, from the scenic Netarhat hills to the 
                    thundering Hundru falls, provide a perfect backdrop for cultural exploration.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Whether you're seeking adventure in wildlife sanctuaries, spiritual experiences in 
                    ancient temples, or cultural immersion in tribal villages, Jharkhand offers an 
                    authentic Indian experience away from crowded tourist circuits.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Quick Facts */}
            <div className="space-y-6">
              <Card className="glass">
                <CardHeader>
                  <CardTitle className="text-lg">Quick Facts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span><strong>Capital:</strong> Ranchi</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span><strong>Formed:</strong> November 15, 2000</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-primary" />
                    <span><strong>Population:</strong> 3.3 crores</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Mountain className="h-4 w-4 text-primary" />
                    <span><strong>Area:</strong> 79,716 km²</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Leaf className="h-4 w-4 text-primary" />
                    <span><strong>Forest Cover:</strong> 23.45%</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-primary" />
                    <span><strong>Tribes:</strong> 32 indigenous groups</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass">
                <CardHeader>
                  <CardTitle className="text-lg">Languages</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="secondary">Hindi</Badge>
                    <Badge variant="secondary">Santhali</Badge>
                    <Badge variant="secondary">Mundari</Badge>
                    <Badge variant="secondary">Ho</Badge>
                    <Badge variant="secondary">Kurukh</Badge>
                    <Badge variant="secondary">Kharia</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Cultural Highlights */}
          <div className="mb-16">
            <h2 className="text-3xl font-poppins font-bold text-foreground mb-8 text-center">
              Cultural Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {culturalHighlights.map((highlight, index) => {
                const IconComponent = highlight.icon;
                return (
                  <Card key={index} className="glass hover-card overflow-hidden">
                    <div className="md:flex">
                      <div className="md:w-32 h-24 md:h-auto relative overflow-hidden">
                        <img
                          src={highlight.image}
                          alt={highlight.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="flex-1 p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <IconComponent className="h-5 w-5 text-primary" />
                          <h3 className="text-lg font-semibold text-foreground">{highlight.title}</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">{highlight.description}</p>
                      </CardContent>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Geography & Climate */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <Card className="glass">
              <CardHeader>
                <CardTitle>Geography & Natural Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {geographicalFeatures.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                      <div key={index} className="flex items-start gap-3">
                        <IconComponent className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <h4 className="font-semibold text-foreground">{feature.title}</h4>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <Card className="glass">
              <CardHeader>
                <CardTitle>Climate & Best Time to Visit</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    Seasonal Guide
                  </h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-green-50 rounded-lg">
                      <p className="font-semibold text-green-800">Winter (Nov-Feb)</p>
                      <p className="text-sm text-green-700">Best time to visit. Pleasant weather, ideal for sightseeing.</p>
                    </div>
                    <div className="p-3 bg-yellow-50 rounded-lg">
                      <p className="font-semibold text-yellow-800">Summer (Mar-Jun)</p>
                      <p className="text-sm text-yellow-700">Hot but bearable. Good for hill stations like Netarhat.</p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <p className="font-semibold text-blue-800">Monsoon (Jul-Oct)</p>
                      <p className="text-sm text-blue-700">Lush greenery, waterfalls at their best. Some areas may be inaccessible.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Festivals */}
          <Card className="glass mb-16">
            <CardHeader>
              <CardTitle>Major Festivals</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {festivals.map((festival, index) => (
                  <div key={index} className="text-center p-4 rounded-lg bg-muted/20">
                    <h4 className="font-semibold text-foreground mb-1">{festival.name}</h4>
                    <Badge variant="outline" className="mb-2">{festival.season}</Badge>
                    <p className="text-sm text-muted-foreground">{festival.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Travel Tips */}
          <Card className="glass">
            <CardHeader>
              <CardTitle>Travel Tips & Guidelines</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Essential Tips</h4>
                  <ul className="space-y-2">
                    {travelTips.slice(0, 3).map((tip, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Local Etiquette</h4>
                  <ul className="space-y-2">
                    {travelTips.slice(3).map((tip, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;