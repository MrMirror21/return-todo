import React, {useState, useEffect} from "react";
import styled from "styled-components";
import BurgerMenuIcon from '../public/statics/svg/iconmonstr-menu-thin.svg';
import HomeIcon from '../public/statics/svg/iconmonstr-home-thin.svg';
import SearchBar from "./SearchBar";
import Link from "next/link";
import { useRecoilState, useSetRecoilState } from "recoil";
import { currentMenuState, isMenuOpenState } from "../store/states";

const Header: React.FC = () => {
  const [isUserTyping, setIsUserTyping] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useRecoilState(isMenuOpenState);
  const [searchContent, setSearchContent] = useState("");
  const setCurrentMenu = useSetRecoilState(currentMenuState);
  const onType = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.currentTarget;
    setSearchContent(target.value);
  }
  useEffect (() => {
    const currentPage = window && window.location.pathname.substring(1,);
    setCurrentMenu(currentPage);
}, []);
  return (
    <>
    <Container>
        <div className={isUserTyping ? "toolbox left extended-bg": "toolbox left"}>
            <BurgerMenuIcon fill="#ffffff" className="Icon" onClick={() => setIsMenuOpen(!isMenuOpen)}/>
            <Link href="/today">
                <HomeIcon fill="#ffffff" className="Icon" onClick={() => setCurrentMenu("today")}/>
            </Link>
            <SearchBar content={searchContent} setContent={onType} isTyping={isUserTyping} setIsTyping={setIsUserTyping}/>
        </div>
        <div className="toolbox right">
            icon
            icon
            icon
            icon
            profile
        </div>
    </Container>
</>
  )
}

export default Header

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    height: 44px;
    width: 100vw;
    padding: 0px 42px;
    background: #7054ff;
    color: #ffffff;
    .toolbox {
        width: 300px;
        height: 44px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    input {
        width: 150px;
        transition: width 0.5s;
        ::placeholder{
            color: #ffffff;
        }
    }
    .extended-bg {
        width: 550px;
        transition: width 0.5s;
    }
    .extended {
        width: 450px;
        background: #ffffff;
        transition: width 0.5s;
        .Icon {
            fill: black;
            width: 40px;
            transition: width 0.5s;
        }
        input {
            width: 390px;
            transition: width 0.5s;
        }
    }
    .Icon {
        cursor: pointer;
    }
`;