import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import Link from "next/link";
import BoxIcon from '../public/statics/svg/iconmonstr-archive-box-thin.svg';
import CalendarIcon from '../public/statics/svg/iconmonstr-calendar-thin.svg';
import ArrowRightIcon from '../public/statics/svg/iconmonstr-arrow-right-thin.svg';
import TagIcon from '../public/statics/svg/iconmonstr-tags-thin.svg';
import { useRecoilState, useRecoilValue } from 'recoil';
import {currentMenuState, isMenuOpenState} from '../store/states';
import Favorites from './Favorites';
import MyProjects from './MyProjects';
import AddProjectModal from './AddProjectModal';

const SideMenu: React.FC = () => {
    const [currentMenu, setCurrentMenu] = useRecoilState(currentMenuState);
    const isMenuOpen = useRecoilValue(isMenuOpenState);
    const [isAddingProject, setIsAddingProject] = useState(false);
  return (
    <>
      <Container className={isMenuOpen ? "open" : "closed"}>
        <MenuSelector>
            <Link href="/today">
                <MenuElement className={currentMenu === "today" ? "selected menu" : "menu"} onClick={() => setCurrentMenu("today")}>
                    <CalendarIcon fill="#6BCB77"/>
                    <ElementContent>
                        <span>오늘</span>
                    </ElementContent>
                </MenuElement>       
            </Link>
            <Link href="/next">
                <MenuElement className={currentMenu === "next" ? "selected menu" : "menu"} onClick={() => setCurrentMenu("next")}>
                    <ArrowRightIcon fill="#9900F0"/>
                    <ElementContent>
                        <span>다음</span>
                    </ElementContent>
                </MenuElement>      
            </Link>
            <Link href="/filter">
                <MenuElement className={currentMenu === "filter" ? "selected menu" : "menu"} onClick={() => setCurrentMenu("filter")}>
                    <TagIcon fill="#FF8C32"/>
                    <ElementContent>
                        <span>필터 {"&"} 라벨</span>
                    </ElementContent>
                </MenuElement>    
            </Link>
        </MenuSelector>
        <Favorites />
        <MyProjects setIsModalOpen={setIsAddingProject}/>
        <AddProjectModal isOpen={isAddingProject} setIsOpen={setIsAddingProject}/>
      </Container>  
    </>
  )
}

export default SideMenu

const Container = styled.div`
    width: 305px;
    height: calc(100vh - 44px);
    background: #fafafa;
    padding-top: 30px;
    padding-left: 35px;
    position: fixed;
    left: 0;
    transition: left .25s cubic-bezier(.4,0,.2,1);
    overflow-x: hidden;
    :hover{
        .add-project{
            visibility: visible;
        }
    }
    .hidden{
        display: none;
    }
`;

const MenuSelector = styled.div`
    .selected{
        background-color: #f1f1f1;
    }
    .menu {
        cursor: pointer;
    }
`;
const MenuElement = styled.div`
    width: 265px;
    height: 44px;
    padding: 5px 16px 5px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    :hover {
        background-color: #f1f1f1;
        transition: 0.3s;
    }
`;

const ElementContent = styled.div`
    width: 201px;
    height: 24px;
    display: flex;
    align-items: center;
`;