import React, { FC } from 'react';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import AfterSchoolPerson from './AfterSchoolPerson/AfterSchoolPerson';
import PersonSet from './PersonSet/PersonSet';
import * as S from './styles'

interface Props{
  index: number,
  id: number,
  name: string,
  gcn: string,
  type: string,
  asId: number
}

const AfterSchoolCard: FC<Props> = (props) => {
  const [ click, setClick] = useState<boolean>(false)

  const onClick = () => {
    setClick(!click)
  }

  return (
    <>
        <S.AfterSchoolCard>
          <S.AfterBox onClick={onClick}/>
          {
            !click ?
            <AfterSchoolPerson {...props}/>
            : <PersonSet {...props}/>
          }
            
        </S.AfterSchoolCard>
    </>
  );
}

export default AfterSchoolCard;