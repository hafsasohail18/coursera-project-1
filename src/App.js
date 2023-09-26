
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu';

function App() {
  
  return (
    <div className="App">
       <HashRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </HashRouter>
      
    </div>
  );
}

export default App;
