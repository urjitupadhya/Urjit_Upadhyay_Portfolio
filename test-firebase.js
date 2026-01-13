// Test script to initialize Firebase with projects data
const { initializeApp } = require('firebase/app');
const { getDatabase, ref, set } = require('firebase/database');

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Load local projects data
const projects = require('./app/data/projects.user.json');

// Initialize Firebase with projects data
async function initializeFirebase() {
  try {
    console.log('Initializing Firebase with projects data...');
    console.log('Projects to upload:', projects.length);
    
    await set(ref(database, 'projects'), projects);
    console.log('✅ Projects data successfully uploaded to Firebase!');
    console.log('🔗 Check: https://urjit-portfolio-app-default-rtdb.firebaseio.com/projects.json');
  } catch (error) {
    console.error('❌ Error uploading to Firebase:', error);
  }
}

initializeFirebase();
