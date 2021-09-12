import { Global } from '@emotion/react';
import RootRouter from './router/RootRouter';
import { GlobalStyle } from './style/globalStyle';

function App() {
  return (
    <>
      <Global styles={GlobalStyle} />
      <RootRouter />
    </>
  );
}

export default App;