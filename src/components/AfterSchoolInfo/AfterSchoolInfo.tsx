import React, { FC } from 'react';
import { useState } from 'react';
import { useLayoutEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import majorApi from '../../libs/api/major/majorApi';
import { asInfoState } from '../../recoil/asInfoState';
import AfterSchoolCard from './AfterSchoolCard/AfterSchoolCard';
import AfterSchoolName from './AfterSchoolName/AfterSchoolName';
import AfterSchoolSubBar from './AfterSchoolSubBar/AfterSchoolSubBar';
import * as S from './styles'

interface Props {
  type: string;
  id: any
}

const AfterSchoolInfo:FC<RouteComponentProps<Props>> = ({match}) => {
  const [ asInfoData, setASInfoData ] = useRecoilState(asInfoState)
  const type = match.params.type;
  const id = match.params.id;

  useLayoutEffect(() => {
    if(type === 'major'){
      majorApi.getMajorInfo(id)
      .then((res) => {
        setASInfoData({...res.data, type: type, id: id})
      })
    }
  })


  return (
    <>
        <AfterSchoolName />
        <AfterSchoolSubBar />
        <hr />
        <S.CardWrapper>
          {
            asInfoData.members.map((i: any,index: number) => {
              return (
                <AfterSchoolCard key={index} index={index} id={i.student_id} name={i.student_name} gcn={i.gcn}/>
              )
            })
          }
        </S.CardWrapper>
    </>
  );
}

export default AfterSchoolInfo;