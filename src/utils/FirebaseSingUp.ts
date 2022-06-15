import { FirebaseError } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, UserCredential, Auth } from 'firebase/auth';
import app from './FirebaseApp';

const auth: Auth = getAuth(app);

const signUpWithEmail = (email: string, password: string) => {
	
	createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential: UserCredential) => {
			console.log(userCredential.user.email)
		})
		.catch((error: FirebaseError) => {
			console.log(error)
		})
}

export { signUpWithEmail };