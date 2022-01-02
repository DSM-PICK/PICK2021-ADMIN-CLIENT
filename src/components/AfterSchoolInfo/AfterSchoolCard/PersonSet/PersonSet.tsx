import React from 'react';
import { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { Crown, Delete, StudentChange } from '../../../../assets';
import majorApi from '../../../../libs/api/major/majorApi';
import { asInfoState } from '../../../../recoil/asInfoState';
import { asMoveState } from '../../../../recoil/asMoveState';
import { color } from '../../../../style/color';
import * as S from './styles'

interface Props {
    id: number,
    asId: number,
    type: string,
    name: string
}

const PersonSet: FC<Props> = ({id, asId, type, name}) => {
    const [ asMoveData, setAsMoveData ] = useRecoilState(asMoveState)
    const [ asInfoData, setAsInfoData ] = useRecoilState(asInfoState)
    const history = useHistory()

    const onChangeAs = () => {
        setAsMoveData({
            ...asMoveData,
            isChange: true,
            studentId: id,
            nowAsName: asInfoData.major_name,
            type: type
        })
        history.push(`/as-list/${type}`)
    }

    const onStudentOwnerChange = () => {
        majorApi.patchMajorHead(asId, id)
    }

    const onStudentDelete = () => {
        if(type === 'major'){
            majorApi.deleteMajorStudent(id)
            .then((res)=> {
                
                setAsInfoData({
                    ...asInfoData,
                    members: asInfoData.members.filter((i: any) => i.student_id !== id)
                })
            })
        }
    }

    return (
        <>
            <S.PersonSetWrapper>
                {
                    type === 'major' && asInfoData.head_name !== name &&
                    <S.Card color={color.orange} onClick={onStudentOwnerChange}>
                        <img src={Crown} alt="동아리장" />
                        <div>부장</div>
                    </S.Card>
                }
                <S.Card color={'#000000'} onClick={onChangeAs}>
                    <img src={StudentChange} alt="이동" />
                    <div>이동</div>
                </S.Card>
                
                <S.Card color={color.red} onClick={onStudentDelete}>
                    <img src={Delete} alt="삭제" />
                    <div>삭제</div>
                </S.Card>
            </S.PersonSetWrapper>
        </>
    );
}

export default PersonSet;