import React, { createContext } from "react";
import AppRouters from "./AppRouters";
import { Provider } from 'react-redux';
import store from './store/index';

export const Appcontext = createContext();

const App = () => {
    // const config = "/react/template/";
    return (

        <Provider store={store}>
            <AppRouters />
        </Provider>
        
        );
};

export default App;
