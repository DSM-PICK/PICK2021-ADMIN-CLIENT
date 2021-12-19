import { RouteComponentProps, useHistory } from 'react-router-dom';
import AfterSchoolBar from './AfterSchoolBar/AfterSchoolBar';
import AfterSchoolCard from './Card/Card';
import { useEffect } from 'react';
import { useState } from 'react';
import * as S from './styles'
import { useRecoilState } from 'recoil';
import { asMoveState } from '../../recoil/asMoveState';
import AfterSchoolMove from '../Container/Modal/AfterSchoolMove/AfterSchoolMove';
import { useLayoutEffect } from 'react';
import majorApi from '../../libs/api/major/majorApi';
import activityApi from '../../libs/api/activity/activityApi';

interface IMajor {
  major_id: number,
  major_name: string,
  location_name: string,
  head_name: string
}

interface IActivity {
  after_school_id: number,
  name: string,
  teacher_id: string,
  location_name: string,
}

const AfterSchoolList = ({ location, match } : RouteComponentProps<{type: string}>) => {
  const [ path, setPath ] = useState<string>('');
  const [ moveData, setMoveData ] = useRecoilState(asMoveState)
  const [ data, setData ] = useState<any[]>([])
  const type = match.params.type;

  const history = useHistory()

  useLayoutEffect(()=> {
    console.log(type)
    if(type === 'major'){
      majorApi.getMajorList()
      .then((res) => {
        setData(res.data)
      })
    } else {
      activityApi.getActivityList()
      .then((res) => {
        setData(res.data)
      })
    }
  },[type])

  useEffect(() => {
    setPath(location.pathname.split('-')[0])
  }, [location])

  const onGoAfterSchool = (index: number) => {
    !moveData.isChange ?
    history.push(`/as-info/${type}/${index}`)
    : setMoveData({...moveData, afterAsId: index, afterAsName: 'pick'})
  }  

  return (
    <>
        <S.AfterSchoolListWrapper>
            <AfterSchoolBar />
            <S.AfterSchoolListBox>
                {
                    data.map((i, index) => {
                    return (
                      <div onClick={() => onGoAfterSchool(index)} key={`${index}-${i.location_name}`}>
                        {
                          type === 'major' ?
                          <AfterSchoolCard type={type} id={i.major_id} location={i.location_name} asName={i.major_name} userName={i.head_name}/>
                          : <AfterSchoolCard type={type} id={i.after_school_id} location={i.location_name} asName={i.name} userName={i.teacher_id}/>
                        }
                      </div>
                    )
                    
                  })
                }
            </S.AfterSchoolListBox>
            {
              moveData.isChange === true && moveData.type === 'major' &&
              <AfterSchoolMove />
            }
        </S.AfterSchoolListWrapper>
    </>
  );
}

export default AfterSchoolList;