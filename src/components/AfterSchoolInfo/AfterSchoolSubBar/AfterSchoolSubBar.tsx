import React from 'react';
import { Search } from '../../../assets';
import * as S from './styles'

const AfterSchoolSubBar = () => {
  return (
    <>
        <S.AfterSchoolSubBarWrapper>
            <S.ASInfoLeft>
                <div>총원 : 18명</div>
                <div>담당 : 정창용</div>
            </S.ASInfoLeft>
            <S.ASInfoRight>
              <S.StudentSearch>
                  <input placeholder="학번 또는 이름"/>
                  <button><img src={Search} alt='검색'/></button>
              </S.StudentSearch>
              <S.ASButton>수정</S.ASButton>
              <S.ASButton>삭제</S.ASButton>
            </S.ASInfoRight>
        </S.AfterSchoolSubBarWrapper>
    </>
  );
}

export default AfterSchoolSubBar;