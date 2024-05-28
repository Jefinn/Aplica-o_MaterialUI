import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./pages/login/Tela_Login";
import Header from './components/header';
import ListarTarefa from './pages/tarefa/ListarTarefa';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/gerenciador" element={<GerenciadorTarefa />} />
        </Routes>
      </div>
    </Router>
  );
}

function GerenciadorTarefa() {
  return (
    <div>
      <Header />
      <ListarTarefa />
    </div>
  );
}

export default App;
