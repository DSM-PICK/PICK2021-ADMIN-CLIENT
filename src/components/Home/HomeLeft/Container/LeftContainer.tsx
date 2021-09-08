import React from 'react';
import Card from './Card/Card';
import * as S from './styles'

const LeftContainer = () => {
  return (
    <>
        <S.ContainerWrapper>
            <div>동아리</div>
            <div>종류</div>
            <div>날짜</div>
            <div>작성자</div>
        </S.ContainerWrapper>
        <Card />
        <Card />
    </>
  );
}

export default LeftContainer;