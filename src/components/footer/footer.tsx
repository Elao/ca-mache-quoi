import { styled } from '@mui/material'

export default function Footer() {
  return <Wrapper role="contentinfo">
      Made with 🌮 at elao - © 2024
  </Wrapper>;
}

const Wrapper = styled('footer')(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: `${theme.spacing(1)} 0`,
  color: theme.palette.text.primary,
  textAlign: 'center',
  borderTop: 'solid 1px rgba(146, 148, 175, .2)',
}));