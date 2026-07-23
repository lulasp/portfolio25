import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledToggle = styled.button`
  ${({ theme }) => theme.mixins.flexCenter};
  width: 40px;
  height: 40px;
  margin-left: 10px;
  padding: 0;
  background-color: transparent;
  border: 0;
  color: var(--green);
  cursor: pointer;
  transition: var(--transition);

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover,
  &:focus-visible {
    color: var(--green);
    transform: translateY(-2px);
  }
`;

const SunIcon = () => (
  <svg
    className="feather"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = () => (
  <svg
    className="feather"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const [themeName, setThemeName] = useState('dark');

  // Read the theme the no-flash script applied; if none, derive it from the
  // stored choice or the system preference and apply it.
  useEffect(() => {
    let current = document.documentElement.getAttribute('data-theme');
    if (!current) {
      const stored = localStorage.getItem('theme');
      current = stored || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
      document.documentElement.setAttribute('data-theme', current);
    }
    setThemeName(current);
    setMounted(true);

    const mq = window.matchMedia('(prefers-color-scheme: light)');
    const onSystemChange = e => {
      if (!localStorage.getItem('theme')) {
        const next = e.matches ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        setThemeName(next);
      }
    };
    mq.addEventListener('change', onSystemChange);
    return () => mq.removeEventListener('change', onSystemChange);
  }, []);

  const toggle = () => {
    const next = themeName === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('theme', next);
    } catch (e) {
      // ignore storage failures (private mode etc.)
    }
    setThemeName(next);
  };

  return (
    <StyledToggle
      onClick={toggle}
      aria-label={`Switch to ${themeName === 'dark' ? 'light' : 'dark'} mode`}
      title="Toggle theme">
      {mounted && (themeName === 'dark' ? <SunIcon /> : <MoonIcon />)}
    </StyledToggle>
  );
};

export default ThemeToggle;
