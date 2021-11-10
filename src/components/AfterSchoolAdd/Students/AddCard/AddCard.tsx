import React from 'react';
import { useSetRecoilState } from 'recoil';
import { studentState } from '../../../../recoil/userDataState';
import * as S from './styles'

const AddCard = () => {
  const setStudent = useSetRecoilState(studentState)

  return (
    <>
        <S.CardWrpper>
            <input placeholder="학생 이름" onChange={(e) => setStudent(e.target.value)}/>
        </S.CardWrpper>
    </>
  );
}

export default AddCard;