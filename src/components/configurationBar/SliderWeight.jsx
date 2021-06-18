import React from 'react';

export const SliderWeight = ({ setWeight }) => {
  return (
    <div>
      <div>
        <label htmlFor="weight-range">Выберите вес груза</label>
      </div>
      <input
        type="range"
        name=""
        id="weight-range"
        min="1"
        max="100"
        onChange={(e) => setWeight(e.currentTarget.value)}
      />
    </div>
  );
};
