import React, { createContext } from "react";
import AppRouters from "./AppRouters";
import { Provider } from 'react-redux';
import store from './store/index';
import { I18nextProvider } from "react-i18next";
import i18n from './i18n';
export const Appcontext = createContext();

const App = () => {
    // const config = "/react/template/";
    return (
        <I18nextProvider i18n={i18n}>
            <Provider store={store}>
                <AppRouters />
            </Provider>
        </I18nextProvider>

    );
};

export default App;
