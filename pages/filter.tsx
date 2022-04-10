import React from 'react'
import { NextPage } from 'next'
import { useRecoilValue } from 'recoil';
import styled from 'styled-components'
import { isMenuOpenState } from '../store/states';

const filter: NextPage= () => {
  const isMenuOpen = useRecoilValue(isMenuOpenState);
  return (
      <>
    <Container className={isMenuOpen ? "menu-shown" : "menu-hide"}>
        <div>filterthisisfileter</div>
    </Container>
      </>

  )
}

export default filter

const Container = styled.div`
    width: 100vw;
    display: flex;
    height: calc(100vh - 44px);
    background: #8b8b8b;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
`;