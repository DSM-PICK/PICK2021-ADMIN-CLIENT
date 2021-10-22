import React from 'react';
import * as S from './styles'

const Card = () => {
  return (
    <>
        <S.AfterSchoolCardWrapper>
            <S.AfterSchoolName>SEMICOLON;</S.AfterSchoolName>
            <S.AfterSchoolDes>
                <S.AfterSchoolInfo>소프트웨어개발 2실</S.AfterSchoolInfo>
                <S.Line/>
                <S.AfterSchoolInfo>한준호</S.AfterSchoolInfo>
            </S.AfterSchoolDes>
        </S.AfterSchoolCardWrapper>
    </>
  );
}

export default Card;