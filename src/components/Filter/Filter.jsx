// import React from 'react';
import css from './Filter.module.css';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { changeFilter } from 'redux/filterSlice';
const filterInputId = nanoid();

export const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = e => {
    // setFilter({ filter: e.target.value });

    const normalizedValue = e.target.value.toLowerCase();

    dispatch(changeFilter(normalizedValue));
  };

  // const getVisibleContacts = () => {

  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  // const visibleContacts = getVisibleContacts();

  return (
    <div className={css.Filter}>
      Find contacts by name
      <input
        className={css.Filter__input}
        type="text"
        value={value}
        onChange={onChange}
        id={filterInputId}
      />
    </div>
  );
};
