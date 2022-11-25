import React from 'react';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import "./style/reset.css"
import './style/index.css';
import { initializeApp } from "firebase/app"
import { getFirestore, collection, onSnapshot, addDoc, deleteDoc, query, where, } from "firebase/firestore"
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";



const firebaseConfig = ({
    apiKey: "AIzaSyDoAZ3eTxvTGCpdRNGHxSgP-ypYz_9D8gw",
    authDomain: "casacas-de-fulbo.firebaseapp.com",
    projectId: "casacas-de-fulbo",
    storageBucket: "casacas-de-fulbo.appspot.com",
    messagingSenderId: "699246739519",
    appId: "1:699246739519:web:cbdecbf0c17f3f417bf88a",
    measurementId: "G-VGK2CN1P1L"
})


initializeApp(firebaseConfig);


//const auth = getAuth()

const sendOrder = () => {
    const order = {
        buyer: { name: "Tomas", phone: "1111", email: "a@pablo.com.ar"},
        items:[{ name: "Camiseta de River", price:"10000"}],
        total: 50
    }

    const db = getFirestore()
    const colRef = collection(db, 'camisetas')
    addDoc(colRef, order).then (({ id }) => setOrderId(id));
}

const colRef = collection(db, 'camisetas')
const db = getFirestore()

const q = query(colRef, where("price", "=>", "8000"))

onSnapshot(q, (snapshot) => {
   let camisetas = []
   snapshot.docs.forEach((doc) => {
        camisetas.push({ ...doc.data(), id: doc.id})
    })
    console.log(camisetas)
})



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <StrictMode>
            <App />
        </StrictMode>            
    </BrowserRouter>
);