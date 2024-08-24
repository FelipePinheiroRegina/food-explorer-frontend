import { Container, Slogan, Form } from './styles.js'
import { ButtonTints_100 } from '../../components/ButtonTints_100'
import { InputWithIcon } from '../../components/InputWithIcon'
import { ButtonText } from '../../components/ButtonText'
import { Error } from '../../components/Error'
import { Success } from '../../components/Success'
import polygon from "../../assets/polygon.svg"


import { useNavigate } from "react-router-dom"
import { useState } from 'react'
import { api } from "../../services/api.js"

export function Register() {
    const navigate = useNavigate()
    const [ name,     setName     ] = useState('')
    const [ email,    setEmail    ] = useState('') 
    const [ password, setPassword ] = useState('')

    const handleBackLogin = () => {
        navigate(-1)
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

    // Logic register a new user
    async function handleRegister(event) {
        event.preventDefault()
        
        // If not filled all fields return error
        if(!name || !email || !password) {
            handleOpenError('Fields required, please, fill the fields')
            return
        }

        // Else try register a new user
        try {
            await api.post('/users', { name, email, password })
            handleOpenSuccess('User registered successfully! 🔥🔥🔥')

            setTimeout(() => {
                navigate('/')
            }, 2000)
            
        } catch (error) {
            console.error(error)
            handleOpenError(`${error.response.data.message}`)
            return 
        }
    }
    
    return (
        <Container>
            <Error   message={messageError}   visible={openError}   closeError={handleCloseError}/>
            <Success message={messageSuccess} visible={openSuccess} closeSuccess={handleCloseSuccess}/>
                
            <Slogan>
                <img src={polygon} alt="image polygon" />
                <h1>food explorer</h1>
            </Slogan>

            <Form onSubmit={handleRegister}>
                <h2>Create an account</h2>

                <label htmlFor="name">
                    Your name
                    <InputWithIcon
                        type="text" 
                        id="name" 
                        placeholder="Example: Felipe Pinheiro"
                        onChange={e => setName(e.target.value)}
                        
                        minLength={6}
                    />
                </label>

                <label htmlFor="email">
                    Email
                    <InputWithIcon
                        type="email" 
                        id="email" 
                        placeholder="Example: example@example.com.br"
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                </label>

                <label htmlFor="password">
                    Password
                    <InputWithIcon
                        type="password"
                        placeholder="At least 6 characters"
                        onChange={e => setPassword(e.target.value)}
                        required
                        minLength={6}
                    />
                </label>

                <ButtonTints_100 text="Create account" type="submit"/>

                <ButtonText className="hook" auth={true} text="I already have an account" onClick={handleBackLogin}/>
            </Form>
        </Container>
    )
}