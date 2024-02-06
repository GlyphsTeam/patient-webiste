import { configureStore } from "@reduxjs/toolkit";

import home from './Home/home';
import doctors from './Doctors/doctors';
import contact from './Contact/contact';
import blog from './Blog/blog';
import auth from "./Auth/auth";
import register from './Register/register';
import dashboard from './Dashboard/dashboard';

const store = configureStore({
    reducer: {
        home: home,
        doctors: doctors,
        contact: contact,
        blog: blog,
        auth: auth,
        register: register,
        dashboard: dashboard
    }
});


export default store;