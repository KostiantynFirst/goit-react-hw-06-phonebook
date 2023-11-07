import { PhonebookForm, PhonebookFormContainer, PhonebookFormLabel, PhonebookFormInput, PhonebookBtn  } from "./AddContactForm.styled";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "redux/contactSlices";
import { nanoid } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const AddContactForm = () => {
   
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts);

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const number = form.number.value;

 
        const isNameExist = contacts.some(
          contact => contact.name.toLowerCase() === name.toLowerCase(),
        );
        
        const isNumberExist = contacts.some(
          contact => contact.number === number,
        );

        switch (key) {
            case value:
                
                break;
        
            default:
                break;
        }
    
        if (isNameExist) {
          toast.error('Contact with such name already exists!', {
            autoClose: 3000
          });
          form.reset();
          return;
        }
    
        if (isNumberExist) {
          toast.error('Contact with such number already exists!', {
            autoClose: 3000
          });
          form.reset();
          return;
        }

        dispatch(addContact({id: nanoid(), name, number}));
    
    }
  
    return (
        <PhonebookForm onSubmit={handleSubmit}>
         
        <PhonebookFormContainer>
            <PhonebookFormLabel htmlFor="name"> Name: </PhonebookFormLabel> 
            <PhonebookFormInput   type="text"
                                  value={name} 
                                  name="name"
                                  pattern="^[a-zA-Z\u0400-\u04FF\s'\x2D]+$"
                                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                                  required
                                  placeholder="Enter name"
                                  onChange={(e) => onInputName(e, 'name')} />
        </PhonebookFormContainer>
        
        <PhonebookFormContainer>
            <PhonebookFormLabel htmlFor="number"> Number: </PhonebookFormLabel> 
            <PhonebookFormInput   type="tel"
                                  value={number} 
                                  name="number"
                                  pattern="^[\d\s\x28\x29\x2D\x2B]+$"
                                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                                  required
                                  placeholder="Tel number"
                                  onChange={(e) => onInputNumber(e, 'number')} />
        </PhonebookFormContainer>
        
        
            <PhonebookBtn type="submit">Add Contact</PhonebookBtn>

          </PhonebookForm>

    );
}