import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAJJLK7MmxBlPeCEMmoApmJ9XI6oKQ0ESA",
    authDomain: "proyect-react-e5e27.firebaseapp.com",
    projectId: "proyect-react-e5e27",
    storageBucket: "proyect-react-e5e27.appspot.com",
    messagingSenderId: "254706148727",
    appId: "1:254706148727:web:fd3424c97e5480582bad72"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);