import React from 'react';
import { File } from '../../assets';
import * as S from './styles'

const FileUpload = () => {
  return (
    <>
        <S.FileUploadWrapper>
            <img src={File} alt="파일"/>
            <div>문서를 이곳에 드래그</div>
            <S.FileButton>문서 업로드</S.FileButton>
        </S.FileUploadWrapper>
    </>
  );
}

export default FileUpload;