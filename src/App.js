import { Routes, Route } from 'react-router';
import Home from './Pages/Home';
import Team from './Pages/Team';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/team' element={<Team />} />
      </Routes>
    </div>
  );
}

export default App;
