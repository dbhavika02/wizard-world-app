import { useEffect, useState } from "react";
import API from "./services/api";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("characters");

  const [characters, setCharacters] = useState([]);
  const [houses, setHouses] = useState([]);
  const [spells, setSpells] = useState([]);

  useEffect(() => {
    fetchCharacters();
    fetchHouses();
    fetchSpells();
  }, []);

  const fetchCharacters = async () => {
    const res = await API.get("/characters");
    setCharacters(res.data);
  };

  const fetchHouses = async () => {
    const res = await API.get("/houses");
    setHouses(res.data);
  };

  const fetchSpells = async () => {
    const res = await API.get("/spells");
    setSpells(res.data);
  };

  return (
    <div className="app">
      <h1 className="title">Wizard World Dashboard</h1>

      <div className="tabs">
        <button onClick={() => setActiveTab("characters")}>Characters</button>

        <button onClick={() => setActiveTab("houses")}>Houses</button>

        <button onClick={() => setActiveTab("spells")}>Spells</button>
      </div>

      <div className="table-container">
        {activeTab === "characters" && (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>House</th>
                <th>Role</th>
                <th>Patronus</th>
              </tr>
            </thead>

            <tbody>
              {characters.map((char) => (
                <tr key={char._id}>
                  <td>{char.name}</td>
                  <td>{char.house}</td>
                  <td>{char.role}</td>
                  <td>{char.patronus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {activeTab === "houses" && (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Founder</th>
                <th>Animal</th>
                <th>Colors</th>
              </tr>
            </thead>

            <tbody>
              {houses.map((house) => (
                <tr key={house._id}>
                  <td>{house.name}</td>
                  <td>{house.founder}</td>
                  <td>{house.animal}</td>
                  <td>{house.colors}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {activeTab === "spells" && (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Effect</th>
                <th>Difficulty</th>
              </tr>
            </thead>

            <tbody>
              {spells.map((spell) => (
                <tr key={spell._id}>
                  <td>{spell.name}</td>
                  <td>{spell.type}</td>
                  <td>{spell.effect}</td>
                  <td>{spell.difficulty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default App;
