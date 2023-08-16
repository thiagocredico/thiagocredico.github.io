import React, { useContext } from 'react';
import SWContext from '../context/SWContext';
import FilterByName from './FilterByName';
import FilterByNumber from './FilterByNumber';
import SelectedFilters from './SelectedFilters';
import SortFilters from './SortFilters';

export default function Table() {
  const { data, loading, tableColumns, filterByNumber } = useContext(SWContext);

  // if (error) {
  //   return (
  //     <main>
  //       <h1>Um erro inesperado aconteceu</h1>
  //     </main>
  //   );
  // }
  return (
    <div>
      {loading && <p>Carregando...</p>}
      <FilterByName />
      <FilterByNumber />
      <SortFilters />
      <div>
        {filterByNumber.map((filter) => (
          <SelectedFilters filter={ filter } key={ filter.column } />))}
      </div>
      <table>
        <thead>
          <tr>
            { tableColumns.map((column) => (
              <th key={ column }>{ column }</th>
            )) }
          </tr>
        </thead>
        <tbody>
          {data.map((planet) => (
            <tr key={ planet.name }>
              {
                Object.entries(planet).map(([column, value]) => (
                  <td key={ column } data-testid={ column === 'name' && 'planet-name' }>
                    {value}
                  </td>))
              }
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
