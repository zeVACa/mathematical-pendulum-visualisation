import React from 'react';

import { useSelector } from 'react-redux';

export const Description = () => {
  const { length, weight } = useSelector((state) => state.physics);

  return (
    <div>
      <h2>Вес груза: {length}кг</h2>
      <h2>Длина подвеса: {weight}м</h2>
    </div>
  );
};
