import React from 'react';
import { FC } from 'react';
import * as S from './styles'

interface Props {
  children: React.ReactNode,
  option: string,
  handleSelect: (e: any) => void
}

const BaseBox: FC<Props> = ({children, option, handleSelect}) => {
  return (
    <>
      <S.TeacherBoxWrapper value={option} onChange={handleSelect}>
        {children}
      </S.TeacherBoxWrapper>
    </>
  );
}

export default BaseBox;