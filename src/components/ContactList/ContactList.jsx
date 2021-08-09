// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from 'redux/actions/contacts';

import s from 'components/ContactList/ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const deleteItem = id => {
    dispatch(deleteContacts(id));
  };


  return (
    <ol className={s.list}>
      {contacts.map(el => (
        <li key={el.id}>
          <p className={s.posBtn}>
            <span className={s.text}>
              {el.name}: {el.number}
            </span>
            <button
              type="button"
              onClick={() => deleteItem(el.id)}
              className={s.btn}
            >
              Delete
            </button>
          </p>
        </li>
      ))}
    </ol>
  );
}

// ContactList.propTypes = {
//   contacts: PropTypes.array.isRequired,
//   onDelete: PropTypes.func.isRequired,
// };
