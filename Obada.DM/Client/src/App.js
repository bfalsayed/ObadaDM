import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import HomePage from "./pages/homePage/homePage";
import Layout from "./Layout/Layout";
import ProfessorPage from "./pages/ProfessorPage/ProfessorPage";

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path={"/"} component={HomePage}/>
                    <Route exact path={"/professor/:id"} component={ProfessorPage}/>
                    <Route path={"*"} component={() => <div>Page Not Found</div>}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    );
};


export default App;
