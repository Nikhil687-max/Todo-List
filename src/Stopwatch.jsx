import React,{useState, useEffect, useRef} from "react";

function StopWatch(){
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const setTimeRef = useRef(0);

    useEffect(() => {
        if(isRunning){
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - setTimeRef.current);
            }, 10);
        }
        return (() => {
            clearInterval(intervalIdRef.current);
        })
    },[isRunning])

    function start(){
        setIsRunning(true);
        setTimeRef.current = Date.now() - elapsedTime;
        // console.log(startTimeRef.current);
    }
    function stop(){
        setIsRunning(false);

    }
    function restart(){
        setIsRunning(false);
        setElapsedTime(0);

    }
    function formateTime(){
        // let elapsedTime = 62003;
        var hours = Math.floor(elapsedTime/(1000*60*60));
        var min = Math.floor(elapsedTime/(1000*60));
        var sec = Math.floor((elapsedTime/1000)%60);
        var msec = Math.floor((elapsedTime%1000)/10);
        hours = String(hours).padStart(2, "0");
        min = String(min).padStart(2, "0");
        sec = String(sec).padStart(2, "0");
        msec = String(msec).padStart(2, "0");
        return (
            `${hours}: ${min}: ${sec}: ${msec}`
        );
    }



    return (
        <div className="stopwatch">
            <div className="display">
                <h2>{formateTime()}</h2>
            </div>
            <div className="controls">
                <button onClick={start} className="start-button">Start</button>
                <button onClick={stop} className="stop-button">Stop</button>
                <button onClick={restart} className="reset-button">Reset</button>
            </div>
        </div>
    )
}

export default StopWatch