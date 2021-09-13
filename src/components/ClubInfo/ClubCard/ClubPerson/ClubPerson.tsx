import React from 'react';
import { FC } from 'react';
import { Crown } from '../../../../assets';
import * as S from './styles'

interface Props {
    index: number
}

const ClubPerson: FC<Props> = ({index}) => {
  return (
    <>
        <S.ClubPersonWrapper>
            {
              index === 0 &&
              <img src={Crown} alt="동아리장" />
            }
            <div>2121 한준호</div>
        </S.ClubPersonWrapper>
    </>
  );
}

export default ClubPerson;