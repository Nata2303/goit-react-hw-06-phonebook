import React, { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import style from './contactForm.module.css'



const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();


    onAddContact(name, number);

    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <label htmlFor="name" className={style.label}>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
          required
        />
      </label>

      <label htmlFor="number" className={style.label}>
        Number
        <input
          type="text"
          name="number"
          value={number}
          onChange={handleNumberChange}
          required
        />
      </label>

      <button type="submit" className={style.add}>
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm

