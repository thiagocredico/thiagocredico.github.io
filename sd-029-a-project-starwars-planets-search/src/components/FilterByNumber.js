import React, { useCallback, useContext, useEffect, useReducer } from 'react';
import SWContext from '../context/SWContext';

export default function FilterByNumber() {
  const { addFilterByNumber, columnOptions, dellFilterByNumber } = useContext(SWContext);
  const [filterByNumber, setFilterByNumber] = useReducer((state, newState) => ({
    ...state, ...newState }), {
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });
  const { column, comparison, value } = filterByNumber;

  useEffect(() => {
    setFilterByNumber({ column: columnOptions[0] });
  }, [columnOptions]);

  const handleChange = useCallback(({ target: { name, value: targetValue } }) => {
    setFilterByNumber({ [name]: targetValue });
  }, []);

  const addFilterByNumberToContext = useCallback(() => {
    addFilterByNumber(filterByNumber);
  }, [addFilterByNumber, filterByNumber]);

  const dellAll = useCallback(() => {
    dellFilterByNumber('ALL');
  }, [dellFilterByNumber]);

  return (
    <div className="filterNumber">
      <label htmlFor="Coluna">
        Coluna
        <select
          id="Coluna"
          name="column"
          onChange={ handleChange }
          value={ column }
          data-testid="column-filter"
        >
          { columnOptions.map((opt, index) => <option key={ index }>{ opt }</option>) }
        </select>
      </label>
      <label htmlFor="Operador">
        Operador
        <select
          id="Operador"
          name="comparison"
          onChange={ handleChange }
          value={ comparison }
          data-testid="comparison-filter"
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <label htmlFor="Valor">
        Valor
        <input
          id="Valor"
          name="value"
          type="number"
          onChange={ handleChange }
          value={ value }
          data-testid="value-filter"
          placeholder="0"
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ addFilterByNumberToContext }
        disabled={ columnOptions.length === 0 }
      >
        Filtrar
      </button>
      <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ dellAll }
      >
        Remover todas filtragens
      </button>
    </div>
  );
}
