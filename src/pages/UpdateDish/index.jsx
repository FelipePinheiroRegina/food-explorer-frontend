import { IoIosArrowBack } from "react-icons/io"
import { LuUpload } from "react-icons/lu"

import { Container, Content, Form } from "./styles"
import { Header } from "../../components/Header"
import { HeaderDesktop } from "../../components/HeaderDesktop"
import { Footer } from "../../components/Footer"
import { ButtonText } from "../../components/ButtonText"
import { InputWithIcon } from "../../components/InputWithIcon"
import { InputPrice } from "../../components/InputPrice"
import { Select } from "../../components/Select"
import { AddIngredientItem } from "../../components/AddIngredientItem"
import { TextArea } from "../../components/TextArea"
import { ButtonTints_400 } from "../../components/ButtonTints_400"
import { ButtonDark_800 } from "../../components/ButtonDark_800"
import { SideMenu } from "../../components/SideMenu"
import { Error } from '../../components/Error'
import { Success } from '../../components/Success'

import { useState, useEffect } from "react"
import { useNavigate, useParams} from "react-router-dom"
import { api } from "../../services/api"

export function UpdateDish() {
    const { id } = useParams()

    const [ image, setImage] = useState('')
    const [ imageFile,  setImageFile ]  = useState(null)

    const [ name, setName ]          = useState('')
    const [ category, setCategory ]  = useState('')

    const [ ingredients,   setIngredients   ] = useState([])
    const [ newIngredient, setNewIngredient ] = useState('')

    const [ price, setPrice ] = useState(0)

    const [ description, setDescription ] = useState('')

    const [ openMenu, setOpenMenu ] = useState(false)
    const handleClickMenu = () => {
        setOpenMenu(!openMenu)
    }

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

    const navigate = useNavigate()

    const handleNavigateBack = () => {
        navigate(-1)
    }

    function handleAddImage(event) {
        const file = event.target.files[0]
        setImageFile(file)
    
        setImage(file.name)
    }

    function handleAddIngredients() {
        if(!newIngredient) {
            handleOpenError('Please, fill the ingredient before of add')
            return
        }

        const ingredientCapitalize = capitalize(newIngredient)

        if(ingredients.includes(ingredientCapitalize)){
            handleOpenError('Ingredient already exists')
            setNewIngredient('')
            return
        }

        setIngredients(prevState => [...prevState, ingredientCapitalize])
        setNewIngredient('')
    }

    function capitalize(str) {
        return str
            .toLowerCase()                    
            .split(' ')                       
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');                    
    }

    function lowercase(str) {
        if(str.length === 0) {
          return ""
        }
      
        return str
            .trim()
            .charAt(0).toUpperCase() + str.trim().slice(1).toLowerCase() 
    }

    function handleRemoveIngredients(name){
        setIngredients(ingredients.filter(ingredient => ingredient !== name))
    }

    async function handleRequestCreate(event) {
        event.preventDefault()
        
        if(!name || !category || ingredients.length === 0 || !price || !description ) {
            handleOpenError('All fields are required, fill all and try again')
            return
        }

        const nameCapitalize   = capitalize(name)
        const descriptionLower = lowercase(description)

        try {
            const form = new FormData()
            form.append('name', nameCapitalize)
            form.append('description', descriptionLower)
            form.append('price', price)
            form.append('category', category)
            form.append('ingredients', JSON.stringify(ingredients))
            form.append('image', imageFile)
            
            await api.put(`/dishes/${id}`, form)

            handleOpenSuccess('Update successfully! ✅✅✅')

            setTimeout(() => {
                navigate('/')
            }, 2000);

        } catch (error) {
            if(error.response) {
                handleOpenError(error.response.data.message) 
            } else {
                handleOpenError('Unable to update the dish')
            }
        }
    }

    async function handleDeleteDish() {
        const isOK = confirm('Really want to delete this dish?')

        if(isOK) {
            try {
                await api.delete(`/dishes/${id}`)

                handleOpenSuccess('Delete successfully! ✅✅✅')

                setTimeout(() => {
                    navigate('/')
                }, 2000);
                

            } catch (error) {
                if(error.response) {
                    handleOpenError(error.response.data.message) 
                } else {
                    handleOpenError('Unable to delete the dish')
                }  
            }
        } else {
            return
        }
    }

    useEffect(() => {
        async function fetchDetailsDish() {

            try {
                const response = await api.get(`/dishes/${id}`)
                setImage(response.data.image.split('-')[1])
                setName(response.data.name)
                setCategory(response.data.category)
                setPrice(response.data.price)
                setDescription(response.data.description)

                
                const responseIngredients = await api.get(`/ingredients/${id}`)
                let arrayAux = [] // to not if repeat ingredients
                responseIngredients.data.forEach(ingredient => {
                    arrayAux.push(ingredient.name)
                })
                
                setIngredients(arrayAux)

            } catch (error) {

                if(error.response) {
                    handleOpenError(error.response.data.message)
                } else {
                    handleOpenError('Unable to load dish')
                   
                }
            }            
        }

        fetchDetailsDish()
    }, [])
   
    return (
        <Container>
            <Error   message={messageError}   visible={openError}   closeError={handleCloseError}/>
            <Success message={messageSuccess} visible={openSuccess} closeSuccess={handleCloseSuccess}/>

            <SideMenu lookMenu={openMenu} closeMenu={handleClickMenu} isHome={false}/>

            <Header clickMenu={handleClickMenu}/>
            <HeaderDesktop/>

            <Content>
                <ButtonText icon={IoIosArrowBack} text="Go back" cursor="pointer" onClick={handleNavigateBack}/>

                <Form onSubmit={handleRequestCreate}>
                    <h1>Update dish</h1>

                    <div className="container-group">
                        <label htmlFor="upload-image" className="label-image">
                            <strong>Image of the dish</strong>

                            <div className="container-image">
                                <span data-havecontent={true}>
                                    <LuUpload/>
                                    {image}
                                </span>
                                
                                <input 
                                    id="upload-image"
                                    type="file"
                                    onChange={handleAddImage}
                                />
                            </div>
                        </label>

                        <label htmlFor="name-dish">
                            <strong>Name</strong>

                            <InputWithIcon 
                                isBg800={true}
                                id="name-dish" 
                                placeholder="Ex.: Salad"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                required
                                minLength={5}
                                maxLength={20}
                            />
                        </label>

                        <label htmlFor="category">
                            <strong>Category</strong>
                            
                            <Select id="category" value={category} onChange={e => setCategory(e.target.value)} required/>
                        </label>
                        
                    </div>

                    <div className="container-group">
                        <label htmlFor="ingredients">
                            <strong>Ingredients</strong>

                            <div className="container-group-ingredients">
                                {ingredients && ingredients.map((ingredient, index) => (
                                        <AddIngredientItem 
                                            key={String(index)}
                                            id="ingredients" 
                                            value={ingredient}
                                            onClick={() => handleRemoveIngredients(ingredient)}
                                        />
                                    ))   
                                }
                            
                                <AddIngredientItem 
                                    id="ingredients" 
                                    isNew 
                                    placeholder="Add Ingredient"
                                    value={newIngredient}
                                    onChange={e => setNewIngredient(e.target.value)}
                                    onClick={handleAddIngredients}
                                    minLength={3}
                                    maxLength={20}
                                />
                            </div>
                        </label>

                        <label htmlFor="price" className="price">
                            <strong>Price</strong>

                            <InputPrice onChange={e => setPrice(e.target.value)} value={price}/>
                        </label>
                    </div>

                    <label htmlFor="description">
                        <strong>Description</strong>

                        <TextArea 
                        id="description" placeholder="Briefly talk about the dish, its ingredients and composition" 
                        onChange={e => setDescription(e.target.value)}
                            required
                            minLength={6}
                            maxLength={150}
                            value={description}
                            />
                    </label>

                    <div className="container-save">
                        <ButtonDark_800 text="Delete dish" onClick={handleDeleteDish}/>
                        <ButtonTints_400 text="Update dish" type="submit"/>
                    </div>
                </Form>
            </Content>

            <Footer/>
        </Container>
    )
}