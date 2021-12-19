import React from 'react';
import { FC } from 'react';
import { Crown } from '../../../../assets';
import * as S from './styles'

interface Props {
    index: number,
    name: string,
    id: number,
    gcn: string
}

const AfterSchoolPerson: FC<Props> = ({index, name, id, gcn}) => {
  
  return (
    <>
        <S.AfterSchoolPersonWrapper>
            {
              index === 0 &&
              <img src={Crown} alt="동아리장" />
            }
            <div>{gcn} {name}</div>
        </S.AfterSchoolPersonWrapper>
    </>
  );
}

export default AfterSchoolPerson;