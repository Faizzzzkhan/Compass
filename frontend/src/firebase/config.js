import { initializeApp,getApps } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBesDtdf60OU8PPDGln2G2-SzW_MML77G0",
  authDomain: "compassmain-5c31b.firebaseapp.com",
  projectId: "compassmain-5c31b",
  storageBucket: "compassmain-5c31b.appspot.com",
  messagingSenderId: "552768865126",
  appId: "1:552768865126:web:3c4a3f983b7289517dbea7",
  measurementId: "G-6PL5FEKRTJ"
};

// Initialize Firebase
const compass_app = getApps().length === 0? initializeApp(firebaseConfig):getApps()[0];

export default compass_app;
