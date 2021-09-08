import React from 'react';
import RightContainer from './Container/RightContainer';
import * as S from './styles'

const HomeRight = () => {
  return (
    <>
        <S.HomeRightWrapper>
            <S.Title>학생 변동</S.Title>
            {/* <S.NoData>최근 변동사항이<br/>없습니다</S.NoData> */}
            <RightContainer/>
        </S.HomeRightWrapper>
    </>
  );
}

export default HomeRight;