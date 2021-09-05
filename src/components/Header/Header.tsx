import React from 'react';
import { PickLogo } from '../../assets';
import * as S from './styles';

const Header = () => {
  return (
    <>
        <S.HeaderWrapper >
            <img src={PickLogo} />
            <div>For Admin</div>
        </S.HeaderWrapper>
    </>
  );
}

export default Header;