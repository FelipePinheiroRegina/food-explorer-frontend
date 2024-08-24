import { Routes, Route, Navigate } from "react-router-dom"

import { Register } from "../pages/Register"
import { Login    } from "../pages/Login"

export function AuthRoutes() {
    const user = sessionStorage.getItem('@foodexplorer:user')

    return (
        <Routes>
            <Route path="/"         element={ <Login/>    }/>
            <Route path="/register" element={ <Register/> }/>

            { !user && <Route path="*" element={<Navigate to="/" />}/> }
        </Routes>
    )
}