import React from 'react';
import AddCard from './AddCard/AddCard';
import Card from './Card/Card';
import * as S from './styles'

const Students = () => {
  return (
    <>
      <S.StudentsWrapper>
        {
          Array(0).fill(-1).map(() => <Card />)
        }
        <AddCard/>
      </S.StudentsWrapper>
    </>
  );
}

export default Students;