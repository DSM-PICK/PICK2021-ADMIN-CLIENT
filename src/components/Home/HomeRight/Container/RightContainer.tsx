import React from 'react';
import Card from './Card/Card';
import * as S from './styles'

const RightContainer = () => {
  return (
    <>
        <S.ContainerWrapper>
            <div>이름</div>
            <div>변동사항</div>
            <div>날짜</div>
            <div>작성자</div>
        </S.ContainerWrapper>
        <Card />
        <Card />
    </>
  );
}

export default RightContainer;