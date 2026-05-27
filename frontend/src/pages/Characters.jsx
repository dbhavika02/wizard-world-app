import { useEffect, useState } from "react";
import API from "../services/api";

function Characters() {
  const [characters, setCharacters] = useState([]);

  const fetchCharacters = async () => {
    try {
      const res = await API.get("/characters");

      setCharacters(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div>
      <h1>Characters</h1>

      {characters.map((char) => (
        <div key={char._id}>
          <h2>{char.name}</h2>
          <p>{char.house}</p>
        </div>
      ))}
    </div>
  );
}

export default Characters;
