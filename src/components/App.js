import '../styles/App.scss';
import { useEffect, useState } from 'react';
import adalabers from '../services/data.json';
//import callToApi from '../services/api';

function App() {
  // Estado
  const data = adalabers;
  console.log(data.results);
  // Variables
  // Eventos

  // api
/*   useEffect(() => {
    callToApi().then((response) => {
      setData(response);
    });
  }, []); */

  // Render
  const renderAdalabers = () => {
    return data.results.map( adalaber => {
      return <tr>
      <td>{adalaber.name}</td>
      <td>{adalaber.counselor}</td>
      <td>{adalaber.speciality}</td>
      </tr>
    })
  }
  

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
    </div>

  );
}

export default App;
