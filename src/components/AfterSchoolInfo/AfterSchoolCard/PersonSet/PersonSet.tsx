import React from 'react';
import { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { Crown, Delete, StudentChange } from '../../../../assets';
import { asMoveState } from '../../../../recoil/asMoveState';
import { color } from '../../../../style/color';
import * as S from './styles'

interface Props {
    index: number,
    isOpen: boolean,
    setIsOpen: (open: boolean) => void
}

const PersonSet: FC<Props> = ({index, isOpen, setIsOpen}) => {
    const [ data, setData ] = useRecoilState(asMoveState)
    const history = useHistory()

    const onChangeAs = () => {
        setData({
            ...data,
            isChange: true,
            studentId: index,
            nowAsName: 'semicolon',
            type: 'major'
        })
        history.goBack()
    }

    const onClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <S.PersonSetWrapper onClick={onClick}>
                {
                    index === 0 &&
                    <S.Card color={color.orange}>
                        <img src={Crown} alt="동아리장" />
                        <div>부장</div>
                    </S.Card>
                }
                <S.Card color={'#000000'} onClick={onChangeAs}>
                    <img src={StudentChange} alt="이동" />
                    <div>이동</div>
                </S.Card>
                
                <S.Card color={color.red}>
                    <img src={Delete} alt="삭제" />
                    <div>삭제</div>
                </S.Card>
            </S.PersonSetWrapper>
        </>
    );
}

export default PersonSet;