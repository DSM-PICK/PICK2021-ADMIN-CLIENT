import React from 'react';
import ClubBar from './ClubBar/ClubBar';
import ClubCard from './ClubCard/ClubCard';
import * as S from './styles'

const ClubList = () => {
  return (
    <>
        <S.ClubListWrapper>
            <ClubBar />
            <S.ClubList>
                {
                    Array(20).fill(-1).map((_) => <ClubCard />)
                }
            </S.ClubList>
        </S.ClubListWrapper>
    </>
  );
}

export default ClubList;