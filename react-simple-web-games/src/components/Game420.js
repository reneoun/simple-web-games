import React, { useState, useEffect } from "react"

export const Game420 = () => {
    // const [startDate, setStartDate] = useState(null);
    
    const [textTime, setTextTime] = useState(0);
    const [isRunning, setRunning] = useState(false)
    let startDate = null
    let count = 0;

    useEffect(() => {
        if (isRunning) {
            let id = window.setInterval(() => {
                let current_date = Date();
                if (count === 0) {
                    startDate = current_date
                    console.log(startDate);
                }
                count++;
                let count_low = count % 100;
                count_low = count_low.toString().length === 1 ? "0" + count_low.toString() : count_low.toString();
                let count_high = count / 100;
                // console.log(Math.round(count_high));
                setTextTime(count);
                if (count % 100 === 0) {
                    console.log("Hier");
                    console.log(current_date.toString());
                    console.log(current_date.getMilliseconds() - startDate.getMilliseconds());
                    console.log("-----------------");
                }
            }, 1);
            return () => window.clearInterval(id);
        } 
    },[isRunning]);


    return (
        <div className="game_420">
            <div className="timer">
                <h1>420 Gimma</h1>
                <p>{textTime}</p>
                <div className="btns420">
                    <button onClick={() => setRunning(old => true)}>Start</button>
                    <button onClick={() => setRunning(old => false)}>Stop</button>
                </div>
            </div>
        </div>
    )
}
