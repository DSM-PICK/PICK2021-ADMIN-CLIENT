import React from 'react'
import { FC } from 'react'
import { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { teacherDataState } from '../../../recoil/userDataState'
import BaseBox from '../Base/BaseBox/BaseBox'

interface Props {
  setTeacherId: (e: string) => void
  setTeacherName?: (e: string) => void
  teacher_name?: string
}

interface teacher {
  name: string
  teacher_id: string
}

const TeacherBox: FC<Props> = ({
  setTeacherId,
  setTeacherName,
  teacher_name,
}) => {
  const [option, setOption] = useState('choice')
  const teacherData = useRecoilValue(teacherDataState)

  const handleSelect = (e: any) => {
    setTeacherId(e.target.value)
    setOption(e.target.value)
  }

  return (
    <>
      <BaseBox option={option} handleSelect={handleSelect}>
        <option key="choice" value="choice" hidden>
          {teacher_name ? teacher_name : '담당 선생님'}
        </option>
        {teacherData.map((i: teacher) => {
          return (
            <option key={i.teacher_id} value={i.teacher_id}>
              {i.name}
            </option>
          )
        })}
      </BaseBox>
    </>
  )
}

export default React.memo(TeacherBox)
