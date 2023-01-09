import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header';
import Navbar from './components/Navbar';
import { HomePage } from './components/HomePage';


function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
      </Routes>
    </div>
  );
}

export default App;
