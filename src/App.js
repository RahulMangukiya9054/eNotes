import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
import { useContext } from 'react';
import alertContext from './context/alert/alertContext';
import Profile from './components/Profile';
import LoadingBar from 'react-top-loading-bar';
import progressContext from './context/progress/progressContext';
import Spinner from './components/Spinner';


function App() {

  const AlertContext = useContext(alertContext)
  const { alert } = AlertContext;

  const { progress, loading } = useContext(progressContext)

  return (
    <>
      <BrowserRouter>
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <Navbar />
        <Spinner loading={loading} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/signup' element={<Signup />} />
            <Route exact path='/profile' element={<Profile />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
