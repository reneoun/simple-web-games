export const Game420 = () => {
    var time = 0
    const time_text = "0"

    const startTimer = () => {
        console.log("Hello balz");
        time++;
        console.log(time)
        time_text = time.toString()
    }

    return (
        <div className="game_420">
            <div className="timer">
                <h1>420 Gimma</h1>
                <p>{time_text}</p>
                <button onClick={startTimer}>Start</button>
                <button>Stop</button>
            </div>
        </div>
    )
}
