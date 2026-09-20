import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Sun, Moon, Laptop, Check } from 'lucide-react';
import { setTheme } from '@/store/slices/themeSlice';

export default function ThemeToggle({ showLabel = false, className = '' }) {
  const dispatch = useDispatch();
  const { mode, isDark } = useSelector((state) => state.theme);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const themeOptions = [
    { value: 'light', label: 'Light', icon: Sun },
    { value: 'dark', label: 'Dark', icon: Moon },
    { value: 'system', label: 'System', icon: Laptop },
  ];

  return (
    <div className={`relative inline-block ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle display theme"
        aria-expanded={isOpen}
        className="flex items-center gap-2 p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100/70 hover:bg-slate-200/70 dark:bg-slate-800/60 dark:hover:bg-slate-700/60 transition-all duration-200 border border-slate-200/60 dark:border-slate-700/60 focus:outline-none focus:ring-2 focus:ring-brand-500/50"
      >
        <span className="relative flex items-center justify-center w-5 h-5">
          {mode === 'system' ? (
            <Laptop className="w-4 h-4 transition-transform duration-200" />
          ) : isDark ? (
            <Moon className="w-4 h-4 transition-transform duration-200 text-brand-400" />
          ) : (
            <Sun className="w-4 h-4 transition-transform duration-200 text-amber-500" />
          )}
        </span>
        {showLabel && (
          <span className="text-xs font-medium capitalize hidden sm:inline-block">
            {mode}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 py-1.5 bg-white dark:bg-slate-900 rounded-xl shadow-elevated-light dark:shadow-elevated-dark border border-slate-200 dark:border-slate-800 z-50 animate-fade-in backdrop-blur-md">
          {themeOptions.map((opt) => {
            const Icon = opt.icon;
            const isSelected = mode === opt.value;
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => {
                  dispatch(setTheme(opt.value));
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-1.5 text-xs font-medium transition-colors ${
                  isSelected
                    ? 'text-brand-600 dark:text-brand-400 bg-brand-50/60 dark:bg-brand-950/40'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/70'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Icon className="w-3.5 h-3.5" />
                  <span>{opt.label}</span>
                </div>
                {isSelected && <Check className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
