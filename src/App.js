import React from 'react';
import Editor from './components/Editor';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'

import './App.scss';
const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <Typography variant="h2" color='secondary' align='center' gutterBottom>
        Markdown Previewer
      </Typography>
      <div className="App">
        <Editor />
      </div>
    </ThemeProvider>
  );
}

export default App;
