import { LiaQrcodeSolid } from "react-icons/lia"
import { PiCreditCardLight, PiPixLogo } from "react-icons/pi"
import { IoIosArrowBack } from "react-icons/io"

import { HeaderDesktop } from "../../components/HeaderDesktop"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { SideMenu } from "../../components/SideMenu"
import { ButtonTextTints } from "../../components/ButtonTextTints"
import { Credit } from "../../components/Credit"
import { IconsPayment } from "../../components/IconsPayment"
import { ButtonText } from "../../components/ButtonText"
import { ButtonTints_100 } from "../../components/ButtonTints_100"
import { Success } from "../../components/Success"
import { Error } from "../../components/Error"

import { Container, Content, DetailsDish, Dish, Payment } from "./styles"

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useOrders } from "../../hooks/orders"
import { api } from "../../services/api"

export function Orders() {
    const { loadCount } = useOrders()
    const navigate = useNavigate()
    const [ credit, setCredit ] = useState(false)
    const [ pix,    setPix ] = useState(true)
    const [ cardNumber, setCardNumber ] = useState('')
    const [ validity, setValidity ] = useState('')
    const [ cvc, setCvc ] = useState('')
    const [ orders, setOrders] = useState([])
    const [ refresh, setRefresh ] = useState(false)
    const [ openMenu, setOpenMenu ] = useState(false)

    const [ openFormPayments, setOpenFormPayments ] = useState(false)

    const [ paymentFinalized, setPaymentFinalized ] = useState(false)

    // Here is the logic of success and error modals 
    const [ openError, setOpenError ] = useState(false)
    const [ messageError, setMessageError ] = useState('')
    const [ openSuccess, setOpenSuccess ] = useState(false)
    const [ messageSuccess, setMessageSuccess ] = useState('')

    // Logic open modal error
    function handleOpenError(message) {
        setMessageError(message)
        setOpenError(true)
    }

    // Logic close modal error
    const handleCloseError = () => {
        setOpenError(false)
    }

    // Logic open modal success
    function handleOpenSuccess(message) {
        setMessageSuccess(message)
        setOpenSuccess(!openSuccess)
    }

    // Logic close modal success
    const handleCloseSuccess = () => {
        setOpenSuccess(false)
    }

    const handleClickPix = () => {
        if(pix === true || paymentFinalized === true) return

        setCredit(false)
        setPix(true)
    }

    const handleClickCredit = () => {
        if(credit === true || paymentFinalized === true) return

        setPix(false)
        setCredit(true)
    }

    const handleOpenFormPayments = () => {
        setOpenFormPayments(true)
    }

    const fetchImageDish = (imageName) => {
        const image = `${api.defaults.baseURL}/files/${imageName}` 

        return image
    }

    function handlePaymentFinalized(){
        if(!cardNumber || !validity || !cvc) return handleOpenError('Fill the fields')
        
        if(orders.length === 0) return navigate('/')

        handleOpenSuccess('Payment finalized successfully!')
        setCredit(false)
        setPix(false)
        setPaymentFinalized(true)
    }

    const handleBack = () => {
        navigate(-1)
    }

    const handleRemove = (dishName) => {
        sessionStorage.removeItem(`@foodexplorer:orders:dish:${dishName}`)
        
        let counttot = (Number(sessionStorage.getItem("@foodexplorer:counttot"))) - 1

        sessionStorage.setItem("@foodexplorer:counttot", counttot)

        loadCount()
        setRefresh(!refresh)
    }

    const totOrders = (orders) => {
        const arrayOfPrice = []

        orders.forEach(order => {
            for (let c = 1; c <= order[1].qtd; c++) {
                let priceNumber = parseFloat(order[0].price.replace(',', '.'))
                arrayOfPrice.push(priceNumber)
            }
        })
        
        const sum = arrayOfPrice.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        
        const totFormat = sum.toFixed(2).replace('.', ',')

        return totFormat
    }

    // open menu when user click
    const handleClickMenu = () => {
        setOpenMenu(!openMenu)
    }

    useEffect(() => {
        async function fetchOrders() {
            const response = await api.get('dishes')

            const arrayAux = []
            response.data.forEach(dish => {
                let order = sessionStorage.getItem(`@foodexplorer:orders:dish:${dish.name}`)

                if(order) {
                    arrayAux.push([dish, JSON.parse(order)])
                }
            })

            setOrders(arrayAux)
        } 

        fetchOrders()
    }, [refresh])

    return (
        <Container>
            <Error   message={messageError}   visible={openError}   closeError={handleCloseError}/>
            <Success message={messageSuccess} visible={openSuccess} closeSuccess={handleCloseSuccess}/>

            <SideMenu isHome={false} lookMenu={openMenu} closeMenu={handleClickMenu}/>

            <HeaderDesktop/>
            <Header clickMenu={handleClickMenu}/>

            <Content>
                <DetailsDish data-open-form-payments={openFormPayments}>
                    <ButtonText icon={IoIosArrowBack}   text="Go Back" onClick={handleBack}/>
                    <h1>My Orders</h1>

                    { orders &&
                        orders.map(order => (
                            <Dish key={order[0].id}>
                                <img src={fetchImageDish(order[0].image)} alt={order[0].name} /> 
        
                                <div className="name-and-remove">
                                    <span>{order[1].qtd}x {order[0].name}<sup>R$ {order[0].price}</sup></span>
                                    <ButtonTextTints text="Remove" onClick={() => handleRemove(order[0].name)}/>
                                </div>
                            </Dish>
                        ))
                    }

                    <strong id="total">Total: R$ {totOrders(orders)}</strong>

                    <div id="advance">
                        <ButtonTints_100 text="Advance" onClick={handleOpenFormPayments}/>
                    </div>
                </DetailsDish>

                <Payment data-open-form-payments={openFormPayments}>
                    <h1>Payment</h1>
                    <div id="layout">
                        <div id="options-payment">
                            <button id="pix"    data-is-true={pix}  onClick={handleClickPix}>    <PiPixLogo/>        Pix   </button>
                            <button id="credit" data-is-true={credit} onClick={handleClickCredit}> <PiCreditCardLight/>Credit</button>
                        </div>

                        <div id="alternation">
                            {pix    === true && paymentFinalized === false && <LiaQrcodeSolid id="qrcode"/>}
                            {credit === true && paymentFinalized === false && <Credit 
                                                onClick={handlePaymentFinalized}
                                                setCardNumber={setCardNumber}
                                                setValidity={setValidity}
                                                setCvc={setCvc}
                                                />}
                            
                            {pix === false &&
                            credit === false &&
                             paymentFinalized === true && 
                                <IconsPayment/>
                            }
                        </div>
                    </div>
                </Payment>
            </Content>

            <Footer/>
        </Container>
    )
}