import { createContext, useContext, useState, useEffect } from "react"
import { api } from "../services/api"

export const OrdersContext = createContext({})

function OrdersProvider({ children }) {
    const [ countOrders, setCountOrders] = useState(0)
    const names = []
    
    async function loadCount() {
        const response = await api.get('/dishes')
        const names = response.data.map(dish => dish.name)
    
        const count = names.reduce((acc, name) => {
            const exists = JSON.parse(sessionStorage.getItem(`@foodexplorer:orders:dish:${name}`))
            if (exists) {
                return acc + 1
            }
            return acc
        }, 0)
    
        setCountOrders(count)
        sessionStorage.setItem("@foodexplorer:counttot", count)
    }

    
    
    useEffect(() => {
        const count = JSON.parse(sessionStorage.getItem("@foodexplorer:counttot")) 
        if(!count){
            setCountOrders(0)
        } else {
            setCountOrders(count)
        }
    }, [])

    return (
        <OrdersContext.Provider value={{ 
            loadCount,
            setCountOrders,
            countOrders
        }}>

            {children}
        </OrdersContext.Provider>
    )
}

function useOrders() {
    const context = useContext(OrdersContext)

    return context;
}

export { OrdersProvider, useOrders }