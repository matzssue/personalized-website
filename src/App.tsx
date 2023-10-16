import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { ThemeContextProvider } from './context/ThemeSelectorContext';

import Home from './pages/Home';

import { Suspense, lazy } from 'react';
import { Loader } from './common/Loader/Loader';
import ErrorBoundary from './modules/ErrorBoundary/ErrorBoundary';
import { Error404 } from './pages/Error404/Error404';

const LazyAbout = lazy(() => import('./pages/AboutPage'));
const LazyMovie = lazy(() => import('./pages/Movie'));

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
    <ErrorBoundary>
      <ThemeContextProvider>
        <BrowserRouter basename={'/personalized-website'}>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route element={<Error404 />} path='*' />
              <Route element={<Home />} path='/' />
              <Route element={<LazyAbout />} path='about' />
              <Route path='movies'>
                <Route element={<LazyMovie />} path=':movieId' />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </ThemeContextProvider>
    </ErrorBoundary>
  </QueryClientProvider>
);

export default App;
