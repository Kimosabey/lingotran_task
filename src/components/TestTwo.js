import React from 'react'
import ringer from "../audios/2 - to drive.mp3";
import ringer2 from "../audios/2 - conduzir.mp3";
import ProgressCard from './ProgressCard';
import { useNavigate } from 'react-router-dom';


const TestTwo = () => {

  const navigate = useNavigate()

  const [CorrectAns, setCorrectAns] = React.useState(false)
  const [option, setOption] = React.useState("")


  let styleCorrectAns = {
    "background": "rgb(65, 1, 152)",
    "color": "white"

  }
  const checkAnswer = () => {
    setCorrectAns(!CorrectAns)
    setOption("ir")
    new Audio(ringer2).play();
  };

  const audio = new Audio(ringer);

  const ToTestThree = () => {
    navigate("/test-three")

  }
  React.useEffect(() => {
    audio.loop = false;
    audio.play();
  }, [])


  return (
    <div class='hero-header container'>
      <div className="question-card">
        {!CorrectAns && <h3>Choose the correct ending</h3>}

        <div className='fill-in-flex'>
          <div className='each-word'>
            <h1>conduz</h1>
            <h3>to drive</h3>
          </div>
          <div className='each-word'>
            {!CorrectAns ?
              <h1 className='underline' style={{ width: "3em ", marginRight: "auto", marginTop: "-1em" }}>
                <span>&nbsp;</span>
              </h1> :
              <h1 style={{ color: "rgb(255,136,0)", marginTop: "-1em" }}>{option}</h1>}

          </div>

          {CorrectAns && <div className='marker' style={{ background: "green", height: "4em", width: "4em", padding: "0em .9em", borderRadius: "50%" }}> <span style={{ color: "rgb(65, 1, 152)", width: "100%", fontSize: "3em" }}>&#10003;</span></div>}
        </div>




      </div>
      <ProgressCard cleared={2} />

      <div className='main-container container'>
        <div className="choose-options-container">

          <div className="flexbox-3">
            <div className="option"><p>ar</p></div>
            <div className="option"><p>er</p></div>
            <div className="option" onClick={checkAnswer} style={CorrectAns ? styleCorrectAns : {}}><p>ir</p></div>
          </div>

          {CorrectAns && <button className='continue-btn' onClick={ToTestThree}>Continue</button>}
        </div>

        <div className="status-container">
          <div className="times-left">
            <h3>Time Left</h3>
            <h1>01:11:32</h1>
          </div>
          <div className="questions-status">
            <div>
              <h3>Questions</h3>
              <h1>02/04</h1>
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

export default TestTwo