import {
  Box,
  Button,
  ClickAwayListener,
  Grow,
  IconButton,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  styled,
  Typography
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useRef, useState } from 'react';

interface Props {
  id: number
  name: string
  website: string
  image: string
  pickedRestaurantIds: number[]
  setPickedRestaurantIds: (id: number[]) => void
}

export function RestaurantButton({
  id,
  name,
  website,
  image,
  pickedRestaurantIds,
  setPickedRestaurantIds,
}: Props) {
  const selected = pickedRestaurantIds.includes(id);
  const selectedStyle = selected ?
    {
      width: '300px',
      margin: '20px',
      border: '4px solid currentColor'
    } : {
      width: '300px',
      margin: '20px',
    };
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);

  function addRestaurantToPool(id: number) {
    setPickedRestaurantIds([...pickedRestaurantIds, id]);
  }

  function removeRestaurantFromPool(id: number) {
    setPickedRestaurantIds(pickedRestaurantIds.filter(restaurantId => id !== restaurantId));
  }

  function toggleRestaurant(value: boolean) {
    if (value) {
      addRestaurantToPool(id);
    } else {
      removeRestaurantFromPool(id);
    }
  }

  function handleClick() {
    toggleRestaurant(!selected);
  }

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  const handleMenuItemClick = (
    website: string,
  ) => {
    window.open(website, '_blank');
    setOpen(false);
  };

  return <StyledBox>
    <StyledButton
      focusRipple
      key={name}
      style={selectedStyle}
      onClick={handleClick}
    >
      <ImageSrc style={{ backgroundImage: `url(${image})` }} />
      <ImageBackdrop className="MuiImageBackdrop-root" />
      <Image>
        <Typography
          component="span"
          variant="subtitle1"
          color="inherit"
          sx={{
            position: 'relative',
            p: 4,
            pt: 2,
            pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
          }}
        >
          {name}
          <ImageMarked className="MuiImageMarked-root" />
        </Typography>
      </Image>
    </StyledButton>
    <StyledIconButton
      color="primary"
      aria-label="See website"
      aria-controls={open ? 'split-button-menu' : undefined}
      aria-expanded={open ? 'true' : undefined}
      aria-haspopup="menu"
      onClick={handleToggle}
      ref={anchorRef}
      opened={open}
    >
      <MoreVertIcon />
    </StyledIconButton>
    <Popper
      sx={{
        zIndex: 1,
      }}
      open={open}
      anchorEl={anchorRef.current}
      role={undefined}
      transition
      disablePortal
      placement="bottom-start"
    >
      {({ TransitionProps }) => (
        <Grow
          {...TransitionProps}
        >
          <Paper>
            <ClickAwayListener onClickAway={handleClose}>
              <StyledMenuList id="split-button-menu" autoFocusItem>
                <StyledMenuItem
                  onClick={() => handleMenuItemClick(website)}
                >
                  Visit website
                </StyledMenuItem>
              </StyledMenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  </StyledBox>
}

const StyledMenuList = styled(MenuList)(({ theme }) => ({
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.primary.main,
  marginTop: '-20px',
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  color: theme.palette.secondary.contrastText,
  '&:hover': {
    color: theme.palette.common.white,
  },
}));

const StyledIconButton = styled(IconButton)<{
  opened: boolean,
}>(({ theme, opened }) => ({
  color: theme.palette.common.white,
  backgroundColor: theme.palette.primary.main,
  width: '40px',
  height: '40px',
  position: 'absolute',
  zIndex: 2,
  opacity: opened ? 0 : 1,
}));

const StyledBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
});

const StyledButton = styled(Button)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});
