import { Container } from "./styles"
import { ButtonTints_100 } from "../ButtonTints_100"
import { useState } from "react"

export function Credit({ onClick, setCardNumber, setValidity, setCvc }) {
    const [formattedCardNumber, setFormattedCardNumber] = useState('')

    const formatCardNumber = (value) => {
        // Remove todos os espaços existentes
        const cleanValue = value.replace(/\s+/g, '')
        // Adiciona um espaço a cada 4 dígitos
        const formattedValue = cleanValue.match(/.{1,4}/g)?.join(' ') || ''
        return formattedValue;
    }

    const handleCardNumberChange = (e) => {
        const inputValue = e.target.value
        const formattedValue = formatCardNumber(inputValue)
        setFormattedCardNumber(formattedValue)
        setCardNumber(formattedValue.replace(/\s+/g, '')) // Remove espaços antes de enviar o valor
    };

    return (
        <Container onSubmit={onClick}>
            <label htmlFor="number">
                <strong>Card Number</strong>
                <input 
                    type="text" 
                    name="number" 
                    id="number" 
                    required
                    placeholder="0000 0000 0000 0000"
                    maxLength={19} // Considerando os espaços
                    value={formattedCardNumber}
                    onChange={handleCardNumberChange}
                />
            </label>

            <div id="inputs-inline">
                <label htmlFor="validity">
                    <strong>Validity</strong>
                    <input 
                        type="text" 
                        name="validity" 
                        id="validity" 
                        required 
                        placeholder="04/25"
                        maxLength={5}
                        minLength={5}
                        onChange={e => setValidity(e.target.value)}
                    />
                </label>

                <label htmlFor="cvc">
                    <strong>CVC</strong>
                    <input 
                        type="text" 
                        name="cvc" 
                        id="cvc" 
                        required 
                        placeholder="000"
                        maxLength={3}
                        minLength={3}
                        onChange={e => setCvc(e.target.value)}
                    />
                </label>
            </div>

            <ButtonTints_100 text="Finalize Payment" type="submit"/>
        </Container>
    )
}
