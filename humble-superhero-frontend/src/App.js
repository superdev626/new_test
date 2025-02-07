import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [superheroes, setSuperheroes] = useState([]);
  const [name, setName] = useState('');
  const [superpower, setSuperpower] = useState('');
  const [humilityScore, setHumilityScore] = useState('');

  const fetchSuperheroes = async () => {
    const response = await axios.get('http://localhost:3000/superheroes');
    setSuperheroes(response.data);
  };

  const addSuperhero = async (e) => {
    e.preventDefault();
    if (!name || !superpower || !humilityScore) {
      alert('Please fill out all fields');
      return;
    }
    const response = await axios.post('http://localhost:3000/superheroes', {
      name,
      superpower,
      humilityScore: parseInt(humilityScore),
    });
    if (response.data) {
      fetchSuperheroes();
      setName('');
      setSuperpower('');
      setHumilityScore('');
    } else {
      alert(response.data.message);
    }
  };

  return (
    <div>
      <h1>Humble Superhero API</h1>
      <form onSubmit={addSuperhero}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="text"
          value={superpower}
          onChange={(e) => setSuperpower(e.target.value)}
          placeholder="Superpower"
        />
        <input
          type="number"
          value={humilityScore}
          onChange={(e) => setHumilityScore(e.target.value)}
          placeholder="Humility Score (1-10)"
        />
        <button type="submit">Add Superhero</button>
      </form>

      <h2>Superheroes (Sorted by Humility Score)</h2>
      <ul>
        {superheroes.map((hero, index) => (
          <li key={index}>
            {hero.name} - {hero.superpower} - Humility Score: {hero.humilityScore}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
