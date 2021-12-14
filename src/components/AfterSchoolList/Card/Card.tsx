import React from 'react';
import { FC } from 'react';
import * as S from './styles'

interface Props {
  id: number,
  location: string,
  asName: string
  userName: string | number
}

const Card: FC<Props> = ({id, location, asName, userName}) => {
  return (
    <>
        <S.AfterSchoolCardWrapper>
            <S.AfterSchoolName>{asName}</S.AfterSchoolName>
            <S.AfterSchoolDes>
                <S.AfterSchoolInfo>{location}</S.AfterSchoolInfo>
                <S.Line/>
                <S.AfterSchoolInfo>{userName}</S.AfterSchoolInfo>
            </S.AfterSchoolDes>
        </S.AfterSchoolCardWrapper>
    </>
  );
}

export default Card;