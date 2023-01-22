import React from 'react';
import css from './Contacts.module.css';
import { useSelector } from 'react-redux';
import { getVisibleContacts } from 'redux/selectors';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';

export const Contacts = id => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(removeContact(id));
  return (
    <ul className={css.ContactsList}>
      {contacts.map(contact => (
        <li className={css.ContactsList__item} key={contact.id}>
          {contact.name + ' : ' + contact.number}
          {
            <button
              className={css.ContactsList__button}
              type="button"
              name="delete"
              onClick={handleDelete}
            >
              delete
            </button>
          }
        </li>
      ))}
    </ul>
  );
};
