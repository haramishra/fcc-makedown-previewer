import React from 'react';
import Editor from './components/Editor';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import './App.scss';
const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
      <Editor />
    </div>
    </ThemeProvider>
  );
}

export default App;
