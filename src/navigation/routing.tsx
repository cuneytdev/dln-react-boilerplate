import React, {lazy, Suspense} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Loader} from "../components/loader";
import {IntlProvider} from "react-intl";
import {useSelector} from "react-redux";
import {getCurrentLanguage} from "../store/reducers/languageReducer";
import {messages} from "../constants/languages";

const AdminPage = lazy((): any => import("../screens/admin/index"));
const LandingPage = lazy((): any => import("../screens/landing/index"));
const LoginPage = lazy((): any => import("../screens/login/index"))

export default function Router() {
    const language = useSelector(getCurrentLanguage);

    return <BrowserRouter>
        <IntlProvider locale={language.key} messages={messages[language.type]}>
            <Suspense fallback={<Loader message="Loading App"/>}>
                <Switch>
                    <Route path="/admin">
                        <AdminPage/>
                    </Route>
                    <Route path="/login">
                        <LoginPage/>
                    </Route>
                    <Route path="/">
                        <LandingPage/>
                    </Route>
                </Switch>
            </Suspense>
        </IntlProvider>
    </BrowserRouter>
}
