import { PiPencilSimpleBold, PiHeartStraightBold, PiHeartStraightFill } from "react-icons/pi"

import { Container } from "./styles"
import { Add } from "../Add"

import { ButtonTints_100 } from "../ButtonTints_100"

import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/auth"
import { useOrders } from "../../hooks/orders"
import { api } from "../../services/api"
import { useEffect, useState } from "react"

export function DishCard({ dish, functionOpenSuccess }) {
    const { loadCount } = useOrders()
    const { user } = useAuth()
    
    // Logic of dishes that contain more then 1 qtd
    const checkAdd = JSON.parse(sessionStorage.getItem(`@foodexplorer:qtdDish:${dish.name}`))
    const [ qtd, setQtd ] = useState(checkAdd ? checkAdd.qtd : 1)

    // Variable to keep my favorites dishes
    const [ favorites, setFavorites ] = useState([])
    const [ refresh, setRefresh ] = useState(false)
    

    const admin = user.role === 'admin' ? true : false

    const image = `${api.defaults.baseURL}/files/${dish.image}`

    const navigate = useNavigate()

    function handleNavigateDetails(dishId) {
        navigate(`/details/${dishId}`)
    }

    function handleNavigateUpdate(dishId) {
        navigate(`/update/${dishId}`)
    }

    const handleAddQtd = ()  => {
        setQtd(qtd + 1)
        sessionStorage.setItem(`@foodexplorer:qtdDish:${dish.name}`, JSON.stringify({id: dish.id, qtd: qtd + 1}))
    }

    const handleRemoveQtd = () => {
        if(qtd === 1) return

        setQtd(qtd - 1)
        sessionStorage.removeItem(`@foodexplorer:qtdDish:${dish.name}`, JSON.stringify({id: dish.id, qtd: qtd - 1}))
    }

    const handleIncludeOrders = () => {
        const verifySession = JSON.parse(sessionStorage.getItem(`@foodexplorer:qtdDish:${dish.name}`))

        if(verifySession) {
            sessionStorage.setItem(`@foodexplorer:orders:dish:${dish.name}`, JSON.stringify(verifySession))
        } else {
            sessionStorage.setItem(`@foodexplorer:orders:dish:${dish.name}`, JSON.stringify({id: dish.id, qtd: qtd}))
            functionOpenSuccess('Order added successfully 😆😆😆')
        }

        loadCount()
    }

    const handleAddFavorites = () => {
        const verifyLocal = JSON.parse(localStorage.getItem(`@foodexplorer:favorite:${dish.name}`))

        if(verifyLocal) return

        localStorage.setItem(`@foodexplorer:favorite:${dish.name}`, JSON.stringify(dish.id))
        setRefresh(!refresh)
    }

    const handleRemoveFavorites = () => {
        localStorage.removeItem(`@foodexplorer:favorite:${dish.name}`)
        setRefresh(!refresh)
    }

    useEffect(() => {
        async function fetchNameDishes() {
            const response = await api.get('/dishes')
            let arrayFavorites = []

            response.data.forEach(dish => {
                const verifyLocal = JSON.parse(localStorage.getItem(`@foodexplorer:favorite:${dish.name}`))

                if(verifyLocal) {
                    arrayFavorites.push(verifyLocal)
                }
            })

            setFavorites(arrayFavorites)
        }

        fetchNameDishes()
    }, [refresh])

    return (
        <Container>
            <strong className="alter-favorite">
                {admin === true ? 
                    /* If user admin */
                    <PiPencilSimpleBold onClick={() => handleNavigateUpdate(dish.id)} cursor="pointer" /> :
                    /* Else */
                    favorites.includes(dish.id) ? 
                    /* This dish is one of my favorites ? heartFill else heartVoid */
                    <PiHeartStraightFill onClick={handleRemoveFavorites} cursor="pointer"/> :
                    <PiHeartStraightBold onClick={handleAddFavorites} cursor="pointer"/>
                }
            </strong>

            <img src={image} alt={dish.name} onClick={() => handleNavigateDetails(dish.id)}/>

            <h1 className="name" onClick={() => handleNavigateDetails(dish.id)}> {dish.name} &gt; </h1> 

            <p className="description"> {dish.description} </p>

            <strong className="price">R$ {dish.price}</strong>
            
            { admin === false &&
                <div className="container-buy">
                    <Add clickAdd={handleAddQtd} clickRemove={handleRemoveQtd} $qtd={qtd}/>

                    <ButtonTints_100 className="button-include" text="include" onClick={handleIncludeOrders} />
                </div>
            }
        </Container>
    )
}