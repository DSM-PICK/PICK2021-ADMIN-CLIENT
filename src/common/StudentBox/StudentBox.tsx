import React from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { studentAddListState, studentState } from '../../recoil/userDataState';
import * as S from './styles'

const state = [
    {
        student_id: 1,
        gcn: '0000',
        name: '한준호'
    },
    {
        student_id: 2,
        gcn: '0002',
        name: '수준호'
    },
    {
        student_id: 3,
        gcn: '0003',
        name: '마준호'
    },
    {
        student_id: 4,
        gcn: '0004',
        name: '봉준호'
    },
    {
        student_id: 5,
        gcn: '0005',
        name: '김준호'
    },
    {
        student_id: 6,
        gcn: '0006',
        name: '이준호'
    },
]

const StudentBox = () => {
    const [studentAddList,setStudentAddList] = useRecoilState(studentAddListState)
    const setStudent = useSetRecoilState(studentState)

    console.log(studentAddList)
    const onStudentAdd = (id: number, gcn: string, name: string) => {
        setStudent('')
        setStudentAddList([
            ...studentAddList,
            {
                student_id: id,
                gcn: gcn,
                name: name
            }
        ])
    }

    return (
        <>
            <S.StudentBoxWrapper>
                {
                    state.map((i: any, idx: any) => {
                        return (
                            <S.StudentName key={i.student_id} onClick={() => onStudentAdd(i.student_id, i.gcn, i.name)}>
                                {i.gcn} {i.name}
                            </S.StudentName>
                        )
                    })
                }
            </S.StudentBoxWrapper>
        </>
    );
}

export default StudentBox;