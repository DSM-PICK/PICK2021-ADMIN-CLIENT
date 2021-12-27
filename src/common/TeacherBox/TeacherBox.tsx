import React from 'react';
import { FC } from 'react';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { teacherDataState } from '../../recoil/userDataState';
import BaseBox from '../Base/BaseBox/BaseBox';

interface Props {
    setTeacherID: (e: string) => void
}

interface teacher {
    name: string,
    teacher_id: string
}

const TeacherBox: FC<Props> = ({setTeacherID, }) => {
    const [ option, setOption, ] = useState('choice')
    const teacherData = useRecoilValue(teacherDataState)
    console.log(teacherData)

    const handleSelect = (e: any) => {
        setTeacherID(e.target.value);
        setOption(e.target.value)
    };

    return (
        <>
            <BaseBox option={option} handleSelect={handleSelect}>
                <option key='choice' value='choice'>담당 선생님</option>
                {
                    teacherData.map((i: teacher) => {
                        return <option key={i.teacher_id} value={i.teacher_id}>{i.name}</option>
                    })
                }
            </BaseBox>
        </>
    );
}

export default TeacherBox;