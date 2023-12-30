import { Box, styled } from '@mui/material';
import { RestaurantCard } from '@app/components/UI/RestaurantCard.tsx';
import { useState } from 'react';
import data from  '@app/data/restaurants.ts';

export interface Restaurant {
  id: number
  name: string
  description: string
  website: string
  image: string
}

export default function RestaurantsOptions() {
  const [pickedRestaurantIds, setPickedRestaurantIds] = useState<number[]>([]);

  const dataRestaurants = data.restaurants;

  console.log(pickedRestaurantIds);

  return <StyledContainer>
    {dataRestaurants && dataRestaurants.map((restaurant: Restaurant) => {
        return <RestaurantCard
          key={restaurant.id}
          id={restaurant.id}
          name={restaurant.name}
          description={restaurant.description}
          website={restaurant.website}
          image={restaurant.image}
          pickedRestaurantIds={pickedRestaurantIds}
          setPickedRestaurantIds={setPickedRestaurantIds}
        />
    })}

  </StyledContainer>
}

const StyledContainer = styled(Box)(({ theme }) => theme.unstable_sx({


}));

