import { createContext, useEffect, useState } from 'react'
import app from "../firebase/firebase.config"
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"

const googleProvider = new GoogleAuthProvider();

const AuthContext = createContext()
const auth = getAuth(app);
function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    function createUser(email, password) {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function loginWithGoogle() {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    function login(email, password) {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logout() {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {

            setUser(currentUser)
            setLoading(false)
        })
        return () => unsubscribe()
    }, [])
    const authInfo = { user, createUser, loginWithGoogle, loading, login, logout }
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider
export { AuthContext }