import React, { FC, useEffect } from 'react'
import { useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import Loading from '../common/Loading/Loading'
import majorApi from '../../libs/api/major/majorApi'
import { asInfoState } from '../../recoil/asInfoState'
import AfterSchoolCard from './AfterSchoolCard/AfterSchoolCard'
import AfterSchoolName from './AfterSchoolName/AfterSchoolName'
import AfterSchoolSubBar from './AfterSchoolSubBar/AfterSchoolSubBar'
import * as S from './styles'

interface Props {
  type: string
  id: any
}

const AfterSchoolInfo: FC<RouteComponentProps<Props>> = ({ match }) => {
  const [asInfoData, setAsInfoData] = useRecoilState(asInfoState)
  const [loading, setLoading] = useState(true)
  const type = match.params.type
  const id = match.params.id

  useEffect(() => {
    setLoading(true)
    if (type === 'major') {
      majorApi.getMajorInfo(id).then((res) => {
        console.log(res.data)
        setAsInfoData({ ...res.data, type: type, id: id })
        setLoading(false)
      })
    }
  }, [id, type])

  return (
    <>
      <AfterSchoolName />
      <AfterSchoolSubBar />
      <hr />
      <S.CardWrapper>
        {loading ? (
          <Loading />
        ) : (
          asInfoData.members.map((i: any, index: number) => {
            return (
              <AfterSchoolCard
                asId={id}
                type={type}
                key={index}
                index={index}
                id={i.student_id}
                name={i.student_name}
                gcn={i.gcn}
              />
            )
          })
        )}
      </S.CardWrapper>
    </>
  )
}

export default AfterSchoolInfo
