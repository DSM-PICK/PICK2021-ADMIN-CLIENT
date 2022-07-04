import styled from "@emotion/styled/macro"
import { color } from '../../../style/color';

export const LoginLeftWarpper = styled.div`
  width: 490px;
  height: 750px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  div {
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 43px;
    margin-bottom: 14px;
  }
`

export const InputWarpper = styled.form`
  width: 362px;
  margin: 0 auto;

`

export const LoginInputBox = styled.div`
  position: relative;
`

export const Inter = styled.label<{on: boolean}>`
  position: absolute;
  top: 10px;
  left: 25px;
  transition: all 0.35s;
  transform: translateY(15%);
  font-size: 18px;
  font-family: "Noto Sans KR", sans-serif;
  color: ${color.gray2};
  cursor: text;
  ${(props) =>
    props.on === true &&
    `
      top: 10px;
      transform: translateY(-15%);
      left: 25px;
      font-size: 14px;
    `}
`;

export const LoginInput = styled.input`
  width: 310px;
  height: 28px;
  padding: 35px 25px 15px 25px;
  font-size: 18px;
  border: 1px solid ${color.gray2};
  outline: ${color.gray2};
  &:focus + ${Inter} {
    top: 10px;
    transform: translateY(-15%);
    left: 25px;
    font-size: 14px;
    color: ${color.gray2};
  }
`;

export const Loginbutton = styled.button`
  background-color: ${color.orange};
  width: 362px;
  height: 64px;
  font-size: 22px;
  color: ${color.white};
  text-align: center;
  align-items: center;
  border: none;
  cursor: pointer;
  margin: 40px 0;
`