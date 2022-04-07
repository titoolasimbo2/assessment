import Login from './components/login';
import './App.css';

import { useNavigate } from "react-router-dom";
function App() {
  const navigate = useNavigate()
  const demoHandler = () => {
    navigate("/login")
  }

  return (
    <div>
    <div onClick={demoHandler} className='grid grid-rows-1'></div>
    <div className= 'grid grid-cols-4'></div>
    </div>
  );
}

export default App;
