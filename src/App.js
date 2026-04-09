import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [experiments, setExperiments] = useState(() => {
      const saved = localStorage.getItem('experiments');
      return saved ? JSON.parse(saved) : [
        { id: 1, name: 'Эксперимент 1', status: 'План' },
        { id: 2, name: 'Эксперимент 2', status: 'В процессе' },
        { id: 3, name: 'Эксперимент 3', status: 'Завершён' }
      ];
    });

  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    localStorage.setItem('experiments', JSON.stringify(experiments));
  }, [experiments]);

  const deleteExperiment = (id) => {
    setExperiments(experiments.filter(exp => exp.id !== id));
  };

  const addExperiment = () => {
    if (inputValue.trim() === '') return;
    const newExperiment = {
      id: Date.now(),
      name: inputValue,
      status: 'План'
    };
    setExperiments([...experiments, newExperiment]);
    setInputValue('');
  };

  return (
    <div className="app">
      <h1>Учёт экспериментов</h1>
      <div className="add-block">
        <h3>Добавить эксперимент</h3>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Название эксперимента"
        />
        <button onClick={addExperiment}>Добавить</button>
      </div>
      <div className="completed-block">
        <strong>Завершённых экспериментов:</strong>{' '}
        {experiments.filter(exp => exp.status === 'Завершён').length}
      </div>
      <div className="experiments-grid">
        {experiments.map(exp => (
          <div key={exp.id} className="experiment-card">
            <div className="card-name">{exp.name}</div>
            <div className="card-status">{exp.status}</div>
            <button onClick={() => deleteExperiment(exp.id)}>Удалить</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;