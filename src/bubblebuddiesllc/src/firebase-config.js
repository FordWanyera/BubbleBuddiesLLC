import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBHSfCdyg3-CC_WaSajW-VEBJlxD60o6cU",
    authDomain: "pharmastudy-63e98.firebaseapp.com",
    projectId: "pharmastudy-63e98",
    storageBucket: "pharmastudy-63e98.appspot.com",
    messagingSenderId: "853293526913",
    appId: "1:853293526913:web:b053b9d26445ee3130c280",
    measurementId: "G-RT73EM3H3D"
  };
  
  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);