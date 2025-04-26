// TextInput component...
function TextInput({type,label,placeholder="Enter word for guessing",value,onChangeHandler,error}){

    return(
        <>
            <label
                className="block text-2xl mx-6 my-2"
            >
                <span>{label}</span>
                <input 
                    type={type}
                    placeholder={placeholder}
                    // className="px-4 py-4 border-2 border-gray-600 bg-gray-800 text-gray-300 rounded-md w-3/4 m-7  text-xl focus:bg-gray-800 focus:border-green-800 focus:outline-none"
                    value={value}
                    className={`px-4 py-4 border-2 border-gray-500 bg-gray-800 text-gray-300 rounded-md w-3/4 ml-7 mt-7 mb-2 text-xl focus:bg-gray-800 focus:border-green-800 focus:outline-none ${error ? 'border-red-700' : 'border-gray-300'}`}
                    aria-describedby="hint-error"
                    onChange={onChangeHandler}
                />
                  {error && <p id="hint-error" className="text-red-600 text-lg text-center w-full ">{error}</p>}

            </label>
        </>
    );
}
export default TextInput;