import { Routes, Route } from 'react-router-dom';
import Main from '../../pages/Main';
import Settings from '../../pages/Settings';
import './style.css';

const App = () => (
  <div className="app">
    <Routes>
      <Route exact path="Chess-board-learning/" element={<Main />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  </div>
);

export default App;
