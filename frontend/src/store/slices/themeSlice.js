import { createSlice } from '@reduxjs/toolkit';

const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'system';
  return localStorage.getItem('theme') || 'system';
};

const getSystemPrefersDark = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

const applyThemeToDOM = (mode) => {
  if (typeof document === 'undefined') return;
  const isDark = mode === 'dark' || (mode === 'system' && getSystemPrefersDark());

  if (isDark) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  const meta = document.querySelector('meta[name="color-scheme"]');
  if (meta) {
    meta.content = isDark ? 'dark' : 'light';
  }
};

const initialMode = getInitialTheme();

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    mode: initialMode, // 'light' | 'dark' | 'system'
    isDark: initialMode === 'dark' || (initialMode === 'system' && getSystemPrefersDark()),
  },
  reducers: {
    setTheme: (state, action) => {
      const newMode = action.payload; // 'light' | 'dark' | 'system'
      state.mode = newMode;
      state.isDark = newMode === 'dark' || (newMode === 'system' && getSystemPrefersDark());
      localStorage.setItem('theme', newMode);
      applyThemeToDOM(newMode);
    },
    toggleTheme: (state) => {
      // If currently dark, toggle to light; if light, toggle to dark
      const nextMode = state.isDark ? 'light' : 'dark';
      state.mode = nextMode;
      state.isDark = nextMode === 'dark';
      localStorage.setItem('theme', nextMode);
      applyThemeToDOM(nextMode);
    },
    syncSystemTheme: (state) => {
      if (state.mode === 'system') {
        state.isDark = getSystemPrefersDark();
        applyThemeToDOM('system');
      }
    },
  },
});

export const { setTheme, toggleTheme, syncSystemTheme } = themeSlice.actions;
export default themeSlice.reducer;
