import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAtSyORBuFo2Uk2jJviXBj5n7PAQ3Mc63U',
  authDomain: 'rescounts-b1ab8.firebaseapp.com',
  projectId: 'rescounts-b1ab8',
  storageBucket: 'rescounts-b1ab8.appspot.com',
  messagingSenderId: '983757194277',
  appId: '1:983757194277:web:e04ce567f51e404b966bcc',
}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export default auth
