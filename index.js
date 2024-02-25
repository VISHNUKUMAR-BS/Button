import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {getDatabase, ref, set, get, remove ,child} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
const firebaseConfig = {
    apiKey: "AIzaSyC6p4TU-g_SIibpwg56jffiQcIDamES8W4",
    authDomain: "adurino-d6754.firebaseapp.com",
    databaseURL: "https://adurino-d6754-default-rtdb.firebaseio.com",
    projectId: "adurino-d6754",
    storageBucket: "adurino-d6754.appspot.com",
    messagingSenderId: "479594097045",
    appId: "1:479594097045:web:ab8ff53164565ea246ee9c"
};


const app = initializeApp(firebaseConfig);

const db = getDatabase()

const onBtn = document.getElementById('on')
const offBtn = document.getElementById('off')
const output = document.getElementById('output')

let value
onBtn.addEventListener('click', ()=> {
     value = 1;
     setData(value)
     getData()
})

offBtn.addEventListener('click', ()=> {
    value = 0
    setData(value)
    getData()
})

function setData(val){
    set(ref(db, 'button'), {
        status : Number(val)
    })
}

function getData(){
    const dbRef = ref(db)
    get(child(dbRef, 'button')).then((snapshot) =>{
        if(snapshot.exists()){
            const res = snapshot.val().status
            res == 1 ? output.textContent = "LED ON": output.textContent = "LED OFF"
        }
    })
}