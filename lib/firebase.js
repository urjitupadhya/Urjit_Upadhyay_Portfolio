import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, set, onValue, update, remove } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAMyNSOJBmZXCdiXRhDlMnem4A7EcO5ZzE",
  authDomain: "urjit-portfolio-app.firebaseapp.com",
  databaseURL: "https://urjit-portfolio-app-default-rtdb.firebaseio.com",
  projectId: "urjit-portfolio-app",
  storageBucket: "urjit-portfolio-app.firebasestorage.app",
  messagingSenderId: "26002707495",
  appId: "1:26002707495:web:6defb884c3923fee5e2a02",
  measurementId: "G-0HG3NXKFF4"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, push, set, onValue, update, remove };
export default app;
