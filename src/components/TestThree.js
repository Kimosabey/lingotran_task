import React from 'react'
import ringer from "../audios/1 - I drive the car.mp3";
import ringer2 from "../audios/1 - eu conduzo o carro.mp3";
import ProgressCard from './ProgressCard';
import { useNavigate } from 'react-router-dom';


const TestThree = () => {

  const navigate = useNavigate()

  const [CorrectAns, setCorrectAns] = React.useState(false)
  const [option, setOption] = React.useState("")


  let styleCorrectAns = {
    "background": "rgb(65, 1, 152)",
    "color": "white"

  }
  const checkAnswer = () => {
    setCorrectAns(!CorrectAns)
    setOption("eu conduzo o carro na estrada")
    new Audio(ringer2).play();
  };

  const audio = new Audio(ringer);

  const ToTestThree = () => {
    navigate("/test-four")

  }


  const [completedSentence, SetCompletedSentence] = React.useState(["eu", "conduzo"])
  const [strArr, SetstrArr] = React.useState(["o", "carro", "na", "estrada"])
  const [randomWords, SetrandomWords] = React.useState(["carro", "estrada", "o", "na"])




  // console.log(strArr.shift())
  // console.log(strArr[0]);

  let words = completedSentence.map((item) => (<div className="word">
    <p>{item}</p>
  </div >)

  )


  const checkCorrectAnswer = (event) => {
    const { innerHTML } = event.target;
    console.log(innerHTML)

    if (strArr[0] === innerHTML) {
      // alert("correct!")
      SetstrArr([...strArr].slice(1))
      SetCompletedSentence([...completedSentence, innerHTML])
      SetrandomWords([...randomWords].filter(item => item !== innerHTML))
      console.log("strArr :", strArr)

    } else {
      // alert("not word!")




    }
    if (strArr.length === 1) {
      new Audio(ringer2).play();
    }
  }
  // console.log("completedSentence :", completedSentence)
  // console.log("strArr :", strArr)








  const optionWords = [...completedSentence, ...randomWords].map((e, i) =>
    randomWords.includes(e) ? (
      <div key={i} className="option" onClick={checkCorrectAnswer} name={e}>{e}</div>
    ) : <div className="option dull">{e}</div>
  )




  React.useEffect(() => {

    audio.loop = false;
    audio.play();



  }, [])


  return (
    <div class='hero-header container'>
      {strArr.length !== 0 && <div className="question-card">
        {strArr.length !== 0 && <h3>Re arrange in the proper order for the given english phrase</h3>}
        <div className='fill-in-flex'>
          <div className='each-word'>
            {strArr.length !== 0 && <h1>I drive the car on the road</h1>}
          </div>
        </div>
      </div>}

      {
        strArr.length === 0 && <div className="question-card">
          <div className='fill-in-flex'>
            <div className='each-word' >
              <h1 style={{ color: "rgb(255,136,0)" }}>eu</h1>
              <h3>I</h3>
            </div>
            <div className='each-word'>
              <h1 style={{ color: "rgb(255,136,0)" }}>conduzo</h1>
              <h3>drive</h3>
            </div>

            <div className='each-word'>
              <h1 style={{ color: "rgb(255,136,0)" }}>o</h1>
              <h3>the</h3>
            </div>
            <div className='each-word'>
              <h1 style={{ color: "rgb(255,136,0)" }}>carro</h1>
              <h3>car</h3>
            </div>
            <div className='each-word'>
              <h1 style={{ color: "rgb(255,136,0)" }}>na</h1>
              <h3>on the</h3>
            </div>
            <div className='each-word'>
              <h1 style={{ color: "rgb(255,136,0)" }}>estrada</h1>
              <h3>road</h3>
            </div>
            {strArr.length === 0 && <div className='marker' style={{ background: "green", height: "4em", width: "4em", padding: "0em .9em", borderRadius: "50%" }}> <span style={{ color: "rgb(65, 1, 152)", width: "100%", fontSize: "3em" }}>&#10003;</span></div>}
          </div>

        </div >
      }







      <ProgressCard cleared={3} />

      <div className='main-container container'>
        <div className="choose-options-container">
          {/* <button onClick={() => nextWord("kimo")}>click</button> */}
          <div className="flexbox-words">
            {words}
          </div>
          <div className="line">
            <span>&nbsp;</span>
          </div>
          <div className="flexbox-options">
            {optionWords} { }
          </div>
          {strArr.length === 0 && <button className='continue-btn' onClick={ToTestThree}>Continue</button>}
        </div>

        <div className="status-container">
          <div className="times-left">
            <h3>Time Left</h3>
            <h1>01:11:32</h1>
          </div>
          <div className="questions-status">
            <div>
              <h3>Questions</h3>
              <h1>03/04</h1>
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

export default TestThree