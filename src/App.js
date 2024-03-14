import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Authprovider } from "./contexts/auth-context";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import PostDetailsPage from "./pages/PostDetailsPage";
import DashboardPage from "./pages/DashboardPage";
import DashboardLayout from "./modules/dashboard/DashboardLayout";
import PostPage from "./pages/PostPage";
import AddPost from "./pages/AddPost";

function App() {
  return (
    <div>
      <Authprovider>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/sign-up" element={<SignUp></SignUp>}></Route>
          <Route path="/sign-in" element={<SignIn></SignIn>}></Route>
          <Route
            path="/blog"
            element={<PostDetailsPage></PostDetailsPage>}
          ></Route>
          <Route path="/*" element={<NotFoundPage></NotFoundPage>}></Route>
          <Route element={<DashboardLayout></DashboardLayout>}>
            <Route
              path="/dashboard"
              element={<DashboardPage></DashboardPage>}
            ></Route>
            <Route path="manage/post" element={<PostPage></PostPage>}></Route>
            <Route path="manage/add-post" element={<AddPost></AddPost>}></Route>
          </Route>
        </Routes>
      </Authprovider>
    </div>
  );
}

export default App;
