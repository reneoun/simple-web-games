import React, { useRef, useState, useEffect } from "react"

export const Game420 = () => {
    const [time, setTimer] = useState(0)
    
    let interval = useRef();
    const begin_time = 0
    const runTimer = () => {
        interval = setInterval(() => {
            // tmp_time++;
            setTimer(begin_time);
            // console.log(tmp_time);
        }, 5000);
    };


    useEffect(() => {
        runTimer();
        return () => {
            clearInterval(interval.current)
        };
    });


    return (
        <div className="game_420">
            <div className="timer">
                <h1>420 Gimma</h1>
                <p>{time}</p>
                <button>Start</button>
                <button>Stop</button>
            </div>
        </div>
    )
}
