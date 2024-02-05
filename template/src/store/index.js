import { configureStore } from "@reduxjs/toolkit";
import home from './Home/home';
import doctors from './Doctors/doctors';
import contact from './Contact/contact';
import blog from './Blog/blog';
import auth from "./Auth/auth";

const store = configureStore({
    reducer: {
        home: home,
        doctors: doctors,
        contact: contact,
        blog: blog,
        auth: auth
    }
});


export default store;