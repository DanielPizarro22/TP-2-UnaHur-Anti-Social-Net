import { BrowserRouter, Routes, Route, NavLink , Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";
import Profile from "./pages/Profile";
import CreatePost from "./pages/CreatePost";


function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <NavLink to="/" className="navlink">
          Home
        </NavLink>
        <NavLink to="/create-post" className="navlink">
          Create Post
        </NavLink>
        <NavLink to="/login" className="navlink">
          Login
        </NavLink>
        <NavLink to="/post/1" className="navlink">
          Post Detail
        </NavLink>
        <NavLink to="/profile" className="navlink">
          Profile
        </NavLink>
        <NavLink to="/register" className="navlink">
          Register
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;