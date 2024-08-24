import { FaArrowLeft } from "react-icons/fa"
import { Container, Main } from "./styles"
import { SideMenu } from "../../components/SideMenu"
import { Header } from "../../components/Header"
import { HeaderDesktop } from "../../components/HeaderDesktop"
import { Footer } from "../../components/Footer"
import { useEffect, useState } from "react"
import { ButtonTextTints } from "../../components/ButtonTextTints"
import { useNavigate } from "react-router-dom"
import { api } from "../../services/api"

export function Favorites() {
    const [ openMenu, setOpenMenu ] = useState(false)

    const [ favorites, setFavorites ] = useState([])
    const [ refresh, setRefresh ] = useState(false)

    const navigate = useNavigate()

    const handleClickMenu = () => {
        setOpenMenu(!openMenu)
    }

    const handleBack = () => {
        navigate(-1)
    }

    function handleImage(name){
        const image = `${api.defaults.baseURL}/files/${name}`

        return image
    }

    const handleRemoveFavorites = (dishName) => {
        localStorage.removeItem(`@foodexplorer:favorite:${dishName}`)
        setRefresh(!refresh)
    }

    useEffect(() => {
        async function fetchNameDishes() {
            const response = await api.get('/dishes')
            let arrayFavorites = []

            response.data.forEach(dish => {
                const verifyLocal = JSON.parse(localStorage.getItem(`@foodexplorer:favorite:${dish.name}`))

                if(verifyLocal) {
                    arrayFavorites.push(dish)
                }
            })

            setFavorites(arrayFavorites)
        }

        fetchNameDishes()
    }, [refresh])

    return (
        <Container>
            <SideMenu isHome={false} lookMenu={openMenu} closeMenu={handleClickMenu} onChange={e => setName(e.target.value)}/>
            
            <Header clickMenu={handleClickMenu}/>
            <HeaderDesktop isHome={false} isFav={true}/>

            <Main>
                <FaArrowLeft size={24} cursor="pointer" onClick={handleBack}/>
                <h1>My Favorites</h1>
                <div id="struct-dishes">
                    { favorites &&
                        favorites.map((favorite, index) => (
                            <div className="dishes" key={String(index)}>
                                <img src={handleImage(favorite.image)} alt={favorite.name}/>

                                <div className="details">
                                    <h2>{favorite.name}</h2>
                                    <ButtonTextTints text='Remove from Favorites' onClick={() => handleRemoveFavorites(favorite.name)}/>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </Main>
            <Footer/>
        </Container>
    )
}