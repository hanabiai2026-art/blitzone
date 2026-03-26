'use client'

import React, { createContext, useContext, useState, useCallback } from 'react'

export interface User {
  id: string
  name: string
  email: string
  createdAt: string
}

interface AuthContextType {
  user: User | null
  isSignedIn: boolean
  signIn: (email: string, password: string) => boolean
  signUp: (name: string, email: string, password: string) => boolean
  signOut: () => void
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isSignedIn: false,
  signIn: () => false,
  signUp: () => false,
  signOut: () => {},
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [registeredUsers, setRegisteredUsers] = useState<
    { email: string; password: string; name: string }[]
  >([])

  const signUp = useCallback(
    (name: string, email: string, password: string) => {
      const exists = registeredUsers.find((u) => u.email === email)
      if (exists) return false
      setRegisteredUsers((prev) => [...prev, { email, password, name }])
      const newUser: User = {
        id: Math.random().toString(36).substring(2, 10),
        name,
        email,
        createdAt: new Date().toISOString(),
      }
      setUser(newUser)
      return true
    },
    [registeredUsers]
  )

  const signIn = useCallback(
    (email: string, password: string) => {
      const found = registeredUsers.find(
        (u) => u.email === email && u.password === password
      )
      if (!found) return false
      setUser({
        id: Math.random().toString(36).substring(2, 10),
        name: found.name,
        email: found.email,
        createdAt: new Date().toISOString(),
      })
      return true
    },
    [registeredUsers]
  )

  const signOut = useCallback(() => setUser(null), [])

  return (
    <AuthContext.Provider value={{ user, isSignedIn: !!user, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
