import { Contact } from '../Contact/Contact';
export const ContactList = ({ contactsItems }) => {
  return (
    <div>
      {contactsItems.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </div>
  );
};
