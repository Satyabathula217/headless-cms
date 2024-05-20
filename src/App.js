import React from 'react';
import './App.css';
import CreateEntity from './components/CreateEntity';
import EntityCRUD from './components/EntityCRUD';

function App() {
  return (
    <div className="App">
      <h1>Headless CMS</h1>
      <CreateEntity />
      <EntityCRUD />
    </div>
  );
}

export default App;
