import AppLayout from '@app/layouts/AppLayout.tsx';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { defaultTheme } from '@app/theme.ts';


function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppLayout />
    </ThemeProvider>
  )
}

export default App
