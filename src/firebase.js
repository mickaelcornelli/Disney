import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBrMBwmdLml-z0HoiaYilRG8tmz92tdISE",
    authDomain: "disneycopyv1.firebaseapp.com",
    projectId: "disneycopyv1",
    storageBucket: "disneycopyv1.appspot.com",
    messagingSenderId: "418940272556",
    appId: "1:418940272556:web:233639547a463d91b64409",
    measurementId: "G-CZSVVW5EB6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth , provider, storage };
  export default db;