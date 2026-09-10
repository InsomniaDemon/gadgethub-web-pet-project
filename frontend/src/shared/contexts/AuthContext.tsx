import { createContext, useContext, useState } from "react"
import * as React from "react"

interface AuthContextType {
    isLoggedIn: boolean
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
    logIn: () => void
    logout: () => void
}


const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({children}: {children: React.ReactNode}) {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
            return localStorage.getItem("isLoggedIn") === "true"
        }

    )

    const logIn = () => {
        localStorage.setItem("isLoggedIn", "true")
        setIsLoggedIn(true)
    }

    const logout = () => {
        localStorage.setItem("isLoggedIn", "false")
        setIsLoggedIn(false)
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, logIn, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used inside AuthProvider");
    }

    return context;
}

