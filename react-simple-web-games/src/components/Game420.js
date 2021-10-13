import React, { useRef, useState, useEffect } from "react"

export const Game420 = () => {
    const [time, setTimer] = useState(0)
    
    let interval = useRef();
    const runTimer = () => {
        interval = setInterval(() => {
            setTimer(time => time + 1);
        }, 1000);
    };


    useEffect(() => {
        runTimer();
    },[]);


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
