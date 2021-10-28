import React from 'react';
import { FC } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Club, ClubOrange, Home, HomeOrange, LogOut, Upload, UploadOrange } from '../../../assets';
import * as S from './styles'
interface Props{
    url: string
}

const MainBar:FC<Props>= ({url}) => {
    const history = useHistory()
    const onLogOut = () => {
        history.push('/login')
    }

  return (
    <>
        <S.SideBarIconBox>
            <Link to="/as-list/major">
                <img src={url === '/as-list/major' ? ClubOrange : Club} alt="동아리"/>
                <S.SideBarText>동아리</S.SideBarText>
            </Link>
        </S.SideBarIconBox>

        <S.SideBarIconBox>
            <Link to="/as-list/activity">
                <img src={url === '/as-list/activity' ? ClubOrange : Club} alt="동아리"/>
                <S.SideBarText>방과후</S.SideBarText>
            </Link>
        </S.SideBarIconBox>

        <S.SideBarIconBox>
            <Link to="/file-upload">
                <img src={url === '/file-upload' ? UploadOrange : Upload} alt="업로드"/>
                <S.SideBarText>데이터</S.SideBarText>
            </Link>
        </S.SideBarIconBox>

        <S.SideBarIconBox>
            <Link to="/account">
                <img src={url === '/account' ? UploadOrange : Upload} alt="업로드"/>
                <S.SideBarText>계정관리</S.SideBarText>
            </Link>
        </S.SideBarIconBox>

        <S.SideBarIconBox onClick={onLogOut}>
            <img src={LogOut} alt="로그아웃"/>
            <S.SideBarText>로그아웃</S.SideBarText>
        </S.SideBarIconBox>
    </>
  );
}

export default MainBar;