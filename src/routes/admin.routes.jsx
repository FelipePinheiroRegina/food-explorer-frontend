import { Routes, Route } from "react-router-dom"

import { Home } from "../pages/Home"
import { DetailsDish } from "../pages/DetailsDish"
import { NewDish } from "../pages/NewDish"
import { UpdateDish } from "../pages/UpdateDish"
import { NotFound } from "../pages/NotFound"
import { History } from "../pages/History"

export function AdminRoutes() {
    return (
        <Routes>
            <Route path="/"                 element={ <Home/>        }/>
            <Route path="/details/:id"      element={ <DetailsDish/> }/>
            <Route path="/create"           element={ <NewDish/>     }/>
            <Route path="/update/:id"       element={ <UpdateDish/>  }/>
            <Route path="/history"          element={ <History/>     }/>

            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}