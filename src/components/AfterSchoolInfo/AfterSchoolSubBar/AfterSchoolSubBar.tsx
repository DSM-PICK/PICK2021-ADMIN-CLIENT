import React from 'react';
import { useRecoilValue } from 'recoil';
import { Search } from '../../../assets';
import activityApi from '../../../libs/api/activity/activityApi';
import majorApi from '../../../libs/api/major/majorApi';
import { asInfoState } from '../../../recoil/asInfoState';
import * as S from './styles'

const AfterSchoolSubBar = () => {
  const asInfoData = useRecoilValue(asInfoState)

  const onASDelete = () => {
    if(asInfoData.type === 'major'){
      majorApi.deleteMajor(asInfoData.id)
    } else {
      activityApi.deleteActivity(asInfoData.id)
    }
  }

  return (
    <>
        <S.AfterSchoolSubBarWrapper>
            <S.ASInfoLeft>
                <div>총원 : {asInfoData.count}명</div>
                <div>담당 : {asInfoData.teacher_name}</div>
            </S.ASInfoLeft>
            <S.ASInfoRight>
              <S.StudentSearch>
                  <input placeholder="학번 또는 이름"/>
                  <button><img src={Search} alt='검색'/></button>
              </S.StudentSearch>
              <S.ASButton>수정</S.ASButton>
              <S.ASButton onClick={onASDelete}>삭제</S.ASButton>
            </S.ASInfoRight>
        </S.AfterSchoolSubBarWrapper>
    </>
  );
}

export default AfterSchoolSubBar;