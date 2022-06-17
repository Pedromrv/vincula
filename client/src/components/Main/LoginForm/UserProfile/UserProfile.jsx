import React, { useContext } from "react";
import { LoginContext } from "../../../../context/loginContext";
import { Navigate } from "react-router-dom";
import userImg from "./../../../../assets/userImg.jpg"

import checklist from "./../../../../assets/checklist 1.svg"
import notebook from "./../../../../assets/notebook 1.svg"
import pencils from "./../../../../assets/pencils 1.svg"
import timetable from "./../../../../assets/timetable 1.svg"
import school from "./../../../../assets/school.svg"
import members from "./../../../../assets/members.svg"

const UserProfile = () => {

  const { logged, setLogged, user, setUser } = useContext(LoginContext);

  return (
    <section>
      {
        !logged ? <Navigate to='/' /> : <>

          <article className="user-details">
            <div className="user-details-top">

              <div className="circular--landscape--profile">
                <img src={userImg} alt="user" className="user__img" />
              </div>

              <h1 className="user__name">Pedro del Olmo</h1>
              <h3 className="user__year">CURSO 2022/2023</h3>
            </div>

            <div className="user-details-bottom">
              <div className="user-details-bottom-item">
                <img src={school} alt="user" className="user__img" />
                <p>E.I. Pablo Neruda</p>
              </div>
              <div className="user-details-bottom-item">
                <img src={members} alt="user" className="user__img" />
                <p>23 miembros</p>
              </div>
            </div>

          </article>



          <article className="user-options">
            <div className="options__calendar">
              <img src={timetable} alt="calendario" />
              <h2>Calendario</h2>
            </div>
            <div className="options__chat">
              <img src={notebook} alt="chat" />
              <h2>Chat</h2>
            </div>
            <div className="options__tracking">
              <img src={checklist} alt="seguimiento" />
              <h2>Seguimiento</h2>
            </div>
            <div className="options__settings">
              <img src={pencils} alt="ajustes" />
              <h2>Ajustes</h2>
            </div>
          </article>
          <article>
            <div className="circle-1-profile"></div>
            <div className="circle-2-profile"></div>
            <div className="circle-3-profile"></div>
            <div className="circle-4-profile"></div>

          </article>
        </>
      }

    </section>
  )

};


export default UserProfile;
