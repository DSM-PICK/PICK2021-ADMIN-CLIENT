import React from 'react';
import LoginLeft from './LoginLeft/LoginLeft';
import LoginRight from './LoginRight/LoginRight';
import * as S from './styles'

const Login = () => {
  return (
    <>
        <S.LoginWrapper>
            <LoginLeft />
            <LoginRight />
        </S.LoginWrapper>
    </>
  );
}

export default Login;