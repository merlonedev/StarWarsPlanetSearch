import React, { useContext } from 'react';
import Context from '../../context/Context';
import { columns, comparisonMethods } from '../../utils/data';

const UsedFilters = () => {
  const {
    setFilterByNumericValue,
    filters: { filterByNumericValue },
  } = useContext(Context);

  const renderFilterColumn = (type) => {
    switch (type) {
    case columns[0]:
      return 'Population ';
    case columns[1]:
      return 'Orbital Period ';
    case columns[2]:
      return 'Diameter ';
    case columns[3]:
      return 'Rotation Period ';
    case columns[4]:
      return 'Surface Water ';
    default:
      return null;
    }
  };

  const renderComparisonMethod = (type) => {
    switch (type) {
    case comparisonMethods[0]:
      return 'bigger then ';
    case comparisonMethods[1]:
      return 'less than ';
    case comparisonMethods[2]:
      return 'equal to';
    default:
      return null;
    }
  };

  const renderDeleteIcon = (index) => (
    <button
      type="button"
      className="delete-button"
      onClick={ () => {
        setFilterByNumericValue(filterByNumericValue
          .filter((_filter, i) => i !== index));
      } }
    >
      <span role="img" aria-label="delete">❌</span>
    </button>
  );

  return (
    <div>
      <ul>
        {
          filterByNumericValue.map(({ column, comparison, value }, index) => (
            <li key={ `filter-${index}` } data-testid="filter">
              {renderFilterColumn(column)}
              {renderComparisonMethod(comparison)}
              {`${value}  `}
              { renderDeleteIcon(index) }
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default UsedFilters;
