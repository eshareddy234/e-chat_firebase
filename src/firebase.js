import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// //lama
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_KEY,
//   authDomain: "chat-ab746.firebaseapp.com",
//   projectId: "chat-ab746",
//   storageBucket: "chat-ab746.appspot.com",
//   messagingSenderId: "901216368405",
//   appId: "1:901216368405:web:8ec942ee51611df5c49b1c",
// };


////// 13/08
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "e-chat-51be8.firebaseapp.com",
  projectId: "e-chat-51be8",
  storageBucket: "e-chat-51be8.appspot.com",
  messagingSenderId: "958000781755",
  appId: "1:958000781755:web:f0dc24eab7f12ce3e04c9e"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);




/// new above ....
// latest 
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration - working but last problem 
// const firebaseConfig = {
//   apiKey: "AIzaSyDZhLG8oHErNj63JmU3fkJkI0N37YAMRok",
//   authDomain: "e-chat-123.firebaseapp.com",
//   projectId: "e-chat-123",
//   storageBucket: "e-chat-123.appspot.com",
//   messagingSenderId: "790925722053",
//   appId: "1:790925722053:web:74369b5a7dbca871334bac"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()


// .........................

// // // Your web app's Firebase configuration - e-chat
// const firebaseConfig = {
//   apiKey: "AIzaSyDZhLG8oHErNj63JmU3fkJkI0N37YAMRok",
//   authDomain: "e-chat-123.firebaseapp.com",
//   projectId: "e-chat-123",
//   storageBucket: "e-chat-123.appspot.com",
//   messagingSenderId: "790925722053",
//   appId: "1:790925722053:web:74369b5a7dbca871334bac"
// };

// // // Initialize Firebase
// // const app = initializeApp(firebaseConfig);


// // // Initialize Firebase
// // const app = initializeApp(firebaseConfig);


// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// export const auth = getAuth();
// export const storage = getStorage();
// export const db = getFirestore()


// my configuration
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDZhLG8oHErNj63JmU3fkJkI0N37YAMRok",
//   authDomain: "e-chat-123.firebaseapp.com",
//   projectId: "e-chat-123",
//   storageBucket: "e-chat-123.appspot.com",
//   messagingSenderId: "790925722053",
//   appId: "1:790925722053:web:74369b5a7dbca871334bac"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);