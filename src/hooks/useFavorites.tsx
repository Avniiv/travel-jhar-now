import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';

export interface FavoriteItem {
  id: string;
  type: 'destination' | 'hotel' | 'guide' | 'vendor' | 'itinerary';
  name: string;
  image: string;
  price?: number;
  rating?: number;
  location?: string;
  addedAt: string;
}

export const useFavorites = () => {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user) {
      // Load user's favorites from localStorage
      const storedFavorites = localStorage.getItem(`favorites_${user.id}`);
      if (storedFavorites) {
        try {
          setFavorites(JSON.parse(storedFavorites));
        } catch (error) {
          console.error('Error parsing favorites:', error);
        }
      }
    } else {
      setFavorites([]);
    }
    setIsLoading(false);
  }, [user]);

  const addToFavorites = (item: Omit<FavoriteItem, 'addedAt'>) => {
    if (!user) return false;

    const favoriteItem: FavoriteItem = {
      ...item,
      addedAt: new Date().toISOString(),
    };

    const updatedFavorites = [...favorites, favoriteItem];
    setFavorites(updatedFavorites);
    localStorage.setItem(`favorites_${user.id}`, JSON.stringify(updatedFavorites));
    return true;
  };

  const removeFromFavorites = (itemId: string) => {
    if (!user) return false;

    const updatedFavorites = favorites.filter(fav => fav.id !== itemId);
    setFavorites(updatedFavorites);
    localStorage.setItem(`favorites_${user.id}`, JSON.stringify(updatedFavorites));
    return true;
  };

  const isFavorite = (itemId: string) => {
    return favorites.some(fav => fav.id === itemId);
  };

  const toggleFavorite = (item: Omit<FavoriteItem, 'addedAt'>) => {
    if (isFavorite(item.id)) {
      return removeFromFavorites(item.id);
    } else {
      return addToFavorites(item);
    }
  };

  const clearFavorites = () => {
    if (!user) return false;

    setFavorites([]);
    localStorage.removeItem(`favorites_${user.id}`);
    return true;
  };

  return {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    toggleFavorite,
    clearFavorites,
    isLoading,
  };
};