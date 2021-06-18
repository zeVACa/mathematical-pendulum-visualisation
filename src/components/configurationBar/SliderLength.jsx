import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeLength } from '../../redux/physicalSpecifications/actions';

export const SliderLength = () => {
  const dispatch = useDispatch();
  const { length } = useSelector((state) => state.physics);

  return (
    <div>
      <div>
        <label htmlFor="length-range">Выбирите длину подеса</label>
      </div>
      <input
        type="range"
        value={length}
        id="length-range"
        min="1"
        max="100"
        onChange={(e) => dispatch(changeLength(e.currentTarget.value))}
      />
    </div>
  );
};
