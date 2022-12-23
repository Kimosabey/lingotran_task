import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import './App.css';
import BeginPage from './components/BeginPage';
import TestFour from './components/TestFour';
import TestOne from './components/TestOne';
import TestThree from './components/TestThree';
import TestTwo from './components/TestTwo';



function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<BeginPage />} />
      <Route path='/test-one' element={<TestOne />} />
      <Route path='/test-two' element={<TestTwo />} />
      <Route path='/test-three' element={<TestThree />} />
      <Route path='/test-four' element={<TestFour />} />
    </Routes>
  </BrowserRouter>
}

export default App;
