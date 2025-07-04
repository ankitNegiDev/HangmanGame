import { getLetterButtonStyle } from "./getLetterButtonStyle";
const ALPHABETS="QWERTYUIOPASDFGHJKLZXCVBNM ";
const ALPHABETSArr=ALPHABETS.split("");
// console.log(ALPHABETSArr);
function LetterButtons({inputText,guessedLetterArray,onLetterClick}){
    // const originalLettersSet=new Set(inputText.toUpperCase().split(""));
    console.log("input text is : ",inputText);
    const originalLettersSet = new Set((inputText || "").toUpperCase().split(""));
    const guessedLettersSet=new Set(guessedLetterArray);
    
    function handleLetterClick(event){
        console.log("event is : ",event);
        console.log("event target is ",event.target);
        console.log("event target value is : ",event.target.value);
        const characterOfTheLetter = event.target.value;
        console.log("character of the letter is : ",characterOfTheLetter);
        // onLetterClick ?. (characterOfTheLetter);
        onLetterClick?.(characterOfTheLetter);

    }
    // now creating a button array and then we will render list or render all button.
    const buttons=ALPHABETSArr.map(function callback(letter){
        return (
            <button 
                key={`button-${letter}`}
                value={letter}
                onClick={handleLetterClick}
                disabled={guessedLettersSet.has(letter)}
                className={`h-14 w-14 m-3 p-3 text-xl text-gray-200 rounded-md ${getLetterButtonStyle(guessedLettersSet,letter,originalLettersSet)}`}
            >
                {letter}
            </button>
        );
    })

    // now we will render this buttons array from our component.
    return (
        <>
            {buttons}
        </>
    );
}
export default LetterButtons;