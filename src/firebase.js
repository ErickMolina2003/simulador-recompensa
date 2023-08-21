import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';



const firebaseConfig = {
    apiKey: 'AIzaSyC5aFoZgrLVOg1-sDMomvxjKRc8tHVoJHQ',
    authDomain: 'vue-http-demo-20aa8.firebaseapp.com',
    databaseURL: 'https://vue-http-demo-20aa8-default-rtdb.firebaseio.com',
    projectId: 'vue-http-demo-20aa8',
    storageBucket: 'vue-http-demo-20aa8.appspot.com',
    messagingSenderId: '929018244036',
    appId: '1:929018244036:web:609e051dbfa4bcee8a9291',
};
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);


