import { BrowserRouter } from "react-router-dom"

import { AuthRoutes } from "./auth.routes"
import { AdminRoutes } from "./admin.routes"
import { CustomerRoutes } from "./customer.routes"

import { useAuth } from "../hooks/auth"

export function Routes() {
    const { user } = useAuth()

    function ControllerRoutes(role) {
        switch(role) {
            case 'admin':
                return <AdminRoutes/>
            case 'customer':
                return <CustomerRoutes/>
            default:
                return <AuthRoutes/>
        }
    }

    return (
        <BrowserRouter>
           { user ? ControllerRoutes(user.role) : <AuthRoutes/>}
        </BrowserRouter>
    )
}