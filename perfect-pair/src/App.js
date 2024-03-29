import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import NavbarPage from "./components/navbar.component";
// import ExerciseList from "./components/exercises-list.component";
// import EditExercise from "./components/edit-exercise.component";
// import CreateExercise from "./components/create-exercise.component";
import HomePage from "./components/home-page.component";
// import CreateUser from "./components/create-user.component";
import SearchPage from "./components/search-page.component";

import FooterPage from "./components/footer.component";

function App() {
  return (
    <Router>
      <NavbarPage />
        <Switch>
        <Route exact path="/" component={HomePage} />
        {/* <Route path="/edit/:id" component={EditExercise} /> */}
        {/* <Route path="/create" component={CreateExercise} /> */}
        <Route path="/search" component={SearchPage} />
        </Switch>
      <FooterPage />
    </Router>
  );
}

export default App;
