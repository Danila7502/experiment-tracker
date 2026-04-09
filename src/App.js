import { useState } from 'react';
import './App.css';

function App() {
  const [experiments, setExperiments] = useState([
    { id: 1, name: 'Эксперимент 1', status: 'План' },
    { id: 2, name: 'Эксперимент 2', status: 'В процессе' },
    { id: 3, name: 'Эксперимент 3', status: 'Завершён' }
  ]);

  return (
    <div className="app">
      <h1>Учёт экспериментов</h1>
      <div className="experiments-grid">
        {experiments.map(exp => (
          <div key={exp.id} className="experiment-card">
            <div className="card-name">{exp.name}</div>
            <div className="card-status">{exp.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;