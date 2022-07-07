import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import teacherApi from '../../../libs/api/teacher/teacherApi'
import * as S from './styles'

const LoginLeft = () => {
  const [id, setId] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const history = useHistory()

  const onLogin = (e: any) => {
    e.preventDefault()
    if (!id || !password) {
      return alert('빈칸을 다 채워주세요.')
    }
    teacherApi
      .postLogin(id, password)
      .then((res) => {
        console.log(res.data)
        localStorage.setItem('admin-access-token', res.data.access_token)
        localStorage.setItem('admin-refresh-token', res.data.refresh_token)
        alert('로그인에 성공했습니다.')
        history.push('/')
      })
      .catch((err) => {
        alert('로그인에 실패했습니다.')
      })
  }

  return (
    <>
      <S.LoginLeftWarpper>
        <div>로그인</div>
        <S.InputWarpper onSubmit={onLogin}>
          <S.LoginInputBox>
            <S.LoginInput
              id="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <S.Inter htmlFor="id" id="id1" on={id !== '' ? true : false}>
              아이디
            </S.Inter>
          </S.LoginInputBox>
          <S.LoginInputBox>
            <S.LoginInput
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <S.Inter
              htmlFor="password"
              id="password1"
              on={password !== '' ? true : false}
            >
              비밀번호
            </S.Inter>
          </S.LoginInputBox>

          <S.Loginbutton>로그인</S.Loginbutton>
          <hr />
        </S.InputWarpper>
      </S.LoginLeftWarpper>
    </>
  )
}

export default LoginLeft
