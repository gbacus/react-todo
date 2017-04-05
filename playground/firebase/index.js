import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyAPbiHo6bK-isB4ofPVUibbjv3DcyPSo5w",
  authDomain: "greg-todo-app.firebaseapp.com",
  databaseURL: "https://greg-todo-app.firebaseio.com",
  projectId: "greg-todo-app",
  storageBucket: "greg-todo-app.appspot.com",
  messagingSenderId: "41012462468"
};

firebase.initializeApp(config);

firebase.database().ref().set({
  appName: 'Todo App'
});