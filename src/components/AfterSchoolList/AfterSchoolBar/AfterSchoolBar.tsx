import React from 'react';
import { useHistory } from 'react-router-dom';
import { ClubAdd, Search, Sorting } from '../../../assets';
import * as S from './styles'

const AfterSchoolBar = () => {
    const history = useHistory();

    const onAddSchool = () => {
        history.push(`/add-after-school/`)
    }

    return (
        <>
            <S.AfterSchoolBarWrapper >
                <div/>
                <S.AfterSchoolSearch>
                    <S.AfterSchoolInput placeholder="동아리명 또는 학생 이름"/>  
                    <S.AfterSchoolButton>
                        <img src={Search} alt="검색" />
                    </S.AfterSchoolButton>
                </S.AfterSchoolSearch>
            </S.AfterSchoolBarWrapper>
        </>
    );
}

export default AfterSchoolBar;