import { GithubAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../Firebase/Firebase.init";

const GitHub = () => {

    const auth = getAuth(app)
    const GitHubProvider = new GithubAuthProvider()

     const handleGithub=()=>{

         signInWithPopup(auth,GitHubProvider)

         .then((res)=>{
            console.log(res);
            
         }).catch((error)=>{
            console.log(error);
         })
     }


    return (
        <>
                     <h4>This is for github</h4>
            <div>
                <button onClick={handleGithub}>Login</button>
            </div>

        </>
    );
};

export default GitHub;