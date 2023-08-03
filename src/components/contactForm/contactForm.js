
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContactThunk } from 'redux/operation';
import { selectContacts } from 'redux/selectors';

function ContactForm() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const onSubmitData = data => {
    let nameArray = [];
    nameArray = contacts.map(cur => cur.name);
    if (!nameArray.includes(data.name)) {
      dispatch(addContactThunk(data));
    } else {
      alert(' Контакт вже є у телефонній книзі!!!');
    }
  };
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('');

  const handleInputChange = event => {
    if (event.target.name === 'name') {
        setName(event.target.value);
    } else if (event.target.name === 'number') {
      setPhone(event.target.value);
    }
    
    }


    const handleSubmit = event => {
        event.preventDefault();

        const contactData = {
          name,
          phone,
        };

        onSubmitData(contactData);
      setName('')
      setPhone('');
    }



    return (
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            onChange={handleInputChange}
            value={name}
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          <input
            onChange={handleInputChange}
            value={phone}
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">add contact</button>
      </form>
    );
  
  }
export default ContactForm