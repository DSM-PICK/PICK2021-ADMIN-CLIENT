import { Global } from '@emotion/react';
import LoginLeft from './components/Login/LoginLeft/LoginLeft';
import { GlobalStyle } from './style/globalStyle';

function App() {
  return (
    <>
      <Global styles={GlobalStyle} />
      <LoginLeft/>
    </>
  );
}

export default App;
