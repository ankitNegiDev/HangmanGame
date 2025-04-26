// Start Game....

import { Link, useSearchParams } from "react-router-dom";
import TextInputFormContainer from "../components/TextInputForm/TextInputFormContainer";

function StartGame() {
    

    return (
        <>
            <h1
                className="text-4xl md:text-5xl font-extrabold text-center m-6 text-indigo-400 drop-shadow-md transition duration-300 hover:text-teal-400"
            >
                Start Game
            </h1>

            <TextInputFormContainer />
            <Link to="/play" className="text-cyan-500 hover:text-blue-500 text-xl m-6">Play Game</Link>
        </>
    );
}
export default StartGame;