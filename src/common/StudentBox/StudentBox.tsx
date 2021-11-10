import React from 'react';
import { useRecoilValue } from 'recoil';
import { studentDataState } from '../../recoil/userDataState';
import * as S from './styles'

const state = [
    {
        id: '001',
        name: '한준호'
    },
    {
        id: '002',
        name: '수준호'
    },
    {
        id: '003',
        name: '마준호'
    },
    {
        id: '004',
        name: '봉준호'
    },
    {
        id: '005',
        name: '김준호'
    },
    {
        id: '006',
        name: '이준호'
    },
]

const StudentBox = () => {
    // const studentData = useRecoilValue(studentDataState);

    return (
        <>
            <S.StudentBoxWrapper>
                {
                    state.map((i: any, idx: any) => {
                        return (
                            <S.StudentName key={i.id}>
                                {i.name}
                            </S.StudentName>
                        )
                    })
                }
            </S.StudentBoxWrapper>
        </>
    );
}

export default StudentBox;