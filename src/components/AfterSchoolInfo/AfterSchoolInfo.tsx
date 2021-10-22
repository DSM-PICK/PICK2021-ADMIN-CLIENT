import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { BasicModal } from '../Container';
import AfterSchoolCard from './AfterSchoolCard/AfterSchoolCard';
import AfterSchoolName from './AfterSchoolName/AfterSchoolName';
import AfterSchoolSubBar from './AfterSchoolSubBar/AfterSchoolSubBar';
import * as S from './styles'

interface AfterSchoolProps {
  id: string
}

const AfterSchoolInfo:FC<RouteComponentProps<AfterSchoolProps>> = ({match}) => {
  return (
    <>
        <AfterSchoolName />
        <AfterSchoolSubBar />
        <hr />
        <S.CardWrapper>
          {
            Array(30).fill(-1).map((i,index) => {
              return (
                <AfterSchoolCard key={index} index={index}/>
              )
            })
          }
        </S.CardWrapper>
        <BasicModal />
    </>
  );
}

export default AfterSchoolInfo;