import React from 'react';
import { useState } from 'react';
import * as S from './styles'

const teacherList = [
    {
        teacher_id: 'dsm00',
        name: '아무개'
    },
    {
        teacher_id: 'dsm01',
        name: '아기개'
    },
    {
        teacher_id: 'dsm02',
        name: '아수개'
    },
    {
        teacher_id: 'dsm03',
        name: '아자개'
    },
    {
        teacher_id: 'dsm04',
        name: '아재개'
    },
    {
        teacher_id: 'dsm05',
        name: '아푸개'
    }
];

const TeacherBox = () => {
    // const teacherList = useRecoilValue(teacherDataState);
    const [ option, setOption, ] = useState('choice')

    const handleSelect = (e: any) => {
        setOption(e.target.value);
    };

    return (
        <>
            <S.TeacherBoxWrapper value={option} onChange={handleSelect}>
                <S.Teacher key='choice' value='choice'>선택해주세요</S.Teacher>
                {
                    teacherList.map((i: any, index: any) => {
                        return <S.Teacher key={i.teacher_id} value={i.teacher_id}>{i.name}</S.Teacher>
                    })
                }
            </S.TeacherBoxWrapper>
        </>
    );
}

export default TeacherBox;