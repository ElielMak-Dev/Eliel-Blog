// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'eliel-blog.firebaseapp.com',
  projectId: 'eliel-blog',
  storageBucket: 'eliel-blog.appspot.com',
  messagingSenderId: '849426508394',
  appId: '1:849426508394:web:0573641591525711d03813',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
