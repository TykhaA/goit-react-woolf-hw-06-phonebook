import style from './listContacts.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeContactAction } from '../../redux/contacts/slice';

const ListContacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);

  const filterByName = value => {
    return contacts.filter(
      item => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1
    );
  };

  const hendleDelete = id => {
    dispatch(removeContactAction(id));
  };

  const filterContact = filterByName(filter);
  return (
    <ul>
      {filterContact.map(elem => {
        return (
          <li className={style.list} key={elem.id}>
            <span>{elem.name}:</span>
            <span className={style.number}>{elem.number}</span>
            <button className={style.btn} onClick={() => hendleDelete(elem.id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
export default ListContacts;
