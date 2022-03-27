import './App.css';
import { BrowserRouter , Routes ,Route } from 'react-router-dom'
import SignIn from './Pages/auth/login/Login.jsx';
import Home from './Pages/Home/Home.jsx';
import Register from './Pages/auth/register/Register.jsx'
import UpdatePage from './Pages/update/UpdatePage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/login' element={<SignIn/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/update' element={<UpdatePage/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
