import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    contacts: [],
    filter: "",
}

export const contactSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact: {
        reducer(state, action){
            state.contacts.push(action.payload);
        },
        prepare(name, number) {
            return {
                payload: {
                    if: nanoid(),
                    name: name,
                    number: number,
                },
            };
        },
        },
        deleteContact: (state, action) => {
            return state.contacts.filter(contact => contact.id !== action.payload);
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        }
        
    }
});

export const {addContact, deleteContact, setFilter} = contactSlice.actions