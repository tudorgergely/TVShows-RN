import Firestack from "react-native-firestack";

const firebaseConfig = {
    apiKey: "AIzaSyA_QWaUgaoVD18QT6BlItQPHYgOlQ0XQz0",
    authDomain: "tvshows-cacae.firebaseapp.com",
    databaseURL: "https://tvshows-cacae.firebaseio.com",
    storageBucket: "tvshows-cacae.appspot.com",
    messagingSenderId: "835906598601",
    googleAppId: "1:835906598601:android:14699bcb11f27aa1"
};
const firestackApp = new Firestack(firebaseConfig);

export default firestackApp;