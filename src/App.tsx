import { Global } from '@emotion/react';
import { Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import RootRouter from './router/RootRouter';
import { GlobalStyle } from './style/globalStyle';

function App() {

  return (
    <>
      <RecoilRoot>
        <Suspense fallback={<div>...loading</div>}>
          <Global styles={GlobalStyle} />
          <RootRouter />
        </Suspense>
      </RecoilRoot>
    </>
  );
}

export default App;