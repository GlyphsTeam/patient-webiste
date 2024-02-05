import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    isAuth: false
};



const authRedux = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuth: (state, actions) => {
            state.isAuth = actions.payload;
        },
        setIsLoading: (state, actions) => {
            state.isLoading = actions.payload;
        }
    }
});

export const authState = ((state) => state.auth);

export const {setAuth, setIsLoading} = authRedux.actions;


export default authRedux.reducer;
