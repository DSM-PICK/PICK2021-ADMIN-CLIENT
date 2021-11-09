import React from 'react';
import * as S from './styles';
import TeacherList from './TeacherList/TeacherList';
import TeacherSetting from './TeacherSetting/TeacherSetting';

const AccountManagement = () => {
  return (
    <>
        <S.AMWrapper>
            <TeacherList/>
            <S.Line/>
            <TeacherSetting/>
        </S.AMWrapper>
    </>
  );
}

export default AccountManagement;