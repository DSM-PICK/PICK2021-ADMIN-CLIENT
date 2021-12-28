import React from 'react';
import { useRecoilValue } from 'recoil';
import { studentAddListState } from '../../../recoil/asAddState';
import AddCard from './AddCard/AddCard';
import Card from './Card/Card';
import * as S from './styles'

const Students = () => {
  const studentAddList = useRecoilValue(studentAddListState)
  return (
    <>
      <S.StudentsWrapper>
        {
          studentAddList.map((i: any) => {
            return (
              <Card {...i} key={i.student_id}/>
            )
          })
        }
        <AddCard/>
      </S.StudentsWrapper>
    </>
  );
}

export default Students;