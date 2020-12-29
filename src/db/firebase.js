import firebase from 'firebase/app'
import 'firebase/firestore'

const app = firebase.initializeApp({
  apiKey: "AIzaSyA2kLkcY8Uoe0mFiDTvla9T1tD-JDO8llo",
  authDomain: "ecommerce-37b8a.firebaseapp.com",
  projectId: "ecommerce-37b8a",
  storageBucket: "ecommerce-37b8a.appspot.com",
  messagingSenderId: "798454166202",
  appId: "1:798454166202:web:b53309149415c9c9268883"
})

export const getFirebase = () => {
  return app
}

export const getFirestore = () => {
  return firebase.firestore(app)
}