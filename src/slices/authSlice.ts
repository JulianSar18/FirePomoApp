import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserCredential } from "firebase/auth";
import UserModel from "../models/userModel";
import { signInWithEmail, signOff } from "../utils/FirebaseSignIn";

const initialState: UserModel = {
	name: '',
	email: ''
}

export const signInWithEmailReducer = createAsyncThunk('auth/signInEmail',
	async (user: UserModel) => {
		const userAutenticated  = await signInWithEmail(user.email!, user.password!);
		return userAutenticated
	}
)

export const signOutReducer = createAsyncThunk('auth/signOut',
	async () => {
		const isSignedOut: boolean = await signOff();
		return isSignedOut
	}
)

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		signIn: (state, action: PayloadAction<UserModel>) => {
			state.email = action.payload.email
			state.name = action.payload.name
		},
	},
	extraReducers: (builder) => {
		builder.addCase(signInWithEmailReducer.fulfilled, (state, action ) => {
			console.log(action.payload	)
			state.email = action.payload!.user.email
			state.name = action.payload!.user.displayName || 'El pepe'
		})
		.addCase(signInWithEmailReducer.pending, (state, action )=> {
			console.log('pendiente')
		})
		.addCase(signOutReducer.fulfilled, (state, action) => {
			state.email = ''
			state.name = ''
			state.password = ''
		})
	}
})

export const { signIn } = userSlice.actions
export default userSlice.reducer