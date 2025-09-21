import React from 'react';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useFavorites, FavoriteItem } from '@/hooks/useFavorites';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

interface FavoriteButtonProps {
  item: Omit<FavoriteItem, 'addedAt'>;
  variant?: 'default' | 'ghost' | 'outline';
  size?: 'sm' | 'lg';
  className?: string;
}

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  item,
  variant = 'ghost',
  size = 'sm',
  className
}) => {
  const { user } = useAuth();
  const { isFavorite, toggleFavorite } = useFavorites();
  const { toast } = useToast();

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!user) {
      toast({
        title: 'Login Required',
        description: 'Please login to save favorites',
        variant: 'destructive',
      });
      return;
    }

    const success = toggleFavorite(item);
    if (success) {
      const isNowFavorite = isFavorite(item.id);
      toast({
        title: isNowFavorite ? 'Added to Favorites' : 'Removed from Favorites',
        description: isNowFavorite 
          ? `${item.name} has been added to your favorites`
          : `${item.name} has been removed from your favorites`,
      });
    }
  };

  const isItemFavorite = isFavorite(item.id);

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleToggleFavorite}
      className={cn(
        'rounded-full p-2 transition-colors',
        isItemFavorite && 'text-red-500 hover:text-red-600',
        !isItemFavorite && 'text-muted-foreground hover:text-red-500',
        className
      )}
    >
      <Heart 
        className={cn(
          'h-4 w-4',
          isItemFavorite && 'fill-current',
          size === 'sm' && 'h-4 w-4',
          size === 'lg' && 'h-6 w-6'
        )}
      />
    </Button>
  );
};