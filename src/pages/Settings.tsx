import React, { useState } from 'react';
import { Shield, Bell, Globe, Moon, Sun, Volume2, VolumeX, Smartphone, Mail, Lock, CreditCard, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { BackButton } from '@/components/BackButton';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

const Settings = () => {
  const { user, logout } = useAuth();
  const { toast } = useToast();
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      push: true,
      sms: false,
      marketing: false,
    },
    privacy: {
      profileVisibility: 'public',
      activityStatus: true,
      dataSharing: false,
    },
    preferences: {
      language: 'en',
      currency: 'INR',
      theme: 'system',
      soundEffects: true,
    },
  });

  const handleSettingChange = (category: string, setting: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category as keyof typeof prev],
        [setting]: value,
      },
    }));
    
    toast({
      title: 'Settings Updated',
      description: 'Your preferences have been saved.',
    });
  };

  const handleDeleteAccount = () => {
    // In a real app, this would show a confirmation dialog
    toast({
      title: 'Account Deletion',
      description: 'This feature is not available in demo mode.',
      variant: 'destructive',
    });
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-subtle">
        <Navigation />
        <main className="pt-20 pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-2xl font-bold text-foreground">Please log in to access settings</h1>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <main className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <BackButton to="/dashboard" label="Back to Dashboard" />
          </div>

          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Settings</h1>
            <p className="text-muted-foreground">Manage your account preferences and privacy settings</p>
          </div>

          <div className="space-y-6">
            {/* Notifications */}
            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Notifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-foreground">Email Notifications</h4>
                    <p className="text-sm text-muted-foreground">Receive booking confirmations and updates</p>
                  </div>
                  <Switch
                    checked={settings.notifications.email}
                    onCheckedChange={(value) => handleSettingChange('notifications', 'email', value)}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-foreground">Push Notifications</h4>
                    <p className="text-sm text-muted-foreground">Get alerts on your mobile device</p>
                  </div>
                  <Switch
                    checked={settings.notifications.push}
                    onCheckedChange={(value) => handleSettingChange('notifications', 'push', value)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-foreground">SMS Notifications</h4>
                    <p className="text-sm text-muted-foreground">Receive text messages for important updates</p>
                  </div>
                  <Switch
                    checked={settings.notifications.sms}
                    onCheckedChange={(value) => handleSettingChange('notifications', 'sms', value)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-foreground">Marketing Communications</h4>
                    <p className="text-sm text-muted-foreground">Receive promotional offers and travel deals</p>
                  </div>
                  <Switch
                    checked={settings.notifications.marketing}
                    onCheckedChange={(value) => handleSettingChange('notifications', 'marketing', value)}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Privacy & Security */}
            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Privacy & Security
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-foreground">Profile Visibility</h4>
                    <p className="text-sm text-muted-foreground">Control who can see your profile</p>
                  </div>
                  <Select
                    value={settings.privacy.profileVisibility}
                    onValueChange={(value) => handleSettingChange('privacy', 'profileVisibility', value)}
                  >
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="public">Public</SelectItem>
                      <SelectItem value="friends">Friends Only</SelectItem>
                      <SelectItem value="private">Private</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-foreground">Activity Status</h4>
                    <p className="text-sm text-muted-foreground">Show when you're active</p>
                  </div>
                  <Switch
                    checked={settings.privacy.activityStatus}
                    onCheckedChange={(value) => handleSettingChange('privacy', 'activityStatus', value)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-foreground">Data Sharing</h4>
                    <p className="text-sm text-muted-foreground">Share anonymous usage data to improve service</p>
                  </div>
                  <Switch
                    checked={settings.privacy.dataSharing}
                    onCheckedChange={(value) => handleSettingChange('privacy', 'dataSharing', value)}
                  />
                </div>

                <Separator />

                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <Lock className="h-4 w-4" />
                    Change Password
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <Smartphone className="h-4 w-4" />
                    Two-Factor Authentication
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <CreditCard className="h-4 w-4" />
                    Payment Methods
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Preferences */}
            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-foreground">Language</h4>
                    <p className="text-sm text-muted-foreground">Choose your preferred language</p>
                  </div>
                  <Select
                    value={settings.preferences.language}
                    onValueChange={(value) => handleSettingChange('preferences', 'language', value)}
                  >
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="hi">हिंदी</SelectItem>
                      <SelectItem value="bn">বাংলা</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-foreground">Currency</h4>
                    <p className="text-sm text-muted-foreground">Display prices in your preferred currency</p>
                  </div>
                  <Select
                    value={settings.preferences.currency}
                    onValueChange={(value) => handleSettingChange('preferences', 'currency', value)}
                  >
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="INR">₹ INR</SelectItem>
                      <SelectItem value="USD">$ USD</SelectItem>
                      <SelectItem value="EUR">€ EUR</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-foreground">Theme</h4>
                    <p className="text-sm text-muted-foreground">Choose your interface theme</p>
                  </div>
                  <Select
                    value={settings.preferences.theme}
                    onValueChange={(value) => handleSettingChange('preferences', 'theme', value)}
                  >
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-foreground">Sound Effects</h4>
                    <p className="text-sm text-muted-foreground">Play sounds for interactions</p>
                  </div>
                  <Switch
                    checked={settings.preferences.soundEffects}
                    onCheckedChange={(value) => handleSettingChange('preferences', 'soundEffects', value)}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Account Management */}
            <Card className="glass border-destructive/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-destructive">
                  <Trash2 className="h-5 w-5" />
                  Account Management
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-foreground mb-2">Delete Account</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Permanently delete your account and all associated data. This action cannot be undone.
                  </p>
                  <Button variant="destructive" onClick={handleDeleteAccount}>
                    Delete Account
                  </Button>
                </div>

                <Separator />

                <div>
                  <h4 className="font-medium text-foreground mb-2">Sign Out</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Sign out of your account on this device.
                  </p>
                  <Button variant="outline" onClick={logout}>
                    Sign Out
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Settings;