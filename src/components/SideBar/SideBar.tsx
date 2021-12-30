import React from 'react';
import * as S from './styles'
import {  useLocation } from 'react-router-dom';
import MainBar from './MainBar/MainBar';

const SideBar = () => {
  const location = useLocation();

  return (
    <>
      {
        location.pathname !== '/login' ?
        <S.SideBarWrapper >
          <MainBar url={location.pathname}/>
        </S.SideBarWrapper>
        : <div></div>
      }
    </>
  );
}

export default SideBar;