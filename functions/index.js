const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const app = express();


const config = {
    apiKey: "AIzaSyDwvIK-c-6WC0T7JkzXPpMgRcd9WHOzo5A",
    authDomain: "covidconnect-8067e.firebaseapp.com",
    databaseURL: "https://covidconnect-8067e.firebaseio.com",
    projectId: "covidconnect-8067e",
    storageBucket: "covidconnect-8067e.appspot.com",
    messagingSenderId: "182596002521",
    appId: "1:182596002521:web:ad06740633d8ae607dd4c8"
};

const firebase = require('firebase');
firebase.initializeApp(config);
admin.initializeApp();

const db = admin.firestore();

app.get('/posts', (req, res) => {
    db
      .collection("posts")
        .orderBy('date', 'desc')
        .get()
            .then((data) => {
                let posts = [];
                data.forEach((doc) => {
                    posts.push({
                        postId: doc.id,
                        body: doc.data().body,
                        userHandle: doc.data().userHandle,
                        date: doc.data().date
                    });
                });
                return res.json(posts)
            })
        .catch(err => console.error(err));
});

app.post('/make', (req, res) => {
    const newPost = {
        body: req.body.body,
        date: new Date().toISOString(),
        userHandle: req.body.userHandle
    };

    admin.firestore()
        .collection("posts")
        .add(newPost)
        .then((doc) => {
            res.json({ message : `document ${doc.id} created succesfully`});
        })
        .catch((err) => {
            res.status(500).json({ error : 'Something went wrong'});
            console.error(err)
        })
});


app.post('/signup', (req, res) => {
    const newUser = {
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
        username: req.body.username
    };

    let token, userId;

    db.doc(`/users/${newUser.username}`).get()
        .then(doc => { 
            if (doc.exists) {
                return res.status(400).json({ handle : 'this handle is already taken' })
            } else {
                return firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password);
            }
        })
        .then (data => {
            userId = data.user.uid;
            return data.user.getIdToken();
        })
        .then (idToken => {
            token = idToken;
            const userCred = {
                username: newUser.username,
                email: newUser.email,
                date: new Date().toISOString(),
                userId
            };

            return db.doc(`/users/${newUser.username}`).set(userCred);
        })
        .then(() => {
            return res.status(201).json({ token });
        })
        .catch (err => {
            console.error(err);
            if (err.code === 'auth/email-already-in-use')
            {
                return res.status(400).json({ email: 'Email is already in use' });
            }
            return res.status(500).json({error : err.code});
        });
        

})


exports.api = functions.region('nam5 (us-central)').https.onRequest(app);
