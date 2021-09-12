import React from 'react';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Club, ClubOrange, Home, HomeOrange, LogOut, Upload, UploadOrange } from '../../../assets';
import * as S from './styles'
interface Props{
    url: string
}

const MainBar:FC<Props> = ({url}) => {
    console.log(url)

  return (
    <>
        <S.SideBarIconBox>
            <Link to='/'>
                <img src={url === '/' ? HomeOrange : Home} alt="홈"/> 
                <S.SideBarText>홈</S.SideBarText>
            </Link>
        </S.SideBarIconBox>

        <S.SideBarIconBox>
            <Link to="/clublist">
                <img src={url === '/clublist' ? ClubOrange : Club} alt="동아리"/>
                {/* <img src={ClubOrange} alt="동아리"/> */}
                <S.SideBarText>동아리</S.SideBarText>
            </Link>
        </S.SideBarIconBox>

        <S.SideBarIconBox>
            <Link to="/file-upload">
                <img src={url === '/file-upload' ? UploadOrange : Upload} alt="업로드"/>
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