import React, { FC } from 'react';
import { useRecoilState } from 'recoil';
import { studentAddListState } from '../../../../recoil/asAddState';
import * as S from './styles'


interface Props {
  student_id: number,
  gcn: string,
  name: string
}

const Card: FC<Props> = ({student_id, gcn, name}) => {
  const [studentAddList, setStudentAddList] = useRecoilState(studentAddListState)

  const onDeleteStudent = (id: number) => {
    setStudentAddList(studentAddList.filter((data) => data.student_id !== id))
  }

  return (
    <>
        <S.CardWrpper key={student_id} onClick={()=>onDeleteStudent(student_id)}>
          {gcn} {name}
        </S.CardWrpper>
    </>
  );
}

export default Card;