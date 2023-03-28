import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import css from './App.module.css';

function App() {
  return (
    <div className={css.AppContainer}>
      <h1 className={css.AppTitle}>Phonebook</h1>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;
