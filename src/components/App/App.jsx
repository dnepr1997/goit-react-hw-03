import css from './App.module.css';
import { useState } from 'react';
import { ContactList } from '../ContactList/ContactList';
import { SearchBar } from '../SearchBar/SearchBar';
import { ContactForm } from '../ContactForm/ContactForm';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [inputValue, setInputValue] = useState('');
  const filterSearch = contacts.filter(contact =>
    contact.name.toLowerCase().includes(inputValue.toLowerCase())
  );
  const addUser = newUser => {
    setUsers(prevUsers => {
      return [...prevUsers, { id: Date.now(), name: 'Random Rand', number: '647-35-37' }];
    });
  };
  return (
    <div className={css.form}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addUser} />
      <SearchBar SearchValue={inputValue} SearchOnChange={evt => setInputValue(evt.target.value)} />
      <ContactList contactsItems={filterSearch} />
    </div>
  );
};
