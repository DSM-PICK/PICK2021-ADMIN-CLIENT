import { Global } from '@emotion/react';
import { Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import Loading from './common/Loading/Loading';
import RootRouter from './router/RootRouter';
import { GlobalStyle } from './style/globalStyle';

function App() {

  return (
    <>
      <RecoilRoot>
        <Suspense fallback={<Loading/>}>
          <Global styles={GlobalStyle} />
          <RootRouter />
        </Suspense>
      </RecoilRoot>
    </>
  );
}

export default App;