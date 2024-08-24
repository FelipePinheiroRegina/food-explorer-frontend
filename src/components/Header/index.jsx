import { FiMenu } from "react-icons/fi"
import { PiReceipt } from "react-icons/pi"
import { Container, Content, ContainerReceipt, Count } from "./styles"
import polygon from "../../assets/polygon.svg"

import { useAuth } from "../../hooks/auth"
import { useOrders } from "../../hooks/orders"
import { useNavigate } from "react-router-dom"

export function Header({ clickMenu, functionOpenError }) {
    const navigate = useNavigate()
    const { countOrders } = useOrders()
    const { user } = useAuth()
    const admin = user.role === 'admin' ? true : false

    const handleNavigateOrders = () => {
        const tot = JSON.parse(sessionStorage.getItem("@foodexplorer:counttot"))

        if(!tot) return functionOpenError('Does not exists orders still')

        navigate('/orders')
    }

    return (
        <Container>

            <Content>
                <FiMenu onClick={clickMenu} cursor="pointer"/>

                <div>
                    <img src={polygon} alt="Image polygon"/>
                    <h1>food explorer</h1>
                    
                    { admin &&
                        <small className="admin">admin</small>
                    }
                </div>

                
                <ContainerReceipt $isAdmin={admin} onClick={handleNavigateOrders}>
                    <PiReceipt/>

                    <Count>
                        {countOrders}
                    </Count>
                </ContainerReceipt>
            </Content>
            
        </Container>
    )
}