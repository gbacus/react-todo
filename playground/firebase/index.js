import firebase from 'firebase';



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

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('New todo added', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'Walk the dog'
})

todosRef.push({
  text: 'get job'
})







