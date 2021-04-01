import { useState } from 'react';
import { CheckboxInput, Wrapper, CheckboxControl } from './Checkbox.style';
import CheckboxSvg from '../svgs/Checkbox.svg';

const Checkbox = ({ option }) => {
  const [state, setState] = useState({});

  return (
    <Wrapper>
      <CheckboxInput>
        <input
          onChange={(e) =>
            setState((s) => ({ ...s, [e.target.name]: e.target.checked }))
          }
          value={state}
          type='checkbox'
          name={option}
        />
        <CheckboxControl className='checkbox__control'>
          <CheckboxSvg />
        </CheckboxControl>
      </CheckboxInput>
    </Wrapper>
  );
};

export default Checkbox;
