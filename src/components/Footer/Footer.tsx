import { styled } from '@mui/material';

export default function Footer() {
  return <StyledFooter role="contentinfo">
      Made with 🌮 at elao - © 2024
  </StyledFooter>;
}

const StyledFooter = styled('footer')(({ theme }) => theme.unstable_sx({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: theme.palette.common.white,
}));
