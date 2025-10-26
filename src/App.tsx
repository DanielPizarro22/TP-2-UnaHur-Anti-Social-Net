import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";
import Profile from "./pages/Profile";
import CreatePost from "./pages/CreatePost";


function App() {
  return (
    <BrowserRouter>
      <Navbar bg="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand as={NavLink} to="/">MyBlog</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
              <Nav.Link as={NavLink} to="/create-post">Create Post</Nav.Link>
              <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
              <Nav.Link as={NavLink} to="/post/1">Post Detail</Nav.Link>
              <Nav.Link as={NavLink} to="/profile">Profile</Nav.Link>
              <Nav.Link as={NavLink} to="/register">Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container style={{ paddingTop: '80px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;