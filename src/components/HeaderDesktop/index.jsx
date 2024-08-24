import { FiSearch, FiLogOut } from "react-icons/fi"
import { PiReceipt } from "react-icons/pi"
import { Container, Content, InputSearch, MyFavorites, ContainerReceipt, Count, History } from "./styles"

import polygon from "../../assets/polygon.svg"
import { useAuth } from "../../hooks/auth"
import { useNavigate } from "react-router-dom"
import { useOrders } from "../../hooks/orders"

export function HeaderDesktop({ onChange, isHome, functionOpenError }) {
    const { countOrders, setCountOrders } = useOrders()
    const { user, logout } = useAuth()
    const admin = user.role === 'admin' ? true : false
    
    const navigate = useNavigate()
    const handleNavigateCreate = () => {
        navigate('/create')
    }

    const handleNavigateFavorites = () => {
        navigate('/favorites')
    }

    const handleNavigateHistory = () => {
        navigate('/history')
    }

    const handleNavigateOrders = () => {
        const tot = JSON.parse(sessionStorage.getItem("@foodexplorer:counttot"))

        if(!tot) return functionOpenError('Does not exists orders still')
        
        navigate('/orders')
    }

    const handleLogout = () => {
        navigate('/')
        setCountOrders(0)
        logout()
    }

    return (
        <Container>
            <Content>
                <div className="slogan">
                    <div className="text">
                        <img src={polygon} alt="Image polygon"/>
                        <h1>food explorer</h1>
                    </div>
                    
                    { admin &&
                        <small className="admin">admin</small>
                    }
                </div>

                <InputSearch onChange={onChange}>
                    <span>
                        <FiSearch/>
                    </span>
                    
                    <input 
                        type="text" 
                        placeholder={isHome === true ? "Search for dishes or ingredients" : "Search only in page home"}
                        readOnly={!isHome}
                    />
                </InputSearch>
                
                {admin === false &&
                    <MyFavorites>
                        <button id="favorites" onClick={handleNavigateFavorites}>My Favorites</button>
                    </MyFavorites>
                }

                <History onClick={handleNavigateHistory}>
                    History
                </History>
                
                <ContainerReceipt>
                    { admin === false &&
                        <button className="customer" onClick={handleNavigateOrders}>
                            <PiReceipt/>

                            <Count>
                                Orders {`(${countOrders})`}
                            </Count>
                        </button>
                    }
                    
                    { admin &&
                        <button className="admin-button" onClick={handleNavigateCreate}>
                            New dish
                        </button>
                    }
                </ContainerReceipt>

                <FiLogOut className="log-out" onClick={handleLogout}/>
            </Content>
            
        </Container>
    )
}