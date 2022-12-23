import React from 'react'
import ringer from "../audios/2 - conduzir.mp3";
import ringer2 from "../audios/2 - conduzir.mp3";
import ProgressCard from './ProgressCard';
import { useNavigate } from 'react-router-dom';


const TestFour = () => {

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
        {!CorrectAns && <h3>Type the Answer</h3>}

        <div className='fill-in-flex'>
          <div className='each-word'>
            <h1>ele</h1>
            <h3>He</h3>
          </div>
          <div className='each-word'>
            {!CorrectAns ?
              (<><h1 className='underline' style={{ width: "5em ", marginRight: "auto" }}></h1><h3>spoke</h3></>)

              :
              (<><h1 style={{ color: "rgb(255,136,0)", marginTop: "-1em" }}>{option}</h1><h3>spoke</h3></>)}

          </div>

          {CorrectAns && <div className='marker' style={{ background: "green", height: "4em", width: "4em", padding: "0em .9em", borderRadius: "50%" }}> <span style={{ color: "rgb(65, 1, 152)", width: "100%", fontSize: "3em" }}>&#10003;</span></div>}
        </div>




      </div>
      <ProgressCard cleared={4} />

      <div className='main-container container'>
        <div className='box-input'></div>

      </div>

    </div >
  )
}

export default TestFour