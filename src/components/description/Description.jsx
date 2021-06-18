import React from 'react';

export const Description = ({ length, weight }) => {
  return (
    <div>
      <h2>Вес груза: {length}кг</h2>
      <h2>Длина подвеса: {weight}м</h2>
    </div>
  );
};
