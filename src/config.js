module.exports = {
  email: 'luis.scspg@gmail.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/lulasp',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/luis.serpapinto',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/luis-serpa-pinto/',
    }
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#c6f432',
    navy: '#0a0a0a',
    darkNavy: '#050505',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
