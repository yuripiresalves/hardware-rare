import { Header } from './Header';
import { Footer } from './Footer';

export const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <main className="container mx-auto p-4 pb-10 min-h-[calc(100vh-5rem-4rem)]">
        {children}
      </main>
      <Footer />
    </>
  );
};
