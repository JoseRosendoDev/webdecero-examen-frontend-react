import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FullUserName from '../../components/Profile/UserName/userName'
import UserEmail from '../../components/Profile/UserEmail/userEmail'
import CityAndContry from '../../components/Profile/Region/cityAndContry'
import InfoGroup from '../../components/Profile/Info_group/infoGroup'
import PersonaInformation from '../../components/Profile/Personal_information/PersonalInformation'
import User from '../../Models/userModel'
import LogoutButton from "../../components/Profile/LogoutButton/Logout_button";

import './profile.css'
import Loader from "../../components/Login/loader/loader";

export const Profile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    let token = localStorage.getItem("token")
    if (!token) {
      navigate("/");
    }
    fetch('https://dummyjson.com/auth/me', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(data => setUser(new User(data)))
      .catch(error => setError(error.message));
  }, []);

  return (
    <div >
      <div className="off_button">
          <LogoutButton />
      </div>
      <div className='parent'>
      
        {error ? (
          <div className="error-message">
            <h1>¡Upss! parece que ocurrio un error</h1>
          </div>
        ) : User ? (
          <div className='container'>
            <div className="circle" />
            <section className='profile-header'>
              <FullUserName firstName={user?.firstName} lastName={user?.lastName} />
              <UserEmail UserEmail={user?.email} />
              <CityAndContry City={user?.address?.city} Country={user?.address?.country} />
            </section>
            <section className='info-group'>
              <InfoGroup Title={user?.birthDate} Subtitle={'Cumpleaños'} />
              <InfoGroup Title={user?.age} Subtitle={'Edad'} />
              <InfoGroup Title={user?.phone} Subtitle={'Telefono'} />
            </section>
            <section className='personal_information'>
              <PersonaInformation eyeColor={user?.eyeColor} weight={user?.weight} height={user?.height} image={user?.image} />

            </section>
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </div>


  );

}

export default Profile