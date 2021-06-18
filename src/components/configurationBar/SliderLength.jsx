import React from 'react';

export const SliderLength = ({ setLength }) => {
  return (
    <div>
      <div>
        <label htmlFor="length-range">Выбирите длину подеса</label>
      </div>
      <input
        type="range"
        name=""
        id="length-range"
        min="1"
        max="100"
        onChange={(e) => setLength(e.currentTarget.value)}
      />
    </div>
  );
};
