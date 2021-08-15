import React, {lazy, Suspense} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Loader} from "../components/loader";

const AdminPage = lazy((): any => import("../screens/admin/index"));
const LandingPage = lazy((): any => import("../screens/landing/index"))

export default function Router() {
    return <BrowserRouter>
        <Suspense fallback={<Loader message="Loading App"/>}>
            <Switch>
                <Route path="/admin">
                    <AdminPage/>
                </Route>
                <Route path="/">
                    <LandingPage/>
                </Route>
            </Switch>
        </Suspense>
    </BrowserRouter>
}
