import React, { useState } from 'react'
import styled from 'styled-components'
import { useRecoilValue } from 'recoil';
import { myProjectState } from '../store/states';
import ArrowDownIcon from '../public/statics/svg/iconmonstr-arrow-65.svg';

const Favorites: React.FC = () => {
    const projects = useRecoilValue(myProjectState);
    const favorites = projects.filter(project => project.favorite === true);
    const [isOpen, setIsOpen] = useState(true);
  return (
    <>
    <Container>
        <HeaderRow onClick={() => setIsOpen(!isOpen)}>
            <ArrowDownIcon className={isOpen ? "rotate Icon" : "Icon"} />
            <span>즐겨찾기</span>
        </HeaderRow>
        <FavoritesList className={isOpen ? "extended-list" : "hidden"}>
            {favorites.map(favorite => (
                <FavoriteRow>
                    <ColorContainer>
                        <TagColor color={favorite.color.code}/>
                    </ColorContainer>
                    <FavoriteText>{favorite.name}</FavoriteText>
                </FavoriteRow>
            ))}
        </FavoritesList>
    </Container>
    </>
  )
}

export default Favorites

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
height: 200px;
    margin-top: 50px;
    .hidden {
        height: auto;
        overflow: hidden;
        transition: all 0.3s ease-out;
        flex: 0;    
    }
    .extended-list {
        height: auto;
        overflow: hidden;
        transition: all 0.3s ease-out;
        flex: 1;
    }
`;
const HeaderRow = styled.div`
    width: 265px;
    height: 44px;
    padding: 5px 16px 5px 10px;
    display: flex;
    align-items: center;
    cursor: pointer;
    .Icon {

      transform: scale(0.7) rotate(-90deg);
      fill: #8b8b8b;
      transition: 0.5s;
      margin-right: 10px;
    }
    .rotate {
        transform: scale(0.7);
        transition: 0.5s;
    }
`;

const FavoritesList = styled.div`
    display: flex;
    flex-direction: column;
    width: 265px;
    transition: height 0.5s;
    height: auto;
`;

const FavoriteRow = styled.div`
    display: flex;
    width: 265px;
    height: 44px;
    padding: 5px 16px 5px 10px;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    :hover {
        background-color: #f1f1f1;
        transition: 0.3s;
    }
`;

const FavoriteText = styled.div`
    display: flex;
    align-items: center;
    line-height: 0px;
    width: 201px;
    height: 24px;
    font-size: 15px;
`;

const ColorContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
`;
const TagColor = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 100px;
    background-color: ${props => props.color};
`