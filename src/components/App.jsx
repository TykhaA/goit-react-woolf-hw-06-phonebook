import Form from './Form/Form';
import ListContacts from './ListContacts/ListContacts';
import Section from './Section/Section';
import Filter from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { addContactAction, removeContactAction } from '../redux/contacts/slice';
import { setFilter } from '../redux/filter/slice';

const App = () => {
  const dispatch = useDispatch();
  const { contacts } = useSelector(state => state.contacts);
  const { filter } = useSelector(state => state.filter);
  const handleChange = (value, number) => {
    const dublicate = filterByName(value);
    if (dublicate.length > 0) {
      alert(`${value} is already in contacts`);
    } else {
      dispatch(addContactAction(value, number));
    }
  };

  const handleFiter = ({ target: { value } }) => {
    dispatch(setFilter(value));
  };

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
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        color: '#010101',
        width: 400,
        margin: 'auto',
      }}
    >
      <Section title="Phonebook">
        <Form handleChange={handleChange} />
      </Section>
      <Section title="Contacts">
        <Filter handleFiter={handleFiter} />
        <ListContacts contacts={filterContact} hendleDelete={hendleDelete} />
      </Section>
    </div>
  );
};
export default App;
