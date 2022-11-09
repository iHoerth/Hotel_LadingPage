import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyBLLXyPHKdKUfBmKKCUdbcSF2HyVCjvGVI',
    authDomain: 'hotelcalifornia-bf696' + '.firebaseapp.com',
    projectId: 'hotelcalifornia-bf696',
    storageBucket: 'hotelcalifornia-bf696' + ".appspot.com",
};

const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth(firebaseApp);

// Si descomentas la siguiente línea, cuando mientras que el usuario no se desloguee expresamente o cierre el navegador, permanecerá logueado y podremos acceder a su id desde cualquier página
setPersistence(auth, browserLocalPersistence);