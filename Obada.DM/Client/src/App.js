import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import HomePage from "./pages/homePage";
import Layout from "./Layout/Layout";
import ProfessorPage from "./pages/ProfessorPage";
import StatisticsPage from "./pages/StatisticsPage";
import CalenderPage from "./pages/CalenderPage";
import WelcomePage from "./pages/WelcomePage";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"} component={(props) => <WelcomePage {...props} /> } />
                <Route exact path={"/dashboard"} render={(props) => {
                    return (
                        <Layout>
                            <HomePage {...props}/>
                        </Layout>
                    )
                }}/>
                <Route exact path={"/statistics"} render={(props) => {
                    return (
                        <Layout>
                            <StatisticsPage {...props}/>
                        </Layout>
                    )
                }}/>
                <Route exact path={"/professor/:id"} render={(props) => {
                    return (
                        <Layout>
                            <ProfessorPage {...props}/>
                        </Layout>
                    )
                }}/>
                <Route exact path={"/calender"} render={(props) => {
                    return (
                        <Layout>
                            <CalenderPage {...props}/>
                        </Layout>
                    )
                }}/>
                <Route path={"*"} component={() => <div>Page Not Found</div>}/>
            </Switch>
        </BrowserRouter>
    );
};


export default App;
