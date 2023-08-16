import React, { useCallback, useContext } from 'react';
import SWContext from '../context/SWContext';

export default function FilterByName() {
  const { filterByName, setFilterByName } = useContext(SWContext);

  const handleChange = useCallback(({ target: { value } }) => {
    setFilterByName(value);
  }, [setFilterByName]);

  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ handleChange }
        value={ filterByName }
        placeholder="Digite um planeta"
      />
    </div>
  );
}
