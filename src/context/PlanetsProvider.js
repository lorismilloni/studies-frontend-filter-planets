import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function Planets({ children }) {
  const [data, setData] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [number, setNumber] = useState(0);
  const [columnDefault, setColumnDefault] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  useEffect(() => {
    const fetchPlanets = async () => {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const fuckingPlanets = await fetch(url)
        .then((response) => response.json())
        .then((result) => result.results)
        .catch((error) => `Aconteceu um erro :( ${error}`);

      setData(fuckingPlanets);
      setPlanets(fuckingPlanets);
    };
    fetchPlanets();
  }, []);

  // essa requisição foi feita seguindo esse link que ensina a fazer algo que o course não ensina: https://designcode.io/react-hooks-handbook-fetch-data-from-an-api

  /* const removePlanet = (planetToRemove) => {
    const changePlanets = [...data.filter((planet) => planet !== planetToRemove)];
    setPlanets(changePlanets);
  }; */
  // console.log(data);

  const filterPlanets = (input) => {
    const changePlanets = [...data.filter((planet) => planet.name.includes(input))];
    setPlanets(changePlanets);
  };

  const handleInputNumberFilter = ({ target: { value } }) => {
    setNumber(value);
  };

  const handleColumnOptions = ({ target: { value } }) => {
    setColumn(value);
  };

  const handleComparisonOptions = ({ target: { value } }) => {
    setComparison(value);
  };

  const handleFilterNumberButton = () => {
    if (comparison === 'maior que') {
      const filter = planets.filter((item) => item[column] > (+number));
      setPlanets(filter);
    } else if (comparison === 'menor que') {
      const filter = planets.filter((item) => item[column] < (+number));
      setPlanets(filter);
    } else {
      const filter = planets.filter((item) => item[column] === number);
      setPlanets(filter);
    }
    const filterColumnOption = columnDefault.filter((item) => item !== column);
    setColumnDefault(filterColumnOption);
  };

  const contextValue = {
    data,
    planets,
    filterPlanets,
    filterByNumericValues: [
      {
        column,
        comparison,
        value: number,
      },
    ],
    number,
    handleInputNumberFilter,
    handleColumnOptions,
    handleComparisonOptions,
    handleFilterNumberButton,
    columnDefault,
  };

  return (
    <PlanetsContext.Provider value={ contextValue }>
      {children}
    </PlanetsContext.Provider>
  );
}

Planets.propTypes = {
  children: PropTypes.node,
}.isRequired;

// como definir props de children: https://stackoverflow.com/questions/42122522/reactjs-what-should-the-proptypes-be-for-this-props-children

export default Planets;

// esse provider foi feito seguindo a monitoria do XPFlix do dia 17/03;
