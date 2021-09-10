import React from 'react';
import { Back, Delete, Edit } from '../../../assets';
import * as S from './styles'

const EditBar = () => {
  return (
    <>
        <S.EditBarIconBox>
            <img src={Back} alt="뒤로가기"/>
        </S.EditBarIconBox>
        <S.EditBarIconBox>
            <img src={Edit} alt="수정"/>
            <S.EditBarText>편집</S.EditBarText>
        </S.EditBarIconBox>
        <S.EditBarIconBoxLast>
            <img src={Delete} alt="삭제" />
            <div>삭제</div>
        </S.EditBarIconBoxLast>
    </>
  );
}

export default EditBar;