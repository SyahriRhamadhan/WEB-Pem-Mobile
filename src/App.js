import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import React, { Suspense, useState, useEffect } from 'react'
import './scss/style.scss'
import "./App.css";
import Landing from './pages/LandingPage/Landing';
import RegisterPage from "./pages/AuthPage/RegisterPage";
import LoginPage from "./pages/AuthPage/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import EditProfilePage from './pages/ProfilePage/updateProfile';
import TicketBook from "./pages/TicketPage/TicketBook";
import TicketPage from "./pages/TicketPage/TicketPage";
import Notification from "./pages/Notification/Notification";
import Homepage from "./pages/Homepage/Homepage";
import History from "./pages/History/History";
import CheckInPage from './pages/History/CheckIn';
import Payment from "./pages/Payment/payment";
import WishlistPage from './pages/Wishlist/wishlist';
import axios from "axios";
import NavigateToHome from "../src/auth/NavigateToHome"
import ProtectedToken from "../src/auth/ProtectedToken"
function App() {
  const loading = (
    <div className="pt-3 text-center">
      <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
  )

  const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))
  const [users, setUsers] = useState("");
  
  const whoami = () => {
    axios
        .get('https://be-pem-mobile-production.up.railway.app/v1/api/current-user', {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        })
        .then((response) => {
            setUsers(response.data.data);
        });
  };

  useEffect(() => {
    window.watsonAssistantChatOptions = {
      integrationID: "205085ad-c522-4013-83a0-feff066194f0",
      region: "au-syd",
      serviceInstanceID: "ede10d30-f61f-4d87-bbbf-781606621fe5",
      onLoad: function(instance) { instance.render(); }
    };
    setTimeout(function(){
      const t=document.createElement('script');
      t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
      document.head.appendChild(t);
    });
      whoami();
  }, [])
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route path='/' element={
              <NavigateToHome>
            <Homepage users={users}/>
            </NavigateToHome>
            }/>
            <Route path='/landing' element={
             <ProtectedToken>
               <Landing />
             </ProtectedToken>
            }/>
            <Route path='/login' element={
              <NavigateToHome>
                <LoginPage users={users}/>
              </NavigateToHome>
            }/>

            <Route path='register' element={
              <NavigateToHome>
                <RegisterPage users={users}/>
              </NavigateToHome>
            }/>
            <Route path='/profile' element={
            <ProtectedToken>
              <ProfilePage users={users}/>
            </ProtectedToken>
            }/>
            <Route path='/profile/update-profile' element={
            <ProtectedToken>
              <EditProfilePage users={users}/>
            </ProtectedToken>
            }/>
            <Route path='/notif' element={
              <ProtectedToken>
                <Notification users={users}/>
              </ProtectedToken>
            }/>
            <Route path='/history' element={
            <ProtectedToken>
              <History/>
            </ProtectedToken>            
            }/>
            <Route path='/history/checkin/:id' element={
            <ProtectedToken>
               <CheckInPage users={users}/>
            </ProtectedToken>
            }/>

            <Route path='/payment' element={
            <ProtectedToken>
               <Payment users={users}/>
            </ProtectedToken>
            }/>

            <Route path='/wishlist' element={
             <ProtectedToken>
                <WishlistPage users={users}/>
             </ProtectedToken>            
            }/>
            
            <Route path='*' element={
            <ProtectedToken>
              <DefaultLayout users={users}/>
            </ProtectedToken>
            }/>
            <Route path="/ticket" element={
              <ProtectedToken>
                <TicketPage users={users} />
              </ProtectedToken>
            } />
            <Route path="/ticket/book/:id" element={
              <ProtectedToken>
                <TicketBook users={users}/>
              </ProtectedToken>
            } />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
