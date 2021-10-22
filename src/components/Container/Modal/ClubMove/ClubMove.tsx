import React from 'react';
import { Arrow } from '../../../../assets';
import * as S from './styles'

const ClubMove = () => {
  return (
    <>
        <S.ClubMoveWrapper>
            <S.ClubMoveTitle>
                <div>현재</div>
                <div>변경</div>
            </S.ClubMoveTitle>
            <S.ClubDes>
                <div>SEMICOLON;</div>
                <img src={Arrow} alt="화살표" />
                <div>SEMICOLON;</div>
            </S.ClubDes>
        </S.ClubMoveWrapper>
    </>
  );
}

export default ClubMove;