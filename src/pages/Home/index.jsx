import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { Container, Content, ContainerImage, ImageOverlay, ContainerAllDishes, ContainerScroll, Main, ContainerHidden, ArrowLeft, ArrowRight } from "./styles"
import { SideMenu } from "../../components/SideMenu"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { DishCard } from "../../components/DishCard"
import { HeaderDesktop } from "../../components/HeaderDesktop"
import { Error } from "../../components/Error"
import { Success } from "../../components/Success"

import { useRef, useEffect, useState } from 'react'
import { api } from "../../services/api";

export function Home() {
    const [ dishes, setDishes ] = useState([]) // dishes, desserts, juices
    const [ name, setName ] = useState(null) // name of the dish or ingredient for search

    const [ stateMeal, setStateMeal ]       = useState(false) // define if render the container
    const [ stateDessert, setStateDessert ] = useState(false) // define if render the container
    const [ stateJuice, setStateJuice ]     = useState(false)  // define if render the container
    
    const scrollMealsRef    = useRef()
    const scrollDessertsRef = useRef()
    const scrollJuicesRef   = useRef()
    const [ openMenu, setOpenMenu ] = useState(false)
    
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

    //  when user click on arrow right
    function handleRight(id) {
        const containerScroll = document.getElementById(id)

        containerScroll.scrollBy(250, 0)
    }

    // when user click on arrow left
    function handleLeft(id) {
        const containerScroll = document.getElementById(id)

        containerScroll.scrollBy(-250, 0)
    }

    // open menu when user click
    const handleClickMenu = () => {
        setOpenMenu(!openMenu)
    }
    
    // get the current position of the meal container and save it in the session
    const handleScrollMeals = () => {
        const scrollMeals = scrollMealsRef.current.scrollLeft;
   
        sessionStorage.setItem('@foodexplorerscrollmeals', scrollMeals)
    }

    // get the current position of the dessert container and save it in the session
    const handleScrollDesserts = () => {
        const scrollDesserts = scrollDessertsRef.current.scrollLeft;
        sessionStorage.setItem('@foodexplorerscrolldesserts', scrollDesserts)
    }

    // get the current position of the juice container and save it in the session
    const handleScrollJuices = () => {
        const scrollJuices = scrollJuicesRef.current.scrollLeft;
        sessionStorage.setItem('@foodexplorerscrolljuices', scrollJuices)
    }

    // function to retrieve the state of containers
    function scrollAutomatic(container, nameSession) {
        const scrollEnd   = document.getElementById(`${container}`).scrollWidth - 1200  // getting the value from the end of the container
    
        const scrollStart = 250                                                         // getting the value from the start of the container

        // firsts conditions
        const differentNull = sessionStorage.getItem(`${nameSession}`) !== null    // checking the value in session is different to null
        const tallerThan    = sessionStorage.getItem(`${nameSession}`) > 100       // checking the value in session is taller than one hundred 
        const smallerThan   = sessionStorage.getItem(`${nameSession}`) < scrollEnd // checking the value in session is smaller than the end of container

        // seconds conditions
        const whereScrollFromTallerThan = sessionStorage.getItem(`${nameSession}`) > scrollEnd // checking the value in session is taller than the end of container meals

        const moveScrollTo = differentNull && tallerThan && smallerThan ? sessionStorage.getItem(`${nameSession}`)  : whereScrollFromTallerThan ? scrollEnd : scrollStart //Define for where the scroll go

        document.getElementById(`${container}`).scrollLeft = moveScrollTo
    }

    // useEffect to retrieve the position of containers as soon as the page is rendered
    useEffect(() => {
        if(stateMeal) {
            scrollAutomatic('containerScrollMeals',    '@foodexplorerscrollmeals')
        }
        
        if(stateDessert) {
            scrollAutomatic('containerScrollDesserts', '@foodexplorerscrolldesserts')
        }
        
        if(stateJuice) {
            scrollAutomatic('containerScrollJuices',   '@foodexplorerscrolljuices')
        }
    }, [stateMeal, stateJuice, stateDessert])

    // useEffect to fetch the dishes 
    useEffect(() => {
        async function fetchDishes() {
            try {
                let response

                if(name) {
                    response = await api.get(`/dishes?name=${name}`)
                } else {
                    response = await api.get(`/dishes`)
                }
                
                setDishes(response.data)
                setStateMeal(response.data.some(dish => dish.category === 'meal'))
                setStateDessert(response.data.some(dish => dish.category === 'dessert'))
                setStateJuice(response.data.some(dish => dish.category === 'juice'))

            } catch (error) {
                if(error.response) {
                    handleOpenError(error.response.data.message)
                } else {
                    handleOpenError('Error loading all dishes')
                }
            } 
        }

        fetchDishes()
    }, [name])
    
    return (
        <Container>
            <Error   message={messageError}   visible={openError}   closeError={handleCloseError}/>
            <Success message={messageSuccess} visible={openSuccess} closeSuccess={handleCloseSuccess}/>

            <SideMenu isHome={true} lookMenu={openMenu} closeMenu={handleClickMenu} onChange={e => setName(e.target.value)}/>

            <Header clickMenu={handleClickMenu} 
                    functionOpenError={handleOpenError} 
            />

            <HeaderDesktop 
                onChange={e => setName(e.target.value)} 
                isHome={true}
                functionOpenError={handleOpenError}
            /> 

            <Content>

                <ContainerImage>
                    <ImageOverlay>
                    
                    </ImageOverlay>
                    <div className="background-linear">
                        
                    </div>
                   
                    <div className="text">
                        <h1>Unmatched flavors</h1>
                        <p>Feel the care of the preparation with selected ingredients.</p>
                    </div>
                </ContainerImage>

                
                <ContainerAllDishes>
                   
                    <h2>Meals</h2>

                    {stateMeal && <ContainerScroll>
                        <ArrowLeft>
                            <IoIosArrowBack onClick={() => handleLeft("containerScrollMeals")}/>
                        </ArrowLeft>

                        <Main id="containerScrollMeals"  ref={scrollMealsRef} onScroll={handleScrollMeals}>
                            <ContainerHidden/>
                            {dishes && dishes.map(dish => {
                                if(dish.category === 'meal') {
                                    return  <DishCard key={Number(dish.id)} dish={dish} functionOpenSuccess={handleOpenSuccess}/>
                                }
                            })}
                            <ContainerHidden/>
                        </Main>
                        
                        <ArrowRight>
                            <IoIosArrowForward onClick={() => handleRight("containerScrollMeals")}/>
                        </ArrowRight>
                    </ContainerScroll>}
                
                    <h2>Desserts</h2>

                    {stateDessert &&<ContainerScroll>
                        <ArrowLeft>
                            <IoIosArrowBack onClick={() => handleLeft("containerScrollDesserts")}/>
                        </ArrowLeft>
                        
                        <Main id="containerScrollDesserts" ref={scrollDessertsRef} onScroll={handleScrollDesserts}>
                            <ContainerHidden/>
                            {dishes && dishes.map(dish => {
                                if(dish.category === 'dessert') {
                                    return  <DishCard key={Number(dish.id)} dish={dish} functionOpenSuccess={handleOpenSuccess}/>
                                }
                            })}
                            <ContainerHidden/>
                        </Main>
                        
                        <ArrowRight>
                            <IoIosArrowForward onClick={() => handleRight("containerScrollDesserts")}/>
                        </ArrowRight>
                    </ContainerScroll>}
                
                    <h2>Juices</h2>

                    {stateJuice &&
                    <ContainerScroll>
                        <ArrowLeft>
                            <IoIosArrowBack onClick={() => handleLeft("containerScrollJuices")}/>
                        </ArrowLeft>
                        
                        <Main id="containerScrollJuices" ref={scrollJuicesRef} onScroll={handleScrollJuices}>
                            <ContainerHidden/>
                            {dishes && dishes.map(dish => {
                                if(dish.category === 'juice') {
                                    return  <DishCard key={Number(dish.id)} dish={dish} functionOpenSuccess={handleOpenSuccess}/>
                                }
                            })}
                            <ContainerHidden/>
                        </Main>
                        
                        <ArrowRight>
                            <IoIosArrowForward onClick={() => handleRight("containerScrollJuices")}/>
                        </ArrowRight>
                    </ContainerScroll>}
                </ContainerAllDishes>
            </Content>

            <Footer />
        </Container>
    )
}
