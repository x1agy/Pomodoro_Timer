import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/store";
import './Settings.css'
import { setSettingsIsOpen } from "../../state/settingsModal/settingsModalIsOpen";
import { setTimerTimeMinutes, setTimerTimeSeconds } from "../../state/timerTime/timerTime";

const Settings = () => {

    const isOpen = useSelector((state:RootState) => state.isSettingsOpen.isOpen);
    const dispatch = useDispatch();

    const [timeMinutes, setTimeMinutes] = React.useState<string>('00');
    const [timeSeconds, setTimeSeconds] = React.useState<string>('00');
    const [alertIsOpen, setAlertIsOpen] = React.useState<boolean>(false);

    function saveSettings(){
        if(Number(timeMinutes) < 1){
            setAlertIsOpen(!alertIsOpen);
            setTimeout(() => {
                setAlertIsOpen(false);
            }, 3000)
        }else{
            dispatch(setTimerTimeMinutes(timeMinutes.length < 2 ? '0' + timeMinutes : timeMinutes))
            dispatch(setTimerTimeSeconds(timeSeconds.length < 2 ? '0' + timeSeconds : timeSeconds))
            
            dispatch(setSettingsIsOpen())
        }
    }

    return(
        <div
            style={{
                display: isOpen ? 'flex' : 'none',
            }}
            className="Settings"
        >
            <div className="settingsContainer">
                <div
                    className="settingsTimeInputContainer"
                >
                    <h4

                    >Время работы:</h4>
                    <input 
                        type="text" 
                        className="timeInputMinutes" 
                        value={timeMinutes}
                        style={{
                            border: alertIsOpen ? '1px solid red' : '1px solid black'
                        }}
                        onChange={(e) => {
                            if(Number(e.target.value) < 60){
                                setTimeMinutes(Number(e.target.value) * 1 + '')
                            }
                        }}
                    />
                    <h1>:</h1>
                    <input 
                        type="text" 
                        className="timeInputSeconds" 
                        value={timeSeconds}
                        onChange={(e) => {
                            if(Number(e.target.value) <= 60){
                                setTimeSeconds(Number(e.target.value) * 1 + '')
                            }
                        }}
                    />
                </div>
                
                <h3
                    style={{
                        display: alertIsOpen ? 'inline' : 'none',
                        marginLeft: '10px'
                    }}

                >
                    А-а-а! Так мало работать, вредно!
                </h3>

                <button
                    className="settingsConfirmButton"
                    onClick={() => saveSettings()}
                    disabled={alertIsOpen ? true : false}
                >Сохранить</button>
            </div>
        </div>
    )
}

export default Settings;