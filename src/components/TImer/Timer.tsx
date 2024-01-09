import React from "react";
import SettingsIcon from '@mui/icons-material/Settings';
import './Timer.css'
import { useDispatch, useSelector } from "react-redux";
import { setSettingsIsOpen } from "../../state/settingsModal/settingsModalIsOpen";
import { RootState } from "../../state/store";

const Timer = () => {
    const minutes = useSelector((state: RootState) => state.timerTime.minutes);
    const seconds = useSelector((state: RootState) => state.timerTime.seconds);
    const [timeMinutes, setTimeMinutes] = React.useState<string>(useSelector((state: RootState) => state.timerTime.minutes));
    const [timeSeconds, setTimeSeconds] = React.useState<string>(useSelector((state: RootState) => state.timerTime.seconds));
    const [timerId, setTimerId] = React.useState<NodeJS.Timer | undefined>();
    const dispatch = useDispatch();

    function startClock(){
        let tempMinutes = timeMinutes;
        let tempSeconds = timeSeconds
        const intervalId = setInterval(() => {
            if(tempSeconds === '00'){
                if(tempMinutes === '00'){
                    clearInterval(intervalId)
                }else{
                    tempMinutes = Number(tempMinutes) < 11 ?  "0" + (Number(tempMinutes) - 1) : (Number(tempMinutes) - 1) + ''
                    tempSeconds = '59'
                    setTimeMinutes(tempMinutes)
                    setTimeSeconds(tempSeconds)
                }
            }else{
                tempSeconds = Number(tempSeconds) < 11 ? "0" + (Number(tempSeconds) - 1) : (Number(tempSeconds) - 1) + ''
                setTimeSeconds(tempSeconds)
            }
        }, 1000)
        setTimerId(intervalId)
    }

    return(
        <div
            className="Timer"
        >
            <SettingsIcon 
                className="timerSettings"
                fontSize="large"
                onClick={() => dispatch(setSettingsIsOpen())}
            />
            <h1 className="timerClock">
                {timeMinutes}:{timeSeconds}
            </h1>

            <div
                className="timerButtons"
            >
                <button
                    onClick={() => startClock()}
                    disabled={timerId ? true : false}
                >СТАРТ</button>

                <button
                    onClick={() => {
                        clearInterval(timerId);
                        setTimerId(undefined)
                    }}
                >ПАУЗА</button>

                <button
                    onClick={() => {
                        clearInterval(timerId);
                        setTimerId(undefined);
                        setTimeSeconds(seconds);
                        setTimeMinutes(minutes);
                    }}
                >РЕСТАРТ</button>
            </div>
        </div>
    )
}

export default Timer