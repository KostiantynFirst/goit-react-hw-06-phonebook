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

  // useEffect(() => {
  //   const storedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
  //   setContacts(storedContacts);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts])

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

// export class App extends Component {

//   state = {
//       contacts:[],
//       filter: '',
//       name: '',
//       number: '',
//     }


//     componentDidMount() {
//       const contacts = localStorage.getItem('contacts');
//       const parsedContacts = JSON.parse(contacts);
//       // console.log(parsedContacts);
//       if (parsedContacts) {
//         this.setState({contacts: parsedContacts});
//       }
      
//     }

//     componentDidUpdate(prevProps, prevState) {
//       // console.log("App componentDidUpdate");
//       // console.log(prevState.contacts);
//       // console.log(this.state.contacts);

//       if (prevState.contacts !== this.state.contacts) {
//         console.log('Обновился массив contacts');
//         localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
//       }
//     }

//   onInputName = (e, option) => {
//       const { value } = e.currentTarget;
//       // console.log(option);

//       this.setState({
//         [option]: value
//       })

    
//     };

//     handleSubmit = e => {
//       e.preventDefault();
//       const { name, number, contacts } = this.state;
  
//       const isNameExist = contacts.some(
//         contact => contact.name.toLowerCase() === name.toLowerCase(),
//       );
      
//       const isNumberExist = contacts.some(
//         contact => contact.number === number,
//       );
  
//       if (isNameExist) {
//         alert('Contact with such name already exists!');
//         this.resetForm();
//         return;
//       }
  
//       if (isNumberExist) {
//         alert('Contact with such number already exists!');
//         this.resetForm();
//         return;
//       }
  
//       const newContact = { id: nanoid(), name, number };
//       this.setState(prevState => ({
//         contacts: [...prevState.contacts, newContact],
//         name: '',
//         number: '',
//       }));

//       this.resetForm();
//     }

//     resetForm = () => {
//       this.setState({
//           name: '',
//           number: '',
//       })
//     }   

//   changeFilter = e => {
//     this.setState({ filter: e.currentTarget.value });
//   };

//   onFilterResult = () => {
//     const { filter, contacts } = this.state;
//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter),
//     );

//   };

//   handleDeleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };


//   render() {
//     const filteredContacts = this.onFilterResult();
//       return (
 
//           <PhonebookContainer>
//             <PhonebookHeadings>Phonebook</PhonebookHeadings>
          
//         <AddContactForm 
//           handleSubmit={this.handleSubmit}
//           name={this.state.name}
//           number={this.state.number}
//           onInputName={this.onInputName}
//         />
//         <PhonebookContacts>
//           <PhonebookContactsHeading>Contacts</PhonebookContactsHeading>
           
//         <Filter 
//           value={this.state.filter} 
//           onChange={this.changeFilter} 
//         />

//         <ContactList 
//           filteredContacts={filteredContacts}
//           handleDeleteContact={this.handleDeleteContact} 
//         />
      
//       </PhonebookContacts>
          

//           </PhonebookContainer> 
          
//           )

//   }
 

// }
