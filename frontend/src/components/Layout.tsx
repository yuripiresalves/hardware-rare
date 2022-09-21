import { Header } from './Header';
// import Footer from './footer'

export const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4">{children}</main>
      {/* <Footer /> */}
    </>
  );
};
