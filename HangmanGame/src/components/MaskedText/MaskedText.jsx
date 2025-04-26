import { getMaskedCharacters } from "./maskingUtility";

function MaskedText({ inputText, guessedLettersArray }) {
    const maskedCharacters = getMaskedCharacters(inputText, guessedLettersArray);
    return (
        <>
            {/* <div className="flex flex-wrap justify-center gap-2 mt-4">
                {maskedCharacters.map(function callback(char, index) {
                    return (
                        <span
                            key={index}
                            className="w-10 h-12 flex items-center justify-center bg-[#2f2f2f] text-white text-2xl font-semibold rounded-md shadow-md transition duration-300"
                        >
                            {char}
                        </span>
                    );
                })}
            </div> */}
            <div className="flex justify-center gap-6 mt-6 overflow-x-auto">
                {maskedCharacters.map(function callback(char, index) {
                    return (
                        <span
                            key={index}
                            className={`w-[4.2rem] h-[8.7vh] flex items-center justify-center text-white text-3xl font-semibold rounded-md shadow-lg transition duration-300 mb-12
                    ${char === "_" ? "bg-gradient-to-r from-gray-600 to-gray-800 border-2 border-dashed border-gray-500" : "bg-gradient-to-r from-teal-400 to-blue-500 hover:shadow-xl"}`}
                        >
                            {char === "_" ? "" : char} {/* Empty string for underscores */}
                        </span>
                    );
                })}
            </div>
        </>
    );
}

export default MaskedText;