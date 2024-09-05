import { useContext } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Middlecontent from './components/Middlecontent';
import { themecontext } from './context/themecontext';
import Button from './components/Button';
function App() {
  const { theme, setthemeupdate } = useContext(themecontext);
  return (
    <div style={{ padding:"20px",borderRadius:"20px",backgroundColor:theme=="light"?"white":"black" , color : theme=="light" ? "black" : "white"}} >
      <Navbar />
      <Middlecontent />
     <Button />
    </div>
  )
}

export default App;
