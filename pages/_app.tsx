import "../styles/globalStyles.ts";
import Header from "../components/Header";
import { AppProps } from "next/app";
import GlobalStyle from "../styles/globalStyles";
import SideMenu from "../components/SideMenu";
import { RecoilRoot } from "recoil";
import styled from "styled-components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <RecoilRoot>
    <GlobalStyle />
      <Header />
      <Main>
        <SideMenu />
        <Component {...pageProps} className="component"/>
      </Main>
    </RecoilRoot>
    </>
  );
}

export default MyApp;

const Main = styled.div`
  width: 100vw;
  display: flex;
  flex: 1;
  justify-content: space-between;
  .closed{
      left: -305px;
      transition: 0.5s;
  }
  .open{
    width: 305px;
    height: calc(100vh - 44px);
    background: #fafafa;
    padding-top: 30px;
    padding-left: 35px;
    left: 0;
    transition: left 0.5s cubic-bezier(.4,0,.2,1);
    overflow-x: hidden;
  }
  .component {
    display: flex;
    flex-grow: 1;
    transition: margin-left 0.5s cubic-bezier(.4,0,.2,1);
    justify-content: center;
  }
  .menu-shown {
    margin-left: 305px;
  }
  .menu-hide {
    margin: 0;
  }
`;