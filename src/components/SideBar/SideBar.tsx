import React from 'react';
import * as S from './styles'
import { FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import MainBar from './MainBar/MainBar';
import EditBar from './EditBar/EditBar';

const SideBar = () => {

  return (
    <>
      <S.SideBarWrapper >
        <MainBar />
        {/* <EditBar /> */}
      </S.SideBarWrapper>
    </>
  );
}

export default SideBar;