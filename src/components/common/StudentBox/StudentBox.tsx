import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { FC } from 'react'
import { useRecoilValue } from 'recoil'
import teacherApi from '../../../libs/api/teacher/teacherApi'
import { studentAddListState } from '../../../recoil/asAddState'
import * as S from './styles'

interface Props {
  student: string
  setStudentTemp: (id: number, gcn: string, name: string) => void
}

const StudentBox: FC<Props> = ({ student, setStudentTemp }) => {
  const [studentData, setStudentData] = useState<any[]>([])
  const [filterData, setFilterData] = useState<any[]>(studentData)
  const studentAddList = useRecoilValue(studentAddListState)

  useEffect(() => {
    teacherApi.getStudentSearch(student).then((res) => {
      setStudentData(res.data)
    })
    onStudentDatafilter()
  }, [student])

  const onStudentDatafilter = () => {
    const filter = studentData.filter((data) => {
      return studentAddList.findIndex((i) => i.student_id === data.id) < 0
    })
    setFilterData(filter)
  }

  return (
    <>
      <S.StudentBoxWrapper>
        {studentData.map((i: any, idx: any) => {
          return (
            <S.StudentName
              key={i.id}
              onClick={() => setStudentTemp(i.id, i.gcn, i.name)}
            >
              {i.gcn} {i.name}
            </S.StudentName>
          )
        })}
      </S.StudentBoxWrapper>
    </>
  )
}

export default React.memo(StudentBox)
