import { useState } from "react";
import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router-dom";

function TextInputFormContainer() {

    // let inputType="password";
    const [inputType, setInputType] = useState("password");

    // state variable for hint
    const [hintValue, setHintValue] = useState("");

    // state variable for text value
    const [textValue, setTextValue] = useState("");

    // navigator to move from one page to another.
    const navigate = useNavigate();

    // state variable for hint error 
    const [hintError, setHintErrorValue] = useState("");
    
    // state variable for text error
    const [textError,setTextErrorValue]=useState("");

    function handelFormSubmit(event) {
        event.preventDefault();
        console.log("form is submitted : hint value is ", hintValue, " and text value is ", textValue, "\n");
        /*
        hintValue=hintValue.trim();
        textValue=textValue.trim();
        we can't do it here like this becasue these hintValue and textValue are state variable..
        */
        if (hintValue.trim() && textValue.trim()) {
            // navigate('/play');
            // using queryparams
            // hint and text are keys name which we will use to access data on playgame component.
            // navigate(`/play?hint=${hintValue}&text=${textValue}`); 

            // using path params
            // for path params the variable value is either state varaible or notmal variable that is changing like id or anything else etc.
            // navigate(`/play/${hintValue}/${textValue}`); 

            // using navigation state.
            navigate(`/play`, {state:({hintSelected:hintValue,textSelected:textValue})});
        }else{
            if(!hintValue.trim()){
                setHintErrorValue("Hint is required");
            }
            if(!textValue.trim()){
                setTextErrorValue("Text is required");
            }
            console.log("Handeled form submit error : ", hintError,textError)
        }
    }
    function handelHintInputChange(event) {
        console.log("hint input is changed\n");
        console.log(event.target.value);
        setHintValue(event.target.value);
        const regex = /^[a-zA-Z]+$/;
        if (regex.test(event.target.value)) {
            setHintErrorValue("");
            setHintValue(event.target.value);

        } else {
            setHintErrorValue("Only alphabetic characters are allowed");
        }

        if(event.target.value.length<=0){
            setHintErrorValue("");
        }
        console.log("Handeled hint input change error : ", hintError);
    }
    function handelTextInputChange(event) {
        console.log("text input is changed\n");
        console.log(event.target.value);
        setTextValue(event.target.value);
        const regex = /^[a-zA-Z ]+$/;
        if (regex.test(event.target.value)) {
            setTextErrorValue("");
            setTextValue(event.target.value);

        } else {
            setTextErrorValue("Only alphabetic characters are allowed.");
        }
        if(event.target.value.length<=0){
            setTextErrorValue("");
        }
        console.log("Handeled text input change error : ", textError);
    }

    function handelShowHideClick(event) {
        // event.preventDefault();
        console.log("show hide button is clicked\n");
        /*
        if(inputType==="password"){
            inputType="text";
        }else{
            inputType="password";
        }
        console.log("inputtype is :",inputType);
        */
        if (inputType === "password") {
            setInputType("text");
        } else {
            setInputType("password");
        }
        console.log("inputtype is :", inputType);

    }

    return (
        <>
            <TextInputForm
                inputType={inputType}
                hintError={hintError}
                textError={textError}
                hintValue={hintValue}
                textValue={textValue}
                handelFormSubmit={handelFormSubmit}
                handelHintInputChange={handelHintInputChange}
                handelTextInputChange={handelTextInputChange}
                handelShowHideClick={handelShowHideClick}
            />
        </>
    );
}
export default TextInputFormContainer;