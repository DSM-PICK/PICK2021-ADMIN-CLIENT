import React from 'react';
import { useRecoilState } from 'recoil';
import { Arrow } from '../../../../assets';
import majorApi from '../../../../libs/api/major/majorApi';
import { asMoveState } from '../../../../recoil/asMoveState';
import BasicModal from '../BasicModal';
import * as S from './styles'

const AfterSchoolMove = () => {
  const [data, setData] = useRecoilState(asMoveState);

  const onChangeAs = () => {
    console.log(data)
    if(data.type === 'major'){
      majorApi.deleteMajorStudent(Number(data.studentId))
      .then(() => {
        majorApi.postMajorMember(data.afterAsId, Number(data.studentId))
        .then(() => {
          alert('성공적으로 이동이 완료되었습니다.')
          onInitData()
        })
      })
    }
  }

  const onCancel = () => {
    onInitData()
  }

  const onInitData = () => {
    setData({
      isChange: false,
      nowAsName: '',
      afterAsId: -1,
      studentId: -1,
      afterAsName: '',
      type: ''
    })
  }

  return (
    <>
        <BasicModal>
          <S.ASMoveWrapper>
              <S.ASMoveTitle>
                  <div>현재</div>
                  <div>변경</div>
              </S.ASMoveTitle>
              <S.ASDes>
                  <div>{data.nowAsName}</div>
                  <img src={Arrow} alt="화살표" />
                  <div>{data.afterAsName}</div>
              </S.ASDes>
              <S.ASButtonBox>
                <S.Button onClick={onChangeAs}>이동</S.Button>
                <S.Button onClick={onCancel}>취소</S.Button>
              </S.ASButtonBox>
          </S.ASMoveWrapper>
        </BasicModal>
    </>
  );
}

export default AfterSchoolMove;