import { Container, Slogan, Form } from './styles.js'
import { ButtonTints_100 } from '../../components/ButtonTints_100'
import { InputWithIcon } from '../../components/InputWithIcon'
import { ButtonText } from '../../components/ButtonText'
import polygon from "../../assets/polygon.svg"

import { Error } from "../../components/Error"
import { Success } from "../../components/Success"

import { useNavigate } from "react-router-dom"
import { useState } from 'react'
import { useAuth } from '../../hooks/auth'

export function Login() {
    const { login } = useAuth()
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    
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
        setOpenSuccess(true)
    }

    const handleCloseSuccess = () => {
        setOpenSuccess(false)
    }

    function handleLogin(event) {
        event.preventDefault()

        if(!email || !password) {
            handleOpenError('Please, fill the fields')
            return
        }

        login({ email, password, handleOpenSuccess, handleOpenError })
    }

    const navigate = useNavigate()

    const handleNavigateRegister = ()  => {
        navigate('/register')
    }
    
    return (
        <Container>
            <Error   message={messageError}   visible={openError}   closeError={handleCloseError}/>
            <Success message={messageSuccess} visible={openSuccess} closeSuccess={handleCloseSuccess}/>

            <Slogan>
                <img src={polygon} alt="image polygon" />
                <h1>food explorer</h1>
            </Slogan>

            <Form onSubmit={handleLogin}>
                <h2>Log in</h2>

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

                <ButtonTints_100 text="Enter" type="submit"/>

                <ButtonText className="hook" auth={true} text="Create an account" onClick={handleNavigateRegister}/>
            </Form>
        </Container>
    )
}