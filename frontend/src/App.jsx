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
      <h1 className="title">Wizard World</h1>

      <div className="tabs">
        <button onClick={() => setActiveTab("characters")}>Characters</button>

        <button onClick={() => setActiveTab("houses")}>Houses</button>

        <button onClick={() => setActiveTab("spells")}>Spells</button>
      </div>

      <div className="content">
        {activeTab === "characters" && (
          <div className="grid">
            {characters.map((char) => (
              <div className="card" key={char._id}>
                <h2>{char.name}</h2>
                <p>
                  <strong>House:</strong> {char.house}
                </p>
                <p>
                  <strong>Role:</strong> {char.role}
                </p>
                <p>
                  <strong>Patronus:</strong> {char.patronus}
                </p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "houses" && (
          <div className="grid">
            {houses.map((house) => (
              <div className="card" key={house._id}>
                <h2>{house.name}</h2>
                <p>
                  <strong>Founder:</strong> {house.founder}
                </p>
                <p>
                  <strong>Animal:</strong> {house.animal}
                </p>
                <p>
                  <strong>Colors:</strong> {house.colors}
                </p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "spells" && (
          <div className="grid">
            {spells.map((spell) => (
              <div className="card" key={spell._id}>
                <h2>{spell.name}</h2>
                <p>
                  <strong>Type:</strong> {spell.type}
                </p>
                <p>
                  <strong>Effect:</strong> {spell.effect}
                </p>
                <p>
                  <strong>Difficulty:</strong> {spell.difficulty}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
