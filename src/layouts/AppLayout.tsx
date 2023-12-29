import { PropsWithChildren } from 'react';
import Header from '@app/components/Header/Header.tsx';
import Footer from '@app/components/Footer/Footer.tsx';
import { Container, styled } from '@mui/material';
import background from '@images/background.svg';

export default function AppLayout({ children }: PropsWithChildren) {
  return <StyledContainer>
    <Header />
    <main>
      {children}
    </main>
    <Footer />
  </StyledContainer>;
}


const StyledContainer = styled(Container)(({ theme }) => theme.unstable_sx({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  minWidth: '100vw',
  main: {
    flex: 1,
  },
  backgroundImage: `url(${background})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right bottom',
  backgroundSize: 'auto 100%',
  backgroundColor: theme.palette.secondary.main,
}))
