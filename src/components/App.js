import '../styles/App.scss';
//import { useEffect, useState } from 'react';
//import callToApi from '../services/api';
//import localStorage from '../services/localstorage';

function App() {
  const getTitle = (text) => <h1>{text}</h1>;

  // api

  //const [data, setData] = useState({});

  /*
  useEffect(() => {
    callToApi().then((response) => {
      setData(response);
    });
  }, []);
  */

  // local storage

  //const [name, setName] = useState(localStorage.get('name', ''));
  //const [email, setEmail] = useState(localStorage.get('email', ''));

  //useState(localStorage.get('data', {}).name || '');
  //useState(localStorage.get('data', {}).email || '');

  /*
  useEffect(() => {
    localStorage.set('name', name);
    localStorage.set('email', email);
  }, [name, email]);
  */

  /*
  localStorage.set('data', {
    name: name,
    email: email,
  });
  */

  return (
    <div className="app">{getTitle('Hola mundo')}</div>
  );
}

export default App;
