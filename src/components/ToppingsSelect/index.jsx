import React, { useState } from 'react';
import Topping from '../Topping';
import './style.css';

const ToppingsSelect = ({ toppings }) => {
  const [select, setSelect] = useState(toppings);

  const handleChange = (index, newChecked) => {
    const newThings = [...select];
    newThings[index].selected = newChecked;
    setSelect(newThings);
  };

  let count = 0;
  select.forEach((topping) => (count += topping.selected));

  // let sum = 0;
  // select.forEach((topping) => (sum += topping.price));

  return (
    <>
      <p>Choose as many toppings as you want</p>
      <p>
        Selected toppings: {count}, total price: {sum} Euro
      </p>

      <div class="toppings">
        {toppings.map((topping, index) => (
          <Topping
            topping={topping}
            key={topping.name}
            onChange={(newChecked) => handleChange(index, newChecked)}
          />
        ))}
      </div>
    </>
  );
};

export default ToppingsSelect;
