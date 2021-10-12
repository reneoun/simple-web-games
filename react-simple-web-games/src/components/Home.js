import { GameCard } from "./GameCard"
import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <div className='home'>
            <h1>Just Some Simple Games By Brouwnie</h1>
            <Link to="/420game">
                <GameCard title_text='420 Game' />
            </Link>
        </div>
    )
}
