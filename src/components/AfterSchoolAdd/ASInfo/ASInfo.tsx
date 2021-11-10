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
          <S.ASAddButton>생성하기</S.ASAddButton>
        </S.Wrapper>
    </>
  );
}

export default ASInfo;