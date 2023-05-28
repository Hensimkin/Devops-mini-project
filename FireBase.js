const firebaseConfig = {
    apiKey: "AIzaSyAP-7nsitwrc9l5TQDNrh0VTe2ma8WRmLo",
    authDomain: "devops-222cf.firebaseapp.com",
    databaseURL: "https://devops-222cf-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "devops-222cf",
    storageBucket: "devops-222cf.appspot.com",
    messagingSenderId: "492509045932",
    appId: "1:492509045932:web:37defebc602f7b6cb1eb09"
  };

  firebase.initializeApp(firebaseConfig);

  const students=firebase.database().ref('students');