import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getDatabase} from "firebase/database"


const firebaseConfig = {
  apiKey: "AIzaSyC5RZMu40kxnZRwUMoBnT8jZx01jcUeKsY",
  authDomain: "timetable-scheduler-85fc0.firebaseapp.com",
  projectId: "timetable-scheduler-85fc0",
  storageBucket: "timetable-scheduler-85fc0.firebasestorage.app",
  messagingSenderId: "433712115745",
  appId: "1:433712115745:web:7882a44f68128251527360"
};

const app = initializeApp(firebaseConfig);
export const Authentication = getAuth(app)
export const DataBase = getDatabase(app)