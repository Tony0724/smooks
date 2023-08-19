import Input from "./useInput";
import Tab from './useTab';
import Home from './Home';
import Title from './useTitle';
import Click from "./useClick";
import Confirm from './useConfirm';
import PreventLeave from './usePreventLeave';
import BeforeLeave from './useBeforeLeave';
import FadeIn from './useFadeIn';
import Network from './useNetwork';
import Notification from "./useNotification";
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
          <Route path="/Confirm" element={<Confirm />}></Route>
          <Route path="/PreventLeave" element={<PreventLeave />}></Route>
          <Route path="/BeforeLeave" element={<BeforeLeave />}></Route>
          <Route path="/FadeIn" element={<FadeIn />}></Route>
          <Route path="/Network" element={<Network />}></Route>
          <Route path="/Notification" element={<Notification />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
