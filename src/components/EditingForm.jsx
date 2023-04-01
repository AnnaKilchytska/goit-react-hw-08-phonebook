import { TextField } from '@mui/material';
// import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editContact } from 'redux/operations';
import css from './ContactForm/ContactForm.module.css';
import { useState } from 'react';

const EditingForm = ({ id, nameProp, numberProp, onSubmit }) => {
  // const [name, setName] = useState(nameProp);
  // const [number, setNumber] = useState(numberProp);

  const dispatch = useDispatch();

  // const handleInputChange = event => {
  //   const { name, value } = event.target;
  //   switch (name) {
  //     case 'name':
  //       setName(value);
  //       break;
  //     case 'number':
  //       setNumber(value);
  //       break;
  //     default:
  //       return;
  //   }
  // };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      editContact({
        id,
        body: {
          name: form.elements.name?.value,
          number: form.elements.number?.value,
        },
      })
    );
    form.reset();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name" className={css.inputLabel}>
        Name
        <input
          className={css.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={nameProp}
        />
      </label>
      <label htmlFor="number" className={css.inputLabel}>
        Number
        <input
          className={css.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={numberProp}
        />
      </label>

      {/* <TextField
        id="outlined-name"
        label="Change contact name"
        type="text"
        // className={css.input}
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        // required
        // onChange={handleInputChange}
        defaultValue={nameProp}
        size="small"
      />

      <TextField
        id="outlined-number"
        label="Change contact number"
        type="tel"
        // className={css.input}
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        // required
        // onChange={handleInputChange}
        defaultValue={numberProp}
        size="small"
      /> */}

      <button type="submit" className={css.formButton}>
        Update contact
      </button>
    </form>
  );
};

export default EditingForm;
