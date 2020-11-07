import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBOMgMPi8QB14f5mAfuT-R-qdS59MhihX8',
  authDomain: 'fir-poc-f2477.firebaseapp.com',
  databaseURL: 'https://fir-poc-f2477.firebaseio.com',
  projectId: 'fir-poc-f2477',
  storageBucket: 'fir-poc-f2477.appspot.com',
  messagingSenderId: '48493876797',
  appId: '1:48493876797:web:984c88f7d71a4f7ebebc54',
  measurementId: 'G-measurement-id',
};

const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase



