import Firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDWMt6lhgzj4Z2bmeqY_vvB14CSAmY3XE",
  authDomain: "portfolio-b36e0.firebaseapp.com",
  projectId: "portfolio-b36e0",
  storageBucket: "portfolio-b36e0.appspot.com",
  messagingSenderId: "357515565105",
  appId: "1:357515565105:web:c152b36fe11ffcdbe95d10",
  measurementId: "G-F9B5RX4S02"
};

export default Firebase.initializeApp(firebaseConfig);