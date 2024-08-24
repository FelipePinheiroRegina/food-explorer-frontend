import { IoIosArrowBack } from "react-icons/io"

import { Container, Content, LayoutHistoryMobile, CardOrder, LayoutHistoryDesktop } from "./styles"
import { HeaderDesktop } from "../../components/HeaderDesktop"
import { Header } from "../../components/Header"
import { SideMenu } from "../../components/SideMenu"
import { Footer } from "../../components/Footer"
import { Error } from "../../components/Error"
import { Success } from "../../components/Success"
import { SelectStatus } from "../../components/SelectStatus" 
import { ButtonText } from "../../components/ButtonText"
import { useState } from "react"


import { useAuth } from '../../hooks/auth'
import { useNavigate } from "react-router-dom"

export function History() { 
    const  [ orders, setOrders ] = useState([
        {   code: '000001',
            date: '20/05 às 20h00' ,
            details: '1x Salad Radish, 1x Spaghetti Gambe, 1x Macaron, 1x Apple Cocktail',
            status: 'Pending'
        },
    
        {   code: '000002',
            date: '20/05 às 19h20' ,
            details: '1x Simple Salad, 1x Prune, 1x Macaron, 1x Specialties Tea',
            status: 'Preparing'
        },
    
        {   code: '000003',
            date: '20/05 às 18h00' ,
            details: '2x Bacon Toast, 2x Cappuccino',
            status: 'Delivered'
        },
    
        {   code: '000004',
            date: '20/05 às 18h30' ,
            details: '1x Pastry, 1x Plum Pie, 1x Apple Cocktail',
            status: 'Delivered'
        },
    ])

    const updateOrderStatus = (orderCode, newStatus) => {
        setOrders(prevOrders =>
            prevOrders.map(order =>
                order.code === orderCode ? { ...order, status: newStatus } : order
            )
        )
    }

    const { user } = useAuth()
    const admin = user.role === 'admin' ? true : false
    const [ openMenu, setOpenMenu ] = useState(false)
    const navigate = useNavigate()

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

    // open menu when user click
    const handleClickMenu = () => {
        setOpenMenu(!openMenu)
    }

    const handleBack = () => {
        navigate(-1)
    }

    return( 
        <Container>
            <Error   message={messageError}   visible={openError}   closeError={handleCloseError}/>
            <Success message={messageSuccess} visible={openSuccess} closeSuccess={handleCloseSuccess}/>

            <SideMenu lookMenu={openMenu} closeMenu={handleClickMenu} onChange={e => setName(e.target.value)}/>

            <Header clickMenu={handleClickMenu} 
                    functionOpenError={handleOpenError} 
            />

            <HeaderDesktop 
                functionOpenError={handleOpenError}
            /> 

            <Content>
                <ButtonText icon={IoIosArrowBack} text="Go back" onClick={handleBack}/>
                <LayoutHistoryMobile>
                    <h1>Orders</h1>
                    { orders &&
                        orders.map(order => (
                            <CardOrder key={order.code}>
                                <div className="container-inline"> 
                                    <div className="code">
                                        {order.code}
                                    </div>
                                    <div className="date">
                                        {order.date}
                                    </div>
                                </div>

                                <div className="details">
                                    {order.details}
                                </div>

                                <SelectStatus 
                                    isAdmin={admin} 
                                    statusValue={order.status} 
                                    Order={order}
                                    updateStatus={updateOrderStatus}
                                    />
                            </CardOrder>
                        ))

                    }
                    
                </LayoutHistoryMobile>

                <LayoutHistoryDesktop>
                    <h1>Orders</h1>

                    <table>
                        <thead>
                            <tr>
                                <th className="status">Status</th>
                                <th>Code</th>
                                <th>Details</th>
                                <th className="date">Date and hours</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders &&
                                orders.map(order => (
                                    <tr key={order.code}>
                                        <td>{<SelectStatus 
                                            isAdmin={admin} 
                                            statusValue={order.status} 
                                            Order={order}
                                            updateStatus={updateOrderStatus}
                                            />}
                                        </td>

                                        <td>
                                            {order.code}
                                        </td>

                                        <td>
                                            {order.details}
                                        </td>

                                        <td>
                                            {order.date}
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </LayoutHistoryDesktop>
            </Content>
            

            <Footer/>
        </Container>
    )
}