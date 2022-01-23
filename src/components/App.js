import "../styles/App.scss";
import { useEffect, useState } from "react";
import callToApi from "../services/api";

function App() {
  // Estado
  const [data, setData] = useState([]);
  const [newAdalaberData, setNewAdalaberData] = useState({
    name: "",
    counselor: "",
    speciality: "",
  });
  const [filterName, setFilterName] = useState("");
  const [filterCounselor, setFilterCounselor] = useState("All");

  // api
  useEffect(() => {
    callToApi().then((response) => {
      setData(response);
    });
  }, []);

  // Eventos
  const handleInputName = (ev) => {
    setNewAdalaberData({
      ...newAdalaberData,
      name: ev.currentTarget.value,
    });
  };
  const handleInputCounselor = (ev) => {
    setNewAdalaberData({
      ...newAdalaberData,
      counselor: ev.currentTarget.value,
    });
  };
  const handleInputSpeciality = (ev) => {
    setNewAdalaberData({
      ...newAdalaberData,
      speciality: ev.currentTarget.value,
    });
  };
  const handleBtnAddAdalaber = () => {
    newAdalaberData.id = data.length;
    setData([...data, newAdalaberData]);
    setNewAdalaberData({
      name: "",
      counselor: "",
      speciality: "",
    });
  };
  const handleChangeFilterName = (ev) => {
    setFilterName(ev.currentTarget.value);
  };
  const handleChangeFilterCounselor = (ev) => {
    setFilterCounselor(ev.currentTarget.value);
  };

  // Render
  const renderAdalabers = () => {
    return data
      .filter((adalaber) => {
        if (filterCounselor === "All") {
          return true;
        } else {
          return adalaber.counselor === filterCounselor;
        }
      })
      .filter((adalaber) =>
        adalaber.name
          .toLocaleLowerCase()
          .includes(filterName.toLocaleLowerCase())
      )
      .map((adalaber) => {
        return (
          <tr key={adalaber.id}>
            <td>{adalaber.name}</td>
            <td>{adalaber.counselor}</td>
            <td>{adalaber.speciality}</td>
{/*             <td className='main__table--rrss'>
              {adalaber.social_networks.map((redes) => {
                return <a href={redes.url}>{redes.name}</a>;
              })}
            </td> */}
          </tr>
        );
      });
  };

  // Return HTML
  return (
    <>
      <header className="header">
        <h1 className="header__title">Adalabers</h1>
      </header>
      <main className="main">
        <form className="main__find" action="" onSubmit={(ev) => ev.preventDefault()}>
          <label htmlFor="name" >Nombre</label>
          <input
            type="text"
            placeholder='Ej. Mari Carmen'
            onChange={handleChangeFilterName}
            value={filterName}
          />
          <label htmlFor="counselor">Escoge una tutora</label>
          <select
            name="counselor"
            id=""
            onChange={handleChangeFilterCounselor}
            value={filterCounselor}
          >
            <option value="All">Cualquiera</option>
            <option value="Yanelis">Yanelis</option>
            <option value="Dayana">Dayana</option>
            <option value="Iván">Iván</option>
          </select>
        </form>
        <table className="main__table">
          <thead className='main__table--head'>
            <tr>
              <th>Nombre</th>
              <th>Tutora</th>
              <th>Especialidad</th>
              <th>Redes</th>
            </tr>
          </thead>
          <tbody>{renderAdalabers()}</tbody>
        </table>
        <section className="main__newAdalaber">
          <h3 className='main__newAdalaber--title'>Añadir nueva Adalaber</h3>
          <form action="" onSubmit={(ev) => ev.preventDefault()}>
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              name="name"
              placeholder="Ej: Sandra"
              value={newAdalaberData.name}
              onChange={handleInputName}
            />
            <label htmlFor="name">Tutora</label>
            <input
              type="text"
              name="counselor"
              placeholder="Ej: Dayana"
              value={newAdalaberData.counselor}
              onChange={handleInputCounselor}
            />
            <label htmlFor="name">Especialidad</label>
            <input
              type="text"
              name="speciality"
              placeholder="Ej: JavaScript"
              value={newAdalaberData.speciality}
              onChange={handleInputSpeciality}
            />
            <button className='main__newAdalaber--btn' onClick={handleBtnAddAdalaber}>Añadir</button>
          </form>
        </section>
      </main>
    </>
  );
}

export default App;
