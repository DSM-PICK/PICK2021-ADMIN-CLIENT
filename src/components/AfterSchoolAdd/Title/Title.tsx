import React from 'react';
import { useState } from 'react';
import Teacher from '../../../common/TeacherBox/TeacherBox';
import * as S from './styles'

const Title = () => {
  const [focus, setFocus] = useState<boolean>(true)
  

  return (
    <>
        <S.Wrapper>
            <S.Title>
                <input placeholder="동아리명" />
            </S.Title>

          <div>
            <S.Place>
                {/* <input placeholder="동아리실" onFocus={() => setFocus(true)}/> */}
                <Teacher />
            </S.Place>
            {/* {
              focus && <Teacher />
            } */}
          </div>
        </S.Wrapper>
    </>
  );
}

export default Title;