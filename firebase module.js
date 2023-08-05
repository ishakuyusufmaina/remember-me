
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";

  import {getFirestore, getDoc, addDoc} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore-compat.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDtm6d00VS-c2BDmWBAllXPGthD8dEb5bo",
    authDomain: "mainacode.firebaseapp.com",
    projectId: "mainacode",
    storageBucket: "mainacode.appspot.com",
    messagingSenderId: "313458674230",
    appId: "1:313458674230:web:2e309041172b3e0876e697",
    measurementId: "G-PBCQ65Q8SC"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);





var root = document.getElementById("root");
const loginForm = document.createElement("div");
const loginBtn = document.createElement("button");
const signupBtn = document.createElement("button");
const idField = document.createElement("input");
const pswField = document.createElement("input");
pswField.type ="password";
loginBtn.innerText = "Login";
signupBtn.innerText = "Signup";
loginForm.appendChild(idField)
loginForm.appendChild(pswField)
loginForm.appendChild(loginBtn)
loginForm.appendChild(signupBtn)
root.appendChild(loginForm)


const newUserWind = "<div>New user</div>";
function returnerWind(time){
    return "The last time you visited was " + time
}


async function login(id){
    
    try {
        
        const userRef = doc(db, "users", id)
        userSnap = await getDoc(userRef);
        
        if userSnap.exists(){
            user = userSnap.data();
            time = user.time;
            root.innerHTML = returnerWind(time)
        }
        else {
            alert("Signup first!")
        }
    }
    catch (e) {
        alert(e)
    }
}


async function signup(id){
    
    try {
        const userRef = doc(db, "users", id)
        await setDoc(userRef, {id: id, time: "a time will never repeat"})
        root.innerHTML = newUserWind;
        
        
            }
    
    catch (e) {
        alert(e)
    }
}


