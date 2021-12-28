import React from 'react';
import { FC } from 'react';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { locationListState } from '../../recoil/userDataState';
import BaseBox from '../Base/BaseBox/BaseBox';

interface Props {
    setLocationId: (e: any) => void
}

const LocationBox: FC<Props> = ({setLocationId}) => {
    const locationData = useRecoilValue(locationListState)
    const [ option, setOption ] = useState('chioce')

    const handleSelect = (e: any) => {
        setLocationId(e.target.value);
        setOption(e.target.value)
    };

    return (
        <>
            <BaseBox option={option} handleSelect={handleSelect}>
                <option key='choice' value='choice'>장소</option>
                {
                    locationData.map((i: any) => {
                        return <option key={i.id} value={i.id}>{i.name}</option>
                    })
                }
            </BaseBox>
        </>
    );
}

export default LocationBox;