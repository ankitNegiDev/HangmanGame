import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import { useEffect, useState } from "react";
import handleMouseMove from "./handleMouseMove"; 

function Home() {
    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);


    function onClickHandlerOnePlayer() {
        // navigation logic or game start .. for extended feature ... version 2.
    }
    function onClickHandlerMultiPlayer() {
        // navigation logic or game start
    }

    // const [word,setWord]=useState("mango");
    // const [hint,setHin]=useState("fruit");
    
    const [word,setWord]=useState("");
    const [hint,setHin]=useState("");

    async function fetchWords(){
        const response=await fetch('/api/words');
        const data=await response.json();
        console.log("data is : ",data);
        const randomIndex=Math.floor(Math.random()*data.length);
        console.log("randomIndex is : ",randomIndex);
        setWord(data[randomIndex].wordValue);
        setHin(data[randomIndex].wordHint);
    }
    useEffect(function callback(){
        fetchWords();
    },[])


    return (
        <div className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
            {/* Heading */}
            <h1 className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text 
                bg-gradient-to-r from-indigo-600 via-pink-400 to-teal-600 
                drop-shadow-2xl mb-12 text-center animate__animated animate__fadeIn animate__delay-1s glow-effect">
                Welcome to the Game Zone
                <span className="ml-4 text-8xl text-pink-400 animate-bounce">🎮</span>
            </h1>


            {/* Buttons */}
            <div className="flex flex-col gap-8 items-center animate__animated animate__fadeIn animate__delay-2s">
                <Link to="/play" state={{textSelected:word,hintSelected:hint}}>
                    <Button
                        text="Single Player Game"
                        onClickHandler={onClickHandlerOnePlayer}
                        styleType="primary"
                        className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white shadow-2xl hover:shadow-3xl 
                                   text-xl rounded-lg py-4 px-8 transition-all duration-400 transform hover:scale-110 hover:rotate-3 hover:translate-y-3"
                    />
                </Link>

                <Link to="/start">
                    <Button
                        text="Multi Player Game"
                        onClickHandler={onClickHandlerMultiPlayer}
                        styleType="secondary"
                        className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white shadow-2xl hover:shadow-3xl 
                                   text-xl rounded-lg py-4 px-8 transition-all duration-400 transform hover:scale-110 hover:rotate-3 hover:translate-y-3"
                    />
                </Link>
            </div>
        </div>
    );
}

export default Home;
