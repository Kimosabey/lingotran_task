import React from 'react'
import ringer from "../audios/2 - conduzir.mp3";
import ringer2 from "../audios/2 - conduzir.mp3";
import ProgressCard from './ProgressCard';
import { useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2';

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


  const [dim, setDim] = React.useState(false);

  const checkLetter = (event) => {
    console.log(event)
    console.log(event.target.innerText);
    if (event.target.innerText === 'u') {
      setDim(true)
    }
  }


  const finalIt = () => {
    console.log("Completed!")
    Swal.fire({
      title: 'Congratulation!',
      text: 'Task 4/4 Completed',
      icon: 'success',
      confirmButtonText: 'OK',
    }).then(() => {

      navigate('/')
    })


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
            {!dim ?
              (<><h1 className='underline' style={{ width: "2em ", marginRight: "auto" }}></h1><h3>spoke</h3></>)

              :
              (<><h1 style={{ color: "rgb(255,136,0)" }}>{dim ? "falou" : ""}</h1><h3>spoke</h3></>)}

          </div>

          {dim && <div className='marker' style={{ background: "green", height: "4em", width: "4em", padding: "0em .9em", borderRadius: "50%" }}> <span style={{ color: "rgb(65, 1, 152)", width: "100%", fontSize: "3em" }}>&#10003;</span></div>}
        </div>




      </div>
      <ProgressCard cleared={4} />

      <div className='main-container container'>
        <div className="two-box-container">
          <div className="left-box">
            <div className="left-box_falo-input">
              {!dim && <h1>falo <span>|</span></h1>}
              {dim && <h1>falou</h1>}
            </div>
            <div className="left-box_keys">
              <div className="six-smalls">
                <div className="key-letter" onClick={checkLetter}> <h2>i</h2></div>
                <div className="key-letter dull"><h2>o</h2></div>
                <div className="key-letter dull"><h2>f</h2></div>
                <div className="key-letter" onClick={checkLetter}><h2>p</h2></div>
                <div className="key-letter dull"><h2>a</h2></div>
                <div className="key-letter" onClick={checkLetter}><h2>r</h2></div>
              </div>
              <div className="six-smalls">
                <div className="key-letter" onClick={checkLetter}><h2>s</h2></div>
                <div className="key-letter" onClick={checkLetter}><h2>v</h2></div>
                <div className="key-letter" onClick={checkLetter}><h2>c</h2></div>
                <div className="key-letter" onClick={checkLetter}><h2>a</h2></div>
                <div className="key-letter dull"><h2>i</h2></div>
                <div className={dim ? "key-letter dull" : "key-letter"} onClick={checkLetter}><h2>u</h2></div>
              </div>
              {dim && <button className='finish-btn text-focus-in'
                onClick={finalIt}>Finish</button>}
            </div>





          </div>
          <div className="right-box">
            <div className="table-container">
              <div class="grid-container">
                <div class="grid-item dim"><span className='orange-me'>fal</span>ei</div>
                <div class="grid-item dim"><span className='orange-me'>fal</span>o</div>
                <div class="grid-item dim">vou <span className='orange-me'>falar</span></div>
                <div class="grid-item"><span className='orange-me'>fal</span>aste</div>
                <div class="grid-item br"><span className='orange-me'>fal</span>as</div>
                <div class="grid-item">vais <span className='orange-me'>falar</span></div>


                {dim && <div class="grid-item fade-in-left">
                  <span className='orange-me'>fal</span>a</div>}
                {!dim && <div class="grid-item qtn dim">
                  <h1>&#63;</h1></div>}

                <div class="grid-item br dim"><span className='orange-me'>fal</span>a</div>
                <div class="grid-item dim">vai <span className='orange-me'>falar</span></div>
                <div class="grid-item"><span className='orange-me'>fal</span>amos</div>
                <div class="grid-item br"><span className='orange-me'>fal</span>amos</div>
                <div class="grid-item">vamos <span className='orange-me'>falar</span></div>
                <div class="grid-item"><span className='orange-me'>fal</span>am</div>
                <div class="grid-item br"><span className='orange-me'>fal</span>am</div>
                <div class="grid-item">vao <span className='orange-me'>falar</span></div>
              </div>
              <div className="tense-container">
                <div class="tense"><span>Simple Past</span></div>
                <div class="tense"><span>Present</span></div>
                <div class="tense"><span>Future</span></div>

              </div>

            </div>
          </div>


        </div>

      </div>

    </div >
  )
}

export default TestFour