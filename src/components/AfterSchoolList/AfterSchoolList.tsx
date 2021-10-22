import { Link } from 'react-router-dom';
import AfterSchoolBar from './AfterSchoolBar/AfterSchoolBar';
import AfterSchoolCard from './Card/Card';
import * as S from './styles'
import { useEffect } from 'react';
import { useState } from 'react';

const AfterSchoolList = ({location} : any) => {
  const [ path, setPath ] = useState<string>('');

  useEffect(() => {
    setPath(location.pathname.split('-')[0])
  }, [location])

  console.log(path)

  return (
    <>
        <S.AfterSchoolListWrapper>
            <AfterSchoolBar />
            <S.AfterSchoolList>
                {
                    Array(20).fill(-1).map((_, index) => {
                    return (
                      <Link to={`${path}-info?id=${index}`}>
                        <AfterSchoolCard key={index}/>
                      </Link>
                    )
                    
                  })
                }
            </S.AfterSchoolList>
        </S.AfterSchoolListWrapper>
    </>
  );
}

export default AfterSchoolList;