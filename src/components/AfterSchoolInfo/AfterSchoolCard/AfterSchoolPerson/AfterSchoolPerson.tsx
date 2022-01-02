import React from 'react';
import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { Crown } from '../../../../assets';
import { asInfoState } from '../../../../recoil/asInfoState';
import * as S from './styles'

interface Props {
    name: string,
    id: number,
    gcn: string,
    type: string
}

const AfterSchoolPerson: FC<Props> = ({name, id, gcn, type}) => {
  const { head_name } = useRecoilValue(asInfoState);
  
  return (
    <>
        <S.AfterSchoolPersonWrapper>
            {
              type === 'major' && name === head_name &&
              <img src={Crown} alt="동아리장" />
            }
            <div>{gcn} {name}</div>
        </S.AfterSchoolPersonWrapper>
    </>
  );

}

export default AfterSchoolPerson;