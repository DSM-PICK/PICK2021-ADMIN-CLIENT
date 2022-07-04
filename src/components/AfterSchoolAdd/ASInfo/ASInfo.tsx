import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import BaseBox from '../../common/Base/BaseBox/BaseBox'
import { Loading } from '../../common/Loading/styles'
import TeacherBox from '../../common/TeacherBox/TeacherBox'
import activityApi from '../../../libs/api/activity/activityApi'
import majorApi from '../../../libs/api/major/majorApi'
import {
  asAddTypeState,
  asInitState,
  studentAddListState,
} from '../../../recoil/asAddState'
import * as S from './styles'

const ASInfo = () => {
  const [asInitData, setAsInitData] = useRecoilState(asInitState)
  const [studentAddList, setStudentAddList] =
    useRecoilState(studentAddListState)
  const [type, setType] = useRecoilState(asAddTypeState)
  const [loading, setLoading] = useState<boolean>(false)
  const history = useHistory()

  console.log(studentAddList)

  const onInitData = () => {
    setAsInitData({
      name: '',
      location_id: -1,
      teacher_id: '',
      head_name: '',
      head_gcn: '',
      day: '',
    })
    setStudentAddList([])
  }

  const onTeacherId = (teacherId: string) => {
    setAsInitData({
      ...asInitData,
      teacher_id: teacherId,
    })
  }

  const handleActivityDay = (e: any) => {
    setAsInitData({
      ...asInitData,
      day: e.target.value,
    })
  }

  const ActivityDay = () => {
    return (
      <BaseBox handleSelect={handleActivityDay} option={asInitData.day}>
        <option value="default" selected hidden>
          요일
        </option>
        <option value="MON">월</option>
        <option value="TUE">화</option>
        <option value="WED">수</option>
        <option value="THU">목</option>
        <option value="FRI">금</option>
      </BaseBox>
    )
  }

  const handleASType = (e: any) => {
    setType(e.target.value)
  }

  const ASTypeSelect = () => {
    return (
      <BaseBox handleSelect={handleASType} option={type}>
        <option value="major">동아리</option>
        <option value="activity">방과후</option>
      </BaseBox>
    )
  }

  const onASCreate = (type: string, data: any) => {
    if (type === 'major') {
      if (!data.name || data.location_id === -1 || !data.teacher_id) {
        return alert('빈칸을 다 채워주세요.')
      }
      setLoading(true)
      majorApi
        .postMajor(
          data.name,
          studentAddList[0].name,
          studentAddList[0].gcn,
          Number(data.location_id),
          data.teacher_id
        )
        .then((res) => {
          studentAddList.map((i: any, index: number) => {
            majorApi
              .postMajorMember(res.data.major_id, i.student_id)
              .then(() => {
                if (index === studentAddList.length - 1) {
                  alert('성공적으로 동아리를 추가했습니다.')
                  setLoading(false)
                  onInitData()
                  history.push(`/as-info/major/${res.data.major_id}`)
                }
              })
          })
        })
    } else if (type === 'activity') {
      if (
        !data.name ||
        !data.teacher_id ||
        data.location_id === -1 ||
        !data.day
      ) {
        return alert('빈칸을 다 채워주세요')
      }
      setLoading(true)
      activityApi
        .postActivity(data.name, data.teacher_id, data.location_id, data.day)
        .then((res) => {
          studentAddList.map((i: any, index: number) => {
            activityApi
              .postActivityStudent(res.data.after_school_id, i.studnet_id)
              .then(() => {
                if (index === studentAddList.length - 1) {
                  alert('성공적으로 방과후를 추가했습니다.')
                  setLoading(false)
                  onInitData()
                }
              })
          })
        })
    }
  }

  return (
    <>
      <S.Wrapper>
        <S.Left>
          <S.PeopleCount>총원 {studentAddList.length}명</S.PeopleCount>
          <TeacherBox setTeacherId={onTeacherId} />
        </S.Left>
        {type === 'activity' && <ActivityDay />}
        <S.Right>
          <ASTypeSelect />
          <S.ASAddButton onClick={() => onASCreate(type, asInitData)}>
            생성하기
          </S.ASAddButton>
        </S.Right>
      </S.Wrapper>
      {loading && <Loading />}
    </>
  )
}

export default ASInfo
