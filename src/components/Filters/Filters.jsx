import { Children, cloneElement, useState } from 'react';
import cs from './Filters.module.scss';
import cx from 'classnames';

const Filters = ({ active = [], children, onSetFilter }) => {
  const [activeFilters, setActiveFilters] = useState(active);

  const clearFilters = () =>
    setActiveFilters(() => {
      const nextFilters = [];
      if (typeof onSetFilter === 'function') onSetFilter(nextFilters);
      return nextFilters;
    });

  const setFilters = (e) =>
    setActiveFilters((currentFilters) => {
      const clickedFilter = e.target.name;
      const nextFilters = currentFilters.includes(clickedFilter)
        ? currentFilters.filter((filter) => filter !== clickedFilter)
        : [...currentFilters, clickedFilter];
      if (typeof onSetFilter === 'function') onSetFilter(nextFilters);
      return nextFilters;
    });

  return (
    <div className={cx(cs.filters)}>
      {Children.map(children, (child) =>
        cloneElement(child, {
          onClick: setFilters,
          isActive: activeFilters.includes(child.props.name),
        })
      )}
      <button
        className={cx(cs.resetButton)}
        onClick={clearFilters}
      >
        Clear filters
      </button>
    </div>
  );
};

export default Filters;
