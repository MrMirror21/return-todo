import React, {useState, useEffect} from "react";
import styled from "styled-components";
import BurgerMenuIcon from '../public/statics/svg/iconmonstr-menu-thin.svg';
import HomeIcon from '../public/statics/svg/iconmonstr-home-thin.svg';
import PlusIcon from '../public/statics/svg/iconmonstr-plus-thin.svg';
import SearchBar from "./SearchBar";
import Link from "next/link";
import { useRecoilState, useSetRecoilState } from "recoil";
import { currentMenuState, isMenuOpenState, isModalOpenState } from "../store/states";
import AddTaskModal from "./AddTaskModal";

const Header: React.FC = () => {
  const [isUserTyping, setIsUserTyping] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useRecoilState(isMenuOpenState);
  const [isModalOpen, setIsModalOpen] = useRecoilState(isModalOpenState);
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
            <PlusIcon fill="#ffffff" className="Icon" onClick={() => setIsModalOpen(true)}/>
            <ProfileImg />
        </div>
        <AddTaskModal isOpen={isModalOpen} setIsOpen={setIsModalOpen}/>
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
    .right {
        display: flex;
        justify-content: space-evenly;
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
            cursor: pointer;
        }
        input {
            width: 390px;
            transition: width 0.5s;
        }
    }
    .Icon {
        cursor: pointer;
    }
    .hidden {
        display: none;
    }
`;

const ProfileImg = styled.div`
    width: 24px;
    height: 24px;
    border-radius: 100px;
    background: #8b8b8b;
`;