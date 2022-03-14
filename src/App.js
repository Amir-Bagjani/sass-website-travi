import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profiles from "./pages/Profiles";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import CreateProfile from "./pages/CreateProfile";
import AddExperince from "./pages/AddExperince";
import AddEducation from "./pages/AddEducation";
import Posts from "./pages/Posts";
import Post from "./pages/Post";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="profiles" element={<Profiles />} />
        <Route path="profile" element={<Profile />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="edit-profile" element={<CreateProfile />} />
        <Route path="add-education" element={<AddEducation />} />
        <Route path="add-experience" element={<AddExperince />} />
        <Route path="posts" element={<Posts />} />
        <Route path="post" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
