export function getMaskedCharacters(originalWord,guessedLetters){
    // converting all guessed letters into uppercase and guessedletter is an array.
    guessedLetters=guessedLetters.map(function callback(letters){
        return letters.toUpperCase();
    });

    // now crating a set of guessedLetter.
    const guessedLetterSet=new Set(guessedLetters);

    // now converting the original word into a uppercase.
    // string is "xyz"
    originalWord=originalWord.toUpperCase(); // "XYZ"
    // now splitting it into array.
    const originalWordArray=originalWord.split(""); // ['X','Y','Z]

    // now we will iterate on the originalWordArray and check if set has current character or not if yes then correct guess else incorrect guess
    const result=originalWordArray.map(function callback(char){
       if(guessedLetterSet.has(char)){
        // correct guess
        return char;
       }else{
        // incorrect guess
        return "_"
       }
    });
    return result;
}