import React from 'react';
import { FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import LoginLeft from './LoginLeft/LoginLeft';
import LoginRight from './LoginRight/LoginRight';
import * as S from './styles'

const Login: FC<RouteComponentProps> = ({match}) => {
  console.log(match)

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