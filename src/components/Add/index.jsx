import { PiMinusBold, PiPlusBold } from "react-icons/pi"

import { Container } from "./styles"

export function Add({clickAdd, clickRemove, $qtd}) {

    return (
        <Container>
            <PiMinusBold onClick={clickRemove}/> 

            <span className="count">{$qtd <= 9 ? '0'+$qtd: $qtd}</span> 

            <PiPlusBold onClick={clickAdd}/>
        </Container>
    )
}