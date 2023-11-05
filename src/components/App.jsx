import { useState } from "react";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AddContactForm } from "./AddContactForm/AddContactForm";
import { ContactList } from "./Contacts/Contacts";
import useLocalStorage from "hooks/useLocalStorage";
import { PhonebookContainer, PhonebookHeadings, PhonebookContacts, PhonebookContactsHeading } from "../components/Phonebook/Phonebook.styled";
import { Filter } from "./Filter/Filter";

export const App = () => {

  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

   const handleSubmit = e => {
      e.preventDefault();

      const isNameExist = contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      );
      
      const isNumberExist = contacts.some(
        contact => contact.number === number,
      );
  
      if (isNameExist) {
        toast.error('Contact with such name already exists!', {
          autoClose: 3000
        });
        resetForm();
        return;
      }
  
      if (isNumberExist) {
        toast.error('Contact with such number already exists!', {
          autoClose: 3000
        });
        resetForm();
        return;
      }
  
      const newContact = { id: nanoid(), name, number };
        setContacts((prevContacts) => [...prevContacts, newContact]);
        resetForm();
      };

  
   const resetForm = () => {
        setName('');
        setNumber('');
    }   

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDeleteContact = contactId => {
    setContacts((prevContacts) => 
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  return (
 
    <PhonebookContainer>
      <PhonebookHeadings>Phonebook</PhonebookHeadings>
    
  <AddContactForm 
    handleSubmit={handleSubmit}
    name={name}
    number={number}
    onInputName={(e) => setName(e.currentTarget.value)}
    onInputNumber={(e) => setNumber(e.currentTarget.value)}
  />
  <PhonebookContacts>
    <PhonebookContactsHeading>Contacts</PhonebookContactsHeading>
     
  <Filter 
    value={filter} 
    onChange={changeFilter} 
  />

  <ContactList 
    filteredContacts={filteredContacts}
    handleDeleteContact={handleDeleteContact} 
  />

<ToastContainer/>

</PhonebookContacts>
    

    </PhonebookContainer> 
    
    );
 

};

