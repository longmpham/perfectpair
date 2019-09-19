import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import NavbarPage from "./components/navbar.component";
// import ExerciseList from "./components/exercises-list.component";
// import EditExercise from "./components/edit-exercise.component";
// import CreateExercise from "./components/create-exercise.component";
import HomePage from "./components/home-page.component";
import CreateUser from "./components/create-user.component";

import FooterPage from "./components/footer.component";

function App() {
  return (
    <Router>
      <NavbarPage />
        <Route path="/" component={HomePage} />
        {/* <Route path="/edit/:id" component={EditExercise} /> */}
        {/* <Route path="/create" component={CreateExercise} /> */}
        <Route path="/user" component={CreateUser} />
      <FooterPage />
    </Router>
  );
}

export default App;
