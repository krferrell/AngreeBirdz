import { createSlice } from '@reduxjs/toolkit';
import { default64 } from '../assets/base64';

export const userStateSlice = createSlice({
    name: 'userLogin',
    initialState: { userName: "null", userPic: default64},
    reducers: {
        setUserName: (state, action) => {
            state.userName = action.payload
        },
        setUserPic: (state, action) => {
            state.userPic = action.payload
        },
    },
});

export const { setUserName, setUserPic } = userStateSlice.actions;

export default userStateSlice.reducer;