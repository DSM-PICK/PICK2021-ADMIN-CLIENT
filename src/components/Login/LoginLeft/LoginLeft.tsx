import React, { useState } from 'react';
import * as S from './styles'

const LoginLeft = () => {
    const [ id, setId ] = useState<string>('')
    const [ password, setPassword ] = useState<string>('')

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
                    
                    <S.Loginbutton>로그인</S.Loginbutton>
                    <hr/>
                </S.InputWarpper>
            </S.LoginLeftWarpper>
        </>
    );
}

export default LoginLeft;