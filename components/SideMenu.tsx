import React, {useEffect} from 'react'
import styled from 'styled-components'
import Link from "next/link";
import BoxIcon from '../public/statics/svg/iconmonstr-archive-box-thin.svg';
import CalendarIcon from '../public/statics/svg/iconmonstr-calendar-thin.svg';
import ArrowRightIcon from '../public/statics/svg/iconmonstr-arrow-right-thin.svg';
import TagIcon from '../public/statics/svg/iconmonstr-tags-thin.svg';
import { useRecoilState } from 'recoil';
import {currentMenuState} from '../store/states';

const SideMenu: React.FC = () => {
    const [currentMenu, setCurrentMenu] = useRecoilState(currentMenuState);
  return (
    <>
      <Container>
        <MenuSelector>
            <Link href="/manage">
                <MenuElement className={currentMenu === "manage" ? "selected" : ""} onClick={() => setCurrentMenu("manage")}>
                    <BoxIcon fill="#4D96FF"/>
                    <ElementContent>
                        <span>관리함</span>
                    </ElementContent>
                </MenuElement>
            </Link>
            <Link href="/today">
                <MenuElement className={currentMenu === "today" ? "selected" : ""} onClick={() => setCurrentMenu("today")}>
                    <CalendarIcon fill="#6BCB77"/>
                    <ElementContent>
                        <span>오늘</span>
                    </ElementContent>
                </MenuElement>       
            </Link>
            <Link href="/next">
                <MenuElement className={currentMenu === "next" ? "selected" : ""} onClick={() => setCurrentMenu("next")}>
                    <ArrowRightIcon fill="#9900F0"/>
                    <ElementContent>
                        <span>다음</span>
                    </ElementContent>
                </MenuElement>      
            </Link>
            <Link href="/filter">
                <MenuElement className={currentMenu === "filter" ? "selected" : ""} onClick={() => setCurrentMenu("filter")}>
                    <TagIcon fill="#FF8C32"/>
                    <ElementContent>
                        <span>필터 {"&"} 라벨</span>
                    </ElementContent>
                </MenuElement>    
            </Link>
        </MenuSelector>
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
`;

const MenuSelector = styled.div`
    .selected{
        background-color: #f1f1f1;
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