import { PropsWithChildren } from 'react'
import Header from '@app/components/header/header.tsx'
import Footer from '@app/components/footer/footer.tsx'
import { styled } from '@mui/material'
import background from '@images/background.svg'

export default function AppLayout({ children }: PropsWithChildren) {
  return <Container>
    <Header />
    <Main>
      {children}
    </Main>
    <Footer />
  </Container>;
}

const Container = styled('div')(({ theme }) => ({
  padding: `0 ${theme.spacing(4.5)}`,
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  height: '100vh',
  minWidth: '100vw',
  background: `${theme.palette.background.default} url(${background}) no-repeat right bottom`,
  overflow: 'auto',
}));

const Main = styled('main')(() => ({
  flex: '1',
}));
