import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import StudentBox from '../../../common/StudentBox/StudentBox'
import { studentAddListState } from '../../../../recoil/asAddState'
import * as S from './styles'

const AddCard = () => {
  const [student, setStudent] = useState('')
  const [studentAddList, setStudentAddList] =
    useRecoilState(studentAddListState)

  const onStudentAdd = (id: number, gcn: string, name: string) => {
    setStudent('')
    setStudentAddList([
      ...studentAddList,
      {
        student_id: id,
        gcn: gcn,
        name: name,
      },
    ])
  }

  return (
    <>
      <S.CardWrpper>
        <input
          placeholder="학생 이름"
          onChange={(e) => setStudent(e.target.value)}
          value={student}
        />
        <div style={{ position: 'relative' }}>
          {student.length !== 0 && (
            <StudentBox student={student} setStudentTemp={onStudentAdd} />
          )}
        </div>
      </S.CardWrpper>
    </>
  )
}

export default AddCard
