import { FiX, FiSearch } from "react-icons/fi"

import { Container, Top, Nav, Option } from "./styles"
import { InputWithIcon } from "../InputWithIcon"

import { Footer } from "../Footer"

import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/auth"
import { useOrders } from "../../hooks/orders"

export function SideMenu({ lookMenu, closeMenu, isHome, onChange }) {
    const { setCountOrders } = useOrders()
    const { user, logout } = useAuth()
    const admin = user.role === 'admin' ? true : false
   
    const navigate = useNavigate()

    const handleNavigateCreate = () => {
        navigate('/create')
    }

    const handleNavigateFavorites = () => {
        navigate('/favorites')
    }

    const handleNavigateHome = () => {
        navigate('/')
    }

    const handleNavigateHistory = () => {
        navigate('/history')
    }

    const handleLogout = () => {
        navigate('/')
        setCountOrders(0)
        logout()
    }

    return (
        <Container data-menu-is-open={lookMenu}>
            <Top>
                <div>
                    <FiX onClick={closeMenu} cursor="pointer"/>
                    <span>Menu</span>
                </div>
            </Top>

            <Nav>
                <InputWithIcon 
                    type="text"
                    icon={FiSearch} 
                    placeholder={isHome === true ? "Search for dishes or ingredients" : "Search only in page home"}
                    readOnly={!isHome}
                    onChange={onChange}
                />

                <div className="options">
                    <Option onClick={handleNavigateHome}>Home</Option>
                    <Option onClick={handleNavigateHistory}>History</Option>
                    {admin && <Option onClick={handleNavigateCreate}>New dish</Option>}
                    {admin === false && <Option onClick={handleNavigateFavorites}>My Favorites</Option>}
                    <Option onClick={handleLogout}>Exit</Option>
                </div>
            </Nav>

            <Footer/>
        </Container>
    )
}