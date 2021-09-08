import React from 'react';
import ClubCard from './ClubCard/ClubCard';
import * as S from './styles'

const ClubList = () => {
  return (
    <>
        <S.ClubListWrapper>
            <S.ClubList>
                <ClubCard />
                <ClubCard />
                <ClubCard />
                <ClubCard />
                <ClubCard />
                <ClubCard />
                <ClubCard />
                <ClubCard />
                <ClubCard />
                <ClubCard />
                <ClubCard />
            </S.ClubList>
        </S.ClubListWrapper>
    </>
  );
}

export default ClubList;