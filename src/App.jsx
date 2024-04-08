
import './App.css'
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from './Firebase/Firebase.init';
import { useState } from 'react';
import GitHub from './Gitgub/GitHub';

function App() {

  const auth = getAuth(app)

  const googleProvider = new GoogleAuthProvider()

  const [user, setUser] = useState(null)
  console.log(user);
  const handleGoogle = () => {

    signInWithPopup(auth, googleProvider)
      .then(res => {
        const loggedUser = res.user

        setUser(loggedUser)
      })
      .catch((error) => {
        console.log(error);
      })

  }

  const handleSingOut = () => {
    signOut(auth).then(res => {
      setUser(res)
    }).catch((error => {
      console.log(error);
    }))
  }

  return (
    <>

      <div className='box'>
        <h3>This is for google</h3>
        {user ? <button onClick={handleSingOut}>Log out</button> : <button onClick={handleGoogle}>Login</button>}

        {user && <div>
          <h3>Name:{user.displayName} </h3>
          <h4>Email:{user.email}</h4>
        </div>}
      </div>


    <div className='box'>
    <GitHub></GitHub>
    </div>



    </>
  )
}

export default App
