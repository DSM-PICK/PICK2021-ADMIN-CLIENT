import React from 'react';
import { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { asMoveState } from '../../../recoil/asMoveState';
import * as S from './styles'

interface Props {
  location: string,
  asName: string
  userName: string | number
  type: string,
  asId: number
}

const Card: FC<Props> = ({asId, location, asName, userName, type}) => {
  const history = useHistory()
  const [asMoveData, setAsMoveData] = useRecoilState(asMoveState);

  const onASInfo = () => {
    if(!asMoveData.isChange) {
      history.push(`/as-info/${type}/${asId}`)
    } else {
      setAsMoveData({...asMoveData, afterAsId: asId, afterAsName: asName})
    }
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