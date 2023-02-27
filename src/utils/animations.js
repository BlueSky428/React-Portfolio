// Hero animations //

const cubicBezierEase = [0.645, 0.045, 0.355, 1];
const noMotion = {
  opacity: 0.01,
  y: 0,
  x: 0,
};
// Hero StyledTextBox
export const parentHeroTextVariants = {
  noMotion: noMotion,
  hidden: { opacity: 0.01 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

//   Hero StyledTextBox children
export const childHeroTextVariants = {
  hidden: { opacity: 0.01, y: '2rem' },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: cubicBezierEase,
    },
  },
};

// Mt. Fuji
export const fujiVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.7,
      duration: 0.7,
      ease: cubicBezierEase,
    },
  },
};

// Sun
export const sunVariants = {
  noMotion: noMotion,
  hidden: { opacity: 0.01, y: '20rem' },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.8,
      duration: 1.6,
      ease: cubicBezierEase,
    },
  },
};

// Clouds around sun
export const leftCloudVariants = {
  noMotion: noMotion,
  hidden: { opacity: 0.01, x: '-10rem', scaleX: '-1' },
  visible: {
    opacity: 1,
    x: 0,
    scaleX: '-1',
    transition: {
      delay: 1.8,
      duration: 1.8,
      ease: cubicBezierEase,
    },
  },
};

export const rightCloudVariants = {
  noMotion: noMotion,
  hidden: { opacity: 0.01, x: '10rem' },
  visible: {
    opacity: 1,
    x: 0,
    // x: [0, -40],
    transition: {
      delay: 1.8,
      duration: 1.8,
      ease: cubicBezierEase,

      // repeat: Infinity,
      // repeatType: 'reverse',
      // type: 'tween',
    },
  },
};

export const branchVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.7,
      duration: 0.7,
      ease: cubicBezierEase,
    },
  },
};
