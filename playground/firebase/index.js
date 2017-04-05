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

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: "Todo App",
    version: "1.0.0"
  },
  isRunning: true,
  user: {
    name: 'Greg',
    age: 28
  }
});

// firebaseRef.update({
//   'app/name': "todo application",
//   'user/name': 'Annie'
// })

firebaseRef.child('app').update({
  name: "todo application2"
})
firebaseRef.child('user').update({
  name: "Peter"
})

// firebaseRef.update({
//   isRunning: false,
//   'app/name': 'Todo Application'
// });

// firebaseRef.child('app').update({
//   name: "todo application"
// }).then(() => {
//   console.log('Update worked!');
// }, (e) => {
//   console.log('Update failed');
// })










