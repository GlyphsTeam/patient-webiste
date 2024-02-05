import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    homeData: null
};


const homeData = createSlice({
    name: "home",
    initialState,
    reducers: {
        setHomeData: (state, actions) => {
            state.homeData = actions.payload;
        }
    }
});


export const stateHome = ((state) => state.home);

export const { setHomeData } = homeData.actions;

export default homeData.reducer;