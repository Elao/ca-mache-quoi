import { Box, styled } from '@mui/material';
import { useEffect, useState } from 'react';
import data from  '@app/data/restaurants.ts';
import { RestaurantButton } from '@app/components/UI/Button/RestaurantButton.tsx';
import ToggleSwitch from '@app/components/UI/ToggleSwitch.tsx';
import ValidateButton from '@app/components/UI/Button/ValidateButton.tsx';

export interface Restaurant {
  id: number
  name: string
  website: string
  image: string
}

export default function RestaurantsOptions() {
  const [pickedRestaurantIds, setPickedRestaurantIds] = useState<number[]>([]);
  const [allSelected, setAllSelected] = useState<boolean>(false);

  const dataRestaurants = data.restaurants;

  useEffect(() => {
    if (allSelected) {
      setPickedRestaurantIds(dataRestaurants.map(restaurant => restaurant.id));
    } else {
      setPickedRestaurantIds([]);
    }
  },[allSelected]);

  return <>
    <ToggleSwitch label="Tout sélectionner" checked={allSelected} setChecked={setAllSelected}/>
    <StyledContainer>
      <ValidateButton/>
      {dataRestaurants && dataRestaurants.map((restaurant: Restaurant) => {
          return <RestaurantButton
            key={restaurant.id}
            id={restaurant.id}
            name={restaurant.name}
            website={restaurant.website}
            image={restaurant.image}
            pickedRestaurantIds={pickedRestaurantIds}
            setPickedRestaurantIds={setPickedRestaurantIds}
          />
      })}
    </StyledContainer>
  </>
}

const StyledContainer = styled(Box)(({ theme }) => theme.unstable_sx({
  display: 'flex',
}));

