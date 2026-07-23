import { css } from 'styled-components';

const variables = css`
  :root {
    --dark-bg: #050505;
    --bg: #0a0a0a;
    --light-bg: #151515;
    --lightest-bg: #262626;
    --bg-shadow: rgba(0, 0, 0, 0.7);
    --dark-gray: #52525b;
    --gray: #9b9b9b;
    --light-gray: #b8b8b8;
    --lightest-gray: #ededed;
    --white: #ffffff;
    --green: #c6f432;
    --green-tint: rgba(198, 244, 50, 0.1);
    --pink: #f57dff;
    --blue: #57cbff;

    --nav-bg: rgba(10, 10, 10, 0.85);
    --hero-glow: radial-gradient(
      ellipse at center,
      rgba(198, 244, 50, 0.2) 0%,
      rgba(198, 244, 50, 0.05) 40%,
      transparent 70%
    );

    --font-sans: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui,
      sans-serif;
    --font-serif: 'Fraunces', 'Georgia', 'Times New Roman', serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

    --border-radius: 4px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;

    --tab-height: 42px;
    --tab-width: 120px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    --hamburger-width: 30px;

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }

  /* Light theme — warm off-white; applied when <html data-theme="light"> */
  :root[data-theme='light'] {
    --dark-bg: #eceae4;
    --bg: #f7f6f2;
    --light-bg: #ffffff;
    --lightest-bg: #e7e3d9;
    --bg-shadow: rgba(30, 26, 18, 0.12);
    --dark-gray: #c3bcae;
    --gray: #5b554b;
    --light-gray: #3a352c;
    --lightest-gray: #1a1a1a;
    --white: #171717;
    --green: #477309;
    --green-tint: rgba(71, 115, 9, 0.1);

    --nav-bg: rgba(247, 246, 242, 0.85);
    --hero-glow: radial-gradient(
      ellipse at center,
      rgba(71, 115, 9, 0.14) 0%,
      rgba(71, 115, 9, 0.04) 40%,
      transparent 70%
    );
  }
`;

export default variables;
