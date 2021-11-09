import React, { FC } from 'react';
import { ReactNode } from 'react';
import * as S from './styles'

interface Props {
  children: ReactNode
}

const BasicModal: FC<Props> = ({children}) => {
  return (
    <>
        <S.BasicModalWrapper>
            {children}
        </S.BasicModalWrapper>
    </>
  );
}

export default BasicModal;