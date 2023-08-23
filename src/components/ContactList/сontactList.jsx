import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import style from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={style.wrap}>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <span className={style.contact}>{name}: </span>
          <span className={style.contact}>{number}</span>
          <button
            onClick={() => handleDeleteContact(id)}
            className={style.delete}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
