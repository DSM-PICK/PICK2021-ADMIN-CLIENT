import React from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import teacherApi from '../../../libs/api/teacher/teacherApi';
import { teacherState } from '../../../recoil/userDataState';
import * as S from './styles'

const TeacherSetting = () => {
  const { teacher_id, teacher_name } = useRecoilValue(teacherState)

  const [ infoInput, setInfoInput ] = useState({
    name: teacher_name,
    password: '',
    id: teacher_id
  })

  const onInitInput = useCallback(()=> {
    setInfoInput({
      name: teacher_name,
      password: '',
      id: teacher_id
    })
  }, [teacher_id])

  useEffect(()=>onInitInput(), [teacher_id])

  const onInfoChange = useCallback(
    e => {
      const { name, value } = e.target;
      setInfoInput({
        ...infoInput,
        [name]: value
      });
    },
    [infoInput]
  );


  const onTeacherInfoChange = (type: string) => {
    if(type === 'name'){
      teacherApi.patchChangeName(infoInput.name, infoInput.id)
      .then(() => console.log('성공적으로 이름이 변경되었습니다.'))
    } else {
      teacherApi.patchChangePassword(infoInput.password, infoInput.id)
      .then(() => console.log('성공적으로 비밀변호가 변경되었습니다.'))
    }
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
                <input value={infoInput.name} onChange={onInfoChange} name="name" placeholder="변경한 이름을 입력해주세요"/>
                <input value={infoInput.id} disabled={true}/>
                <input value={infoInput.password} onChange={onInfoChange} name="password" type="password" placeholder="변경할 비밀번호를 입력해주세요"/>
              </S.InfoBox>
              <S.InfoBox>
                <div onClick={() => onTeacherInfoChange('name')}>수정</div>
                <div></div>
                <div onClick={() => onTeacherInfoChange('password')}>수정</div>
              </S.InfoBox>
          </S.TeacherInfoBox>
        </S.TeacherSettingWrapper>
    </>
  );
}

export default TeacherSetting;