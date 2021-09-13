import React, { FC } from 'react';
import { useState } from 'react';
import { Crown } from '../../../assets';
import ClubPerson from './ClubPerson/ClubPerson';
import PersonSet from './PersonSet/PersonSet';
import * as S from './styles'

interface Props{
  index: number
}

const ClubCard: FC<Props> = ({index}) => {
  const [ click, setClick] = useState<boolean>(false)

  return (
    <>
        <S.ClubCard>
          {
            click === true ?
            <ClubPerson index={index}/>
            : <PersonSet index={index} />
          }
            
        </S.ClubCard>
    </>
  );
}

export default ClubCard;