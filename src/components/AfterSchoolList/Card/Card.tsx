import React from 'react';
import { FC } from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './styles'

interface Props {
  id: number,
  location: string,
  asName: string
  userName: string | number
  type: string
}

const Card: FC<Props> = ({id, location, asName, userName, type}) => {
  const history = useHistory()

  const onASInfo = () => {
    history.push(`/as-info/${type}/${id}`)
  }

  return (
    <>
        <S.AfterSchoolCardWrapper onClick={onASInfo}>
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