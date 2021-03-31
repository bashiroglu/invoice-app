import { motion } from 'framer-motion';

const BottomArrow = ({ open }, props) => {
  const animation = {
    initial: {
      rotate: 0
    },
    rotate: { rotate: 180 }
  };

  return (
    <motion.div
      variants={animation}
      initial='initial'
      animate={open ? 'inital' : 'rotate'}
    >
      <svg
        width='10'
        height='7'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
      >
        <path
          d='M1 1l4.228 4.228L9.456 1'
          stroke='#7C5DFA'
          strokeWidth='2'
        />
      </svg>
    </motion.div>
  );
};

export default BottomArrow;
