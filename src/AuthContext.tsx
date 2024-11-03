import { createContext, useState, ReactNode  } from 'react'

interface AuthContextType {
  isLogIn: boolean;
  setIsLogIn: (value: boolean) => void; // Функція для зміни стану
}

interface AuthProviderProps {
  children: ReactNode;
}

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
