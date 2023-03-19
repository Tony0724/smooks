import Input from "./useInput";
import Tab from './useTab';
import Home from './Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Input" element={<Input />}></Route>
          <Route path="/Tab" element={<Tab />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
