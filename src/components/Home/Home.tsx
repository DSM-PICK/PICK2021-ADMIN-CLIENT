import React from 'react';
import HomeLeft from './HomeLeft/HomeLeft';
import HomeRight from './HomeRight/HomeRight';
import * as S from './styles';

const Home = () => {
  return (
    <>
        <S.HomeWrapper>
            <HomeLeft />
            <S.Line />
            <HomeRight />
        </S.HomeWrapper>
    </>
  );
}

export default Home;