import firebaseAdmin from 'firebase-admin';
import serviceAccount from './secrets.json';

export const verifyIdToken = (token) => {
    if (firebaseAdmin.apps.length) {
        firebaseAdmin.initializeApp({
            credential: firebaseAdmin.credential.cert(serviceAccount),
            databaseURL: "https://sybel-1a6f9-default-rtdb.firebaseio.com"
        });
    }

    return firebaseAdmin.auth()
        .verifyIdToken(token)
        .catch((error) => {
            throw error;
        });
};