import logo from './logo.svg';
import './App.css';
import FileLoader from '.components/FileLoader'
import { ThemeProvider, useTheme } from '@emotion/react';

function App() {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Router>
          <DarkModeSwitch themeMode={theme.palette.mode} />
          <FileLoader />
      </Router>
    </ThemeProvider>
  );
}

export function DarkModeSwitch({themeMode}){

  const [mode, setMode] = React.useState<'light' | 'dark'>('light');

  return (
      <IconButton aria-label="Dark mode switch" size="large" color="inherit">
          <Switch>
              {themeMode === 'dark' ? <FlashlightOffIcon /> : <FlashlightOnIcon />}
          </Switch>
      </IconButton>
  );
}

DarkModeSwitch.propTypes = {
  themeMode: PropTypes.String
}

export default App;
