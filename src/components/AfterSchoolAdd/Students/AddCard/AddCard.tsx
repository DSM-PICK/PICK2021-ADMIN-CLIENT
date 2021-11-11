import React from 'react';
import { useRecoilState } from 'recoil';
import StudentBox from '../../../../common/StudentBox/StudentBox';
import { studentState } from '../../../../recoil/userDataState';
import * as S from './styles'

const AddCard = () => {
  const [student, setStudent] = useRecoilState(studentState)

  return (
    <>
      <S.CardWrpper>
          <input placeholder="학생 이름" onChange={(e) => setStudent(e.target.value)} value={student}/>
          <div style={{position: 'relative'}}>
            {
              student.length !== 0 && <StudentBox />
            }
          </div>
      </S.CardWrpper>
    </>
  );
}

export default AddCard;