import React from 'react';
import { SliderLength } from './SliderLength';
import { SliderWeight } from './SliderWeight';

export const FormConfiguration = ({ setLength, setWeight }) => {
  return (
    <div>
      <SliderLength setLength={setLength} />
      <SliderWeight setWeight={setWeight} />
    </div>
  );
};
