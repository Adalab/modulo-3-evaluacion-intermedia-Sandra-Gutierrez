import '../styles/App.scss';
import { useEffect, useState } from 'react';
import callToApi from '../services/api';

function App() {
  // Estado
  const [data, setData] = useState([]);
  // Variables
  // Eventos
  const handeFormSubmit = (ev) =>{
    ev.preventDefault();
  }
  const handelInputText = (ev) =>{
    const valueInput = ev.currentTarget.value;
    const newAdalaber = {
      name: valueInput,
      counselor: valueInput,
      speciality: valueInput,
    }
  }

  const handelBtnAddAdalaber = () => {

  }

  // api
  useEffect(() => {
    callToApi().then((response) => {
      setData(response);
    });
  }, []); 

  // Render
  const renderAdalabers = () => {
    return data.map( adalaber => {
      return <tr key={adalaber.id}>
      <td>{adalaber.name}</td>
      <td>{adalaber.counselor}</td>
      <td>{adalaber.speciality}</td>
      </tr>
    })
  }
  
  // Return HTML
  return (
    <div>
      <h1>Adalabers</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Tutora</th>
            <th>Especialidad</th>
          </tr>
        </thead>
        <tbody>{renderAdalabers()}</tbody>
      </table>
      <h2>Añadir nueva Adalaber</h2>
      <form action="" onSubmit={handeFormSubmit}>
        <label htmlFor="name">Nombre</label>
        <input type="text" placeholder="Ej: Sandra" onChange={handelInputText}/>
        <label htmlFor="name">Tutora</label>
        <input type="text" placeholder="Ej: Dayana" onChange={handelInputText}/>
        <label htmlFor="name">Especialidad</label>
        <input type="text" placeholder="Ej: JavaScript" onChange={handelInputText}/>
        <button onClick={handelBtnAddAdalaber}>Añadir</button>
      </form>
    </div>

  );
}

export default App;
