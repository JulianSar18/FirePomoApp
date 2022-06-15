import { useDispatch } from 'react-redux'
import UserModel from './models/userModel'
import { signIn, signInWithEmailReducer, signOutReducer } from './slices/authSlice'
import { AppDispatch } from './store/store'
import { signOff } from './utils/FirebaseSignIn'

export const Auth = () => {
  const dispatch = useDispatch<AppDispatch>()

  const handleLogin = () => {
    const user:UserModel = {
      email: 'pe@pe.com',
      password: '1231231',
      name: 'Miller'
    }

    dispatch(signInWithEmailReducer(user))
  }
  
  return (
    <p>
      <button onClick={() => handleLogin()}>Sign In</button>
      <button onClick={() => dispatch(signOutReducer())}>Sign Out</button>
    </p>
  )
}
