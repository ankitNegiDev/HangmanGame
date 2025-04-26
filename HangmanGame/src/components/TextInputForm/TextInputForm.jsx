import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

function TextInputForm({ inputType, handelFormSubmit,handelHintInputChange, handelTextInputChange, handelShowHideClick,hintError, textError, hintValue, textValue }) {
    // function handelFormSubmit(event){
    //     event.preventDefault();
    //     console.log("form is submitted\n");
    // }
    // function handelTextInputChange(event){
    //     console.log("text input is changed\n");
    //     console.log(event.target.value);
    // }
    return (
        <>
            <form onSubmit={handelFormSubmit}>
                <div>
                    <TextInput

                        type={inputType}
                        error={hintError}
                        label="Enter a Hint"
                        placeholder="Enter a Hint for other user"
                        value={hintValue}
                        // onChangeHandler={function callback(event) { console.log("event.target value is : ", event.target.value); }}
                        onChangeHandler={handelHintInputChange}
                    />
                    <TextInput

                        type={inputType}
                        error={textError}
                        label="Enter a text"
                        placeholder="Enter word for guessing for other user"
                        value={textValue}
                        // onChangeHandler={function callback(event) { console.log("event.target value is : ", event.target.value); }}
                        onChangeHandler={handelTextInputChange}
                    />
                </div>
                <div>
                    <Button
                        text={inputType === "password" ? "Show" : "Hide"}
                        // onClickHandler={function callback() { console.log("Button Clicked ") }} 
                        styleType=""
                        onClickHandler={handelShowHideClick}
                    />
                </div>
                <div>
                    <Button
                        text="Submit"
                        type="Submit"
                        // onClickHandler={function callback(){console.log("Submit Button Clicked ")}} 
                        onClickHandler={handelFormSubmit}
                        styleType="secondary"
                    />
                </div>
            </form>
        </>
    );
}

export default TextInputForm;