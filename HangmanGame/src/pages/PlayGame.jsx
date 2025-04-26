import { Link, useLocation, useParams, useSearchParams } from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import { useState } from "react";
import HangTheMan from "../components/HangTheMan/HangTheMan";

function PlayGame() {
    // using Queryparams.
    // const [searchParams]=useSearchParams();
    // console.log("search parsm :",searchParams.get("text")); // keyname
    // console.log("hint is : ",searchParams.get("hint"));
    // console.log("text is : ",searchParams.get("text"));

    // using path params.
    // const {hint,text}=useParams();
    // console.log("hint is : ",hint);
    // console.log("text is : ",text);

    // using navigation state.
    const { state } = useLocation();
    if (!state || !state.textSelected) {
        return (
            <div className="min-h-screen flex flex-col justify-center items-center text-white bg-[#1a1a1a]">
                <h1 className="text-4xl font-bold text-red-500 mb-6">Error: Word And Hint are not provided!</h1>
                <p className="text-lg mb-6 text-gray-300">Please start a new game properly. And check json server is up-running or not</p>
                <Link
                    to="/"
                    className="px-6 py-3 bg-teal-500 text-white rounded-lg shadow-md hover:bg-blue-500 transition duration-300"
                >
                    Go to Start Game
                </Link>
            </div>
        );
    }


    if (state && state.hintSelected) {
        state.hintSelected = state.hintSelected.charAt(0).toUpperCase() + state.hintSelected.slice(1);
      }
    console.log("state in PlayGame: ", state);
    console.log("Hint selected is : ", state?.hintSelected);
    console.log(`Word selected is or state.text selected is  : ${state?.textSelected}`);


    // statevariable for the guessed letter.

    const [guessedLetters, setGuessedLetters] = useState([]);
    /*
    function handelLetterClick(event){
        const letter=event.target.value;
        console.log("clicked letter is : ",letter);
        setGuessedLetters([...guessedLetters,letter]);
    }
    */
    /*
    function handelLetterClick(letter) {
        console.log("clicked letter is:", letter);
        if (state.textSelected.toUpperCase().includes(letter)) {
            console.log("Letter is correct");
        } else {
            console.log("letter is wrong");
            setStep(step + 1);
        }
        setGuessedLetters([...guessedLetters, letter]);
    }

    console.log("Passing inputText to LetterButtons:", state.textSelected);
    */

    function handelLetterClick(letter) {
        console.log("clicked letter is:", letter);
        if (state?.textSelected.toUpperCase().includes(letter)) {
            console.log("Letter is correct");
        } else {
            console.log("letter is wrong");
            setStep(step + 1);
        }
        setGuessedLetters([...guessedLetters, letter]);
    }



    // state for wrong guess
    const [step, setStep] = useState(0);


    // Track correctly guessed letters
    const correctGuessedLetters = new Set(
        guessedLetters.filter(function (letter) {
            return state?.textSelected.toUpperCase().includes(letter.toUpperCase());
        })
    );
    // Check if user has guessed all unique letters correctly
    const hasWon = correctGuessedLetters.size === new Set(state?.textSelected.toUpperCase().split("")).size;

    // Check if game is over (i.e., user has reached max steps)
    const isGameOver = step >= 7;

    return (
        <>
            {/* <h1>PlayGame Hint : {hint} and Text : {text}</h1> */}
            {/* <h1>PlayGame Hint : {state.hintSelected} and Word : {state.textSelected}</h1> */}
            {/* <h1
                className="text-4xl md:text-5xl font-extrabold text-center m-6 text-indigo-400 drop-shadow-md transition duration-300 hover:text-teal-400"
            >
                PlayGame
            </h1>
            <div>
                <h2> HInt is : {state.hintSelected}</h2>
                <h2> Word is : {state.textSelected}</h2>
            </div>
            <Link to='/start' className="text-teal-500 hover:text-blue-500">Start Game</Link> */}


            {/*<div className="min-h-screen flex flex-col items-center px-4 py-10 text-white">
                <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-400 drop-shadow-md transition duration-300 hover:text-teal-400 text-center mb-8">
                    Play Hangman Game
                </h1>

                <div className="bg-[#2f2f2f] rounded-2xl shadow-lg pt-3 pl-6 pr-6 pb-6 w-full max-w-md text-center">
                    <h2 className="text-3xl font-semibold text-gray-200 mb-4 p-3 relative">
                        <span className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-500 opacity-30 rounded-md"></span>
                        <span className="relative z-10">Hint</span>
                    </h2>

                    <div className="relative inline-block bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text font-semibold text-4xl px-2 py-1 rounded-md shadow-lg hover:scale-105 transition duration-300 ease-in-out mb-8">
                        {/* Hint with gradient text and a shadow effect 
                        {state?.hintSelected}
                    </div>

                    {/* Hidden word for internal logic 
                    {/* <p className="text-sm text-gray-500">Debug Word: {state?.textSelected}</p> 

                    <MaskedText
                        inputText={state?.textSelected || ""}
                        guessedLettersArray={['H', 'm', 'l']} // Replace with actual guessed letters when we will add game logic
                    />
                    <LetterButtons text={state.textSelected} guessedLetterArray={[]} onLetterClick={function callback(event) { console.log("clicked letter ", event.target.value) }} />
                </div>
                <Link
                    to="/start"
                    className="inline-block mt-4 px-6 py-2 bg-teal-500 text-white font-semibold rounded-xl shadow-md hover:bg-blue-500 transition duration-300"
                >
                    Start Game
                </Link>
             </div> */}

            {/* <div className="text-xl mt-6">
                {isGameOver && <p className="text-red-500">Game Over! The word was: {state.textSelected}</p>}
                {hasWon && <p className="text-green-500">You Win! Congratulations!</p>}
            </div> */}


            <div className="min-h-screen px-4 py-4 text-white bg-[#1a1a1a]">
                <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-400 drop-shadow-md transition duration-300 hover:text-teal-400 text-center mb-3">
                    Play Hangman Game
                </h1>

                {/* Main two-column container */}
                <div className="flex flex-col md:flex-row justify-between  gap-20 w-full max-w-8xl mx-auto  p-5">

                    {/* Left Panel: Game Section */}
                    <div className="bg-[#2f2f2f] rounded-2xl shadow-lg pt-3 pl-6 pr-6 pb-6 w-full max-w-[60%] text-center">
                        <h2 className="text-4xl font-semibold text-gray-200 mb-4 px-3 py-4 relative">
                            <span className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-500 opacity-30 rounded-md"></span>
                            <span className="relative z-10 ">Hint</span>
                        </h2>

                        <div className="relative inline-block bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text font-semibold text-4xl px-2 py-1 rounded-md shadow-lg hover:scale-105 transition duration-300 ease-in-out mb-8">
                            {/* Hint with gradient text and a shadow effect */}

                            {state?.hintSelected}
                        </div>

                        {/* Hidden word for internal logic */}
                        {/* <p className="text-sm text-gray-500">Debug Word: {state?.textSelected}</p> */}

                        <MaskedText
                            inputText={state?.textSelected || ""}
                            guessedLettersArray={guessedLetters} // Replace with actual guessed letters when we will add game logic
                        />
                        <LetterButtons inputText={state?.textSelected} guessedLetterArray={guessedLetters} onLetterClick={handelLetterClick} />
                    </div>


                    {/* Right Panel: Hangman Image Placeholder */}
                    <div className="w-full md:w-[40%] bg-[#2f2f2f] rounded-2xl shadow-lg p-2 ">
                        <HangTheMan step={step} />

                    </div>

                </div>

                {/* Restart Link */}
                <div className="text-center mt-5">
                    <Link
                        to="/start"
                        className="inline-block px-6 py-2 bg-teal-500 text-white font-semibold rounded-xl shadow-md hover:bg-blue-500 transition duration-300"
                    >
                        Start Game
                    </Link>
                </div>



                {/* Overlay for game result */}
                {(isGameOver || hasWon) && (
                    <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
                        <div className="text-center text-white p-10 rounded-lg bg-gray-800">
                            {isGameOver && <p className="text-3xl text-red-500 mb-10 text-center font-semibold">Game Over! Better Luck Next Time</p>}
                            {isGameOver && <p className="text-2xl mb-20 text-gray-400">The word was : {state?.textSelected}</p>}
                            {hasWon && <p className="text-4xl text-green-500 mb-20">You Win! Congratulations!</p>}

                            {/* Use Link for SPA navigation */}
                            <Link
                                to="/" // Navigate to the start page
                                className="mt-4 px-6 py-4 bg-teal-600 text-gray-300 text-lg font-semibold rounded-xl shadow-md hover:bg-blue-500 transition duration-300"
                            >
                                Restart Game
                            </Link>
                        </div>
                    </div>
                )}
            </div>


        </>
    );
}
export default PlayGame;