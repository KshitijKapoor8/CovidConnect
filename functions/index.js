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

const isEmpty = (string) => {
    if (string === '') return true;
    else return false;
}

const isEmail = (email) => {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.match(regEx)) return true;
    else return false;
}

app.post('/signup', (req, res) => {
    const newUser = {
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
        username: req.body.username
    };

    let errors = {};

    if(isEmpty(newUser.email)) {
        errors.email = 'Email must not be empty'
    } else if (!isEmail(newUser.email)) {
        errors.email = 'Not a valid email'
    }

    if (isEmpty(newUser.password)) errors.password = "Can't be empty"
    if (newUser.password !== newUser.confirmPassword) errors.confirmPassword = 'Passwords must match';
    if (isEmpty(newUser.username)) errors.username = 'Must not be empty';

    if (Object.keys(errors).length > 0) return res.status(400).json(errors);

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
                imageUrl: `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${noImg}?alt=media`,
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

app.post('/login', (req, res) => {
    const user = {
        email : req.body.email,
        password : req.body.password
    }

    let errors = {};

    if (isEmpty(user.email)) errors.email = "Email can't be empty";
    if (isEmpty(user.password)) errors.email = "Email can't be empty";

    if (Object.keys(errors).length > 0) return res.status(400).json(errors);

    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
    .then (data => {
        return data.user.getIdToken();
    })
    .then (token => {
        return res.json({token});
    })
    .catch ((err) => {
        console.error(err);
        if (err.code === 'auth/wrong-password') {
            return res.status(403).json({ general : 'Wrong credentials, please try again' })
        }
        return res.status(500).json({ error : err.code });
    })
})

const noImg = 'no-img.png';

app.post('/user/image', (req, res) => {
    const BusBoy = require('busboy');
    const path = require('path');
    const os = require('os');
    const fs = require('fs');

    const busboy = new BusBoy( { headers : req.headers } )
    
    let imageFileName;
    let imageToBeUploaded = {};

    busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
        console.log(filename);
        console.log(fieldname);
        console.log(mimetype);

        const imageExtention = filename.split('.')[filename.split('.').length - 1];
        const imageFileName = `${Math.round(Math.random() * 100000000000000)}.${imageExtention}`;
        const filePath = path.join(os.tmpdir(), imageFileName);
        imageToBeUploaded = { filePath , mimetype };
        file.pipe(fs.createWriteStream(filePath));
    });
    busboy.on('finish', () => {
        admin.storage().bucket(`${config.storageBucket}`).upload(imageToBeUploaded.filePath, {
            resumable: false,
            metadata: {
                metadata: {
                    contentType: imageToBeUploaded.mimetype
                }
            }
        })
        .then(() => {
            const imageUrl = `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${imageFileName}?alt=media`;
            return db.doc(`/users/${req.body.username}`).update({ imageUrl });
        })
        .then(() => {
            return res.json({message: "Image uploaded successfully"});
        })
        .catch(err => {
            console.error(err);
            return res.status(500).json({ error: err.code} );
        });
    });
    busboy.end(req.rawBody);
})


exports.api = functions.region('nam5 (us-central)').https.onRequest(app);
