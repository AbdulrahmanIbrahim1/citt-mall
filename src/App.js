import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login/Login';
// import Header from './Components/header/Header';
import Home from './Pages/Home/Home';
import SignUp from './Pages/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
