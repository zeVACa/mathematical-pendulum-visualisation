import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeWeight } from '../../redux/physicalSpecifications/actions';

export const SliderWeight = () => {
  const dispatch = useDispatch();
  const { weight } = useSelector((state) => state.physics);

  return (
    <div>
      <div>
        <label htmlFor="weight-range">Выберите вес груза</label>
      </div>
      <input
        type="range"
        value={weight}
        id="weight-range"
        min="1"
        max="100"
        onChange={(e) => dispatch(changeWeight(e.currentTarget.value))}
      />
    </div>
  );
};
