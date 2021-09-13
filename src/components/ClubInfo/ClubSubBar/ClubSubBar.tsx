import React from 'react';
import { Search } from '../../../assets';
import * as S from './styles'

const ClubSubBar = () => {
  return (
    <>
        <S.ClubSubBarWrapper>
            <div>
                <div>총원 : 18명</div>
                <div>담당 : 정창용</div>
            </div>
            <S.StudentSearch>
                <input placeholder="학번 또는 이름"/>
                <img src={Search} alt='검색'/>
            </S.StudentSearch>
        </S.ClubSubBarWrapper>
    </>
  );
}

export default ClubSubBar;