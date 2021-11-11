import React, { FC } from 'react';
import * as S from './styles'

interface Props {
  student_id: number,
  gcn: string,
  name: string
}

const Card: FC<Props> = ({student_id, gcn, name}) => {
  return (
    <>
        <S.CardWrpper>
          {gcn} {name}
        </S.CardWrpper>
    </>
  );
}

export default Card;