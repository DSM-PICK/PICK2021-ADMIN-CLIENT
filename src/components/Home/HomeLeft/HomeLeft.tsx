import React from 'react';
import LeftContainer from './Container/LeftContainer';
import * as S from './styles'

const HomeLeft = () => {
  return (
    <>
        <S.HomeLeftWrapper>
            <S.Title>동아리 변동</S.Title>
            {/* <S.NoData>최근 변동사항이<br/>없습니다</S.NoData> */}
            <LeftContainer />
        </S.HomeLeftWrapper>
    </>
  );
}

export default HomeLeft;