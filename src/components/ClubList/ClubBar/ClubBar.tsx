import React from 'react';
import { ClubAdd, Search, Sorting } from '../../../assets';
import * as S from './styles'

const ClubBar = () => {
  return (
    <>
        <S.ClubBarWrapper>
            <S.ClubAdd>
                <img src={ClubAdd} alt="추가"/>
                <div>추가</div>
            </S.ClubAdd>
            <S.ClubSearch>
                <S.ClubInput placeholder="동아리명 또는 학생 이름"/>  
                <S.ClubButton>
                    <img src={Search} alt="검색" />
                </S.ClubButton>
            </S.ClubSearch>
            <S.ClubSort>
                <img src={Sorting} alt="정렬" />
                <div>A - Z</div>
            </S.ClubSort>
        </S.ClubBarWrapper>
    </>
  );
}

export default ClubBar;