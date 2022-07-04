import React from 'react'
import { PickLogo } from '../../../assets'
import * as S from './styles'

const Header = () => {
  return (
    <>
      <S.HeaderWrapper>
        <img src={PickLogo} alt="로고" />
        <div>For Admin</div>
      </S.HeaderWrapper>
    </>
  )
}

export default Header
