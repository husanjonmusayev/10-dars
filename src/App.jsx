import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Project from "./components/Project/Project";

// Rout layout

import Routlayout from "./layout/Routlayout";

function App() {

  const routs = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Routlayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
      </Route>
    )
  );

  return (
    <div className="App " >
      <RouterProvider router={routs} />
    </div>
  );
}

export default App;
