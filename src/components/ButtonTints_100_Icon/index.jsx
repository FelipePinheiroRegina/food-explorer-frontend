import { PiReceipt } from "react-icons/pi"
import { Container, Count } from "./styles"

export function ButtonTints_100_Icon({ text, onClick, ...props}) {
    return (
        <Container onClick={onClick}>
            <PiReceipt onClick={onClick}/>

            <Count  {...props}>
                { text }
            </Count>
        </Container>
    )
}