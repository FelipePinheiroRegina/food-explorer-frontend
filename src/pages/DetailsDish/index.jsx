import { IoIosArrowBack } from "react-icons/io"

import { Container, Content } from "./styles"
import { SideMenu } from "../../components/SideMenu"
import { Header } from "../../components/Header"
import { HeaderDesktop } from "../../components/HeaderDesktop"
import { Footer } from "../../components/Footer"
import { ButtonText } from "../../components/ButtonText"
import { Ingredient } from "../../components/ingredient"
import { ButtonTints_100 } from "../../components/ButtonTints_100"
import { ButtonTints_100_Icon } from "../../components/ButtonTints_100_Icon"
import { Add } from "../../components/Add"
import { Error } from "../../components/Error"
import { Success } from "../../components/Success"

import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { useAuth } from "../../hooks/auth"
import { useOrders } from "../../hooks/orders"
import { api } from "../../services/api"

export function DetailsDish() {
    const { loadCount } = useOrders()
    const { id } = useParams()
    const { user } = useAuth()
    const [ openMenu, setOpenMenu ] = useState(false)
    const admin = user.role === 'admin' ? true : false
    const navigate = useNavigate()

    const [ dish, setDish ] = useState({})

    const [ qtd, setQtd ] = useState(1)

    const [ ingredients, setIngredients ] = useState([])

    const image = `${api.defaults.baseURL}/files/${dish.image}` 

    // Here is the logic of success and error modals 
    const [ openError, setOpenError ] = useState(false)
    const [ messageError, setMessageError ] = useState('')
    const [ openSuccess, setOpenSuccess ] = useState(false)
    const [ messageSuccess, setMessageSuccess ] = useState('')

    // Logic modal error
    function handleOpenError(message) {
        setMessageError(message)
        setOpenError(true)
    }

    const handleCloseError = () => {
        setOpenError(false)
    }

    // Logic modal success
    function handleOpenSuccess(message) {
        setMessageSuccess(message)
        setOpenSuccess(!openSuccess)
    }

    const handleCloseSuccess = () => {
        setOpenSuccess(false)
    }

    const handleNavigateBack = () => {
        navigate(-1)
    }

    const handleOpenMenu = () => {
        setOpenMenu(!openMenu)
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
            handleOpenSuccess('Order added successfully 😆😆😆')
        }

        loadCount()
    }

    const convertNumber = (price, qtd) => {
        const priceNumber = price ? parseFloat(price.replace(',', '.')) : 0

        let price_x_qtd = priceNumber * qtd

        price_x_qtd = price_x_qtd.toFixed(2).replace('.', ',')

        return price_x_qtd
    }

    useEffect(() => {
        async function fetchDetails() {
            try {
                let response = await api.get(`/dishes/${id}`)
                setDish(response.data)
                
                const exists = JSON.parse(sessionStorage.getItem(`@foodexplorer:qtdDish:${response.data.name}`))
                if(exists) {
                    setQtd(exists.qtd)
                }

                response = await api.get(`/ingredients/${id}`)
                setIngredients(response.data)
            } catch (error) {
                if(error.response) {
                    handleOpenError(error.response.data.message)
                } else {
                    handleOpenError('Unable load details')
                }
            }
        }

        fetchDetails()
    }, [])

    return (
        <Container>
            <Error   message={messageError}   visible={openError}   closeError={handleCloseError}/>
            <Success message={messageSuccess} visible={openSuccess} closeSuccess={handleCloseSuccess}/>

            <Header clickMenu={handleOpenMenu}/>
            <HeaderDesktop/>

            <SideMenu lookMenu={openMenu} closeMenu={handleOpenMenu} onlyHome={true}/> {/* <-- onlyHome input controller */}

            <Content>
                <ButtonText icon={IoIosArrowBack} text="Go back" className="go-back" onClick={handleNavigateBack}/>

                <div className="container-details-and-image">
                    <img src={image && image} alt="Image dish"/>

                    <div className="container-wrap">

                        <div className="details-dish">
                            <h1>{dish && dish.name}</h1>
                            <p>{dish && dish.description}</p>

                            <div className="container-ingredients">
                                {ingredients &&
                                    ingredients.map(ingredient => (
                                        <Ingredient 
                                            key={ingredient.id}
                                            name={ingredient.name}
                                        />  
                                    ))
                                }
                            </div>
                        </div>

                        <div className="add-or-update">

                            { admin === false &&
                                <div className="container-add">
                                    <Add clickAdd={handleAddQtd} clickRemove={handleRemoveQtd} $qtd={qtd} price={dish.price}></Add>

                                    <ButtonTints_100_Icon onClick={handleIncludeOrders} text={`Add - R$ ${dish && convertNumber(dish.price, qtd)}`}/>
                                </div>  
                            }

                            { admin &&
                                <div className="container-update">
                                    <ButtonTints_100 text="Update dish" onClick={() => handleNavigateUpdate(dish.id)}/>
                                </div>
                            }

                        </div>
                    </div>
                </div>
            </Content>
            
            <Footer/>
        </Container>
    )
}