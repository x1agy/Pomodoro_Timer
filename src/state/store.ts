import { configureStore } from "@reduxjs/toolkit";
import isSettingsOpenReducer from './settingsModal/settingsModalIsOpen'
import timerTimeReducer from './timerTime/timerTime'

export const store = configureStore({
    reducer: {
        isSettingsOpen: isSettingsOpenReducer,
        timerTime: timerTimeReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;