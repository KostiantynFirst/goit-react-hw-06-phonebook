import { PhonebookForm, PhonebookFormContainer, PhonebookFormLabel, PhonebookFormInput, PhonebookBtn  } from "./AddContactForm.styled";
import { useDispatch } from "react-redux";
import { addContact } from "redux/contactSlices";
import { nanoid } from "@reduxjs/toolkit";

export const AddContactForm = ({ name, number, onInputName, onInputNumber}) => {
   
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();

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