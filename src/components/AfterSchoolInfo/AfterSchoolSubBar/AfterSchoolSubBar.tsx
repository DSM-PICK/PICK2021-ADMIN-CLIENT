import React from 'react'
import { useHistory } from 'react-router-dom'
import { useRecoilState, useRecoilValue } from 'recoil'
import TeacherBox from '../../common/TeacherBox/TeacherBox'
import activityApi from '../../../libs/api/activity/activityApi'
import majorApi from '../../../libs/api/major/majorApi'
import { asInfoState } from '../../../recoil/asInfoState'
import { asModifyState } from '../../../recoil/asModifyState'
import * as S from './styles'

const AfterSchoolSubBar = () => {
  const asInfoData = useRecoilValue(asInfoState)
  const [asModifyData, setAsModifyData] = useRecoilState(asModifyState)
  const history = useHistory()

  const onASDelete = () => {
    if (asInfoData.type === 'major') {
      majorApi.deleteMajor(asInfoData.id).then(() => {
        history.push(`/as-list/${asInfoData.type}`)
        alert('동아리가 삭제되었습니다.')
      })
    } else {
      activityApi.deleteActivity(asInfoData.id)
    }
  }

  const onASModity = () => {
    if (asModifyData.isModity) {
      if (asInfoData.major_name !== asModifyData.title) {
        majorApi
          .patchMajorName(asModifyData.asId, asModifyData.title)
          .then(() => {})
      }
      if (asModifyData.location_id !== -1) {
        majorApi
          .patchMajorLocation(
            asModifyData.asId,
            Number(asModifyData.location_id)
          )
          .then(() => {})
      }
      if (asModifyData.teacher_id !== '') {
      }
      setAsModifyData({
        ...asModifyData,
        isModity: false,
      })
      alert('수정이 완료되었습니다.')
    } else {
      console.log(asInfoData.id)
      setAsModifyData({
        ...asModifyData,
        asId: asInfoData.id,
        title: asInfoData.major_name,
        isModity: true,
      })
    }
  }

  const onTeacherChange = (teacherId: string) => {
    setAsModifyData({
      ...asModifyData,
      teacher_id: teacherId,
    })
  }

  return (
    <>
      <S.AfterSchoolSubBarWrapper>
        <S.ASInfoLeft>
          {asInfoData.members && (
            <div>총원 : {asInfoData.members.length}명</div>
          )}
          <div>
            담당 :
            {!asModifyData.isModity ? (
              asInfoData.teacher_name
            ) : (
              <TeacherBox
                setTeacherId={onTeacherChange}
                teacher_name={asInfoData.teacher_name}
              />
            )}
          </div>
        </S.ASInfoLeft>
        <S.ASInfoRight>
          <S.ASButton onClick={onASModity}>
            {!asModifyData.isModity ? '수정' : '완료'}
          </S.ASButton>
          <S.ASButton onClick={onASDelete}>삭제</S.ASButton>
        </S.ASInfoRight>
      </S.AfterSchoolSubBarWrapper>
    </>
  )
}

export default AfterSchoolSubBar
