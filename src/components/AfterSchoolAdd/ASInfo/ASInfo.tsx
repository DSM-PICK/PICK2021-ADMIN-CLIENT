import React from 'react';
import { Search } from '../../../assets';
import * as S from './styles'

const ASInfo = () => {
  return (
    <>
        <S.Wrapper>
          <S.Left>
            <S.PeopleCount>총원 0명</S.PeopleCount>
            <input placeholder="담당선생님"/>
          </S.Left>
          <S.Right>
            <input placeholder="학번 또는 이름"/>
            <img src={Search} alt="검색"/>
          </S.Right>
        </S.Wrapper>
    </>
  );
}

export default ASInfo;