
import { PhonebookContactsList, PhonebookContactsListItem, PhonebookContactsListItemName, DeleteBtn } from "./Contacts.styled";

export const ContactList = ({filteredContacts, handleDeleteContact}) => {
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

            // console.log(filteredContacts);
            // console.log(handleDeleteContact);