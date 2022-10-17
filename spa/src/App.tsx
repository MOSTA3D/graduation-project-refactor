import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router';
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
import { getDataFromCookies } from "./slices/authSlice";
import { useAppSelector } from './app/hooks';

function App() {

  const [ isLogin, setIsLogin ] = useState(false);

  const dispatch = useDispatch();

  const {auth} = useAppSelector((state)=>state);

  useEffect(()=>{
    dispatch(getDataFromCookies());
  }, [])


  

  return (
    <div className="App">
        <Nav isAuthed = {auth.isAuthed} />
        {
          auth.isLoading ? (
            <Loading/>
          ):(
           <Routes>
              <Route path="/" element={
                <Home>
                  {
                    auth.isAuthed ? (
                      <Welcome/>
                    ):(
                      <Signup { ...{isLogin, setIsLogin } }/>
                    )
                  }
                </Home>
              } />
              {auth.isAuthed ? (
                <>
                  <Route path="/grid/:areaName" element={<Camgrid />} />
                  <Route path="/grid/:areaName/cameras/:cameraId" element={<Camera />} />
                  <Route path="/*" element={<NotFound />} />
                </>
              ) : (
                <Route path="*" element = {<Navigate to="/" />} />
              )}
           </Routes>
          )
        }
        <Footer />
      </div>
  );
}

export default App;
