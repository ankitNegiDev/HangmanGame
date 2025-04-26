export function getLetterButtonStyle(guessedLetterSet,letter,originalLettersSet){
    if(guessedLetterSet.has(letter)){
        console.log("originalLetterSet is : ",originalLettersSet);
        return `${originalLettersSet.has(letter) ? 'bg-green-600':'bg-red-700'}`;
    }else{
        return 'bg-blue-600';
    }
}