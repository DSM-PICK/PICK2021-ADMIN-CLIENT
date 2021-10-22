import React from 'react';
import { ClubAdd, Search, Sorting } from '../../../assets';
import * as S from './styles'

const AfterSchoolBar = () => {
  return (
    <>
        <S.AfterSchoolBarWrapper>
            <S.AfterSchoolAdd>
                <img src={ClubAdd} alt="추가"/>
                <div>추가</div>
            </S.AfterSchoolAdd>
            <S.AfterSchoolSearch>
                <S.AfterSchoolInput placeholder="동아리명 또는 학생 이름"/>  
                <S.AfterSchoolButton>
                    <img src={Search} alt="검색" />
                </S.AfterSchoolButton>
            </S.AfterSchoolSearch>
            <S.AfterSchoolSort>
                <img src={Sorting} alt="정렬" />
                <div>A - Z</div>
            </S.AfterSchoolSort>
        </S.AfterSchoolBarWrapper>
    </>
  );
}

export default AfterSchoolBar;