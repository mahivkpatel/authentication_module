import { useContext, useState, useEffect, createContext } from 'react'
import { auth } from '../firebase-config'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from 'firebase/auth'

const AuthContext = createContext()
export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  debugger
  const [loading, setLoading] = useState(false)

  const signup = (email, password, fullName) => {
    let promise = new Promise(function (resolve, reject) {
      debugger
      createUserWithEmailAndPassword(auth, email, password)
        .then((ref) => {
          debugger
          ref.user.updateProfile({
            displayName: fullName,
          })
          resolve(ref)
        })
        .catch((error) => reject(error))
    })
    return promise
  }

  const signin = (email, password) => {
    let promise = new Promise((resolve, reject) => {
      signInWithEmailAndPassword(auth, email, password)
        .then((ref) => {
          resolve(ref)
        })
        .catch((error) => {
          reject(error)
        })
    })
    return promise
  }

  const passwordReset = (email) => {
    let promise = new Promise(function (resolve, reject) {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          resolve(`Password Reset Email sent to ${email}`)
        })
        .catch((error) => {
          reject(error)
        })
    })
    return promise
  }

  const signout = () => {
    return signOut()
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log(user)
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [currentUser])

  const value = {
    currentUser,
    signup,
    signin,
    signout,
    passwordReset,
  }
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
