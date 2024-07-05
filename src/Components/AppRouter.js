import React from 'react';
import {Route, Routes} from "react-router-dom";
import {routes} from "../routes";

const AppRouter = () => {
    return (
        <div>
            <Routes>
                {routes.map(route =>
                    <Route path={route.path} Component={route.element}/>
                )}
            </Routes>
        </div>
    );
};

export default AppRouter;