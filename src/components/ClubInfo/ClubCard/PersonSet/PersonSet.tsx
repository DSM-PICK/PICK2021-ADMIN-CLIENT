import React from 'react';
import { FC } from 'react';
import { Crown, Delete, StudentChange } from '../../../../assets';
import { color } from '../../../../style/color';
import * as S from './styles'

interface Props {
    index: number
}

const PersonSet: FC<Props> = ({index}) => {
  return (
    <>
        <S.PersonSetWrapper>
        {
            index === 0 &&
            <S.Card color={color.orange}>
                <img src={Crown} alt="동아리장" />
                <div>부장</div>
            </S.Card>
        }
        <S.Card color={'#000000'}>
            <img src={StudentChange} alt="이동" />
            <div>이동</div>
        </S.Card>
        
        <S.Card color={color.red}>
            <img src={Delete} alt="삭제" />
            <div>삭제</div>
        </S.Card>
        </S.PersonSetWrapper>
    </>
  );
}

export default PersonSet;