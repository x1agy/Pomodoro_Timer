import React from "react";

const Timer = () => {
    const [timeMinutes, setTimeMinutes] = React.useState<string>('25');
    const [timeSeconds, setTimeSeconds] = React.useState<string>('10');
    const [timerId, setTimerId] = React.useState<NodeJS.Timer | undefined>();

    function startClock(){
        let minutes = timeMinutes;
        let seconds = timeSeconds
        const intervalId = setInterval(() => {
            if(seconds === '00'){
                if(minutes === '00'){
                    clearInterval(intervalId)
                }else{
                    minutes = Number(minutes) < 11 ?  "0" + (Number(minutes) - 1) : (Number(minutes) - 1) + ''
                    seconds = '60'
                    setTimeMinutes(minutes)
                    setTimeSeconds(seconds)
                }
            }else{
                seconds = Number(seconds) < 11 ? "0" + (Number(seconds) - 1) : (Number(seconds) - 1) + ''
                setTimeSeconds(seconds)
            }
            console.log('cock')
        }, 1000)
        setTimerId(intervalId)
    }

    return(
        <div
            className="Timer"
        >
            <h1 className="timerClock">
                {timeMinutes}:{timeSeconds}
            </h1>

            <div
                className="TimerButtons"
            >
                <button
                    onClick={() => startClock()}
                    disabled={timerId ? true : false}
                >START</button>

                <button
                    onClick={() => {
                        clearInterval(timerId);
                        setTimerId(undefined)
                    }}
                >STOP</button>
            </div>
        </div>
    )
}

export default Timer