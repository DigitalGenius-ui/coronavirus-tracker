import { createTheme, ThemeProvider } from '@material-ui/core';
import './App.css';
import HomePage from './components/HomePage';

function App() {

  const darkTheme = createTheme({
    palette: {
      type: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
        <HomePage/>
    </ThemeProvider>
  );
}

export default App;
