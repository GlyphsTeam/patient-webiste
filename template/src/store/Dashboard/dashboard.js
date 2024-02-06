import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    homeDashboard: null,
    favouriteData: null,
    debendentData: null,
    messageData: null,
    accountData: null,
    ordersData: null,
    medicalDetails: null,
    profileSetting: null
}

const dashboardRedux = createSlice({
    name: "dashboard",
    initialState,
    reducers: {
        setHomeDashboard: (state, actions) => {
            state.homeDashboard = actions.payload;
        },
        setFavouriteData: (state, actions) => {
            state.favouriteData = actions.payload;
        },
        setDebendentData: (state, actions) => {
            state.debendentData = actions.payload;
        },
        setMessageData: (state, actions) => {
            state.messageData = actions.payload;
        },
        setAccountData: (state, actions) => {
            state.accountData = actions.payload;
        },
        setOrdersData: (state, actions) => {
            state.ordersData = actions.payload;
        },
        setMedicalData: (state, actions) => {
            state.medicalDetails = actions.payload;
        },
        setProfileData: (state, actions) => {
            state.profileSetting = actions.payload;
        }
    }
});

export const dashboardState = ((state) => state.dashboard);

export const {
    setHomeDashboard,
    setFavouriteData,
    setDebendentData,
    setMessageData,
    setAccountData,
    setOrdersData,
    setMedicalData,
    setProfileData
} = dashboardRedux.actions;


export default dashboardRedux.reducer;

