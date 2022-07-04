import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import LocationBox from '../../common/LocationBox/LocationBox'
import { asAddTypeState, asInitState } from '../../../recoil/asAddState'
import * as S from './styles'

const Title = () => {
  const [asInitData, setAsInitData] = useRecoilState(asInitState)
  const type = useRecoilValue(asAddTypeState)

  const onTitle = (e: any) => {
    setAsInitData({
      ...asInitData,
      name: e.target.value,
    })
  }

  const onLocationId = (locationId: any) => {
    setAsInitData({
      ...asInitData,
      location_id: locationId,
    })
  }

  return (
    <>
      <S.Wrapper>
        <S.Title>
          <input
            placeholder={type === 'major' ? '동아리명' : '방과후명'}
            onChange={onTitle}
          />
        </S.Title>

        <div>
          <S.Place>
            <LocationBox setLocationId={onLocationId} />
          </S.Place>
        </div>
      </S.Wrapper>
    </>
  )
}

export default Title
