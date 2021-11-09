import React, { ReactEventHandler } from 'react';
import { useState } from 'react';
import * as S from './styles'

const TeacherSetting = () => {
  const [ name, setName ] = useState<string>('한준호');
  const [ password, setPassword ] = useState<string>('****');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name} = e.target;
    name === 'name' ? setName(value) : setPassword(value)

  }

  return (
    <>
        <S.TeacherSettingWrapper>
          <S.TeacherInfoBox>
              <S.InfoBox>
                <div>NAME</div>
                <div>ID</div>
                <div>PASSWORD</div>
              </S.InfoBox>
              <S.InfoBox>
                <input value={name} onChange={onChange} name="name"/>
                <input value="dsm00"/>
                <input value={password} onChange={onChange} name="password" type="password"/>
              </S.InfoBox>
              <S.InfoBox>
                <div>수정</div>
                <div>수정</div>
                <div>수정</div>
              </S.InfoBox>
          </S.TeacherInfoBox>
        </S.TeacherSettingWrapper>
    </>
  );
}

export default TeacherSetting;