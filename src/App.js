import './App.css';
import { BrowserRouter as Router,Switch, Routes, Route } from 'react-router-dom';
import SignupForm from './Component/SignupForm';
import LoginForm from './Component/LoginForm';

function App() {
  return (
    <div>
    <Router>
    <Routes>
       <Route path='/' element={<LoginForm/>} />
       <Route path='/signup' element={<SignupForm/>} />
    </Routes>
    </Router>
    </div>
  );
}

export default App;
