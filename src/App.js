import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Authprovider } from "./contexts/auth-context";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div>
      <Authprovider>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/sign-up" element={<SignUp></SignUp>}></Route>
          <Route path="/sign-in" element={<SignIn></SignIn>}></Route>
          <Route path="/*" element={<NotFoundPage></NotFoundPage>}></Route>
        </Routes>
      </Authprovider>
    </div>
  );
}

export default App;
