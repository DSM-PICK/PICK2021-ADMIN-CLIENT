import React, { FC } from 'react';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { asInfoState } from '../../../recoil/asInfoState';
import AfterSchoolPerson from './AfterSchoolPerson/AfterSchoolPerson';
import PersonSet from './PersonSet/PersonSet';
import * as S from './styles'

interface Props{
  index: number,
  id: number,
  name: string,
  gcn: string
}

const AfterSchoolCard: FC<Props> = ({index, name, id, gcn}) => {
  const [ click, setClick] = useState<boolean>(false)
  const asInfoData = useRecoilValue(asInfoState)

  const onClick = () => {
    setClick(!click)
  }

  return (
    <>
        <S.AfterSchoolCard>
          <S.AfterBox onClick={onClick}/>
          {
            !click ?
            <AfterSchoolPerson index={index} id={id} name={name} gcn={gcn}/>
            : <PersonSet index={index} id={id} asId={asInfoData.id}/>
          }
            
        </S.AfterSchoolCard>
    </>
  );
}

export default AfterSchoolCard;