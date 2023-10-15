import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { ThemeContextProvider } from './context/ThemeSelectorContext';
import { AboutPage } from './pages/AboutPage';
import { Home } from './pages/Home';
import { Movie } from './pages/Movie';

const queryClient = new QueryClient({
  queryCache: new QueryCache(),
  defaultOptions: {
    queries: {
      staleTime: 60_000,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    {process.env.NODE_ENV === 'development' && (
      <ReactQueryDevtools initialIsOpen={false} position='top-right' />
    )}
    <ThemeContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<AboutPage />} path='about' />
          <Route path='movies'>
            <Route element={<Movie />} path=':movieId' />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeContextProvider>
  </QueryClientProvider>
);

export default App;
