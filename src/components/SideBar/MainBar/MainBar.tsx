import React from 'react';
import { Link } from 'react-router-dom';
import { Club, ClubOrange, Home, HomeOrange, LogOut, Upload, UploadOrange } from '../../../assets';
import * as S from './styles'

const MainBar = () => {
  return (
    <>
        <S.SideBarIconBox>
            <Link to='/'>
                <img src={Home} alt="홈"/> 
                {/* <img src={HomeOrange} alt="홈"/> */}
                <S.SideBarText>홈</S.SideBarText>
            </Link>
        </S.SideBarIconBox>

        <S.SideBarIconBox>
            <Link to="/clublist">
                <img src={Club} alt="동아리"/>
                {/* <img src={ClubOrange} alt="동아리"/> */}
                <S.SideBarText>동아리</S.SideBarText>
            </Link>
        </S.SideBarIconBox>

        <S.SideBarIconBox>
            <Link to="/file-upload">
                <img src={Upload} alt="업로드"/>
                {/* <img src={UploadOrange} alt="업로드"/> */}
                <S.SideBarText>데이터</S.SideBarText>
            </Link>
        </S.SideBarIconBox>

        <S.SideBarIconBoxLast>
            <img src={LogOut} alt="로그아웃"/>
            <S.SideBarText>로그아웃</S.SideBarText>
        </S.SideBarIconBoxLast>
    </>
  );
}

export default MainBar;