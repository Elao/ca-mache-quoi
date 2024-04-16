import '@assets/app.scss'
import AppLayout from '@app/layouts/app-layout.tsx';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { customTheme } from '@app/theme.ts';
import OptionsList from '@app/pages/options-list.tsx';

export default function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <AppLayout>
        <OptionsList />
      </AppLayout>
    </ThemeProvider>
  )
}
