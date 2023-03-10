import "@/styles/globals.css";
import { useState } from "react";
import type { AppProps } from "next/app";
import Navbar from "@/components/header/Navbar";
import Footer from "@/components/footer/Footer";
import { SessionProvider, getProviders } from "next-auth/react"
import SideMenu from "@/components/side-menu/SideMenu";
import Newsletter from "@/components/newsletter/Newsletter";

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  const [showSideMenu, setShowSideMenu] = useState(false);
  return (
    <SessionProvider session={session}>
      <SideMenu showSideMenu={showSideMenu} setShowSideMenu={setShowSideMenu} />
      <Navbar showSideMenu={showSideMenu} setShowSideMenu={setShowSideMenu} />
      <Component {...pageProps} />
      <Newsletter />
      <Footer />
    </SessionProvider>
  );
};
export default App;
