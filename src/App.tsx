import '@assets/app.scss'
import AppLayout from '@app/layouts/AppLayout.tsx';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { customTheme } from '@app/theme.ts';
import RestaurantsOptions from '@app/pages/RestaurantsOptions.tsx';

function App() {

  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <AppLayout>
        <RestaurantsOptions />
      </AppLayout>
    </ThemeProvider>
  )
}

export default App
