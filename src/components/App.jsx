import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AddContactForm } from "./AddContactForm/AddContactForm";
import { ContactList } from "./Contacts/Contacts";
// import useLocalStorage from "hooks/useLocalStorage";
import { PhonebookContainer, PhonebookHeadings, PhonebookContacts, PhonebookContactsHeading } from "../components/Phonebook/Phonebook.styled";
import { Filter } from "./Filter/Filter";

export const App = () => {

//  const changeFilter = e => {
//     dispatch(setFilter(e.currentTarget.value));
//   };


  return (
 
    <PhonebookContainer>
      <PhonebookHeadings>Phonebook</PhonebookHeadings>
    
  <AddContactForm />
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

