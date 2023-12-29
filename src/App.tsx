import '@assets/app.scss'
import AppLayout from '@app/layouts/AppLayout.tsx';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { customTheme } from '@app/theme.ts';

function App() {

  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <AppLayout />
    </ThemeProvider>
  )
}

export default App
