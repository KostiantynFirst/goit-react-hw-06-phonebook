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

export const App = () => {


  const [name, setName] = useState('');
  const [number, setNumber] = useState('');


  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );


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

