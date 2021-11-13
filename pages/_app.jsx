import '../theme.css';
import { ThemeProvider } from 'next-themes';

const App = ({ Component, pageProps }) => (
  <ThemeProvider>
    <Component {...pageProps} />
  </ThemeProvider>
);
export default App;
