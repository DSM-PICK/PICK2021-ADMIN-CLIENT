import React from 'react';
import ClubMove from './ClubMove/ClubMove';
import * as S from './styles'

const BasicModal = () => {
  return (
    <>
        <S.BasicModalWrapper>
            <ClubMove />
        </S.BasicModalWrapper>
    </>
  );
}

export default BasicModal;