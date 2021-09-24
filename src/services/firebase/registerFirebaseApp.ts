import firebaseConfig from './firebaseConfig'
import { initializeApp } from 'firebase/app'

const app = initializeApp(firebaseConfig)

const registerFirebaseApp = () => app

export default registerFirebaseApp
