/*
function Button(props){

    console.log("props is : ",props);
    return(
        <>
            <button>{props.text}</button>
        </>
    );
}
export default Button;
*/

import './Button.css'
import { getButtonStyling } from './getButtonStyle';
// using de-structuring.
function Button({ text, onClickHandler, styleType = "primary", type = "button" ,className=""}) {
    console.log("text is : ", text);
    return (
        <>
            <button
                onClick={onClickHandler}
                // inline style.
                // style={{backgroundColor:"green",color:"white", margin:"20px"}}
                // external style.
                // className="btn"
                // tailwind css..
                // className="text-black bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded"
                // className="text-white bg-blue-400 py-2 px-4 rounded-lg hover:bg-blue-700 m-2 hover:text-yellow-500 text-xl font-medium"
                // className={`${getButtonStyling(styleType)} py-3 px-5 rounded-lg hover:bg-teal-900 m-2 hover:text-yellow-500 text-2xl font-medium w-[15rem] ml-6 mt-4`}
                className={`${getButtonStyling(styleType)} 
                            py-3 px-5 rounded-xl m-2 ml-6 mt-4 
                            text-2xl font-medium text-white 
                            w-[15rem]  hover:bg-teal-700 
                            hover:text-yellow-400 
                            transition-all duration-300 ease-in-out 
                            hover:scale-105 active:scale-95 
                            shadow-md hover:shadow-lg 
                            focus:outline-none focus:ring-2 focus:ring-yellow-400
                            ${className}`}
                type={type}
            >{text}</button>
        </>
    );
}


export default Button;