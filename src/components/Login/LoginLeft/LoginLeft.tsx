import React, { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import majorApi from '../../../libs/api/major/majorApi';
import teacherApi from '../../../libs/api/teacher/teacherApi';
import { majorListSelector, majorListState } from '../../../recoil/majorState';
import * as S from './styles'

const LoginLeft = () => {
    const [ id, setId ] = useState<string>('')
    const [ password, setPassword ] = useState<string>('')

    const history = useHistory()

    const onLogin = () => {
        teacherApi.postLogin(id, password)
        .then((res) => {
            localStorage.setItem('admin-access-token', res.data.access_token)
            localStorage.setItem('admin-refresh-token', res.data.refresh_token)
            history.push('/')
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <>
            <S.LoginLeftWarpper>
                <div>로그인</div>
                <S.InputWarpper>
                    <S.LoginInputBox>
                        <S.LoginInput 
                            id="id" 
                            value={id}
                            onChange={(e)=>setId(e.target.value)}
                        />
                        <S.Inter 
                            htmlFor="id"
                            id='id1'
                            on={id !== '' ? true : false}
                        >
                            아이디
                        </S.Inter>
                    </S.LoginInputBox>
                    <S.LoginInputBox>
                        <S.LoginInput 
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                        <S.Inter 
                            htmlFor="password"
                            id='password1'
                            on={password !== '' ? true : false}
                        >
                            비밀번호
                        </S.Inter>
                    </S.LoginInputBox>
                    
                    <S.Loginbutton onClick={onLogin}>로그인</S.Loginbutton>
                    <hr/>
                </S.InputWarpper>
            </S.LoginLeftWarpper>
        </>
    );
}

export default LoginLeft;