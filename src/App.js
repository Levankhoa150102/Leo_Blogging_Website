import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Authprovider } from "./contexts/auth-context";
import Signup from "./pages/Signup";

function App() {
  return (
    <div>
      <Authprovider>
        <Routes>
          <Route path="/sign-up" element={<Signup></Signup>}></Route>
        </Routes>
      </Authprovider>
    </div>
  );
}

export default App;
