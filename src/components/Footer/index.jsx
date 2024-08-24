import { Container, SloganFooter } from "./styles"
import polygon from "../../assets/polygon-footer.svg"

export function Footer() {
    return (
        <Container>
           <SloganFooter>
                <img src={polygon} alt="image polygon gray" />
                <strong>food explorer</strong>
           </SloganFooter>

           <span>
                &copy; 2024 - All rights reserved.
           </span>
        </Container>
    )
}