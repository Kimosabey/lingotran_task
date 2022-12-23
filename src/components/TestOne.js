import React from 'react'
import ringer from "../audios/1 - I drive the car.mp3";
import ringer2 from "../audios/1 - eu conduzo o carro.mp3";
import ProgressCard from './ProgressCard';
import { Navigate, useNavigate } from 'react-router-dom';


const TestOne = () => {

  const navigate = useNavigate()
  const [CorrectAns, setCorrectAns] = React.useState(false)
  const [option, setOption] = React.useState("")


  let styleCorrectAns = {
    "background": "rgb(65, 1, 152)",
    "color": "white"

  }
  const checkAnswer = () => {
    setCorrectAns(!CorrectAns)
    setOption("conduzo")
    new Audio(ringer2).play();
  };

  const audio = new Audio(ringer);

  const ToTestTwo = () => {
    navigate("/test-two")

  }
  React.useEffect(() => {
    audio.loop = false;
    audio.play();
  }, [])
  return (
    <div class='hero-header container'>
      <div className="question-card">
        {!CorrectAns && <h3>Choose the correct word </h3>}

        <div className='fill-in-flex'>
          <div className='each-word'>
            <h1>eu</h1>
            <h3>I</h3>
          </div>
          <div className='each-word'>
            {!CorrectAns ? <h1 className='underline'>

            </h1> : <h1 style={{ color: "rgb(255,136,0)" }}>{option}</h1>}
            <h3>drive</h3>
          </div>
          <div className='each-word'>
            <h1>o</h1>
            <h3>the</h3>
          </div>
          <div className='each-word'>
            <h1>carro</h1>
            <h3>car</h3>
          </div>
          {CorrectAns && <div className='marker' style={{ background: "green", height: "4em", width: "4em", padding: "0em .9em", borderRadius: "50%" }}> <span style={{ color: "rgb(65, 1, 152)", width: "100%", fontSize: "3em" }}>&#10003;</span></div>}
        </div>




      </div>
      <ProgressCard cleared={1} />

      <div className='main-container container'>
        <div className="choose-options-container">
          <div class="flexbox">
            <div className="first-two">
              <div class="one" onClick={checkAnswer} style={CorrectAns ? styleCorrectAns : {}}><p>conduzo</p></div>
              <div class="two"><p>falo</p></div>
            </div>
            <div className="last-two">
              <div class="three"><p>vai conduzir</p></div>
              <div class="four" ><p>conduzei</p></div>
            </div>


          </div>
          {CorrectAns && <button className='continue-btn' onClick={ToTestTwo}>Continue</button>}

        </div>

        <div className="status-container">
          <div className="times-left">
            <h3>Time Left</h3>
            <h1>01:11:32</h1>
          </div>
          <div className="questions-status">
            <div>
              <h3>Questions</h3>
              <h1>01/04</h1>
            </div>
            <div>
              <h3>Level</h3>
              <h1>01</h1>
            </div>

          </div>
        </div>

      </div>

    </div >
  )
}

export default TestOne