import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useOnClickOutside } from '@hooks';

const LANGS = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'pt', label: 'PT', name: 'Português' },
];

const StyledLangToggle = styled.div`
  position: relative;
  margin-left: 10px;
  font-family: var(--font-mono);
  font-size: var(--fz-xxs);

  .lang-trigger {
    ${({ theme }) => theme.mixins.flexCenter};
    gap: 4px;
    height: 40px;
    padding: 0 6px;
    background-color: transparent;
    border: 0;
    color: var(--green);
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    transition: var(--transition);

    &:hover,
    &:focus-visible {
      color: var(--green);
    }

    .chevron {
      width: 12px;
      height: 12px;
      transition: transform 0.2s ease;
      transform: rotate(${props => (props.open ? '180deg' : '0deg')});
    }
  }

  .lang-menu {
    position: absolute;
    top: calc(100% + 4px);
    right: 0;
    min-width: 120px;
    margin: 0;
    padding: 8px 0;
    list-style: none;
    background-color: var(--light-bg);
    border-radius: var(--border-radius);
    box-shadow: 0 10px 30px -15px var(--bg-shadow);
    z-index: 12;

    li button {
      display: block;
      width: 100%;
      padding: 8px 16px;
      background-color: transparent;
      border: 0;
      color: var(--light-gray);
      text-align: left;
      white-space: nowrap;
      cursor: pointer;
      transition: var(--transition);

      &:hover,
      &:focus-visible {
        color: var(--green);
        background-color: var(--green-tint);
      }

      &[aria-current='true'] {
        color: var(--green);
      }
    }
  }
`;

const ChevronIcon = () => (
  <svg
    className="chevron"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const LangToggle = () => {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState('en');

  const wrapperRef = useRef();
  useOnClickOutside(wrapperRef, () => setOpen(false));

  useEffect(() => {
    let current = localStorage.getItem('lang');
    if (!LANGS.some(l => l.code === current)) {
      current = 'en';
    }
    document.documentElement.setAttribute('lang', current);
    setLang(current);
    setMounted(true);
  }, []);

  useEffect(() => {
    const onKeyDown = e => {
      if (e.key === 'Escape') {
        setOpen(false);
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  const selectLang = next => {
    setOpen(false);
    if (next === lang) {
      return;
    }
    document.documentElement.setAttribute('lang', next);
    try {
      localStorage.setItem('lang', next);
    } catch (e) {
      // ignore storage failures (private mode etc.)
    }
    setLang(next);
  };

  const active = LANGS.find(l => l.code === lang) || LANGS[0];

  return (
    <StyledLangToggle ref={wrapperRef} open={open}>
      <button
        type="button"
        className="lang-trigger"
        onClick={() => setOpen(!open)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Select language">
        {mounted ? active.label : ''}
        <ChevronIcon />
      </button>

      {open && (
        <ul className="lang-menu" role="listbox">
          {LANGS.map(({ code, name }) => (
            <li key={code} role="option" aria-selected={lang === code}>
              <button type="button" onClick={() => selectLang(code)} aria-current={lang === code}>
                {name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </StyledLangToggle>
  );
};

export default LangToggle;
