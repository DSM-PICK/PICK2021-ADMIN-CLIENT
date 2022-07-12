import React from 'react'
import styled from '@emotion/styled'
import { useRecoilState } from 'recoil'
import { accountState } from '../../../recoil/account'
import teacherApi from '../../../libs/api/teacher/teacherApi'
import { useState } from 'react'
import { color } from '../../../style/color'

const AccountAdd = () => {
  const [accountData, setAccountData] = useRecoilState(accountState)
  const [data, setData] = useState<any>({})

  const onSend = () => {
    console.log(data)
    teacherApi
      .postRegister(data.id, data.name, data.password, data.code)
      .then((res) => {
        setAccountData({ isOpen: false })
        console.log(res.data)
      })
      .catch((err) => {
        if (err.response.status === 400) {
          alert('빈칸을 채우거나 가입코드를 확인해주세요')
        }
      })
  }

  const dataInput = (e: any) => {
    const { value, name } = e.target
    setData({
      ...data,
      [name]: value,
    })
  }

  return (
    <>
      {accountData.isOpen && (
        <Wrapper>
          <Content>
            <Title>선생님 등록하기</Title>
            <InputList>
              <input onChange={dataInput} name="id" placeholder="아이디" />
              <input onChange={dataInput} name="name" placeholder="성함" />
              <input
                onChange={dataInput}
                name="password"
                placeholder="비밀번호"
                type="password"
              />
              <input onChange={dataInput} name="code" placeholder="가입코드" />
            </InputList>
            <ButtonBox>
              <Button onClick={() => setAccountData({ isOpen: false })}>
                취소
              </Button>
              <Button onClick={onSend}>등록</Button>
            </ButtonBox>
          </Content>
        </Wrapper>
      )}
    </>
  )
}

export default AccountAdd

const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
`

const Content = styled.div`
  width: 300px;
  height: 500px;
  background-color: white;
  position: relative;
  padding: 10px;
`

const Title = styled.div`
  width: 100%;
  text-align: center;
  margin: 10px 0;
`

const InputList = styled.div`
  display: flex;
  flex-direction: column;
  height: 180px;
  justify-content: space-between;
  input {
    padding: 10px;
    outline: none;
    border: none;
    border-bottom: 1px solid black;
  }
`

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 170px;
`

const Button = styled.button`
  width: 100px;
  text-align: center;
  border-radius: 10px;
  padding: 7px 10px;
  outline: none;
  border: none;
  cursor: pointer;
  &:nth-of-type(2) {
    background-color: ${color.orange};
    color: white;
  }
`
