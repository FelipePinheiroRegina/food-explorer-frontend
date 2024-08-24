import { Container } from "./styles"

export function ButtonTints_100({ text, ...props }) {
    return (
        <Container {...props}>
            {text}
        </Container>
    )
}