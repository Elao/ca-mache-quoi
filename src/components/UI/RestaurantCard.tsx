import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import ToggleSwitch from '@app/components/UI/ToggleSwitch.tsx';


interface Props {
  id: number
  name: string
  description: string
  website: string
  image: string
  pickedRestaurantIds: number[]
  setPickedRestaurantIds: (id: number[]) => void
}

export function RestaurantCard({
  id,
  name,
  description,
  website,
  image,
  pickedRestaurantIds,
  setPickedRestaurantIds,
}: Props) {

  function addRestaurantToPool (id: number) {
    setPickedRestaurantIds([...pickedRestaurantIds, id]);
  }

  function removeRestaurantFromPool (id: number) {
    setPickedRestaurantIds(pickedRestaurantIds.filter(restaurantId => id !== restaurantId));
  }

  const selected = pickedRestaurantIds.includes(id);

  function toggleRestaurant (value: boolean) {
    if (value) {
      addRestaurantToPool(id);
    } else {
      removeRestaurantFromPool(id);
    }
  }

  return <>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        component="img"
        image={image}
        alt={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <ToggleSwitch label="Ajouter au pool de selection" checked={selected} setChecked={toggleRestaurant} />
        <Button size="small" href={website} target='_blank'>Website</Button>
      </CardActions>
    </Card>
  </>
}
