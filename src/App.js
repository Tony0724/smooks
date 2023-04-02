import Input from "./useInput";
import Tab from './useTab';
import Home from './Home';
import Title from './useTitle';
import Click from "./useClick";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Input" element={<Input />}></Route>
          <Route path="/Tab" element={<Tab />}></Route>
          <Route path="/Title" element={<Title />}></Route>
          <Route path="/Click" element={<Click />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
