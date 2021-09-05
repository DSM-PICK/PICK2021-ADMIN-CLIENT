import React from 'react';
import * as S from './styles'
import { Club, Home, LogOut, Upload } from '../../assets';

const SideBar = () => {
  return (
    <>
      <S.SideBarWrapper >
        <S.SideBarIconBox>
          <img src={Home} alt="홈"/>
          <S.SideBarText>홈</S.SideBarText>
        </S.SideBarIconBox>

        <S.SideBarIconBox>
          <img src={Club} alt="동아리"/>
          <S.SideBarText>동아리</S.SideBarText>
        </S.SideBarIconBox>

        <S.SideBarIconBox>
          <img src={Upload} alt="업로드"/>
          <S.SideBarText>데이터</S.SideBarText>
        </S.SideBarIconBox>

        <S.SideBarIconBoxLast>
          <img src={LogOut} alt="로그아웃"/>
          <S.SideBarText>로그아웃</S.SideBarText>
        </S.SideBarIconBoxLast>
      </S.SideBarWrapper>
    </>
  );
}

export default SideBar;