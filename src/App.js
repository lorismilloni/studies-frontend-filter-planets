import React from 'react';
import './App.css';
import PlanetsProvider from './context/PlanetsProvider';
import Table from './components/Table';
import FilterName from './components/FilterName';
import FilterColumn from './components/FilterColumn';

function App() {
  return (
    <PlanetsProvider>
      <FilterName />
      <FilterColumn />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
