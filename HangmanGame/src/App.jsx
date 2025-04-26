import Button from "./components/Button/Button.jsx"
import TextInput from "./components/TextInput/TextInput.jsx"
import './App.css'
import TextInputForm from "./components/TextInputForm/TextInputForm.jsx"
import TextInputFormContainer from "./components/TextInputForm/TextInputFormContainer.jsx"
import { Route, Routes } from "react-router-dom"
import StartGame from "./pages/StartGame.jsx"
import PlayGame from "./pages/PlayGame.jsx"
import Home from "./pages/Home.jsx"

function App() {


  return (
    <>
      {/* <div>Hello world</div>
      <Button text="Click me" onClickHandler={function callback(){console.log("Button Clicked")}} styleType="primary"/>
      <Button text="Clik me 1" onClickHandler={function callback(){console.log("Button Clicked 1")}} styleType="secondary"/>
      <Button text="Click me 2" onClickHandler={function callback(){console.log("Button Clicked 2")}} styleType="error"/>
      <Button text="Click me 3" onClickHandler={function callback(){console.log("Button Clicked 3")}} styleType="sucess"/>
      <Button text="Click me 4" onClickHandler={function callback(){console.log("Button Clicked 4")}} styleType="warning"/>
      <Button text="Click me 5" onClickHandler={function callback(){console.log("Button Clicked 5")}} styleType=""/>
      <Button text="Click me 6" onClickHandler={function callback(){console.log("Button Clicked 6")}}/>
      <br/>
      <hr/>
      <TextInput 
        type="text" 
        label="Enter text" 
        placeholder="Enter word for guessing for other user" 
        // value={""}
        onChangeHandler={function callback(event){console.log("event.target value is : ",event.target.value);}}
        />
        <br/>
        <br/>
        <hr/>
        <TextInputForm/>
        <br/>
        <br/>
        <hr/> */}
      {/* <TextInputFormContainer/> */}

      {/* now using routes */}
      <div
        className="min-h-screen bg-[#242424] text-white"
      >
        <Routes>
          <Route path='/start' element={<StartGame />} />

          {/* <Route path='/play/:hint/:text' element={<PlayGame/>} /> */}
          <Route path='/play' element={<PlayGame />} />

          <Route path='/' element={<Home/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
