import React from 'react';
import * as S from './styles'

const ClubCard = () => {
  return (
    <>
        <S.ClubCardWrapper>
            <S.ClubName>SEMICOLON;</S.ClubName>
            <S.ClubDes>
                <S.ClubInfo>소프트웨어개발 2실</S.ClubInfo>
                <S.Line/>
                <S.ClubInfo>한준호</S.ClubInfo>
            </S.ClubDes>
        </S.ClubCardWrapper>
    </>
  );
}

export default ClubCard;