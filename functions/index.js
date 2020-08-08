const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const app = express();

admin.initializeApp();

app.get('/posts', (req, res) => {
    admin
        .firestore()
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


exports.api = functions.region('nam5 (us-central)').https.onRequest(app);
