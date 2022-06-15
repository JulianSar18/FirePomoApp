import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './store/store'

export const Banner = () => {
  const user = useSelector((state: RootState) => state.user)


  return (
    <div>
      <>------</>
      <p>{user.email}</p>
      <p>{user.name}</p>
      <>------</>
    </div>

  )
}
