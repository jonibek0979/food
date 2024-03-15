
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Settings from './pages/Settings/Settings';
import Home from './pages/Home/Home';
import NotFound from './pages/404/404';
import Chart from './pages/Chart/Chart';
import Login from './pages/Login/Login';
import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"

function App() {
  return (
    <div className="App">
      <Header/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/settings' element={<Settings/>}/>
        <Route path='/chart' element={<Chart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/*' element={<NotFound/>}/>
       </Routes>
    </div>
  );
}

export default App;
