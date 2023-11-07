import { useSelector, useDispatch } from "react-redux/es/hooks/useSelector";
import { PhonebookContactsList, PhonebookContactsListItem, PhonebookContactsListItemName, DeleteBtn } from "./Contacts.styled";
import { deleteContact } from "redux/contactSlices";
import { toast } from "react-toastify";

export const ContactList = () => {
        
        const contacts = useSelector(state => state.contacts);
        const filterValue = useSelector(state => state.filter).toLowerCase();
        const dispatch = useDispatch();

        
        
        const handleDeleteContact = e => {
                dispatch(deleteContact(e.target.id));
                toast.info('The contact has been removed from your phonebook successfully!');
              };

        return (
        <PhonebookContactsList>

            {filteredContacts.map(({name, number, id}) => {

            return (
                    <PhonebookContactsListItem key={id}>
                    <PhonebookContactsListItemName>{name}:{number}</PhonebookContactsListItemName>
                    <DeleteBtn onClick={() => handleDeleteContact(id)}>Delete</DeleteBtn>
                    </PhonebookContactsListItem>
            )
          })

        }
        </PhonebookContactsList>
        );
};      
