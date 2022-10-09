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
import { getAllAreas } from './slices/areaSlice';
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
            <>
              <Home>
                {
                  auth.isAuthed ? (
                    <Welcome/>
                  ):(
                    <Signup { ...{isLogin, setIsLogin } }/>
                  )
                }
              </Home>
              {
                auth.isAuthed && (
                  <Routes>
                    <Route path="/grid" element={<Camgrid />} />
                    <Route path="/grid/:id" element={<Camera />} />
                    <Route path="/*" element={<NotFound />} />
                  </Routes>
                )
              }
            </>
          )
        }
        <Footer />
      </div>
  );
}

export default App;
