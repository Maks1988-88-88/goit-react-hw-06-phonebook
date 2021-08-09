// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import s from 'components/ContactList/ContactList.module.css';



export default function ContactList() {
  const contacts = useSelector(state => state.contacts);
  console.log(contacts);
  return (
    <ol className={s.list}>
      {contacts.map(el => (
        <li key={el.id}>
          <p className={s.posBtn}>
            <span className={s.text}>
              {el.name}: {el.number}
            </span>
            {/* <button
              type="button"
              onClick={() => onDelete(el.id)}
              className={s.btn}
            >
              Delete
            </button> */}
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

