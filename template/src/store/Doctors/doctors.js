import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    doctors: null
};


const doctorsRedux = createSlice({
    name: "doctors",
    initialState,
    reducers: {
        setDoctorsData: (state, actions) => {
            state.doctors = actions.payload;
        }
    }
});

export const stateDoctors = ((state) => state.doctors);

export const { setDoctorsData } = doctorsRedux.actions;

export default doctorsRedux.reducer;