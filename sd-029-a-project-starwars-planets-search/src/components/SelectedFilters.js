import React, { useCallback, useContext } from 'react';
import PropTypes from 'prop-types';
import SWContext from '../context/SWContext';

export default function SelectedFilters({ filter }) {
  const { dellFilterByNumber } = useContext(SWContext);

  const buttonDelete = useCallback(
    () => dellFilterByNumber(filter),
    [filter, dellFilterByNumber],
  );

  return (
    <div
      key={ filter.column }
      data-testid="filter"
    >
      { ` ${filter.column} ${filter.comparison} ${filter.value} `}
      <button
        type="button"
        onClick={ buttonDelete }
      >
        X
      </button>
    </div>
  );
}

SelectedFilters.propTypes = {
  filter: PropTypes.shape({
    column: PropTypes.string.isRequired,
    comparison: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
};
