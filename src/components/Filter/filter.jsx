import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateFilter } from '../../redux/contactsSlice';
import style from './filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  const handleFilterChange = newFilterValue => {
    dispatch(updateFilter(newFilterValue));
  };

  return (
    <div className={style.filter}>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        type="text"
        id="filter"
        value={filter}
        onChange={event => handleFilterChange(event.target.value)}
      />
    </div>
  );
};

export default Filter;
