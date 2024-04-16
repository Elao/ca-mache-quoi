import { styled } from '@mui/material'

export default function Header() {
  return <Wrapper>
    <Title>
      <span>Ça mâche</span>
      <span>quoi ?</span>
    </Title>
  </Wrapper>;
}

const Wrapper = styled('header')(() => ({
  padding: '100px 0 80px',
  width: '60%',
}));

const Title = styled('h1')(({ theme }) => ({
  margin: `0 0 0 ${theme.spacing(1)}`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  fontSize: '3.25rem',
  lineHeight: '1.1',
  color: theme.palette.text.primary,

  'span': {
    position: 'relative',
    zIndex: '1',

    '&::before': {
      height: '2rem',
      width: '100%',
      position: 'absolute',
      bottom: '.2rem',
      left: '.5rem',
      content: '""',
      zIndex: '-1',
      background: theme.palette.background.paper,
    },

    '&:last-of-type': {
      marginLeft: '13rem',
    },
  },
}));
