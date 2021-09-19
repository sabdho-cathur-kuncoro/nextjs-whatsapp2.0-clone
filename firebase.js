import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCo7Xr9YQoOwzEkUXwWqguoD5boilpZaM0",
    authDomain: "whatsapp-2-nextjs-180f7.firebaseapp.com",
    projectId: "whatsapp-2-nextjs-180f7",
    storageBucket: "whatsapp-2-nextjs-180f7.appspot.com",
    messagingSenderId: "176661005941",
    appId: "1:176661005941:web:a639fb9c535e5a64715a3c"
  };

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };