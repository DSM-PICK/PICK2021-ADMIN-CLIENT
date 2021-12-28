import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import teacherApi from '../../libs/api/teacher/teacherApi';
import { studentAddListState } from '../../recoil/asAddState';
import * as S from './styles'

const state = [
    {
        student_id: 1,
        gcn: '0001',
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
    {
        student_id: 7,
        gcn: '0007',
        name: '심준호'
    },
    {
        student_id: 8,
        gcn: '0008',
        name: '위준호'
    },
    {
        student_id: 9,
        gcn: '0009',
        name: '노준호'
    },
]

interface Props {
    student: string,
    setStudentTemp: (id: number, gcn: string, name: string) =>  void,
}

const StudentBox: FC<Props> = ({student, setStudentTemp}) => {
    const [ studentData, setStudentData ]  = useState([])
    const [ filterData, setFilterData ] = useState<any[]>(state)
    const studentAddList = useRecoilValue(studentAddListState);

    useEffect(() => {
        teacherApi.getStudentSearch(student)
        .then((res) => {
            setStudentData(res.data)
        })
        onStudentDatafilter()
    }, [student])

    const onStudentDatafilter = () => {
        const filter = state.filter((data) => { return studentAddList.findIndex(i => i.student_id === data.student_id) < 0 })
        setFilterData(filter)
    }

    return (
        <>
            <S.StudentBoxWrapper>
                {
                    filterData.map((i: any, idx: any) => {
                        return (
                            <S.StudentName key={i.student_id} onClick={() => setStudentTemp(i.student_id, i.gcn, i.name)}>
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