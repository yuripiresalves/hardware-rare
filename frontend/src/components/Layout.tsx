import { Header } from './Header';
import { Footer } from './Footer';
import { useRouter } from 'next/router';

export const Layout = ({ children }: any) => {
  const router = useRouter()
  return (

    <>
      <Header isHome={router.pathname === "/"}/>
      <main className="container mx-auto p-4 pb-10 min-h-[calc(100vh-5rem-4rem)]">
        {children}
      </main>
      <Footer />
    </>
  );
};
