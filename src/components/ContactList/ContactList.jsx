import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { deleteContact, fetchContacts } from 'redux/operations';
import { getError, getFilteredContacts, getIsLoading } from 'redux/selectors';
import { useEffect } from 'react';

function ContactList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = useSelector(getFilteredContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  console.log('isLoading', isLoading);

  return (
    <>
      {isLoading === true && <div className={css.isLoading}>Loading...</div>}
      {error && <div className={css.error}>{error}...Try again!</div>}
      <ul className={css.contactList}>
        {filteredContacts.map(contact => {
          return (
            <li
              key={contact.id}
              id={contact.id}
              className={css.contactListItem}
            >
              <span className={css.contactListName}>{contact.nameInput}</span>
              <span className={css.contactListNumber}>{contact.number}</span>
              <button
                className={css.deleteButton}
                type="button"
                onClick={() => dispatch(deleteContact(contact.id))}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ContactList;
