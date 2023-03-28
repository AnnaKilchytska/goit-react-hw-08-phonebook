import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

export default function Contacts() {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
}
