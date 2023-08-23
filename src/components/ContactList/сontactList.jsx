import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import style from './ContactList.module.css';
import { selectContacts } from '../../redux/selectors'; // Імпорт селектора

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts); // Використання селектора

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
