import React from 'react';
import { Club, ClubOrange, Home, HomeOrange, LogOut, Upload, UploadOrange } from '../../../assets';
import * as S from './styles'

const MainBar = () => {
  return (
    <>
        <S.SideBarIconBox>
            <img src={Home} alt="홈"/> 
            {/* <img src={HomeOrange} alt="홈"/> */}
            <S.SideBarText>홈</S.SideBarText>
        </S.SideBarIconBox>

        <S.SideBarIconBox>
            <img src={Club} alt="동아리"/>
            {/* <img src={ClubOrange} alt="동아리"/> */}
            <S.SideBarText>동아리</S.SideBarText>
        </S.SideBarIconBox>

        <S.SideBarIconBox>
            <img src={Upload} alt="업로드"/>
            {/* <img src={UploadOrange} alt="업로드"/> */}
            <S.SideBarText>데이터</S.SideBarText>
        </S.SideBarIconBox>

        <S.SideBarIconBoxLast>
            <img src={LogOut} alt="로그아웃"/>
            <S.SideBarText>로그아웃</S.SideBarText>
        </S.SideBarIconBoxLast>
    </>
  );
}

export default MainBar;