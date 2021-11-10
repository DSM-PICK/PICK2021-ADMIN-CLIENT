import { Link, RouteComponentProps, useHistory } from 'react-router-dom';
import AfterSchoolBar from './AfterSchoolBar/AfterSchoolBar';
import AfterSchoolCard from './Card/Card';
import { useEffect } from 'react';
import { useState } from 'react';
import * as S from './styles'
import { useRecoilState } from 'recoil';
import { asMoveState } from '../../recoil/asMoveState';
import AfterSchoolMove from '../Container/Modal/AfterSchoolMove/AfterSchoolMove';

const AfterSchoolList = ({ location, match } : RouteComponentProps<{type: string}>) => {
  const [ path, setPath ] = useState<string>('');
  const [ data, setData ] = useRecoilState(asMoveState)
  const type = match.params.type;

  const history = useHistory()

  useEffect(() => {
    setPath(location.pathname.split('-')[0])
  }, [location])

  const onGoAfterSchool = (index: number) => {
    !data.isChange ?
    history.push(`/as-info/${type}/${index}`)
    : setData({...data, afterAsId: index, afterAsName: 'pick'})
  }  

  return (
    <>
        <S.AfterSchoolListWrapper>
            <AfterSchoolBar />
            <S.AfterSchoolListBox>
                {
                    Array(7).fill(-1).map((_, index) => {
                    return (
                      <div onClick={() => onGoAfterSchool(index)} key={index}>
                        <AfterSchoolCard/>
                      </div>
                    )
                    
                  })
                }
            </S.AfterSchoolListBox>
            {
              data.isChange===true && data.type === 'major' &&
              <AfterSchoolMove />
            }
        </S.AfterSchoolListWrapper>
    </>
  );
}

export default AfterSchoolList;