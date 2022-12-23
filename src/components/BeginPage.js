import React from 'react';
import { useNavigate } from 'react-router-dom';

function BeginPage() {

  const navigate = useNavigate()
  return (
    <>
      <nav>
        <div class='navigation container'>
          <span></span>
        </div>
      </nav>
      <div class='container'>
        <div className='hero'>
          <div className='welcome-title'>
            <h4>Hi, Welcome to the assignment</h4>
          </div>
          <div className='sub-title'>
            <h1>Portuguese Language Test 1</h1>
          </div>
          <div className='btn-container'>
            <button className='login-btn' onClick={() => { navigate('/test-one') }}>Lets begin</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BeginPage;
