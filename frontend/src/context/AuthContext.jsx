import { onAuthStateChanged, getAuth } from "firebase/auth";
import compass_app from "../firebase/config";
import { createContext, useContext, useEffect, useState } from "react";
const auth = getAuth(compass_app);


export const AuthContext = createContext({});
export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({ children, }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser(null);
            }
            setLoading(false)
        })
        return () => unsubscribe();
    }, []);
    return (
        <AuthContext.Provider value={{ user }}>
            {loading ? "Loading Babu Bhaya!" : children}
        </AuthContext.Provider>
    )
}
