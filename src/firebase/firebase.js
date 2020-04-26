import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSENGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };



// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses').on('value', (snapshot) => {
//     let expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(expenses);
// });

// database.ref('expenses').push({
//     description: 'Rent',
//     note: '',
//     amount: 104009,
//     createdAt: 98129874982
// })


// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React Native, Angular, Python'
// })

// const firebaseNotes = {
//     notes: {
//         '12': {
//             title: 'First note',
//             body: 'This is my note'
//         },
//         '11': {
//             title: 'Second note',
//             body: 'This is my second note'
//         }
//     }
// }

// const notes = [{
//     id: '12',
//     title: 'First note',
//     body: 'This is my note'
// },{
//     id: '11',
//     title: 'Second note',
//     body: 'This is my second note'
// }]

// database.ref().set(notes);

// database.ref().set({
//     name: 'mark',
//     age: 29,
//     stressLevel: 6,
//     job: {
//         title: 'software-developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Victoria',
//         country: 'Canada'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch(() => {
//     console.log('This failed');
// });

// database.ref().update({
//     'location/city': 'Seattle',
//     'job/company': 'Amazon',
//     stressLevel: 9
// });