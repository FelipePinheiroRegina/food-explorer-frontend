import { createContext, useContext, useState, useEffect } from "react"
import { api } from "../services/api"

export const AuthContext = createContext({})

function AuthProvider({ children }) {
    const [ data, setData ] = useState({})

    async function login({ email, password, handleOpenSuccess, handleOpenError }) {
        try {
            const response = await api.post('/sessions', { email, password }) //{withCredentials: true} para utilizar cookies

            const { user, token } = response.data

            sessionStorage.setItem("@foodexplorer:user", JSON.stringify(user))
            sessionStorage.setItem("@foodexplorer:token", token)

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`

            handleOpenSuccess(`Successful authentication, Welcome ${user.name} 👋`)

            setTimeout(() => {
                sessionStorage.setItem('@foodexplorer:user',  JSON.stringify(user))

                setData({ user })
            }, 2000)

        } catch (error) {
            if(error.response) {
                handleOpenError(error.response.data.message)
            } else {
                handleOpenError('Unable to enter')
            }
            return
        }
    }

    function logout() {
        sessionStorage.clear()
    
        setData({})
    }

    useEffect(() => {
        const user = sessionStorage.getItem('@foodexplorer:user')
        const token = sessionStorage.getItem('@foodexplorer:token')

        if(user && token) {
             api.defaults.headers.common['Authorization'] = `Bearer ${token}`

            setData({ 
                token,
                user: JSON.parse(user)
            })
        }

    }, [])

    return (
        <AuthContext.Provider value={{ 
            login, 
            logout,
            user: data.user 
        }}>

            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext)

    return context;
}

export { AuthProvider, useAuth }