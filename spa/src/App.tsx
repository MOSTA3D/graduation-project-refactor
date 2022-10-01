import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router';
import './App.scss';
import Footer from './components/footer/Footer';
import Loading from './components/loading/Loading';
import Nav from './components/nav/Nav';
import Signup from './components/signup/Signup';
import Camera from './pages/camera/Camera';
import Camgrid from './pages/camgrid/CamGrid';
import NotFound from './pages/notfound/NotFound';
import Home from './pages/home/Home';
import Welcome from './components/welcome/Welcome';
import { AuthState, getDataFromCookies } from "./slices/authSlice";

function App() {
  const loading = false;

  const [ isLogin, setIsLogin ] = useState(false);

  const dispatch = useDispatch();

  const authData = useSelector((state:{auth: AuthState})=>state.auth);

  console.log(authData);

  const isAuthed = authData.token !== "";


  useEffect(()=>{
    dispatch(getDataFromCookies());
  }, [])

  return (
    <div className="App">
        {/* <Nav {...{authed, setAuthed}} /> */}
        
        <Home>
          {
            isAuthed ? (
              <Welcome/>
            ):(
              <Signup { ...{isLogin, setIsLogin } }/>
            )
          }
        </Home>
        {
          loading ? (
            <Loading/>
          ):(
            isAuthed && (
              <>
                {/* <Notifications/> */}
                <Routes>
                  <Route path="/" element={<Welcome />} />
                  <Route path="/grid" element={<Camgrid />} />
                  <Route path="/grid/:id" element={<Camera />} />
                  {/* <Route path="/test" element={<Test />} /> */}
                  <Route path="/*" element={<NotFound />} />
                </Routes>
              </>
            )
          )
        }
        <Footer />
      </div>
  );
}

export default App;
