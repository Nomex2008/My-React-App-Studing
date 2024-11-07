import { createContext, useState  } from 'react'
import { AuthContextType, AuthProviderProps } from './types'

export const AuthContext = createContext<AuthContextType>({
    isLogIn: false,
    setIsLogIn: () => {}
})

export const AuthProvider: React.FC<AuthProviderProps> = ({children}:any) => {
  const [isLogIn , setIsLogIn] : any = useState()
  return (
    <AuthContext.Provider 
    value={{
        isLogIn,
        setIsLogIn,
    }}>
    {children}
    </AuthContext.Provider>
  )
}
