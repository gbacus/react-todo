import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyAPbiHo6bK-isB4ofPVUibbjv3DcyPSo5w",
    authDomain: "greg-todo-app.firebaseapp.com",
    databaseURL: "https://greg-todo-app.firebaseio.com",
    projectId: "greg-todo-app",
    storageBucket: "greg-todo-app.appspot.com",
    messagingSenderId: "41012462468"
  };

  firebase.initializeApp(config);
} catch(e) {

}

export var firebaseRef = firebase.database().ref();

export default firebase;