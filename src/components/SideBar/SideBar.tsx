import React from 'react';
import * as S from './styles'
import { FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import MainRouter from '../../router/MainRouter';

interface Props {
  match: RouteComponentProps
}

const SideBar = () => {

  return (
    <>
      <S.SideBarWrapper >
        <MainRouter />
      </S.SideBarWrapper>
    </>
  );
}

export default SideBar;