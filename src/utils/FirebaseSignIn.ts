import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword, UserCredential, signInWithPopup, GoogleAuthProvider, signOut, } from "firebase/auth";
import { auth } from "./FirebaseApp";

const googleAuthProvier = new GoogleAuthProvider();

const signInWithEmail = async (email: string, password: string): Promise<UserCredential | null> => {
	let userAutenticated: UserCredential | null = null;

	return await signInWithEmailAndPassword(auth, email, password)
		.then((userCredential: UserCredential) => {
			userAutenticated = userCredential
			return userAutenticated
		})
		.catch((error: FirebaseError) => {
			userAutenticated = null
			console.log('error')
			return null
		})
}

const signInWithGoogle = (email?: string, password?: string) => {
	signInWithPopup(auth, googleAuthProvier)
		.then((userCredential: UserCredential) => {
			console.log(userCredential)
		})
		.catch((error: FirebaseError) => {
			console.log(error)
		})
}

const signOff = async (): Promise<boolean> => {
	return await signOut(auth)
		.then(() => {
			return true
		})
		.catch((error: FirebaseError) => {
			return false
		})
}

export { signInWithEmail, signInWithGoogle, signOff }