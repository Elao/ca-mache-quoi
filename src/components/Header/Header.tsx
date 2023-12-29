import { styled } from '@mui/material';

export default function Header() {

  return <StyledHeader>
    <h1>
      <span>Ça mâche</span>
      <span>quoi ?</span>
    </h1>
  </StyledHeader>;
}

const StyledHeader = styled('header')(({ theme }) => theme.unstable_sx({
  '& h1': {
    margin: '90px 0px 0px 130px',
    fontSize: '52px',

    '& span': {
      position: 'relative',
      zIndex: '1',

      '&:last-of-type': {
        top: '59px',
        right: '65px',
      },

      '&:before': {
        content: '""',
        position: 'absolute',
        top: '30px',
        left: '10px',
        width: '100%',
        height: '33px',
        background: theme.palette.secondary.light,
        zIndex: '-1',
      },
    },
  },
}));

