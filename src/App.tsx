import React from 'react';
import logo from './logo.svg';
import './App.css';
import GlobalThemeProvider from './components/global-theme-provider/global-theme-provider.component';
import { Button } from '@material-ui/core';

const App: React.FC = () => {
  return (
    <div className='App'>
      <GlobalThemeProvider>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <Button variant='contained' color='secondary'>
            TESTE
          </Button>
        </header>
      </GlobalThemeProvider>
    </div>
  );
};

export default App;
