import React from 'react'

const ProgressCard = (props) => {


  const progress = {
    0: "0%",
    1: "25%",
    2: "50%",
    3: "75%",
    4: "100%",
  }[props.cleared]

  console.log(progress)


  return (
    <div className="progress-card">
      <div class="wrapper">
        <h3>Progress</h3>
        <div class="progress-bar">
          <span class="progress-bar-fill" style={{ width: progress }} ></span>
        </div>
        <h5>{props.cleared} /4</h5>
      </div>
    </div >
  )
}

export default ProgressCard