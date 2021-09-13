import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import ClubCard from './ClubCard/ClubCard';
import ClubName from './ClubName/ClubName';
import ClubSubBar from './ClubSubBar/ClubSubBar';
import * as S from './styles'

interface ClubProps {
  clubid: string
}

const ClubInfo:FC<RouteComponentProps<ClubProps>> = ({match}) => {
  return (
    <>
        <ClubName />
        <ClubSubBar />
        <hr />
        <S.CardWrapper>
          {
            Array(30).fill(-1).map((i,index) => {
              return (
                <ClubCard key={index} index={index}/>
              )
            })
          }
        </S.CardWrapper>
    </>
  );
}

export default ClubInfo;