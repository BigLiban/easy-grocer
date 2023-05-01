import './App.css';
import { BrowserRouter, /*Navigate,*/ Routes, Route } from "react-router-dom";

import LandingPage from './pages/landingPage/index.jsx';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
