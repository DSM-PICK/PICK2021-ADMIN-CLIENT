import React from 'react';
import { useHistory } from 'react-router-dom';
import { Back, Delete, Edit } from '../../../assets';
import * as S from './styles'

const EditBar = () => {
  const history = useHistory()
  const onBack = () => {
    history.goBack()
  }

  return (
    <>
        <S.EditBarIconBox>
            <img src={Back} alt="뒤로가기" onClick={onBack}/>
        </S.EditBarIconBox>
        <S.EditBarIconBox>
            <img src={Edit} alt="수정"/>
            <S.EditBarText>편집</S.EditBarText>
        </S.EditBarIconBox>
        <S.EditBarIconBox>
            <img src={Delete} alt="삭제" />
            <S.EditBarText>삭제</S.EditBarText>
        </S.EditBarIconBox>
    </>
  );
}

export default EditBar;