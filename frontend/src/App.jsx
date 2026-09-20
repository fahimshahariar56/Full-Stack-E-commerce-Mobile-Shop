import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { syncSystemTheme } from '@/store/slices/themeSlice';
import AppRouter from '@/routes/AppRouter';

export default function App() {
  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state.theme);

  // Synchronize OS-level theme changes when in 'system' mode
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemChange = () => {
      dispatch(syncSystemTheme());
    };

    mediaQuery.addEventListener('change', handleSystemChange);
    return () => mediaQuery.removeEventListener('change', handleSystemChange);
  }, [dispatch, mode]);

  return <AppRouter />;
}
