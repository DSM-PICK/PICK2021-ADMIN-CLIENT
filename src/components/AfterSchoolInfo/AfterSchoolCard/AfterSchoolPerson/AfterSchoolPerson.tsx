import React from 'react';
import { FC } from 'react';
import { Crown } from '../../../../assets';
import * as S from './styles'

interface Props {
    index: number,
    isOpen: boolean,
    setIsOpen: (open: boolean) => void
}

const AfterSchoolPerson: FC<Props> = ({index, isOpen, setIsOpen}) => {

  const onClick = () => {
    setIsOpen(!isOpen)
  }
  
  return (
    <>
        <S.AfterSchoolPersonWrapper onClick={onClick}>
            {
              index === 0 &&
              <img src={Crown} alt="동아리장" />
            }
            <div>2121 한준호</div>
        </S.AfterSchoolPersonWrapper>
    </>
  );
}

export default AfterSchoolPerson;