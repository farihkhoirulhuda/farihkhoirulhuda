const firebaseConfig = {
  apiKey: "AIzaSyAHAUSxtol2Zqb74uX5D04SKr-gKeVgRoI",
  authDomain: "farihkh.firebaseapp.com",
  projectId: "farihkh",
  storageBucket: "farihkh.appspot.com",
  messagingSenderId: "972813909047",
  appId: "1:972813909047:web:74eb830363a1d837d393b2",
  measurementId: "G-0PX1GSBKEG"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
