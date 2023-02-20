// Hero animations //

// Hero StyledTextBox
export const parentHeroTextVariants = {
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
      ease: [0.645, 0.045, 0.355, 1],
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
      ease: [0.645, 0.045, 0.355, 1],
    },
  },
};

// Sun
export const sunVariants = {
  hidden: { opacity: 0.01, y: '20rem' },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.8,
      duration: 1.6,
      ease: [0.645, 0.045, 0.355, 1],
    },
  },
};
