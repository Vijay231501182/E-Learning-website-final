import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebasecConfig = {
    apiKey: "AIzaSyDiwoX0x4tJMesO_L91EmbRm6bvwame32Y",
    authDomain: "e-learning-platform-c2aff.firebaseapp.com",
    projectId: "e-learning-platform-c2aff",
    storageBucket: "e-learning-platform-c2aff.appspot.com",
    messageSenderId: "852348272560",
    appId: "1:852348272560:web:9fb886931cb9201f6aa075"
};

const app = initializeApp(firebasecConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };