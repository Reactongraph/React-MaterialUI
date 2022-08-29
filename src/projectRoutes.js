import React from 'react';
// import { Switch, Route, Router } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home';
import SignUp from './modules/signUp';
import SignIn from './modules/signIn';

// Switch between one screen to another screen


const ProjectRoutes = (props) => {
    return (
        <Router>
            <Routes>
                <Route
                    exact
                    path="/"
                    element={<Home {...props} />}
                />
                <Route
                    exact
                    path="/signin"
                    element={<SignIn {...props} />}
                />
                <Route
                    exact
                    path="/signup"
                    element={<SignUp {...props} />}
                />
            </Routes>
        </Router>
    )
}

export default ProjectRoutes;
