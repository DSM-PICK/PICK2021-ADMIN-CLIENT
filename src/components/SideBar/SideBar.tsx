import React from 'react';
import * as S from './styles'
import { FC } from 'react';
import { RouteComponentProps, useLocation } from 'react-router-dom';
import MainBar from './MainBar/MainBar';
import EditBar from './EditBar/EditBar';

const SideBar = () => {
  const location = useLocation();

  return (
    <>
      {
        location.pathname !== '/login' ?
        <S.SideBarWrapper >
          {
            location.pathname === '/clubinfo' ?
            <EditBar />
            : <MainBar url={location.pathname}/>
          }
        </S.SideBarWrapper>
        : <div></div>
      }
    </>
  );
}

export default SideBar;