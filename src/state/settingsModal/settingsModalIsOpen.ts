import { createSlice } from "@reduxjs/toolkit";

type modalState = {
    isOpen: boolean;
}

const initialState: modalState = {
    isOpen: false
}

const SettingsModalSlice = createSlice({
    name: 'isSettingsOpen',
    initialState,
    reducers: {
        setSettingsIsOpen: state => {
            state.isOpen = !state.isOpen;
        }
    }
})

export const { setSettingsIsOpen } = SettingsModalSlice.actions;

export default SettingsModalSlice.reducer;