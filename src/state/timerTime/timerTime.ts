import { createSlice } from "@reduxjs/toolkit";

type TimeSlice = {
    minutes: string;
    seconds: string;
}

const initialState: TimeSlice = {
    minutes: '25',
    seconds: '00',
}

const TimerTimeSlice = createSlice({
    name: 'timerTime',
    initialState,
    reducers: {
        setTimerTimeMinutes: (state, action) => {
            state.minutes = action.payload;        
        },
        setTimerTimeSeconds: (state, action) => {
            state.seconds = action.payload;        
        }
    }
})

export const { setTimerTimeMinutes, setTimerTimeSeconds } = TimerTimeSlice.actions

export default TimerTimeSlice.reducer;