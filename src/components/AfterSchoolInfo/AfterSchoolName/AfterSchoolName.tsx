import React from 'react';
import { useRecoilValue } from 'recoil';
import { asInfoState } from '../../../recoil/asInfoState';
import * as S from './styles'

const AfterSchoolName = () => {
  const asInfoData = useRecoilValue(asInfoState)
  return (
    <>
        <S.AfterSchoolNameWrapper>
            <S.AfterSchoolTitle>
                {asInfoData.major_name}
            </S.AfterSchoolTitle>
            <S.AfterSchoolPlace>
                {asInfoData.location_name}
            </S.AfterSchoolPlace>
        </S.AfterSchoolNameWrapper>
    </>
  );
}

export default AfterSchoolName;