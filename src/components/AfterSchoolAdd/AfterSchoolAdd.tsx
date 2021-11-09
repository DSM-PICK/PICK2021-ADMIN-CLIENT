import React from 'react';
import ASInfo from './ASInfo/ASInfo';
import Students from './Students/Students';
import Title from './Title/Title';
import * as S from './styles'

const AfterSchoolAdd = () => {
  return (
    <>
      <S.Wrapper>
        <Title />
        <ASInfo />
        <Students />
      </S.Wrapper>
    </>
  );
}

export default AfterSchoolAdd;