import "../styles/globalStyles.ts";
import Header from "../components/Header";
import { AppProps } from "next/app";
import GlobalStyle from "../styles/globalStyles";
import SideMenu from "../components/SideMenu";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <RecoilRoot>
    <GlobalStyle />
      <Header />
      <SideMenu />
      <Component {...pageProps} />
    </RecoilRoot>
    </>
  );
}

export default MyApp;
