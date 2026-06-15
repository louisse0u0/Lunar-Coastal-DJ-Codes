import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyCyBerxDREj6NUnoo5lFdIZRb2d8SV_ebw",
  authDomain: "lunar-coastal-dj.firebaseapp.com",
  projectId: "lunar-coastal-dj",
  storageBucket: "lunar-coastal-dj.firebasestorage.app",
  messagingSenderId: "5425058963",
  appId: "1:5425058963:web:d99b9cd5b370b15fd2a966"
};

const app = initializeApp(firebaseConfig);

export { app };
