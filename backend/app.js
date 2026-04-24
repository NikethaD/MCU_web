import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBlGn1xTQ9TofI6ZUIlEj67qMVSGhdfTU4",
  authDomain: "webpage-d1d21.firebaseapp.com",
  projectId: "webpage-d1d21",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

console.log("Firebase connected!");
