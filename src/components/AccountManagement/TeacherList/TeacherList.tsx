import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { teacherDataState, teacherState } from '../../../recoil/userDataState';
import * as S from './styles'

const TeacherList = () => {
    const [ teaceherId , setTeacherId] = useRecoilState(teacherState);
    const teacherlist = useRecoilValue(teacherDataState);
    console.log(teacherlist)

    const onTeacherInfo = (teacher_id: string) => {
        setTeacherId(teacher_id)
    }

    return (
        <>
            <S.TeacherListWrapper>
                <span>선생님 목록</span>
                <S.TeacherListBox>
                    {
                        Array(19).fill(-1).map((i,index) => {
                            return (
                                <S.Teacher key={i.id} isActive={index === 2} onClick={() => onTeacherInfo(i.teacher_id)}>i.name</S.Teacher>
                            )
                        })
                    }
                    {/* {
                        teacherlist.map((i: any) =>{
                            return (
                                <S.Teacher key={i.id} isActive={i.teacher_id === teaceherId} onClick={() => onTeacherInfo(i.teacher_id)}>{i.name}</S.Teacher>
                            )
                        })
                    } */}
                </S.TeacherListBox>
            </S.TeacherListWrapper>
        </>
    );
}

export default TeacherList;