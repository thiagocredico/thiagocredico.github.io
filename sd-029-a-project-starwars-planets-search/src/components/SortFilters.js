import React, { useCallback, useContext, useReducer } from 'react';
import SWContext from '../context/SWContext';

export default function SortFilters() {
  const { sortByColumn, columnOptions } = useContext(SWContext);
  const [sortOptions, setSortOptions] = useReducer((state, newState) => ({
    ...state, ...newState }), {
    order: 'ASC',
    column: 'population',
  });

  const { column, order } = sortOptions;

  const handleChange = useCallback(({ target: { name, value: targetValue } }) => {
    setSortOptions({ [name]: targetValue });
  }, []);

  const handleSort = useCallback(() => {
    sortByColumn(sortOptions);
  }, [sortOptions, sortByColumn]);

  return (
    <div className="filterSort">
      <label htmlFor="column">
        Ordenar
        <select
          name="column"
          id="column"
          onChange={ handleChange }
          value={ column }
          data-testid="column-sort"
        >
          { columnOptions.map((opt, index) => <option key={ index }>{ opt }</option>) }
        </select>
      </label>
      <div>
        <label htmlFor="ASC">
          ASC
          <input
            name="order"
            type="radio"
            id="ASC"
            value="ASC"
            data-testid="column-sort-input-asc"
            onChange={ handleChange }
            checked={ order === 'ASC' }
          />
        </label>
        <label htmlFor="DESC">
          DESC
          <input
            name="order"
            type="radio"
            id="DESC"
            value="DESC"
            data-testid="column-sort-input-desc"
            onChange={ handleChange }
            checked={ order === 'DESC' }
          />
        </label>
      </div>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ handleSort }
      >
        Ordenar
      </button>
    </div>
  );
}
