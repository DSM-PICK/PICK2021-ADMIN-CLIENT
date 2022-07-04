import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import LocationBox from '../../common/LocationBox/LocationBox'
import { asInfoState } from '../../../recoil/asInfoState'
import { asModifyState } from '../../../recoil/asModifyState'
import * as S from './styles'

const AfterSchoolName = () => {
  const asInfoData = useRecoilValue(asInfoState)
  const [asModifyData, setAsModifyData] = useRecoilState(asModifyState)

  const onTitleChange = (e: any) => {
    setAsModifyData({
      ...asModifyData,
      title: e.target.value,
    })
  }

  const onLocationChange = (locationId: any) => {
    setAsModifyData({
      ...asModifyData,
      location_id: locationId,
    })
  }

  return (
    <>
      <S.AfterSchoolNameWrapper>
        <S.AfterSchoolTitle
          value={
            !asModifyData.isModity ? asInfoData.major_name : asModifyData.title
          }
          disabled={!asModifyData.isModity}
          onChange={onTitleChange}
        />
        <S.AfterSchoolPlace>
          {!asModifyData.isModity ? (
            asInfoData.location_name
          ) : (
            <LocationBox
              setLocationId={onLocationChange}
              location_name={asInfoData.location_name}
            />
          )}
        </S.AfterSchoolPlace>
      </S.AfterSchoolNameWrapper>
    </>
  )
}

export default AfterSchoolName
