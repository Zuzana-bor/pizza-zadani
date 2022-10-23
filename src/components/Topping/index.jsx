import React, { useState } from 'react';
import Check from '../Check';
import ToppingsSelect from '../ToppingsSelect';
import './style.css';

const Topping = ({ topping, onChange }) => {
  // const [checked, setChecked] = useState(false);
  // const handleChange = (newChecked) => {
  //   setChecked(newChecked);
  // };

  return (
    <div className="topping">
      <Check checked={topping.selected} onChange={onChange} />
      <span className="topping__content">
        {topping.name}: {topping.price} €
      </span>
    </div>
  );
};

export default Topping;
