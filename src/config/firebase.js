// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXyQPwy_gJF6aMGu9jT1yWwutdMi4TYQQ",
  authDomain: "final-project-66fd2.firebaseapp.com",
  projectId: "final-project-66fd2",
  storageBucket: "final-project-66fd2.appspot.com",
  messagingSenderId: "880183235824",
  appId: "1:880183235824:web:047be5a2480dd88f8ade35",
  measurementId: "G-0G2G2PXCKG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

function writeUserData(userId, name, email, imageUrl) {
  const db = getDatabase();
  const reference = ref(db, "user/" + userId);

  set(reference, {
    username: name,
    email: email,
    profile_picture: imageUrl,
  });
}

writeUserData("one", "Rayan", "rayan@gmail.com", "myImageUrl");
