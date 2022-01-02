import React from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import activityApi from '../../../libs/api/activity/activityApi';
import majorApi from '../../../libs/api/major/majorApi';
import { asInfoState } from '../../../recoil/asInfoState';
import * as S from './styles'

const AfterSchoolSubBar = () => {
  const asInfoData = useRecoilValue(asInfoState)
  const history = useHistory()

  const onASDelete = () => {
    if(asInfoData.type === 'major'){
      majorApi.deleteMajor(asInfoData.id)
      .then(() => {
        history.push(`/as-list/${asInfoData.type}`)
        alert('동아리가 삭제되었습니다.')
      })
    } else {
      activityApi.deleteActivity(asInfoData.id)
    }
  }

  return (
    <>
        <S.AfterSchoolSubBarWrapper>
            <S.ASInfoLeft>
              {
                asInfoData.members &&
                <div>총원 : {asInfoData.members.length}명</div>
              }
                <div>담당 : {asInfoData.teacher_name}</div>
            </S.ASInfoLeft>
            <S.ASInfoRight>
              <S.ASButton>수정</S.ASButton>
              <S.ASButton onClick={onASDelete}>삭제</S.ASButton>
            </S.ASInfoRight>
        </S.AfterSchoolSubBarWrapper>
    </>
  );
}

export default AfterSchoolSubBar;