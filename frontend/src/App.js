import './App.css';
import Home from './components/Home/Home';
import FavList from './components/FavList/FavList'
import NavBar from './components/NavBar/NavBar'
import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<FavList />}></Route>
      </Routes>
    </>
  );
}

export default App;
