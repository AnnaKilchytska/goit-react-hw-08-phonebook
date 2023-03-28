import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';

import css from './Filter.module.css';

function Filter() {
  const dispatch = useDispatch();
  return (
    <div className={css.filterContainer}>
      <input
        type="text"
        onChange={e => dispatch(filterContacts(e.target.value))}
        placeholder="Start typing to find a contact"
      />
    </div>
  );
}

export default Filter;
