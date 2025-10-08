// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getDatabase } from "firebase/database";
import AsyncStorage from "@react-native-async-storage/async-storage";

// 🔹 Your Firebase project credentials (replace with your own)
const FirebaseConfig = {
  apiKey: "AIzaSyCj-y_A2muE7fon8nniBClF9n0hwJOvfM8",
  authDomain: "shopez-681d9.firebaseapp.com",
  projectId: "shopez-681d9",
  storageBucket: "shopez-681d9.firebasestorage.app",
  messagingSenderId: "972399370091",
  appId: "1:972399370091:web:81940932f36451f559b62e"
}

const app = initializeApp(FirebaseConfig);
let auth;
try {
  auth = getAuth(app);
} catch (e) {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
}
const db = getDatabase(app);
export { app, auth, db };

