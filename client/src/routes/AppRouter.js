import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AppMain from "../components/App";
import Header from "../components/Header";
import FilesList from "../components/FilesList";

const AppRouter = () => (
  <div className="container">
    <Header />
    <div className="main-content">
      <AppMain />
      {/* <Route path="/home/header" exact element={<Header />} />
    <Route path="/home/criterion-10" exact element={<AppMain />} />
    <Route path="/home/list" exact element={<FilesList />} /> */}
    </div>
  </div>
);

export default AppRouter;
