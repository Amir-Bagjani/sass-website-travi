import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profiles from "./pages/Profiles";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import CreateProfile from "./pages/CreateProfile";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
