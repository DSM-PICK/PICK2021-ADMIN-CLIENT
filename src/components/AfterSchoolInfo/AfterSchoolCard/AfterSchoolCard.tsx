import React, { FC } from 'react';
import { useState } from 'react';
import { Crown } from '../../../assets';
import AfterSchoolPerson from './AfterSchoolPerson/AfterSchoolPerson';
import PersonSet from './PersonSet/PersonSet';
import * as S from './styles'

interface Props{
  index: number
}

const AfterSchoolCard: FC<Props> = ({index}) => {
  const [ click, setClick] = useState<boolean>(false)

  return (
    <>
        <S.AfterSchoolCard>
          {
            click === true ?
            <AfterSchoolPerson index={index}/>
            : <PersonSet index={index} />
          }
            
        </S.AfterSchoolCard>
    </>
  );
}

export default AfterSchoolCard;