import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import HomePage from "./pages/homePage";
import Layout from "./Layout/Layout";
import ProfessorPage from "./pages/ProfessorPage";
import StatisticsPage from "./pages/StatisticsPage";
import CalenderPage from "./pages/CalenderPage";

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path={"/"} component={HomePage}/>
                    <Route exact path={"/statistics"} component={StatisticsPage}/>
                    <Route exact path={"/professor/:id"} component={ProfessorPage}/>
                    <Route exact path={"/calender"} component={CalenderPage}/>
                    <Route path={"*"} component={() => <div>Page Not Found</div>}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    );
};


export default App;
