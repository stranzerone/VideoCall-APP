import './App.css';
import { Routes,Route } from 'react-router-dom';
import LobbyScreen from './screen/LobbyScreen';
import Room from './screen/room';
function App() {

  return(
 <Routes>
  <Route  path='/' element={<LobbyScreen />} />
  <Route path='/room/:roomid' element={<Room />}/>
 </Routes>
  )
}

export default App;
