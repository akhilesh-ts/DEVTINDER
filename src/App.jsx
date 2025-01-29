import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Login from "./component/Login";
import Profile from "./component/Profile";
// import Navbar from "./component/Navbar";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
