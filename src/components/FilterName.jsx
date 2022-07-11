import React, { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const FilterName = () => {
  const [input, setInput] = useState([]);
  const { filterPlanets } = useContext(PlanetsContext);

  useEffect(() => {}, []);

  const handleChange = (value) => {
    setInput(value);
    filterPlanets(value);
  };

  return (
    <input
      type="text"
      onChange={ ({ target: { value } }) => handleChange(value) }
      value={ input }
      data-testid="name-filter"
    />
  );
};

export default FilterName;
