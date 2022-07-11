import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const FilterColumn = () => {
  const {
    number,
    handleInputNumberFilter,
    handleFilterNumberButton,
    handleColumnOptions,
    handleComparisonOptions,
    columnDefault,
  } = useContext(PlanetsContext);

  return (
    <section>
      <select
        name="column-options"
        data-testid="column-filter"
        onChange={ handleColumnOptions }
      >
        {
          columnDefault
            .map((item) => (
              <option
                value={ item }
                key={ item }
              >
                { item }
              </option>))
        }
      </select>
      <select
        name="comparison-options"
        data-testid="comparison-filter"
        onChange={ handleComparisonOptions }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        onChange={ handleInputNumberFilter }
        value={ number }
        data-testid="value-filter"
      />
      <button
        type="button"
        onClick={ handleFilterNumberButton }
        data-testid="button-filter"
      >
        Filtrar
      </button>
      <section>
        <p>teste</p>
      </section>
    </section>
  );
};

export default FilterColumn;
