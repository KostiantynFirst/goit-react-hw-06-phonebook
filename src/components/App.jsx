import { useState } from "react";
// import { nanoid } from "nanoid";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AddContactForm } from "./AddContactForm/AddContactForm";
import { ContactList } from "./Contacts/Contacts";
// import useLocalStorage from "hooks/useLocalStorage";
import { PhonebookContainer, PhonebookHeadings, PhonebookContacts, PhonebookContactsHeading } from "../components/Phonebook/Phonebook.styled";
import { Filter } from "./Filter/Filter";

import { nanoid } from "@reduxjs/toolkit";
import { addContact, deleteContact, setFilter } from "redux/contactSlices";
import { useSelector, useDispatch } from "react-redux";

export const App = () => {

const contacts = useSelector(state => state.contacts);
const filter = useSelector(state => state.filter);
const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

   const handleSubmit = e => {
      e.preventDefault();
      dispatch(addContact({id: nanoid(), name, number}));

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
  
      // const newContact = { id: nanoid(), name, number };
      //   dispatch(addContact({id: nanoid(), name, number}));
      //   resetForm();
      };


  
   const resetForm = () => {
        setName('');
        setNumber('');
    }   

  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
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

