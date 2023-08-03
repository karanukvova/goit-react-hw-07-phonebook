import ContactList from './contactList/contactList';
import ContactForm from './contactForm/contactForm';
import Filter from './filter/filter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContactsThunk } from 'redux/operation';
import { MutatingDots } from 'react-loader-spinner';
import { selectError, selectIsLoading } from 'redux/selectors';
export function App() {

  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);
  

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm />
      <h1>Contacts</h1>
      <Filter />
      {error !== null && (
        <p className="c-error">
          Oops, some error occured. Please, try again later. Error: {error}
        </p>
      )}
      {isLoading && (
        <MutatingDots
          height="100"
          width="100"
          color="#5800a5"
          secondaryColor="#e08e00"
          radius="12.5"
          ariaLabel="mutating-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      )}
      <ContactList />
    </div>
  );
  
  }
