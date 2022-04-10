import React from 'react'
import styled from 'styled-components';
import SearchIcon from '../public/statics/svg/iconmonstr-search-thin.svg';

const SearchBar: React.FC = ({content, setContent, isTyping, setIsTyping}) => {
 
  return (
      <>
        <SearchBackground className={isTyping ? "extended" : "normal"}>
          <SearchIcon className={isTyping ? "extended Icon" : "normal Icon"} />
          <input type="text" value={content} onChange={setContent} onClick={() => setIsTyping(true)} onBlur={() => setIsTyping(false)} placeholder="검색"/>
        </SearchBackground>
      </>

  )
}

export default SearchBar

const SearchBackground = styled.div`
    display: flex;
    align-items: center;
    width: 198px;
    height: 31px;
    background-color: rgba( 255, 255, 255, 0.3 );
    z-index: 1;
    
    :hover {
        opacity: 1;
        background: #ffffff;
        color: black;
        .Icon {
            fill: black;
        }
        transition: 0.5s;
        input {
          ::placeholder {
            color: black;
            transition: 0.5s;
          }
          transition: 0.5s;
        }
    }
    .Icon {
        width: 40px;
        fill: #ffffff;
        opacity: 1;
        z-index: 2;
        padding-left: 10px;
        transition: 0.5s;
    }
`;
