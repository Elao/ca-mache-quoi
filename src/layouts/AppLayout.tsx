import { PropsWithChildren } from 'react';
import Header from '@app/components/Header/Header.tsx';
import Footer from '@app/components/Footer/Footer.tsx';

export default function AppLayout({ children }: PropsWithChildren) {
  return <>
    <Header />
    <main>
      {children}
    </main>
    <Footer />
  </>;
}

