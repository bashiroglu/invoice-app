const animationReducer = (state = {}, { type }) => {
  switch (type) {
    case 'mobile':
      return {
        state: {
          mobile: true,
          initial: { x: -300 },
          animate: { x: 0 },
          exit: { x: -800, transition: { duration: 0.5 } },
        },
      };
    case 'tablet':
      return {
        state: {
          tablet: true,
          initial: { x: -300 },
          animate: { x: 0 },
          exit: { x: -800, transition: { duration: 0.5 } },
        },
      };
    case 'desktop':
      return {
        state: {
          desktop: true,
          initial: { x: -100 },
          animate: { x: 100 },
          exit: { x: -600, transition: { duration: 0.5 } },
        },
      };
    default:
      return state;
  }
};

export default animationReducer;
