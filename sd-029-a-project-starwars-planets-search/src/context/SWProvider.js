import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SWContext from './SWContext';
import fetchPlanetsAPI from '../fetch/fetchPlanetsAPI';

const negative = -1;

export const filterByNameFunction = {
  name: (name, planet) => planet.name.toLowerCase().includes(name.toLowerCase()),
};

function SWProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [tableColumns, setTableColumns] = useState([]);
  const [error, setError] = useState(null);
  const [filterByName, setFilterByName] = useState('');
  const [savedData, setSavedData] = useState([]);
  const [filterByNumber, setFilterByNumber] = useState([]);
  const [columnOptions, setColumnOptions] = useState([
    'population',
    'rotation_period',
    'orbital_period',
    'diameter',
    'surface_water',
  ]);

  useEffect(() => {
    setLoading(true);
    fetchPlanetsAPI()
      .then((dataAPI) => {
        setData(dataAPI);
        setSavedData(dataAPI);
        setTableColumns(Object.keys(dataAPI[0]));
      })
      .catch((err) => setError(err))
      .finally(setLoading(false));
  }, []);

  useEffect(() => {
    const compareColumnToValue = {
      'igual a': (column, value) => column === value,
      'maior que': (column, value) => column > value,
      'menor que': (column, value) => column < value,
    };
    const filteredData = savedData
      .filter((planet) => (
        planet.name.toLowerCase().includes(filterByName.toLowerCase())
        && (
          filterByNumber.every(({ comparison, column, value }) => (
            compareColumnToValue[comparison](Number(planet[column]), Number(value)))))
      ));
    setData(filteredData);
  }, [filterByName, savedData, filterByNumber]);

  const addFilterByNumber = useCallback((filter) => {
    setColumnOptions((prevOptions) => prevOptions
      .filter((option) => option !== filter.column));
    setFilterByNumber((prevState) => [...prevState, filter]);
  }, []);

  const dellFilterByNumber = useCallback((filter) => {
    if (filter === 'ALL') {
      setColumnOptions([
        'population',
        'rotation_period',
        'orbital_period',
        'diameter',
        'surface_water',
      ]);
      return setFilterByNumber([]);
    }
    setColumnOptions((prevOptions) => [...prevOptions, filter.column]);
    setFilterByNumber((prevState) => (
      prevState.filter((prevFilter) => prevFilter.column !== filter.column)));
  }, []);

  const sortByColumn = useCallback((columnToBeSorted) => {
    const order = {
      DESC: (a, b) => (a > b ? negative : 1),
      ASC: (a, b) => (a < b ? negative : 1),
    };
    const sortedColumn = [...data].sort((a, b) => {
      const secondRow = Number(b[columnToBeSorted.column]);
      const firstRow = Number(a[columnToBeSorted.column]);
      if (!secondRow) return negative;
      if (!firstRow) return 1;
      return order[columnToBeSorted.order](firstRow, secondRow);
    });
    setData(sortedColumn);
  }, [data]);

  const values = {
    data,
    loading,
    tableColumns,
    error,
    setFilterByName,
    filterByName,
    columnOptions,
    filterByNumber,
    addFilterByNumber,
    dellFilterByNumber,
    sortByColumn,
  };
  return (
    <SWContext.Provider value={ values }>
      { children }
    </SWContext.Provider>
  );
}

SWProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SWProvider;
