import { createContext, useContext, useState , useEffect} from 'react'

const AuthContext = createContext([])


export function useAuth() {
  return useContext(AuthContext)
}

export function 
AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
   console.log(user)
  }, [user])
  

  return (
    <AuthContext.Provider value={{ user,setUser }}>
      {children}
    </AuthContext.Provider>
  )
}
