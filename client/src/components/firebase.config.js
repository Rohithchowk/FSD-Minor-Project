// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyBbAmHfQtYimcYkllyQcbyoXROtQjXB4D0",
//   authDomain: "project-otp-d9070.firebaseapp.com",
//   projectId: "project-otp-d9070",
//   storageBucket: "project-otp-d9070.appspot.com",
//   messagingSenderId: "245174360486",
//   appId: "1:245174360486:web:b513b12a35a143811a9767",
//   measurementId: "G-TD4HWH4TQN"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);






// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbAmHfQtYimcYkllyQcbyoXROtQjXB4D0",
  authDomain: "project-otp-d9070.firebaseapp.com",
  projectId: "project-otp-d9070",
  storageBucket: "project-otp-d9070.appspot.com",
  messagingSenderId: "245174360486",
  appId: "1:245174360486:web:b513b12a35a143811a9767",
  measurementId: "G-TD4HWH4TQN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);