import React from 'react';

import Menu from './components/Menu';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { PaginasApp } from './data/PaginasApp';


function App() {
  return (
    <Router>
      <Menu />
      <div>
        <h1>Desarrollo de Interfaces: Examen React.js</h1>
        <p>
          Resuelve los ejercicios propuestos. Para ello, haz un fork de este repositorio desde tu
          cuenta de Github y sube un enlace a la tarea de examen. El repositorio debe
          tener el nombre examen-react-Nombre-Apellido1, donde nombre y apellido
          son los tuyos.
        </p>
      </div>
      {PaginasApp.map((item) => {
        return (
          <Route
            key={item.id}
            path={item.path}
            exact
            component={item.component}
          />
        );
      })}
    </Router>
  );
}

export default App;
