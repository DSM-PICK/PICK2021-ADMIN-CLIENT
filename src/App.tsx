import { Global } from '@emotion/react';
import LoginLeft from './components/Login/LoginLeft/LoginLeft';
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
