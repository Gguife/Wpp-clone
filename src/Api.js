import firebase from 'firebase/app'
import 'firebase/firebase-auth'
import 'firebase/firebase-firestore'

import { firebaseConfig } from './FirebaseConfing'


const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()