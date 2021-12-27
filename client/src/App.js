//simport { Route, Switch } from "react-router-dom";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style.scss";

import {
  Services,
  ServicesOne,
  ServicesTwo,
  ServicesThree,
} from "./pages/Services";
import { Events, EventsOne, EventsTwo } from "./pages/Events";
import Contact from "./pages/ContactUs";
import Support from "./pages/Support";
import { AboutUs, OurAim, OurVision } from "./pages/AboutUs";
import "./App.css";
import Sidebar from "./components/Sidebar";
import AppRouter from "./routes/AppRouter";
import FilesList from "./components/FilesList";

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/home/about-us" exact element={<AboutUs />} />
          <Route path="/home/about-us/aim" exact element={<OurAim />} />
          <Route path="/home/about-us/vision" exact element={<OurVision />} />
          <Route path="/home/criterion-10" exact element={<AppRouter />} />
          <Route path="/home/downloaded-files" exact element={<FilesList />} />
          <Route path="/home/contact" exact element={<Contact />} />
          <Route path="/home/events" exact element={<Events />} />
          <Route path="/home/events/events1" exact element={<EventsOne />} />
          <Route path="/home/events/events2" exact element={<EventsTwo />} />
          <Route path="/home/support" exact element={<Support />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
