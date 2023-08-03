
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactThunk } from 'redux/operation';
import { selectContacts, selectFilter } from 'redux/selectors';
function ContactList() {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filterArr = fArr => {
    let newArr = [];
    if (filter === '') {
      newArr = fArr;
    } else {
      newArr = fArr.filter(cur => cur.name.toUpperCase().includes(filter));
    }

    return newArr;
  };

  const deleteId = Id => {
    dispatch(deleteContactThunk(Id));
  };
  const createList = () => {
    const arr = filterArr(contacts)
    return arr.map(contact => {
      return (
        <li key={contact.id} id={contact.id}>
          {`${contact.name}: ${contact.phone}`}
          <button data-id={contact.id} onClick={() => deleteId(contact.id)}>
            Delete
          </button>
        </li>
      );
    });
  };


    return <ul>{createList()}</ul>;
  
}

export default ContactList;