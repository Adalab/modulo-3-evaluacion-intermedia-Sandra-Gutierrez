import '../styles/App.scss';
import { useEffect, useState } from 'react';
import callToApi from '../services/api';

function App() {
  // Estado
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [counselor, setCounselor] = useState('');
  const [speciality, setSpeciality] = useState('');
  
  // Eventos
  const handeFormSubmit = (ev) =>{
    ev.preventDefault();
  }
  const handelInputName = (ev) =>{
    setName(ev.currentTarget.value)
  }
  const handelInputCounselor = (ev) =>{
    setCounselor(ev.currentTarget.value)
  }
  const handelInputSpeciality = (ev) =>{
    setSpeciality(ev.currentTarget.value)
  }
  const handelBtnAddAdalaber = (ev) => {
    ev.preventDefault();
    setData([...data, {
      id: data.length,
      name: name,
      counselor: counselor,
      speciality: speciality,
    }])
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
      <header>
        <h1>Adalabers</h1>
      </header>
      <main>
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
        <input type="text" name='name' placeholder="Ej: Sandra" value={name} onChange={handelInputName}/>
        <label htmlFor="name">Tutora</label>
        <input type="text" name='counselor' placeholder="Ej: Dayana" value={counselor} onChange={handelInputCounselor}/>
        <label htmlFor="name">Especialidad</label>
        <input type="text" name='speciality' placeholder="Ej: JavaScript" value={speciality} onChange={handelInputSpeciality} />
        <button onClick={handelBtnAddAdalaber}>Añadir</button>
      </form>
      </main>
    </div>
  );
}

export default App;
