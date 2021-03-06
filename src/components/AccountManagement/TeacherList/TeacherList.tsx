import React from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { accountState } from '../../../recoil/account'
import { teacherDataState, teacherState } from '../../../recoil/userDataState'
import * as S from './styles'

const TeacherList = () => {
  const [teaceherData, setTeacherData] = useRecoilState(teacherState)
  const setAccountAddOpen = useSetRecoilState(accountState)
  const teacherlist = useRecoilValue(teacherDataState)

  const onTeacherInfo = (teacher_id: string, teacher_name: string) => {
    setTeacherData({ teacher_id: teacher_id, teacher_name: teacher_name })
  }

  return (
    <>
      <S.TeacherListWrapper>
        <span>
          선생님 목록{' '}
          <div onClick={() => setAccountAddOpen({ isOpen: true })}>+</div>
        </span>
        <S.TeacherListBox>
          {teacherlist.map((i: any) => {
            return (
              <S.Teacher
                key={i.id}
                isActive={i.teacher_id === teaceherData.teacher_id}
                onClick={() => onTeacherInfo(i.teacher_id, i.name)}
              >
                {i.name}
              </S.Teacher>
            )
          })}
        </S.TeacherListBox>
      </S.TeacherListWrapper>
    </>
  )
}

export default TeacherList
