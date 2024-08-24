import { Routes, Route, Navigate } from "react-router-dom"

import { Home } from "../pages/Home"
import { DetailsDish } from "../pages/DetailsDish"
import { NotFound } from "../pages/NotFound"
import { Favorites } from "../pages/Favorites"
import { Orders } from "../pages/Orders"
import { History } from "../pages/History"

export function CustomerRoutes() {
    return (
        <Routes>
            <Route path="/"                 element={ <Home        /> }/>
            <Route path="/details/:id"      element={ <DetailsDish /> }/>
            <Route path="/favorites"        element={ <Favorites   /> }/>
            <Route path="/orders"           element={ <Orders      /> }/>
            <Route path="/history"           element={ <History    /> }/>

            <Route path="*"  element={<NotFound/>}/>
        </Routes>
    )
}